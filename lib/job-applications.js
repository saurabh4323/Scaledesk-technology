import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import clientPromise, { APPLICATIONS_COLLECTION, EMPLOYEES_COLLECTION, getDb } from "./mongodb";
import { uploadResumeToCloud } from "./resume-storage";

const FALLBACK_DB_PATH = path.join(process.cwd(), "data", "applications.json");

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export const APPLICATION_STATUSES = {
  submitted: { label: "Submitted", color: "#2F80FF" },
  under_consideration: { label: "Under Consideration", color: "#F59E0B" },
  selected: { label: "Selected", color: "#10B981" },
  rejected: { label: "Rejected", color: "#71717A" },
};

export const ADMIN_ACTIONS = ["under_consideration", "selected", "rejected"];

export function validateResumeFile(file) {
  if (!file || typeof file === "string") {
    return "Resume file is required.";
  }
  if (!ALLOWED_RESUME_TYPES.has(file.type)) {
    return "Resume must be a PDF or Word document (.pdf, .doc, .docx).";
  }
  if (file.size > MAX_RESUME_BYTES) {
    return "Resume must be 5 MB or smaller.";
  }
  return null;
}

async function saveToMongoDB(application) {
  const db = await getDb();
  if (!db) return false;
  await db.collection(APPLICATIONS_COLLECTION).insertOne(application);
  return true;
}

async function saveToFallbackFile(application) {
  await mkdir(path.dirname(FALLBACK_DB_PATH), { recursive: true });
  let existing = [];
  try {
    const raw = await readFile(FALLBACK_DB_PATH, "utf8");
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  existing.push(application);
  await writeFile(FALLBACK_DB_PATH, JSON.stringify(existing, null, 2), "utf8");
}

export async function createJobApplication(payload, resumeFile, applicantId) {
  const resumeError = validateResumeFile(resumeFile);
  if (resumeError) {
    const error = new Error(resumeError);
    error.status = 400;
    throw error;
  }

  const resume = await uploadResumeToCloud(resumeFile);
  const application = {
    _id: randomUUID(),
    applicantId,
    ...payload,
    resume,
    status: "submitted",
    statusHistory: [
      { status: "submitted", at: new Date().toISOString(), note: "Application received" },
    ],
    employeeCreated: false,
    submittedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const savedToMongo = await saveToMongoDB(application);
  if (!savedToMongo) {
    await saveToFallbackFile(application);
  }

  return { id: application._id, storage: savedToMongo ? "mongodb" : "file" };
}

export function parseApplicationFormData(formData) {
  const get = (key) => String(formData.get(key) ?? "").trim();
  return {
    jobId: get("jobId"),
    jobTitle: get("jobTitle"),
    fullName: get("fullName"),
    email: get("email"),
    phone: get("phone"),
    location: get("location"),
    marks10th: get("marks10th"),
    marks12th: get("marks12th"),
    collegeName: get("collegeName"),
    cgpa: get("cgpa"),
    whyJoinUs: get("whyJoinUs"),
    password: get("password"),
  };
}

export function validateApplicationPayload(payload) {
  const required = [
    ["jobId", "Job ID is required."],
    ["jobTitle", "Job title is required."],
    ["fullName", "Full name is required."],
    ["email", "Email is required."],
    ["phone", "Phone number is required."],
    ["location", "Location is required."],
    ["marks10th", "10th grade marks are required."],
    ["marks12th", "12th grade marks are required."],
    ["collegeName", "College name is required."],
    ["cgpa", "CGPA is required."],
    ["whyJoinUs", "Please tell us why you want to join us."],
  ];

  for (const [field, message] of required) {
    if (!payload[field]) return message;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Please enter a valid email address.";
  }

  if (payload.whyJoinUs.length < 50) {
    return "Please write at least 50 characters for why you want to join us.";
  }

  return null;
}

function resumeUrl(app) {
  if (app.resume?.fileId) return `/api/files/resume/${app.resume.fileId}`;
  return null;
}

function sanitizeApplication(app, { includeAdmin = false } = {}) {
  const base = {
    id: app._id,
    jobId: app.jobId,
    jobTitle: app.jobTitle,
    fullName: app.fullName,
    email: app.email,
    phone: app.phone,
    location: app.location,
    marks10th: app.marks10th,
    marks12th: app.marks12th,
    collegeName: app.collegeName,
    cgpa: app.cgpa,
    whyJoinUs: app.whyJoinUs,
    status: app.status || "submitted",
    statusHistory: app.statusHistory || [
      { status: "submitted", at: app.submittedAt, note: "Application received" },
    ],
    submittedAt: app.submittedAt,
    updatedAt: app.updatedAt || app.submittedAt,
    resumeName: app.resume?.originalName ?? null,
    resumeUrl: resumeUrl(app),
    employeeCreated: app.employeeCreated || false,
    employeeId: app.employeeId || null,
  };

  if (includeAdmin) {
    base.applicantId = app.applicantId;
    base.resume = app.resume;
  }

  return base;
}

export async function getApplicationsByApplicantId(applicantId) {
  const db = await getDb();
  if (db) {
    const apps = await db
      .collection(APPLICATIONS_COLLECTION)
      .find({ applicantId })
      .sort({ submittedAt: -1 })
      .toArray();
    return apps.map((a) => sanitizeApplication(a));
  }

  try {
    const raw = await readFile(FALLBACK_DB_PATH, "utf8");
    const apps = JSON.parse(raw);
    if (!Array.isArray(apps)) return [];
    return apps
      .filter((a) => a.applicantId === applicantId)
      .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
      .map((a) => sanitizeApplication(a));
  } catch {
    return [];
  }
}

export async function getAllApplications() {
  const db = await getDb();
  if (!db) return [];

  const apps = await db
    .collection(APPLICATIONS_COLLECTION)
    .find({})
    .sort({ submittedAt: -1 })
    .toArray();

  return apps.map((a) => sanitizeApplication(a, { includeAdmin: true }));
}

export async function getApplicationById(id) {
  const db = await getDb();
  if (!db) return null;
  const app = await db.collection(APPLICATIONS_COLLECTION).findOne({ _id: id });
  return app ? sanitizeApplication(app, { includeAdmin: true }) : null;
}

export async function getRawApplicationById(id) {
  const db = await getDb();
  if (!db) return null;
  return db.collection(APPLICATIONS_COLLECTION).findOne({ _id: id });
}

const STATUS_NOTES = {
  under_consideration: "Application moved to under consideration",
  selected: "Candidate selected — HR to issue employee portal credentials",
  rejected: "Application not moved forward at this time",
};

export async function updateApplicationStatus(id, status, adminEmail) {
  if (!ADMIN_ACTIONS.includes(status) && status !== "submitted") {
    const error = new Error("Invalid status.");
    error.status = 400;
    throw error;
  }

  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const app = await db.collection(APPLICATIONS_COLLECTION).findOne({ _id: id });
  if (!app) {
    const error = new Error("Application not found.");
    error.status = 404;
    throw error;
  }

  const entry = {
    status,
    at: new Date().toISOString(),
    note: STATUS_NOTES[status] || `Status updated to ${status}`,
    by: adminEmail,
  };

  await db.collection(APPLICATIONS_COLLECTION).updateOne(
    { _id: id },
    {
      $set: { status, updatedAt: entry.at },
      $push: { statusHistory: entry },
    }
  );

  return getApplicationById(id);
}

export async function markApplicationEmployeeCreated(id, employeeId) {
  const db = await getDb();
  if (!db) return;
  await db.collection(APPLICATIONS_COLLECTION).updateOne(
    { _id: id },
    { $set: { employeeCreated: true, employeeId, updatedAt: new Date().toISOString() } }
  );
}

export async function canAccessResume(fileId, session) {
  if (!session) return false;
  if (session.role === "admin") return true;

  const db = await getDb();
  if (!db) return false;

  if (session.role === "applicant") {
    const app = await db.collection(APPLICATIONS_COLLECTION).findOne({
      applicantId: session.id,
      "resume.fileId": fileId,
    });
    return Boolean(app);
  }

  if (session.role === "employee") {
    const emp = await db.collection(EMPLOYEES_COLLECTION).findOne({
      _id: session.id,
      "resume.fileId": fileId,
    });
    return Boolean(emp);
  }

  return false;
}

import { mkdir, writeFile, readFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import clientPromise, { APPLICATIONS_COLLECTION } from "./mongodb";

const UPLOADS_DIR = path.join(process.cwd(), "data", "uploads", "resumes");
const FALLBACK_DB_PATH = path.join(process.cwd(), "data", "applications.json");

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

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

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
}

async function saveResumeFile(file) {
  await mkdir(UPLOADS_DIR, { recursive: true });

  const ext = path.extname(file.name) || ".pdf";
  const storedName = `${randomUUID()}${ext}`;
  const storedPath = path.join(UPLOADS_DIR, storedName);
  const buffer = Buffer.from(await file.arrayBuffer());

  await writeFile(storedPath, buffer);

  return {
    originalName: file.name,
    storedName,
    storedPath: path.relative(process.cwd(), storedPath),
    mimeType: file.type,
    size: file.size,
  };
}

async function saveToMongoDB(application) {
  const client = await clientPromise;
  if (!client) return false;

  const db = client.db();
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

export async function createJobApplication(payload, resumeFile) {
  const resumeError = validateResumeFile(resumeFile);
  if (resumeError) {
    const error = new Error(resumeError);
    error.status = 400;
    throw error;
  }

  const resume = await saveResumeFile(resumeFile);
  const application = {
    _id: randomUUID(),
    ...payload,
    resume,
    status: "submitted",
    submittedAt: new Date().toISOString(),
  };

  const savedToMongo = await saveToMongoDB(application);
  if (!savedToMongo) {
    await saveToFallbackFile(application);
  }

  return {
    id: application._id,
    storage: savedToMongo ? "mongodb" : "file",
  };
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

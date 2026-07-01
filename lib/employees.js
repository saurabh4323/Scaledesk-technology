import { randomUUID } from "crypto";
import { hashPassword, verifyPassword } from "./auth";
import { getDb, EMPLOYEES_COLLECTION } from "./mongodb";

async function nextEmployeeCode() {
  const db = await getDb();
  if (!db) return `SDT-EMP-${Date.now()}`;

  const count = await db.collection(EMPLOYEES_COLLECTION).countDocuments();
  return `SDT-EMP-${String(count + 1).padStart(4, "0")}`;
}

function defaultKycDetails() {
  return {
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    bloodGroup: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    presentAddress: "",
    sameAsPermanent: false,
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    aadhaarNumber: "",
    panNumber: "",
    uanNumber: "",
    bankAccountNumber: "",
    bankIfsc: "",
    bankName: "",
    bankBranch: "",
    bankAccountType: "savings",
  };
}

export async function createEmployeeDirectly(data) {
  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const email = data.email.trim().toLowerCase();
  const existing = await db.collection(EMPLOYEES_COLLECTION).findOne({ email });
  if (existing) {
    const error = new Error("An employee with this email already exists.");
    error.status = 409;
    throw error;
  }

  const employee = {
    _id: randomUUID(),
    applicationId: null,
    applicantId: null,
    employeeCode: data.employeeCode || (await nextEmployeeCode()),
    email,
    passwordHash: await hashPassword(data.portalPassword),
    fullName: data.fullName.trim(),
    jobTitle: data.jobTitle.trim(),
    jobId: data.jobId?.trim() || "DIRECT-HIRE",
    department: data.department || "Engineering",
    joiningDate: data.joiningDate,
    employmentStatus: "active",
    phone: data.phone?.trim() || "",
    location: data.location?.trim() || "",
    collegeName: data.collegeName?.trim() || "",
    cgpa: data.cgpa?.trim() || "",
    marks10th: data.marks10th?.trim() || "",
    marks12th: data.marks12th?.trim() || "",
    resume: null,
    leaveBalance: { annual: 18, used: 0, pending: 0 },
    leaveRequests: [],
    resignation: null,
    kycDetails: defaultKycDetails(),
    onboardingNotes: data.notes?.trim() || "",
    createdBy: "hr_direct",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await db.collection(EMPLOYEES_COLLECTION).insertOne(employee);

  return {
    id: employee._id,
    employeeCode: employee.employeeCode,
    email: employee.email,
    portalPassword: data.portalPassword,
  };
}

export async function createEmployeeFromApplication(application, onboardData) {
  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const existing = await db
    .collection(EMPLOYEES_COLLECTION)
    .findOne({ applicationId: application._id });
  if (existing) {
    const error = new Error("Employee account already exists for this application.");
    error.status = 409;
    throw error;
  }

  const employeeId = onboardData.employeeCode || (await nextEmployeeCode());
  const employee = {
    _id: randomUUID(),
    applicationId: application._id,
    applicantId: application.applicantId,
    employeeCode: employeeId,
    email: application.email.trim().toLowerCase(),
    passwordHash: await hashPassword(onboardData.portalPassword),
    fullName: application.fullName,
    jobTitle: application.jobTitle,
    jobId: application.jobId,
    department: onboardData.department || "Engineering",
    joiningDate: onboardData.joiningDate,
    employmentStatus: "active",
    phone: application.phone,
    location: application.location,
    collegeName: application.collegeName,
    cgpa: application.cgpa,
    marks10th: application.marks10th,
    marks12th: application.marks12th,
    resume: application.resume,
    leaveBalance: { annual: 18, used: 0, pending: 0 },
    leaveRequests: [],
    resignation: null,
    kycDetails: defaultKycDetails(),
    onboardingNotes: onboardData.notes || "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await db.collection(EMPLOYEES_COLLECTION).insertOne(employee);

  return {
    id: employee._id,
    employeeCode: employee.employeeCode,
    email: employee.email,
    portalPassword: onboardData.portalPassword,
  };
}

export async function authenticateEmployee(email, password) {
  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const employee = await db.collection(EMPLOYEES_COLLECTION).findOne({
    email: email.trim().toLowerCase(),
  });

  if (!employee) {
    const error = new Error("Invalid employee credentials.");
    error.status = 401;
    throw error;
  }

  const valid = await verifyPassword(password, employee.passwordHash);
  if (!valid) {
    const error = new Error("Invalid employee credentials.");
    error.status = 401;
    throw error;
  }

  return {
    id: employee._id,
    email: employee.email,
    fullName: employee.fullName,
    employeeCode: employee.employeeCode,
  };
}

export async function getEmployeeById(id) {
  const db = await getDb();
  if (!db) return null;
  return db.collection(EMPLOYEES_COLLECTION).findOne({ _id: id });
}

function isKycComplete(kyc = {}) {
  const required = [
    "dateOfBirth",
    "gender",
    "aadhaarNumber",
    "panNumber",
    "bankAccountNumber",
    "bankIfsc",
    "bankName",
    "permanentAddress",
    "emergencyContactName",
    "emergencyContactPhone",
  ];
  return required.every((field) => String(kyc[field] ?? "").trim().length > 0);
}

function sanitizeEmployee(employee) {
  return {
    id: employee._id,
    employeeCode: employee.employeeCode,
    fullName: employee.fullName,
    email: employee.email,
    jobTitle: employee.jobTitle,
    jobId: employee.jobId,
    department: employee.department,
    joiningDate: employee.joiningDate,
    employmentStatus: employee.employmentStatus,
    phone: employee.phone,
    location: employee.location,
    collegeName: employee.collegeName,
    cgpa: employee.cgpa,
    marks10th: employee.marks10th,
    marks12th: employee.marks12th,
    leaveBalance: employee.leaveBalance,
    leaveRequests: employee.leaveRequests || [],
    resumeFileId: employee.resume?.fileId ?? null,
    resumeName: employee.resume?.originalName ?? null,
    onboardingNotes: employee.onboardingNotes || "",
    resignation: employee.resignation || null,
    kycDetails: employee.kycDetails || {},
    kycComplete: isKycComplete(employee.kycDetails),
    createdAt: employee.createdAt,
    updatedAt: employee.updatedAt,
  };
}

export async function getEmployeeProfile(id) {
  const employee = await getEmployeeById(id);
  if (!employee) return null;
  return sanitizeEmployee(employee);
}

export async function requestLeave(employeeId, { type, fromDate, toDate, reason }) {
  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const request = {
    id: randomUUID(),
    type,
    fromDate,
    toDate,
    reason,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };

  await db.collection(EMPLOYEES_COLLECTION).updateOne(
    { _id: employeeId },
    {
      $push: { leaveRequests: request },
      $inc: { "leaveBalance.pending": 1 },
      $set: { updatedAt: new Date().toISOString() },
    }
  );

  return request;
}

export async function submitResignation(employeeId, { reason, overallExperience, lastWorkingDay }) {
  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const employee = await getEmployeeById(employeeId);
  if (!employee) {
    const error = new Error("Employee not found.");
    error.status = 404;
    throw error;
  }

  if (employee.resignation?.status === "pending") {
    const error = new Error("You already have a pending resignation request.");
    error.status = 409;
    throw error;
  }

  if (employee.resignation?.status === "approved") {
    const error = new Error("Your resignation has already been processed.");
    error.status = 409;
    throw error;
  }

  if (employee.employmentStatus === "resigned") {
    const error = new Error("You are no longer an active employee.");
    error.status = 409;
    throw error;
  }

  const resignation = {
    reason: reason.trim(),
    overallExperience: overallExperience.trim(),
    lastWorkingDay: lastWorkingDay || null,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };

  await db.collection(EMPLOYEES_COLLECTION).updateOne(
    { _id: employeeId },
    {
      $set: {
        resignation,
        employmentStatus: "resignation_pending",
        updatedAt: new Date().toISOString(),
      },
    }
  );

  return resignation;
}

const KYC_FIELDS = [
  "dateOfBirth",
  "gender",
  "maritalStatus",
  "bloodGroup",
  "fatherName",
  "motherName",
  "permanentAddress",
  "presentAddress",
  "sameAsPermanent",
  "emergencyContactName",
  "emergencyContactPhone",
  "emergencyContactRelation",
  "aadhaarNumber",
  "panNumber",
  "uanNumber",
  "bankAccountNumber",
  "bankIfsc",
  "bankName",
  "bankBranch",
  "bankAccountType",
];

function validateAadhaar(num) {
  return /^\d{12}$/.test(num.replace(/\s/g, ""));
}

function validatePan(pan) {
  return /^[A-Z]{5}\d{4}[A-Z]$/i.test(pan.trim());
}

function validateIfsc(ifsc) {
  return /^[A-Z]{4}0[A-Z0-9]{6}$/i.test(ifsc.trim());
}

export async function updateEmployeeKycDetails(employeeId, payload) {
  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const kycDetails = {};
  for (const field of KYC_FIELDS) {
    if (field === "sameAsPermanent") {
      kycDetails.sameAsPermanent = Boolean(payload.sameAsPermanent);
      continue;
    }
    kycDetails[field] = String(payload[field] ?? "").trim();
  }

  if (kycDetails.aadhaarNumber && !validateAadhaar(kycDetails.aadhaarNumber)) {
    const error = new Error("Aadhaar must be a valid 12-digit number.");
    error.status = 400;
    throw error;
  }

  if (kycDetails.panNumber && !validatePan(kycDetails.panNumber)) {
    const error = new Error("PAN must be in valid format (e.g. ABCDE1234F).");
    error.status = 400;
    throw error;
  }

  if (kycDetails.bankIfsc && !validateIfsc(kycDetails.bankIfsc)) {
    const error = new Error("IFSC code format is invalid.");
    error.status = 400;
    throw error;
  }

  if (kycDetails.sameAsPermanent) {
    kycDetails.presentAddress = kycDetails.permanentAddress;
  }

  kycDetails.aadhaarNumber = kycDetails.aadhaarNumber.replace(/\s/g, "");
  kycDetails.panNumber = kycDetails.panNumber.toUpperCase();
  kycDetails.bankIfsc = kycDetails.bankIfsc.toUpperCase();
  kycDetails.updatedAt = new Date().toISOString();

  await db.collection(EMPLOYEES_COLLECTION).updateOne(
    { _id: employeeId },
    { $set: { kycDetails, updatedAt: kycDetails.updatedAt } }
  );

  return kycDetails;
}

export const EMPTY_KYC = {
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  bloodGroup: "",
  fatherName: "",
  motherName: "",
  permanentAddress: "",
  presentAddress: "",
  sameAsPermanent: false,
  emergencyContactName: "",
  emergencyContactPhone: "",
  emergencyContactRelation: "",
  aadhaarNumber: "",
  panNumber: "",
  uanNumber: "",
  bankAccountNumber: "",
  bankIfsc: "",
  bankName: "",
  bankBranch: "",
  bankAccountType: "savings",
};

export async function getAllEmployees() {
  const db = await getDb();
  if (!db) return [];

  const employees = await db
    .collection(EMPLOYEES_COLLECTION)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return employees.map(sanitizeEmployee);
}

export async function adminUpdateEmployee(employeeId, payload) {
  const db = await getDb();
  if (!db) {
    const error = new Error("Database unavailable.");
    error.status = 503;
    throw error;
  }

  const employee = await getEmployeeById(employeeId);
  if (!employee) {
    const error = new Error("Employee not found.");
    error.status = 404;
    throw error;
  }

  const employmentFields = [
    "phone",
    "location",
    "department",
    "joiningDate",
    "employmentStatus",
    "onboardingNotes",
  ];
  const employmentUpdate = {};
  for (const field of employmentFields) {
    if (payload[field] !== undefined) {
      employmentUpdate[field] = String(payload[field] ?? "").trim();
    }
  }

  const kycDetails = { ...(employee.kycDetails || {}) };
  for (const field of KYC_FIELDS) {
    if (payload[field] === undefined) continue;
    if (field === "sameAsPermanent") {
      kycDetails.sameAsPermanent = Boolean(payload.sameAsPermanent);
      continue;
    }
    kycDetails[field] = String(payload[field] ?? "").trim();
  }

  if (kycDetails.aadhaarNumber && !validateAadhaar(kycDetails.aadhaarNumber)) {
    const error = new Error("Aadhaar must be a valid 12-digit number.");
    error.status = 400;
    throw error;
  }
  if (kycDetails.panNumber && !validatePan(kycDetails.panNumber)) {
    const error = new Error("PAN must be in valid format (e.g. ABCDE1234F).");
    error.status = 400;
    throw error;
  }
  if (kycDetails.bankIfsc && !validateIfsc(kycDetails.bankIfsc)) {
    const error = new Error("IFSC code format is invalid.");
    error.status = 400;
    throw error;
  }

  if (kycDetails.sameAsPermanent) {
    kycDetails.presentAddress = kycDetails.permanentAddress;
  }
  if (kycDetails.aadhaarNumber) {
    kycDetails.aadhaarNumber = kycDetails.aadhaarNumber.replace(/\s/g, "");
  }
  if (kycDetails.panNumber) kycDetails.panNumber = kycDetails.panNumber.toUpperCase();
  if (kycDetails.bankIfsc) kycDetails.bankIfsc = kycDetails.bankIfsc.toUpperCase();
  kycDetails.updatedAt = new Date().toISOString();

  const updatedAt = new Date().toISOString();
  await db.collection(EMPLOYEES_COLLECTION).updateOne(
    { _id: employeeId },
    {
      $set: {
        ...employmentUpdate,
        kycDetails,
        updatedAt,
      },
    }
  );

  return getEmployeeProfile(employeeId);
}

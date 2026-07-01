import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import clientPromise, { APPLICANTS_COLLECTION } from "./mongodb";
import { hashPassword, verifyPassword } from "./auth";

const FALLBACK_APPLICANTS_PATH = path.join(process.cwd(), "data", "applicants.json");

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

async function readFallbackApplicants() {
  try {
    const raw = await readFile(FALLBACK_APPLICANTS_PATH, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeFallbackApplicants(applicants) {
  await mkdir(path.dirname(FALLBACK_APPLICANTS_PATH), { recursive: true });
  await writeFile(FALLBACK_APPLICANTS_PATH, JSON.stringify(applicants, null, 2), "utf8");
}

async function findApplicantByEmail(email) {
  const normalized = normalizeEmail(email);

  const client = await clientPromise;
  if (client) {
    const db = client.db();
    return db.collection(APPLICANTS_COLLECTION).findOne({ email: normalized });
  }

  const applicants = await readFallbackApplicants();
  return applicants.find((a) => a.email === normalized) ?? null;
}

export async function createOrVerifyApplicant({ email, password, fullName }) {
  const normalized = normalizeEmail(email);
  const existing = await findApplicantByEmail(normalized);

  if (existing) {
    const valid = await verifyPassword(password, existing.passwordHash);
    if (!valid) {
      const error = new Error(
        "An account with this email already exists. Use the correct password or log in at Track Application."
      );
      error.status = 409;
      throw error;
    }
    return { id: existing._id, email: normalized, isNew: false };
  }

  const applicant = {
    _id: randomUUID(),
    email: normalized,
    fullName,
    passwordHash: await hashPassword(password),
    createdAt: new Date().toISOString(),
  };

  const client = await clientPromise;
  if (client) {
    const db = client.db();
    await db.collection(APPLICANTS_COLLECTION).insertOne(applicant);
  } else {
    const applicants = await readFallbackApplicants();
    applicants.push(applicant);
    await writeFallbackApplicants(applicants);
  }

  return { id: applicant._id, email: normalized, isNew: true };
}

export async function authenticateApplicant(email, password) {
  const applicant = await findApplicantByEmail(email);
  if (!applicant) {
    const error = new Error("Invalid email or password.");
    error.status = 401;
    throw error;
  }

  const valid = await verifyPassword(password, applicant.passwordHash);
  if (!valid) {
    const error = new Error("Invalid email or password.");
    error.status = 401;
    throw error;
  }

  return {
    id: applicant._id,
    email: applicant.email,
    fullName: applicant.fullName,
  };
}

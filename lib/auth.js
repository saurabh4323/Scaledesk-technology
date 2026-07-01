import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";

export const APPLICANT_COOKIE = "sdt_applicant_session";
export const ADMIN_COOKIE = "sdt_admin_session";
export const EMPLOYEE_COOKIE = "sdt_employee_session";

const SESSION_DAYS = 30;

export async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET is not configured");
  }
  return new TextEncoder().encode(secret);
}

export async function createSessionToken({ sub, email, role }) {
  return new SignJWT({ sub, email, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .sign(getSecret());
}

export async function verifySessionToken(token, expectedRole) {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (expectedRole && payload.role !== expectedRole) return null;
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  } catch {
    return null;
  }
}

export function validatePassword(password) {
  if (!password || password.length < 8) {
    return "Password must be at least 8 characters.";
  }
  return null;
}

export function getSessionCookieOptions(maxAge = 60 * 60 * 24 * SESSION_DAYS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  };
}

// Backward-compatible alias
export const SESSION_COOKIE = APPLICANT_COOKIE;

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  APPLICANT_COOKIE,
  EMPLOYEE_COOKIE,
  createSessionToken,
  getSessionCookieOptions,
  verifySessionToken,
} from "./auth";

export async function getApplicantSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(APPLICANT_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token, "applicant");
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token, "admin");
}

export async function getEmployeeSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(EMPLOYEE_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token, "employee");
}

export async function getAnySession() {
  const admin = await getAdminSession();
  if (admin) return admin;
  const employee = await getEmployeeSession();
  if (employee) return employee;
  const applicant = await getApplicantSession();
  if (applicant) return applicant;
  return null;
}

export function clearSessionCookie(cookieName) {
  const response = NextResponse.json({ success: true });
  response.cookies.set(cookieName, "", { ...getSessionCookieOptions(0), maxAge: 0 });
  return response;
}

export async function setSessionOnResponse(response, { sub, email, role }) {
  const cookieMap = {
    applicant: APPLICANT_COOKIE,
    admin: ADMIN_COOKIE,
    employee: EMPLOYEE_COOKIE,
  };
  const token = await createSessionToken({ sub, email, role });
  response.cookies.set(cookieMap[role], token, getSessionCookieOptions());
  return response;
}

// Backward compat
export const SESSION_COOKIE = APPLICANT_COOKIE;

export function clearApplicantSession() {
  return clearSessionCookie(APPLICANT_COOKIE);
}

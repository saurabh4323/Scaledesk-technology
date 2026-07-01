import { verifyPassword } from "./auth";

export function getAdminCredentials() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return null;
  return { email, password };
}

export async function authenticateAdmin(email, password) {
  const creds = getAdminCredentials();
  if (!creds) {
    const error = new Error("Admin portal is not configured.");
    error.status = 503;
    throw error;
  }

  const normalized = email.trim().toLowerCase();
  if (normalized !== creds.email || password !== creds.password) {
    const error = new Error("Invalid admin credentials.");
    error.status = 401;
    throw error;
  }

  return { id: "admin", email: creds.email, role: "admin" };
}

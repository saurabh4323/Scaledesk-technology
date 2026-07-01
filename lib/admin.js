import { CONFIG } from "./config";

export function getAdminCredentials() {
  return {
    email: CONFIG.ADMIN_EMAIL.trim().toLowerCase(),
    password: CONFIG.ADMIN_PASSWORD,
  };
}

export async function authenticateAdmin(email, password) {
  const creds = getAdminCredentials();
  const normalized = email.trim().toLowerCase();

  if (normalized !== creds.email || password !== creds.password) {
    const error = new Error("Invalid admin credentials.");
    error.status = 401;
    throw error;
  }

  return { id: "admin", email: creds.email, role: "admin" };
}

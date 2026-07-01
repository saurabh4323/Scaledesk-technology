// Defaults work in production without .env — override via env vars when ready.
export const CONFIG = {
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://leadforgrow_db_user:X0nCdkWzgw9Sb7Uh@website.88bztun.mongodb.net/scaledesk?retryWrites=true&w=majority&appName=website",
  AUTH_SECRET:
    process.env.AUTH_SECRET || "sdt-applicant-track-secret-2026-scaledesk-secure-key",
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "hr@scaledesk.com",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "Scaledesk@HR2026",
};

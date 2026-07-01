import { clearSessionCookie } from "../../../../lib/session";
import { ADMIN_COOKIE } from "../../../../lib/auth";

export async function POST() {
  return clearSessionCookie(ADMIN_COOKIE);
}

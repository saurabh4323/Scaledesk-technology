import { clearSessionCookie } from "../../../../lib/session";
import { EMPLOYEE_COOKIE } from "../../../../lib/auth";

export async function POST() {
  return clearSessionCookie(EMPLOYEE_COOKIE);
}

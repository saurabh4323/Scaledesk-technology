import { clearApplicantSession } from "../../../../lib/session";

export async function POST() {
  return clearApplicantSession();
}

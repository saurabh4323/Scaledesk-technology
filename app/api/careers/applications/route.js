import { NextResponse } from "next/server";
import { getApplicationsByApplicantId } from "../../../../lib/job-applications";
import { getApplicantSession } from "../../../../lib/session";

export async function GET() {
  try {
    const session = await getApplicantSession();
    if (!session?.id) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const applications = await getApplicationsByApplicantId(session.id);

    return NextResponse.json({
      email: session.email,
      applications,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to load applications right now." },
      { status: 500 }
    );
  }
}

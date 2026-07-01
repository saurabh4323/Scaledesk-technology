import { NextResponse } from "next/server";
import { getAllApplications } from "../../../../lib/job-applications";
import { getAdminSession } from "../../../../lib/session";

export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const applications = await getAllApplications();
    return NextResponse.json({ applications });
  } catch {
    return NextResponse.json(
      { error: "Unable to load applications." },
      { status: 500 }
    );
  }
}

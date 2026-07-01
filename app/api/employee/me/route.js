import { NextResponse } from "next/server";
import { getEmployeeProfile, requestLeave } from "../../../../lib/employees";
import { getEmployeeSession } from "../../../../lib/session";

export async function GET() {
  try {
    const session = await getEmployeeSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const profile = await getEmployeeProfile(session.id);
    if (!profile) {
      return NextResponse.json({ error: "Employee not found." }, { status: 404 });
    }

    return NextResponse.json({ profile });
  } catch {
    return NextResponse.json({ error: "Unable to load profile." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getEmployeeSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { type, fromDate, toDate, reason } = await request.json();
    if (!type || !fromDate || !toDate || !reason?.trim()) {
      return NextResponse.json({ error: "All leave fields are required." }, { status: 400 });
    }

    const leaveRequest = await requestLeave(session.id, {
      type,
      fromDate,
      toDate,
      reason: reason.trim(),
    });

    const profile = await getEmployeeProfile(session.id);
    return NextResponse.json({ leaveRequest, profile });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json(
      { error: status === 500 ? "Failed to submit leave request." : error.message },
      { status }
    );
  }
}

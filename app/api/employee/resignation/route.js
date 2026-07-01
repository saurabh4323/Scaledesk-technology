import { NextResponse } from "next/server";
import { getEmployeeProfile, submitResignation } from "../../../../lib/employees";
import { getEmployeeSession } from "../../../../lib/session";

export async function POST(request) {
  try {
    const session = await getEmployeeSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { reason, overallExperience, lastWorkingDay } = await request.json();

    if (!reason?.trim()) {
      return NextResponse.json({ error: "Resignation reason is required." }, { status: 400 });
    }

    if (!overallExperience?.trim()) {
      return NextResponse.json(
        { error: "Please share your overall experience working with us." },
        { status: 400 }
      );
    }

    if (overallExperience.trim().length < 30) {
      return NextResponse.json(
        { error: "Please write at least 30 characters about your experience." },
        { status: 400 }
      );
    }

    const resignation = await submitResignation(session.id, {
      reason: reason.trim(),
      overallExperience: overallExperience.trim(),
      lastWorkingDay: lastWorkingDay || null,
    });

    const profile = await getEmployeeProfile(session.id);
    return NextResponse.json({ resignation, profile });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json(
      { error: status === 500 ? "Failed to submit resignation." : error.message },
      { status }
    );
  }
}

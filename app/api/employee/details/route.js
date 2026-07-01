import { NextResponse } from "next/server";
import { getEmployeeProfile, updateEmployeeKycDetails } from "../../../../lib/employees";
import { getEmployeeSession } from "../../../../lib/session";

export async function PATCH(request) {
  try {
    const session = await getEmployeeSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const payload = await request.json();
    await updateEmployeeKycDetails(session.id, payload);
    const profile = await getEmployeeProfile(session.id);

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json(
      { error: status === 500 ? "Failed to save details." : error.message },
      { status }
    );
  }
}

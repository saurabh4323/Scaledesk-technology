import { NextResponse } from "next/server";
import { adminUpdateEmployee, getEmployeeProfile } from "../../../../../lib/employees";
import { getAdminSession } from "../../../../../lib/session";

export async function GET(_request, { params }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { id } = await params;
    const employee = await getEmployeeProfile(id);
    if (!employee) {
      return NextResponse.json({ error: "Employee not found." }, { status: 404 });
    }

    return NextResponse.json({ employee });
  } catch {
    return NextResponse.json({ error: "Unable to load employee." }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { id } = await params;
    const payload = await request.json();
    const employee = await adminUpdateEmployee(id, payload);

    return NextResponse.json({ success: true, employee });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json(
      { error: status === 500 ? "Failed to save employee details." : error.message },
      { status }
    );
  }
}

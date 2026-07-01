import { NextResponse } from "next/server";
import { createEmployeeDirectly, getAllEmployees } from "../../../../lib/employees";
import { validatePassword } from "../../../../lib/auth";
import { getAdminSession } from "../../../../lib/session";

export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const employees = await getAllEmployees();
    return NextResponse.json({ employees });
  } catch {
    return NextResponse.json({ error: "Unable to load employees." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      location,
      jobTitle,
      department,
      joiningDate,
      portalPassword,
      employeeCode,
      notes,
    } = body;

    if (!fullName?.trim() || !email?.trim() || !jobTitle?.trim() || !joiningDate) {
      return NextResponse.json(
        { error: "Full name, email, job title, and joining date are required." },
        { status: 400 }
      );
    }

    if (!portalPassword) {
      return NextResponse.json({ error: "Portal password is required." }, { status: 400 });
    }

    const passwordError = validatePassword(portalPassword);
    if (passwordError) {
      return NextResponse.json({ error: passwordError }, { status: 400 });
    }

    const employee = await createEmployeeDirectly({
      fullName,
      email,
      phone,
      location,
      jobTitle,
      department,
      joiningDate,
      portalPassword,
      employeeCode,
      notes,
    });

    return NextResponse.json(
      {
        success: true,
        employee: {
          id: employee.id,
          employeeCode: employee.employeeCode,
          email: employee.email,
          portalPassword: employee.portalPassword,
          portalUrl: "/employee",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json(
      { error: status === 500 ? "Failed to create employee." : error.message },
      { status }
    );
  }
}

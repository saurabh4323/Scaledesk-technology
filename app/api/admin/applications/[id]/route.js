import { NextResponse } from "next/server";
import { validatePassword } from "../../../../../lib/auth";
import { createEmployeeFromApplication } from "../../../../../lib/employees";
import {
  getRawApplicationById,
  markApplicationEmployeeCreated,
  updateApplicationStatus,
} from "../../../../../lib/job-applications";
import { getAdminSession } from "../../../../../lib/session";

export async function PATCH(request, { params }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { id } = await params;
    const { status } = await request.json();

    if (!status) {
      return NextResponse.json({ error: "Status is required." }, { status: 400 });
    }

    const updated = await updateApplicationStatus(id, status, session.email);
    return NextResponse.json({ application: updated });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json(
      { error: status === 500 ? "Failed to update application." : error.message },
      { status }
    );
  }
}

export async function POST(request, { params }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { joiningDate, department, portalPassword, employeeCode, notes } = body;

    if (!joiningDate || !portalPassword) {
      return NextResponse.json(
        { error: "Joining date and portal password are required." },
        { status: 400 }
      );
    }

    const passwordError = validatePassword(portalPassword);
    if (passwordError) {
      return NextResponse.json({ error: passwordError }, { status: 400 });
    }

    const application = await getRawApplicationById(id);
    if (!application) {
      return NextResponse.json({ error: "Application not found." }, { status: 404 });
    }

    if (application.status !== "selected") {
      return NextResponse.json(
        { error: "Only selected candidates can be onboarded as employees." },
        { status: 400 }
      );
    }

    if (application.employeeCreated) {
      return NextResponse.json(
        { error: "Employee account already created for this application." },
        { status: 409 }
      );
    }

    const employee = await createEmployeeFromApplication(application, {
      joiningDate,
      department,
      portalPassword,
      employeeCode,
      notes,
    });

    await markApplicationEmployeeCreated(id, employee.id);

    return NextResponse.json({
      success: true,
      employee: {
        id: employee.id,
        employeeCode: employee.employeeCode,
        email: employee.email,
        portalPassword: employee.portalPassword,
        portalUrl: "/employee",
      },
    });
  } catch (error) {
    const status = error.status || 500;
    return NextResponse.json(
      { error: status === 500 ? "Failed to onboard employee." : error.message },
      { status }
    );
  }
}

import { NextResponse } from "next/server";
import { authenticateEmployee } from "../../../../lib/employees";
import { EMPLOYEE_COOKIE, createSessionToken, getSessionCookieOptions } from "../../../../lib/auth";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email?.trim() || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const employee = await authenticateEmployee(email, password);
    const token = await createSessionToken({
      sub: employee.id,
      email: employee.email,
      role: "employee",
    });

    const response = NextResponse.json({
      success: true,
      employee: {
        fullName: employee.fullName,
        email: employee.email,
        employeeCode: employee.employeeCode,
      },
    });

    response.cookies.set(EMPLOYEE_COOKIE, token, getSessionCookieOptions());
    return response;
  } catch (error) {
    const status = error.status || 500;
    const message =
      status === 500 ? "Unable to log in right now. Please try again." : error.message;
    return NextResponse.json({ error: message }, { status });
  }
}

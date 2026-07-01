import { NextResponse } from "next/server";
import { authenticateAdmin } from "../../../../lib/admin";
import { ADMIN_COOKIE, createSessionToken, getSessionCookieOptions } from "../../../../lib/auth";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email?.trim() || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const admin = await authenticateAdmin(email, password);
    const token = await createSessionToken({
      sub: admin.id,
      email: admin.email,
      role: "admin",
    });

    const response = NextResponse.json({
      success: true,
      admin: { email: admin.email },
    });

    response.cookies.set(ADMIN_COOKIE, token, getSessionCookieOptions());
    return response;
  } catch (error) {
    const status = error.status || 500;
    const message =
      status === 500 ? "Unable to log in right now. Please try again." : error.message;
    return NextResponse.json({ error: message }, { status });
  }
}

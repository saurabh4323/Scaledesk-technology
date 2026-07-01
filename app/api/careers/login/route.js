import { NextResponse } from "next/server";
import { authenticateApplicant } from "../../../../lib/applicants";
import { APPLICANT_COOKIE, createSessionToken, getSessionCookieOptions } from "../../../../lib/auth";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email?.trim() || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const applicant = await authenticateApplicant(email, password);
    const token = await createSessionToken({
      sub: applicant.id,
      email: applicant.email,
      role: "applicant",
    });

    const response = NextResponse.json({
      success: true,
      applicant: { fullName: applicant.fullName, email: applicant.email },
    });

    response.cookies.set(APPLICANT_COOKIE, token, getSessionCookieOptions());
    return response;
  } catch (error) {
    const status = error.status || 500;
    const message =
      status === 500 ? "Unable to log in right now. Please try again." : error.message;
    return NextResponse.json({ error: message }, { status });
  }
}

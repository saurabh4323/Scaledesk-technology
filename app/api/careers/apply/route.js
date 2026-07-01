import { NextResponse } from "next/server";
import { createOrVerifyApplicant } from "../../../../lib/applicants";
import { APPLICANT_COOKIE, createSessionToken, getSessionCookieOptions, validatePassword } from "../../../../lib/auth";
import { getJobById } from "../../../data/careers";
import {
  createJobApplication,
  parseApplicationFormData,
  validateApplicationPayload,
} from "../../../../lib/job-applications";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const payload = parseApplicationFormData(formData);
    const resumeFile = formData.get("resume");
    const confirmPassword = String(formData.get("confirmPassword") ?? "").trim();

    const validationError = validateApplicationPayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const passwordError = validatePassword(payload.password);
    if (passwordError) {
      return NextResponse.json({ error: passwordError }, { status: 400 });
    }

    if (payload.password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }

    const job = getJobById(payload.jobId);
    if (!job) {
      return NextResponse.json({ error: "Invalid job opening." }, { status: 404 });
    }

    if (payload.jobTitle !== job.title) {
      payload.jobTitle = job.title;
    }

    const applicant = await createOrVerifyApplicant({
      email: payload.email,
      password: payload.password,
      fullName: payload.fullName,
    });

    const { password: _password, ...applicationPayload } = payload;
    const result = await createJobApplication(
      applicationPayload,
      resumeFile,
      applicant.id
    );

    const token = await createSessionToken({
      sub: applicant.id,
      email: applicant.email,
      role: "applicant",
    });

    const response = NextResponse.json(
      {
        success: true,
        applicationId: result.id,
        accountCreated: applicant.isNew,
        message: "Your application has been submitted successfully.",
      },
      { status: 201 }
    );

    response.cookies.set(APPLICANT_COOKIE, token, getSessionCookieOptions());
    return response;
  } catch (error) {
    const status = error.status || 500;
    const message =
      status === 500
        ? "Something went wrong while submitting your application. Please try again."
        : error.message;

    return NextResponse.json({ error: message }, { status });
  }
}

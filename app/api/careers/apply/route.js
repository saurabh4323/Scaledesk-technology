import { NextResponse } from "next/server";
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

    const validationError = validateApplicationPayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const job = getJobById(payload.jobId);
    if (!job) {
      return NextResponse.json({ error: "Invalid job opening." }, { status: 404 });
    }

    if (payload.jobTitle !== job.title) {
      payload.jobTitle = job.title;
    }

    const result = await createJobApplication(payload, resumeFile);

    return NextResponse.json(
      {
        success: true,
        applicationId: result.id,
        message: "Your application has been submitted successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    const status = error.status || 500;
    const message =
      status === 500
        ? "Something went wrong while submitting your application. Please try again."
        : error.message;

    return NextResponse.json({ error: message }, { status });
  }
}

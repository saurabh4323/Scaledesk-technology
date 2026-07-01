import { NextResponse } from "next/server";
import { getResumeDownloadStream, getResumeMetadata } from "../../../../../lib/resume-storage";
import { canAccessResume } from "../../../../../lib/job-applications";
import { getAnySession } from "../../../../../lib/session";

export async function GET(_request, { params }) {
  try {
    const session = await getAnySession();
    const { fileId } = await params;

    if (!session) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const allowed = await canAccessResume(fileId, session);
    if (!allowed) {
      return NextResponse.json({ error: "Access denied." }, { status: 403 });
    }

    const stream = await getResumeDownloadStream(fileId);
    if (!stream) {
      return NextResponse.json({ error: "File not found." }, { status: 404 });
    }

    const metadata = await getResumeMetadata(fileId);
    const mimeType = metadata?.mimeType || "application/octet-stream";
    const filename = metadata?.originalName || "resume.pdf";

    return new NextResponse(stream, {
      headers: {
        "Content-Type": mimeType,
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Unable to fetch file." }, { status: 500 });
  }
}

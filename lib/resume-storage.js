import { GridFSBucket, ObjectId } from "mongodb";
import { randomUUID } from "crypto";
import clientPromise from "./mongodb";

const BUCKET_NAME = "resumes";

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
}

export async function uploadResumeToCloud(file) {
  const client = await clientPromise;
  if (!client) {
    const error = new Error(
      "Resume cloud storage is unavailable. Please configure MongoDB Atlas."
    );
    error.status = 503;
    throw error;
  }

  const db = client.db();
  const bucket = new GridFSBucket(db, { bucketName: BUCKET_NAME });
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${randomUUID()}-${sanitizeFilename(file.name)}`;

  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(filename, {
      metadata: {
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        uploadedAt: new Date().toISOString(),
      },
    });

    uploadStream.on("error", reject);
    uploadStream.on("finish", () => {
      resolve({
        storage: "mongodb_gridfs",
        fileId: uploadStream.id.toString(),
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
      });
    });

    uploadStream.end(buffer);
  });
}

export async function getResumeDownloadStream(fileId) {
  const client = await clientPromise;
  if (!client) return null;

  try {
    const bucket = new GridFSBucket(client.db(), { bucketName: BUCKET_NAME });
    return bucket.openDownloadStream(new ObjectId(fileId));
  } catch {
    return null;
  }
}

export async function getResumeMetadata(fileId) {
  const client = await clientPromise;
  if (!client) return null;

  try {
    const db = client.db();
    const files = await db
      .collection(`${BUCKET_NAME}.files`)
      .findOne({ _id: new ObjectId(fileId) });
    return files?.metadata ?? null;
  } catch {
    return null;
  }
}

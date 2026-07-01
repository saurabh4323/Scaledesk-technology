import { MongoClient } from "mongodb";
import { CONFIG } from "./config";

const uri = CONFIG.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  clientPromise = null;
} else if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

export const APPLICATIONS_COLLECTION = "job_applications";
export const APPLICANTS_COLLECTION = "job_applicants";
export const EMPLOYEES_COLLECTION = "employees";

export async function getDb() {
  const client = await clientPromise;
  if (!client) return null;
  return client.db();
}

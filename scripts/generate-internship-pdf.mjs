import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "public", "documents", "internship-hiring.html");
const pdfPath = path.join(root, "public", "ScaleDesk-Internship-Program-2026.pdf");

async function ensurePuppeteer() {
  const require = createRequire(import.meta.url);
  try {
    return require("puppeteer");
  } catch {
    console.log("Installing puppeteer (one-time)...");
    await new Promise((resolve, reject) => {
      const proc = spawn("npm", ["install", "--no-save", "puppeteer"], {
        cwd: root,
        stdio: "inherit",
        shell: true,
      });
      proc.on("close", (code) => (code === 0 ? resolve() : reject(new Error("puppeteer install failed"))));
    });
    return require("puppeteer");
  }
}

async function generate() {
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`HTML not found: ${htmlPath}`);
  }

  const puppeteer = await ensurePuppeteer();
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log(`PDF created: ${pdfPath}`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});

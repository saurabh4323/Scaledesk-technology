import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath = path.join(__dirname, "..", "public", "ScaleDesk-Internship-Program-2026.pdf");

const BLUE = "#2F80FF";
const BLACK = "#0a0a0a";
const MUTED = "#6b7280";
const BODY = "#374151";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 52;

function drawPageHeader(doc, pageNum) {
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(BLUE)
    .text("Scaledesk", MARGIN, MARGIN, { continued: true })
    .fillColor(BLACK)
    .text(" Technology", { continued: false });

  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(String(pageNum).padStart(2, "0"), PAGE_W - MARGIN - 20, MARGIN, { width: 20, align: "right" });

  doc
    .moveTo(MARGIN, MARGIN + 22)
    .lineTo(PAGE_W - MARGIN, MARGIN + 22)
    .lineWidth(1.5)
    .strokeColor(BLACK)
    .stroke();
}

function drawPageFooter(doc, left, right) {
  const y = PAGE_H - MARGIN + 8;
  doc
    .moveTo(MARGIN, y - 12)
    .lineTo(PAGE_W - MARGIN, y - 12)
    .lineWidth(0.5)
    .strokeColor("#e5e7eb")
    .stroke();

  doc.font("Helvetica").fontSize(8).fillColor(MUTED);
  doc.text(left, MARGIN, y, { width: 250 });
  doc.text(right, PAGE_W - MARGIN - 200, y, { width: 200, align: "right" });
}

function sectionLabel(doc, text, y) {
  doc.font("Helvetica-Bold").fontSize(8).fillColor(BLUE).text(text.toUpperCase(), MARGIN, y, {
    characterSpacing: 1.2,
  });
  return doc.y + 6;
}

function heading(doc, text, y, size = 22) {
  doc.font("Helvetica-Bold").fontSize(size).fillColor(BLACK).text(text, MARGIN, y, {
    width: PAGE_W - MARGIN * 2,
    lineGap: 2,
  });
  return doc.y + 10;
}

function paragraph(doc, text, y, opts = {}) {
  doc.font("Helvetica").fontSize(opts.size || 10.5).fillColor(opts.color || BODY);
  doc.text(text, MARGIN, y, {
    width: PAGE_W - MARGIN * 2,
    lineGap: 4,
    align: opts.align || "left",
  });
  return doc.y + (opts.gap ?? 12);
}

function bulletList(doc, items, y) {
  let cy = y;
  for (const item of items) {
    doc.circle(MARGIN + 4, cy + 5, 2.5).fill(BLUE);
    doc.font("Helvetica").fontSize(10).fillColor(BODY).text(item, MARGIN + 14, cy, {
      width: PAGE_W - MARGIN * 2 - 14,
      lineGap: 3,
    });
    cy = doc.y + 8;
  }
  return cy;
}

function generate() {
  const doc = new PDFDocument({ size: "A4", margin: 0, autoFirstPage: false });
  const stream = fs.createWriteStream(pdfPath);
  doc.pipe(stream);

  // ── PAGE 1: COVER ──
  doc.addPage();
  doc.rect(0, 0, PAGE_W, PAGE_H).fill(BLACK);

  doc
    .font("Helvetica-Bold")
    .fontSize(20)
    .fillColor(BLUE)
    .text("Scaledesk", MARGIN, MARGIN, { continued: true })
    .fillColor("#ffffff")
    .text(" Technology");

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("rgba(255,255,255,0.4)")
    .text("2026", PAGE_W - MARGIN - 40, MARGIN, { width: 40, align: "right" });

  doc
    .roundedRect(MARGIN, 120, 130, 24, 2)
    .lineWidth(0.5)
    .strokeColor(BLUE)
    .stroke();

  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(BLUE)
    .text("INTERNSHIP PROGRAM", MARGIN + 12, 127, { characterSpacing: 1 });

  doc
    .font("Helvetica-Bold")
    .fontSize(34)
    .fillColor("#ffffff")
    .text("Build products that\nenterprises rely on.", MARGIN, 175, { width: 420, lineGap: 4 });

  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor("rgba(255,255,255,0.62)")
    .text(
      "Join ScaleDesk Technology — a product engineering company where interns work on real platforms, real client engagements, and production-grade systems from day one.",
      MARGIN,
      280,
      { width: 420, lineGap: 5 }
    );

  doc
    .moveTo(MARGIN, PAGE_H - 120)
    .lineTo(PAGE_W - MARGIN, PAGE_H - 120)
    .lineWidth(0.5)
    .strokeColor("rgba(255,255,255,0.12)")
    .stroke();

  doc.font("Helvetica-Bold").fontSize(7).fillColor("rgba(255,255,255,0.4)").text("APPLY VIA EMAIL", MARGIN, PAGE_H - 100);
  doc.font("Helvetica").fontSize(11).fillColor(BLUE).text("hr@scaledesktechnology.com", MARGIN, PAGE_H - 88);

  doc.font("Helvetica-Bold").fontSize(7).fillColor("rgba(255,255,255,0.4)").text("WEBSITE", MARGIN + 240, PAGE_H - 100);
  doc.font("Helvetica").fontSize(11).fillColor(BLUE).text("www.scaledesktechnology.com", MARGIN + 240, PAGE_H - 88);

  doc.circle(PAGE_W - 80, PAGE_H - 200, 90).lineWidth(0.5).strokeColor("rgba(47,128,255,0.25)").stroke();

  // ── PAGE 2: ABOUT ──
  doc.addPage();
  drawPageHeader(doc, 2);
  let y = MARGIN + 40;

  y = sectionLabel(doc, "Who we are", y);
  y = heading(doc, "A product engineering company—\nnot a staffing agency.", y);
  y = paragraph(
    doc,
    "ScaleDesk Technology partners with startups, high-growth companies, and enterprises to design, build, and scale digital products. We embed engineering teams that deliver architecture, software, AI, and cloud platforms built to survive real production load.",
    y,
    { size: 11, gap: 10 }
  );
  y = paragraph(
    doc,
    "From doorstep mechanic platforms and fintech ledgers to AI compliance pipelines and enterprise SaaS scale-ups, our work spans industries where reliability, security, and measurable outcomes matter.",
    y
  );

  y = sectionLabel(doc, "What we do", y + 8);
  y = heading(doc, "Engineering products.\nAccelerating businesses.", y, 20);

  const pills = [
    "Product Engineering",
    "Enterprise Software",
    "AI & Automation",
    "Cloud Infrastructure",
    "Data Pipelines",
  ];
  let px = MARGIN;
  doc.font("Helvetica-Bold").fontSize(8);
  for (const pill of pills) {
    const w = doc.widthOfString(pill) + 20;
    if (px + w > PAGE_W - MARGIN) {
      px = MARGIN;
      y += 26;
    }
    doc.roundedRect(px, y, w, 20, 3).fillColor("rgba(47,128,255,0.08)").fill();
    doc.roundedRect(px, y, w, 20, 3).lineWidth(0.5).strokeColor("rgba(47,128,255,0.3)").stroke();
    doc.fillColor(BLUE).text(pill, px + 10, y + 6);
    px += w + 8;
  }
  y += 36;

  const cards = [
    {
      title: "Client delivery",
      body: "Active product engagements—architecture, implementation, and production support—for retail, fintech, healthcare, SaaS, and mobility.",
    },
    {
      title: "Own platforms",
      body: "LeadForGrow™ CRM, AI Analytics, Revenue Protection, and ScaleDesk HRM™—platforms used by real businesses every day.",
    },
  ];

  const cardW = (PAGE_W - MARGIN * 2 - 16) / 2;
  cards.forEach((card, i) => {
    const cx = MARGIN + i * (cardW + 16);
    doc.rect(cx, y, cardW, 72).fillColor("#f9fafb").fill();
    doc.rect(cx, y, cardW, 72).lineWidth(0.5).strokeColor("#e5e7eb").stroke();
    doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text(card.title, cx + 12, y + 12, { width: cardW - 24 });
    doc.font("Helvetica").fontSize(9).fillColor(BODY).text(card.body, cx + 12, y + 28, { width: cardW - 24, lineGap: 2 });
  });

  y += 90;
  const stats = [
    ["50+", "Products engineered"],
    ["5+", "Industries served"],
    ["Remote", "First culture"],
  ];
  stats.forEach((stat, i) => {
    const sx = MARGIN + i * ((PAGE_W - MARGIN * 2) / 3 + 4);
    const sw = (PAGE_W - MARGIN * 2 - 16) / 3;
    doc.rect(sx, y, sw, 52).lineWidth(0.5).strokeColor("#e5e7eb").stroke();
    doc.font("Helvetica-Bold").fontSize(18).fillColor(BLUE).text(stat[0], sx, y + 12, { width: sw, align: "center" });
    doc.font("Helvetica").fontSize(8).fillColor(MUTED).text(stat[1], sx, y + 34, { width: sw, align: "center" });
  });

  drawPageFooter(doc, "© 2026 ScaleDesk Technology", "www.scaledesktechnology.com");

  // ── PAGE 3: INTERNSHIPS ──
  doc.addPage();
  drawPageHeader(doc, 3);
  y = MARGIN + 40;

  y = sectionLabel(doc, "Open positions", y);
  y = heading(doc, "Internship opportunities — 2026", y);
  y = paragraph(
    doc,
    "We are hiring motivated interns for hands-on exposure to product engineering and modern software delivery. This is a learning-first program with real responsibility—not busywork.",
    y,
    { size: 11 }
  );

  const roles = [
    "Software Engineering Intern",
    "Product Engineering Intern",
    "AI & Automation Intern",
    "Cloud & DevOps Intern",
    "Data Engineering Intern",
    "Full-Stack Development Intern",
  ];

  const roleW = (PAGE_W - MARGIN * 2 - 12) / 2;
  roles.forEach((role, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const rx = MARGIN + col * (roleW + 12);
    const ry = y + row * 34;
    doc.rect(rx, ry, 3, 24).fill(BLUE);
    doc.rect(rx + 3, ry, roleW - 3, 24).fillColor("#f9fafb").fill();
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor(BLACK).text(role, rx + 12, ry + 7, { width: roleW - 20 });
  });
  y += Math.ceil(roles.length / 2) * 34 + 16;

  y = paragraph(
    doc,
    "Interns join live projects and internal platforms under senior engineer mentorship—standups, code reviews, documentation, and real delivery cycles.",
    y
  );

  // Eligibility box
  doc.rect(MARGIN, y, PAGE_W - MARGIN * 2, 168).fill(BLACK);
  doc.font("Helvetica-Bold").fontSize(12).fillColor("#ffffff").text("Eligibility criteria", MARGIN + 16, y + 14);

  const criteria = [
    "Currently pursuing B.Tech (any discipline) from a recognized university",
    "Minimum 65% aggregate in Class 10th (SSC / equivalent)",
    "Minimum 65% aggregate in Class 12th (HSC / equivalent)",
    "Minimum 65% CGPA / aggregate in current degree (latest semester)",
    "Expected graduation: 2026, 2027, or 2028",
    "Strong communication, ownership, and willingness to learn",
  ];
  y = bulletList(doc, criteria, y + 36);
  y += 20;

  y = sectionLabel(doc, "What you gain", y);
  const gains = [
    ["Real engineering exposure", "Production-minded codebases and client projects—not hypothetical assignments."],
    ["Mentorship & growth", "Pairing, reviews, and feedback from experienced engineers."],
    ["Certificate & evaluation", "Completion certificate based on project contribution."],
    ["Pre-placement opportunity", "Outstanding performers considered for full-time roles."],
  ];
  gains.forEach((g, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const gx = MARGIN + col * (cardW + 16);
    const gy = y + row * 58;
    doc.rect(gx, gy, cardW, 50).fillColor("#f9fafb").fill();
    doc.rect(gx, gy, cardW, 50).lineWidth(0.5).strokeColor("#e5e7eb").stroke();
    doc.font("Helvetica-Bold").fontSize(9).fillColor(BLACK).text(g[0], gx + 10, gy + 8, { width: cardW - 20 });
    doc.font("Helvetica").fontSize(8.5).fillColor(BODY).text(g[1], gx + 10, gy + 22, { width: cardW - 20, lineGap: 1 });
  });

  drawPageFooter(doc, "© 2026 ScaleDesk Technology", "hr@scaledesktechnology.com");

  // ── PAGE 4: APPLY ──
  doc.addPage();
  drawPageHeader(doc, 4);
  y = MARGIN + 40;

  y = sectionLabel(doc, "How to apply", y);
  y = heading(doc, "Send us your profile", y);
  y = paragraph(
    doc,
    "Email your application to our HR team. We review applications on a rolling basis and will reach out to shortlisted candidates.",
    y,
    { size: 11 }
  );

  doc.rect(MARGIN, y, PAGE_W - MARGIN * 2, 88).fill(BLUE);
  doc.font("Helvetica-Bold").fontSize(14).fillColor("#ffffff").text("Apply now", MARGIN + 16, y + 14);
  doc.font("Helvetica").fontSize(10).fillColor("#ffffff").text("Email: hr@scaledesktechnology.com", MARGIN + 16, y + 36);
  doc.text("Website: www.scaledesktechnology.com", MARGIN + 16, y + 52);
  doc.font("Helvetica").fontSize(9).fillColor("rgba(255,255,255,0.9)").text(
    "Subject: Internship Application — [Your Name] — [Preferred Track]",
    MARGIN + 16,
    y + 68
  );
  y += 108;

  y = sectionLabel(doc, "Include in your email", y);
  const includes = [
    "Updated resume (PDF format)",
    "Brief cover note (why ScaleDesk, preferred track)",
    "College name, degree, semester, and graduation year",
    "Marksheets or academic summary (10th, 12th, latest semester)",
    "GitHub / portfolio link (if available)",
    "LinkedIn profile URL",
  ];
  y = bulletList(doc, includes, y);

  y = paragraph(
    doc,
    "ScaleDesk Technology is an equal-opportunity employer. We welcome applications from candidates who meet the eligibility criteria and demonstrate curiosity, integrity, and a genuine interest in building software that matters.",
    y + 8
  );

  doc
    .moveTo(MARGIN, PAGE_H - 130)
    .lineTo(PAGE_W - MARGIN, PAGE_H - 130)
    .lineWidth(1.5)
    .strokeColor(BLACK)
    .stroke();

  doc.font("Helvetica-Bold").fontSize(14).fillColor(BLUE).text("Scaledesk", MARGIN, PAGE_H - 115, { continued: true });
  doc.fillColor(BLACK).text(" Technology");
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(
      "Engineering Digital Products That Move Businesses Forward.\nhr@scaledesktechnology.com · www.scaledesktechnology.com",
      MARGIN,
      PAGE_H - 95,
      { lineGap: 3 }
    );

  drawPageFooter(doc, "© 2026 ScaleDesk Technology. All Rights Reserved.", "Internship Program 2026");

  doc.end();

  stream.on("finish", () => {
    console.log(`PDF created: ${pdfPath}`);
  });
}

generate();

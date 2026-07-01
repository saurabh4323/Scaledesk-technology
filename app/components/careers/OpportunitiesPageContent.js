"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { OPPORTUNITIES, CAREER_IMAGES } from "../../data/careers";

const BLUE = "#2F80FF";
const DEPARTMENTS = ["All", "Engineering", "Design", "Business"];

export default function OpportunitiesPageContent() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeDept, setActiveDept] = useState("All");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const filtered = useMemo(
    () =>
      activeDept === "All"
        ? OPPORTUNITIES
        : OPPORTUNITIES.filter((job) => job.department === activeDept),
    [activeDept]
  );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Application: ${selectedJob.title} (${selectedJob.id})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRole: ${selectedJob.title}\nID: ${selectedJob.id}\n\n[Please attach your resume and cover letter]`
    );
    window.location.href = `mailto:contact@leadforgrow.com?subject=${subject}&body=${body}`;
    setSelectedJob(null);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <main className="bg-white text-zinc-900 min-h-screen">
      {/* Hero */}
      <section className="relative border-b border-zinc-200">
        <div className="grid lg:grid-cols-2 min-h-[420px]">
          <div className="px-6 xl:px-12 py-16 md:py-24 flex flex-col justify-center bg-white">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm font-medium mb-10 transition-colors"
            >
              ← Careers at ScaleDesk
            </Link>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Open positions
            </p>
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Find your next role
            </h1>
            <p className="text-zinc-600 leading-relaxed max-w-md">
              Full-time engineering roles and internships across product engineering, AI,
              design, and business operations.
            </p>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src={CAREER_IMAGES.workshop}
              alt="Engineering team"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Filters + listings */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-8 border-b border-zinc-200">
            <p className="text-sm text-zinc-500">
              <span className="font-semibold text-zinc-900">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "position" : "positions"}
            </p>
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeDept === dept
                      ? "text-white"
                      : "text-zinc-600 bg-white border border-zinc-200 hover:border-zinc-400"
                  }`}
                  style={activeDept === dept ? { backgroundColor: BLUE } : undefined}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-px bg-zinc-200 border border-zinc-200">
            {filtered.map((job) => (
              <button
                key={job.id}
                type="button"
                onClick={() => setSelectedJob(job)}
                className="group w-full text-left bg-white p-8 md:p-10 hover:bg-zinc-50 transition-colors flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2F80FF]">
                      {job.id}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 px-2 py-0.5 border border-zinc-200">
                      {job.type}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400">
                      {job.location}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 group-hover:text-[#2F80FF] transition-colors mb-2">
                    {job.title}
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">{job.description}</p>
                  <span className="inline-block mt-4 text-xs font-medium text-zinc-500 border border-zinc-200 px-2.5 py-1">
                    {job.department}
                  </span>
                </div>
                <span className="shrink-0 text-sm font-semibold text-[#2F80FF] flex items-center gap-2">
                  Apply
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom image band */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={CAREER_IMAGES.team}
          alt="Join our team"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-950/50 flex items-center justify-center px-6">
          <p className="text-white text-center text-lg md:text-xl font-light max-w-2xl">
            Don&apos;t see the right role?{" "}
            <a
              href="mailto:contact@leadforgrow.com?subject=General%20Careers%20Inquiry"
              className="text-white font-semibold underline underline-offset-4"
            >
              Send us your profile
            </a>
            —we hire ahead of openings for exceptional people.
          </p>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          />
          <div className="relative w-full max-w-md bg-white p-8 border border-zinc-200 shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2F80FF] mb-2">
              {selectedJob.id}
            </p>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-2 leading-tight">
              {selectedJob.title}
            </h3>
            <p className="text-sm text-zinc-600 mb-8">{selectedJob.description}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { name: "name", type: "text", placeholder: "Full name" },
                { name: "phone", type: "tel", placeholder: "Phone number" },
                { name: "email", type: "email", placeholder: "Email address" },
              ].map((field) => (
                <input
                  key={field.name}
                  required
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full border border-zinc-200 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#2F80FF]"
                />
              ))}
              <button
                type="submit"
                className="mt-2 w-full font-semibold py-3.5 text-white"
                style={{ backgroundColor: BLUE }}
              >
                Submit via email
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

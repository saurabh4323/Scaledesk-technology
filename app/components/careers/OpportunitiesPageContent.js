"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ParallaxContent } from "../Parallax";
import { OPPORTUNITIES } from "../../data/careers";

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
    <main className="bg-black min-h-screen text-white flex flex-col">
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-[#2F80FF]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/45 hover:text-white text-sm font-medium mb-10 transition-colors"
          >
            ← Back to careers
          </Link>

          <ParallaxContent yRange={[20, -20]}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2F80FF]/20 bg-[#2F80FF]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[#2F80FF] text-[10px] font-bold uppercase tracking-[0.2em]">
                Open Roles
              </span>
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.06] max-w-3xl mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Find your role at ScaleDesk
            </h1>
            <p className="text-lg text-white/55 font-light max-w-2xl leading-relaxed">
              Full-time engineering roles and internships across product engineering, AI,
              design, and business operations—all remote-first.
            </p>
          </ParallaxContent>

          <div className="flex flex-wrap gap-2 mt-10">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeDept === dept
                    ? "bg-[#2F80FF] text-white"
                    : "bg-white/[0.04] text-white/60 border border-white/[0.08] hover:border-[#2F80FF]/30 hover:text-white"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <p className="text-sm text-white/40 mb-8">
            {filtered.length} {filtered.length === 1 ? "position" : "positions"} available
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((job) => (
              <button
                key={job.id}
                type="button"
                onClick={() => setSelectedJob(job)}
                className="group text-left p-7 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-[#2F80FF]/30 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(47,128,255,0.06)] flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#2F80FF] font-bold bg-[#2F80FF]/10 px-2.5 py-1 rounded-md">
                      {job.id}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/35 px-2 py-1 rounded-md bg-white/[0.04]">
                      {job.type}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#2F80FF] transition-colors leading-snug">
                    {job.title}
                  </h2>
                  <p className="text-sm text-white/50 leading-relaxed font-light mb-5 line-clamp-2">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/50">
                      {job.department}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/50">
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-sm font-semibold text-white/60 group-hover:text-[#2F80FF] transition-colors flex items-center gap-2">
                  Apply now
                  <span className="inline-flex w-7 h-7 items-center justify-center rounded-lg bg-[#2F80FF]/10 border border-[#2F80FF]/20 text-[#2F80FF] group-hover:bg-[#2F80FF] group-hover:text-white transition-all">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          />
          <div className="relative w-full max-w-md bg-[#0a0a0a] rounded-2xl p-8 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="mb-8">
              <div className="text-[10px] uppercase tracking-widest text-[#2F80FF] font-bold mb-2">
                {selectedJob.id}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                Apply for {selectedJob.title}
              </h3>
              <p className="text-sm text-white/45 font-light">{selectedJob.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#2F80FF]/50"
              />
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#2F80FF]/50"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#2F80FF]/50"
              />
              <button
                type="submit"
                className="mt-2 w-full font-semibold py-3.5 rounded-xl text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                Forward application via email
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

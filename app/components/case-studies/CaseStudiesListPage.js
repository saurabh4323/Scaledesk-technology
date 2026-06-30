"use client";

import { ParallaxContent } from "../Parallax";
import { CASE_STUDIES } from "../../data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesListPage() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-[#2F80FF]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F80FF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10">
          <ParallaxContent yRange={[24, -24]}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2F80FF]/20 bg-[#2F80FF]/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[#2F80FF] text-[10px] font-bold uppercase tracking-[0.2em]">
                Case Studies
              </span>
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Engineering outcomes
              <br />
              <span className="text-white/40">that move businesses forward.</span>
            </h1>

            <p className="text-lg text-white/55 font-light max-w-2xl leading-relaxed">
              Real product engineering work across retail, fintech, healthcare, SaaS, and
              logistics—built with the same rigor we bring to every ScaleDesk engagement.
            </p>
          </ParallaxContent>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 md:mt-20">
            {[
              { value: "5+", label: "Industries served" },
              { value: "100x", label: "Max scale achieved" },
              { value: "0", label: "Downtime migrations" },
              { value: "99.9%", label: "Avg. accuracy / uptime" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="text-2xl md:text-3xl font-semibold text-[#2F80FF] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/40 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col gap-8 md:gap-12">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
            Ready to write your case study?
          </h2>
          <p className="text-white/50 font-light mb-8 max-w-lg mx-auto">
            Partner with ScaleDesk to engineer products that deliver measurable business impact.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2F80FF] hover:brightness-110 transition-all"
          >
            Talk to Our Engineers
          </a>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../Parallax";

const BLUE = "#2F80FF";

function SectionLabel({ children, dark = false }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 ${
        dark ? "text-white/45" : "text-zinc-500"
      }`}
    >
      {children}
    </p>
  );
}

function ContentBlock({ label, title, children, dark = false }) {
  return (
    <section className={dark ? "bg-zinc-950 text-white py-16 md:py-24" : "py-16 md:py-24 bg-white"}>
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionLabel dark={dark}>{label}</SectionLabel>
          <h2
            className={`text-2xl md:text-3xl font-semibold tracking-tight leading-tight ${
              dark ? "text-white" : "text-zinc-900"
            }`}
          >
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p
            className={`text-[17px] leading-relaxed font-light ${
              dark ? "text-white/60" : "text-zinc-600"
            }`}
          >
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyContent({ study }) {
  return (
    <>
      {/* Key metrics strip */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Client", value: study.client },
              { label: "Timeline", value: study.timeline },
              { label: "Team", value: study.teamSize },
              { label: "Key metric", value: study.metric, accent: true },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 font-semibold mb-1.5">
                  {item.label}
                </div>
                <div
                  className={`text-sm md:text-base font-semibold ${
                    item.accent ? "text-[#2F80FF]" : "text-zinc-900"
                  }`}
                >
                  {item.value}
                </div>
                {item.accent && (
                  <div className="text-xs text-zinc-500 mt-0.5">{study.metricLabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentBlock label="01 — Challenge" title="The problem we inherited">
        {study.challenge}
      </ContentBlock>

      <ContentBlock label="02 — Approach" title="How we partnered" dark>
        {study.approach}
      </ContentBlock>

      {/* Full-bleed image */}
      <section className="relative h-[40vh] min-h-[280px] max-h-[480px] overflow-hidden">
        <ParallaxImage className="absolute inset-0" speed={10} scale={1.1}>
          <Image
            src={study.image}
            alt={`${study.title} project`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-zinc-900/20" />
      </section>

      <ContentBlock label="03 — Solution" title="What we built">
        {study.solution}
      </ContentBlock>

      {/* Results + sidebar */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel>04 — Outcome</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
              Measurable business impact
            </h2>
            <p className="text-[17px] text-zinc-600 leading-relaxed font-light">{study.outcome}</p>

            <div className="mt-10 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[11px] uppercase tracking-wider text-zinc-600 border border-zinc-200 bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-zinc-200 p-7 md:p-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-6">
                Results at a glance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {study.results.map((result) => (
                  <div key={result.label}>
                    <div className="text-2xl font-semibold text-[#2F80FF] tracking-tight">
                      {result.value}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 leading-snug">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-zinc-200 p-7 md:p-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-6">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-[12px] font-medium text-[#2F80FF] border border-[#2F80FF]/20 bg-[#2F80FF]/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Start a similar project →
            </Link>
          </aside>
        </div>
      </section>

      {/* Quote band */}
      <section className="grid lg:grid-cols-2 bg-zinc-950 text-white">
        <div className="px-6 xl:px-16 py-16 md:py-24 flex flex-col justify-center order-2 lg:order-1">
          <SectionLabel dark>Client voice</SectionLabel>
          <blockquote className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-8">
            &ldquo;{study.quote.text}&rdquo;
          </blockquote>
          <div>
            <div className="text-sm font-semibold text-white">{study.quote.author}</div>
            <div className="text-xs text-white/45 mt-0.5">{study.quote.company}</div>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-full order-1 lg:order-2">
          <Image
            src={study.heroImage}
            alt={study.client}
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-zinc-950/30" />
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxContent, ParallaxImage } from "../Parallax";

function ContentSection({ title, children }) {
  return (
    <section className="mb-14 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-5">
        {title}
      </h2>
      <div className="text-[17px] text-white/60 leading-relaxed font-light space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function CaseStudyContent({ study }) {
  return (
    <>
      <div className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Client", value: study.client },
              { label: "Timeline", value: study.timeline },
              { label: "Team", value: study.teamSize },
              { label: "Key metric", value: study.metric, accent: true },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/35 font-semibold mb-1.5">
                  {item.label}
                </div>
                <div
                  className={`text-sm md:text-base font-medium ${item.accent ? "text-[#2F80FF]" : "text-white"}`}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <ParallaxContent yRange={[20, -20]}>
              <ContentSection title="The challenge">
                <p>{study.challenge}</p>
              </ContentSection>

              <ContentSection title="Our approach">
                <p>{study.approach}</p>
              </ContentSection>

              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-14 md:mb-16 border border-white/[0.06]">
                <ParallaxImage className="absolute inset-0" speed={12} scale={1.12}>
                  <Image
                    src={study.image}
                    alt={`${study.title} project`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </ParallaxImage>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <ContentSection title="The solution">
                <p>{study.solution}</p>
              </ContentSection>

              <ContentSection title="The outcome">
                <p>{study.outcome}</p>
              </ContentSection>
            </ParallaxContent>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/45 mb-5">
                  Results at a glance
                </h3>
                <div className="grid grid-cols-2 gap-5">
                  {study.results.map((result) => (
                    <div key={result.label}>
                      <div className="text-2xl font-semibold text-[#2F80FF] tracking-tight">
                        {result.value}
                      </div>
                      <div className="text-[11px] text-white/45 mt-1 leading-snug">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/45 mb-5">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#2F80FF]/10 border border-[#2F80FF]/15 text-[12px] text-[#2F80FF] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#2F80FF]/10 to-transparent border border-[#2F80FF]/20">
                <p className="text-white/75 leading-relaxed font-light italic mb-5">
                  &ldquo;{study.quote.text}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-white">{study.quote.author}</div>
                  <div className="text-xs text-white/45 mt-0.5">{study.quote.company}</div>
                </div>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[#2F80FF] text-white text-sm font-semibold hover:brightness-110 transition-all"
              >
                Start a similar project
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

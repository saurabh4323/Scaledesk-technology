"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../Parallax";

export default function CaseStudyCard({ study, index = 0 }) {
  const reversed = index % 2 === 1;

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block"
    >
      <article
        className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.06] bg-[#0a0a0a] hover:border-[#2F80FF]/30 transition-all duration-500 hover:shadow-[0_24px_80px_rgba(47,128,255,0.08)] ${
          reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className={`relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden ${reversed ? "lg:[direction:ltr]" : ""}`}>
          <ParallaxImage className="absolute inset-0" speed={14} scale={1.14}>
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/80" />
          <div className="absolute top-5 left-5 lg:top-8 lg:left-8">
            <span className="inline-block px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
              {study.industry}
            </span>
          </div>
        </div>

        <div className={`flex flex-col justify-between p-8 md:p-10 lg:p-12 ${reversed ? "lg:[direction:ltr]" : ""}`}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 font-semibold mb-3">
              {study.client}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-white tracking-tight leading-snug mb-5 group-hover:text-[#2F80FF] transition-colors duration-300">
              {study.title}
            </h2>
            <p className="text-[15px] md:text-base text-white/55 leading-relaxed font-light mb-8">
              {study.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] uppercase tracking-wider text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 pt-6 border-t border-white/[0.06]">
            <div>
              <div className="text-3xl md:text-4xl font-semibold text-[#2F80FF] tracking-tight">
                {study.metric}
              </div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/40 mt-1 font-semibold">
                {study.metricLabel}
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-[#2F80FF] transition-colors shrink-0">
              View case study
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-[#2F80FF]/10 border border-[#2F80FF]/20 text-[#2F80FF] group-hover:bg-[#2F80FF] group-hover:text-white transition-all duration-300">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

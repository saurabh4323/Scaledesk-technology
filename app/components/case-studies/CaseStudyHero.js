"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../Parallax";

const BLUE = "#2F80FF";

export default function CaseStudyHero({ study }) {
  return (
    <section className="relative min-h-[55vh] flex items-end bg-black">
      <ParallaxImage className="absolute inset-0" speed={14} scale={1.14}>
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </ParallaxImage>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/30" />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 xl:px-12 pb-14 pt-32">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
        >
          ← All case studies
        </Link>

        <div className="flex flex-wrap gap-2 mb-5">
          <span
            className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border"
            style={{
              color: BLUE,
              backgroundColor: `${BLUE}26`,
              borderColor: `${BLUE}40`,
            }}
          >
            {study.industry}
          </span>
          {study.services.slice(0, 2).map((service) => (
            <span
              key={service}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/60 border border-white/15"
            >
              {service}
            </span>
          ))}
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-5"
          style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
        >
          {study.title}
        </h1>
        <p className="text-white/60 text-lg font-light leading-relaxed mb-6 max-w-2xl">
          {study.excerpt}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-white/45">
          <span>{study.client}</span>
          <span>·</span>
          <span>{study.timeline}</span>
          <span>·</span>
          <span>{study.teamSize}</span>
        </div>
      </div>
    </section>
  );
}

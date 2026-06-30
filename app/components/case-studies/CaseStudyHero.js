"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage, ParallaxContent } from "../Parallax";

export default function CaseStudyHero({ study }) {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="relative h-[50vh] min-h-[360px] max-h-[560px] overflow-hidden">
        <ParallaxImage className="absolute inset-0" speed={16} scale={1.18}>
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col justify-end pb-12 md:pb-16">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-8 transition-colors w-fit"
          >
            ← All case studies
          </Link>

          <ParallaxContent yRange={[20, -20]}>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1.5 rounded-full bg-[#2F80FF]/15 border border-[#2F80FF]/25 text-[#2F80FF] text-[10px] font-bold uppercase tracking-widest">
                {study.industry}
              </span>
              {study.services.slice(0, 2).map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest"
                >
                  {service}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.06] max-w-4xl mb-4">
              {study.title}
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
              {study.excerpt}
            </p>
          </ParallaxContent>
        </div>
      </div>
    </section>
  );
}

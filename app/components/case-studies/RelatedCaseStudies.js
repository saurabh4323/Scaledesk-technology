"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../Parallax";

export default function RelatedCaseStudies({ studies }) {
  if (!studies.length) return null;

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10">
          More case studies
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] hover:border-[#2F80FF]/25 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <ParallaxImage className="absolute inset-0" speed={10} scale={1.1}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </ParallaxImage>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
                  {study.industry}
                </p>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#2F80FF] transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-[#2F80FF] text-sm font-semibold mt-3">{study.metric}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

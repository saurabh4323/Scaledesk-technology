"use client";

import Image from "next/image";
import Link from "next/link";

export default function RelatedCaseStudies({ studies }) {
  if (!studies.length) return null;

  return (
    <section className="bg-zinc-50 border-t border-zinc-200 py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-8">More case studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group bg-white border border-zinc-200 hover:border-[#2F80FF]/30 transition-colors overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-widest text-[#2F80FF] mb-2">
                  {study.industry}
                </p>
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-[#2F80FF] transition-colors leading-snug">
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

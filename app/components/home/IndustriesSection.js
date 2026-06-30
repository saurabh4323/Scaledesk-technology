"use client";

import { ParallaxContent } from "../Parallax";

const INDUSTRIES = [
  "SaaS",
  "Healthcare",
  "Finance",
  "Logistics",
  "Education",
  "Manufacturing",
  "Retail",
  "Professional Services",
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#0c1a3a] py-20 lg:py-24 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
        <ParallaxContent yRange={[24, -24]}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 mb-4 block">
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Engineering across sectors
              </h2>
            </div>
            <p className="text-white/60 text-[15px] max-w-lg leading-relaxed">
              Product engineering expertise for startups, growth-stage companies, and enterprises
              across regulated and high-scale industries.
            </p>
          </div>
        </ParallaxContent>

        <ParallaxContent yRange={[20, -20]}>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="px-5 py-3 bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </ParallaxContent>
      </div>
    </section>
  );
}

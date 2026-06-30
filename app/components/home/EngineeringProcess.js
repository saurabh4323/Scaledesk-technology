"use client";

import { ParallaxContent } from "../Parallax";

const STEPS = [
  {
    title: "Discover",
    description: "Align on vision, users, market fit, and measurable outcomes.",
  },
  {
    title: "Architect",
    description: "Design scalable systems, tech stack, and product roadmaps.",
  },
  {
    title: "Engineer",
    description: "Build with clean code, modern tooling, and engineering rigor.",
  },
  {
    title: "Launch",
    description: "Ship confidently with testing, security, and observability.",
  },
  {
    title: "Scale",
    description: "Optimize performance, infrastructure, and reliability at growth.",
  },
  {
    title: "Continuously Improve",
    description: "Evolve the product with data, feedback, and iteration.",
  },
];

export default function EngineeringProcess() {
  return (
    <section className="bg-[#3b3187] py-20 lg:py-28 border-t border-[#4f4599] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
        <ParallaxContent yRange={[28, -28]}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-4 block">
                Process
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                How We Engineer Products
              </h2>
            </div>
            <p className="text-[15px] text-white/65 leading-relaxed font-light max-w-md lg:text-right">
              A disciplined product engineering lifecycle—from first insight to long-term
              evolution.
            </p>
          </div>
        </ParallaxContent>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          <div
            className="absolute top-[26px] left-[4%] right-[4%] h-px bg-white/25"
            aria-hidden="true"
          />
          <div className="grid grid-cols-6 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="group relative pt-1">
                <div className="flex flex-col items-start">
                  <div className="relative z-10 mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/30 bg-[#3b3187] text-sm font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-[#3b3187]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[17px] font-semibold text-white mb-2 leading-snug pr-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed font-light pr-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet — horizontal scroll */}
        <div className="lg:hidden -mx-6 px-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="w-[260px] shrink-0 p-6 border border-white/20 bg-white/[0.06] backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="text-white/30 text-sm">→</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

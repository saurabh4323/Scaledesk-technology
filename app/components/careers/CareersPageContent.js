"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage, ParallaxContent } from "../Parallax";
import {
  ENGINEERING_PRINCIPLES,
  ONBOARDING_STEPS,
  BENEFITS,
  TECH_STACK,
} from "../../data/careers";

const BLUE = "#2F80FF";

export default function CareersPageContent() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[#2F80FF]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10 pb-16 md:pb-20">
          <ParallaxContent yRange={[24, -24]}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2F80FF]/20 bg-[#2F80FF]/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[#2F80FF] text-[10px] font-bold uppercase tracking-[0.2em]">
                Careers at ScaleDesk
              </span>
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Engineer products
              <br />
              <span className="text-white/40">that define what&apos;s next.</span>
            </h1>

            <p className="text-lg text-white/55 font-light max-w-2xl leading-relaxed mb-10">
              Join a product engineering team building intelligent digital products for
              startups and enterprises. Remote-first, impact-driven, and obsessed with quality.
            </p>

            <Link
              href="/careers/opportunities"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: BLUE }}
            >
              View open roles
              <span>→</span>
            </Link>
          </ParallaxContent>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 md:mt-20">
            {[
              { value: "Remote", label: "First culture" },
              { value: "12+", label: "Open roles" },
              { value: "Global", label: "Client exposure" },
              { value: "100%", label: "Real projects" },
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

        <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
          <ParallaxImage
            className="relative max-w-6xl mx-auto h-[38vh] sm:h-[44vh] md:h-[50vh] rounded-t-[2rem] md:rounded-t-[2.5rem]"
            speed={14}
            scale={1.16}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
              alt="ScaleDesk engineering team collaboration"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
          </ParallaxImage>
          <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 lg:inset-x-16 top-0 max-w-6xl mx-auto h-[38vh] sm:h-[44vh] md:h-[50vh] rounded-t-[2rem] md:rounded-t-[2.5rem] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ParallaxContent yRange={[28, -28]}>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45 mb-4 block">
              Life at ScaleDesk
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight">
              A culture built for builders
            </h2>
            <p className="text-[17px] text-white/55 leading-relaxed font-light mb-6">
              We&apos;re a product engineering company—not a body shop. You&apos;ll work on
              meaningful systems, collaborate with sharp engineers, and see your work ship to
              production for real businesses.
            </p>
            <p className="text-[17px] text-white/55 leading-relaxed font-light">
              Whether you&apos;re an intern or a senior engineer, you&apos;ll get ownership,
              mentorship, and the autonomy to solve hard problems the right way.
            </p>
          </ParallaxContent>

          <div className="grid sm:grid-cols-2 gap-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#2F80FF]/25 transition-colors duration-300"
              >
                <h3 className="text-[15px] font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28 border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <ParallaxContent yRange={[20, -20]}>
            <div className="mb-14 md:mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45 mb-4 block">
                Engineering Principles
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                How we work together
              </h2>
            </div>
          </ParallaxContent>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGINEERING_PRINCIPLES.map((p) => (
              <div
                key={p.id}
                className="p-7 md:p-8 rounded-2xl bg-black border border-white/[0.06] hover:border-[#2F80FF]/30 transition-all duration-300 group"
              >
                <div className="text-[#2F80FF]/50 text-sm font-bold mb-5 group-hover:text-[#2F80FF] transition-colors">
                  {p.id}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <ParallaxContent yRange={[20, -20]}>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45 mb-4 block">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Tools we build with
            </h2>
            <p className="text-white/50 font-light max-w-xl mx-auto mb-14">
              Modern, battle-tested technologies across product engineering, cloud, and AI.
            </p>
          </ParallaxContent>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-white/60 hover:text-white hover:border-[#2F80FF]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="py-20 md:py-28 border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <ParallaxContent yRange={[20, -20]}>
            <div className="mb-14 md:mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45 mb-4 block">
                Onboarding
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Your first 90 days
              </h2>
              <p className="text-white/50 font-light max-w-xl">
                Structured ramp-up with real ownership from week one—not months of shadowing.
              </p>
            </div>
          </ParallaxContent>

          <div className="relative">
            <div className="absolute left-[29px] top-2 bottom-2 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col gap-10 md:gap-12">
              {ONBOARDING_STEPS.map((step) => (
                <div key={step.week} className="flex items-start gap-6 md:gap-8 relative">
                  <div className="w-[58px] h-[58px] rounded-full bg-black border border-[#2F80FF]/30 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_20px_rgba(47,128,255,0.12)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2F80FF]" />
                  </div>
                  <div className="pt-1">
                    <div className="text-[#2F80FF] text-[10px] font-bold uppercase tracking-[0.16em] mb-2">
                      {step.week}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/55 font-light max-w-2xl leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <ParallaxImage className="absolute inset-0" speed={10} scale={1.1}>
          <Image
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000&auto=format&fit=crop"
            alt="Team working together"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-5">
            Ready to build with us?
          </h2>
          <p className="text-white/55 text-lg font-light mb-10">
            Explore open roles across engineering, design, and business—or reach out if you
            don&apos;t see the perfect fit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/careers/opportunities"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold text-white"
              style={{ backgroundColor: BLUE }}
            >
              See open positions
              <span>→</span>
            </Link>
            <a
              href="mailto:contact@leadforgrow.com?subject=Careers%20at%20ScaleDesk"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              Email our team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

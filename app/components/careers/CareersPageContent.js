"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../Parallax";
import {
  CAREER_IMAGES,
  COMPANY_STATS,
  COMPANY_ABOUT,
  WORK_LIFE_STORIES,
  ENGINEERING_PRINCIPLES,
  ONBOARDING_STEPS,
  BENEFITS,
  CAREER_PATHS,
  EMPLOYEE_VOICES,
  TECH_STACK,
} from "../../data/careers";

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

function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      style={{ backgroundColor: BLUE }}
    >
      {children}
    </Link>
  );
}

export default function CareersPageContent() {
  return (
    <main className="bg-white text-zinc-900">
      {/* ── Full-bleed hero ── */}
      <section className="relative min-h-[88vh] flex items-end bg-black">
        <ParallaxImage
          className="absolute inset-0"
          speed={12}
          scale={1.12}
          mobileScale={1}
          mobileSpeed={4}
        >
          <Image
            src={CAREER_IMAGES.hero}
            alt="Life at ScaleDesk Technology"
            fill
            priority
            className="object-cover object-[68%_center] sm:object-center"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-12 pb-16 md:pb-24 pt-36">
          <SectionLabel dark>Careers</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Build products that enterprises rely on.
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl leading-relaxed mb-10">
            Join ScaleDesk Technology—a product engineering company where your work ships to
            production, your craft is respected, and your growth is intentional.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/careers/opportunities">Search open roles →</PrimaryButton>
            <a
              href="#life-at-scaledesk"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white border border-white/30 hover:border-white/60 transition-colors"
            >
              Explore life here
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip (white) ── */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About the company (white editorial) ── */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-zinc-900 mb-6">
              {COMPANY_ABOUT.headline}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {COMPANY_ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[17px] text-zinc-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 mt-16 md:mt-20 grid md:grid-cols-12 gap-4">
          <div className="md:col-span-7 relative min-h-[320px] md:min-h-[480px] overflow-hidden">
            <Image
              src={CAREER_IMAGES.company}
              alt="ScaleDesk workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-4">
            <div className="relative min-h-[200px] md:min-h-0 overflow-hidden">
              <Image
                src={CAREER_IMAGES.collaboration}
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="relative min-h-[200px] md:min-h-0 overflow-hidden bg-zinc-100 p-8 flex flex-col justify-end">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                Our mission
              </p>
              <p className="text-xl font-medium text-zinc-900 leading-snug">
                Engineer intelligent products that create durable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work life (dark + image grid) ── */}
      <section id="life-at-scaledesk" className="py-20 md:py-28 bg-zinc-950 text-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 mb-14 md:mb-16">
          <SectionLabel dark>Work life</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl leading-tight">
            What it&apos;s actually like to work here
          </h2>
          <p className="text-white/55 font-light max-w-2xl mt-5 text-[17px] leading-relaxed">
            ScaleDesk is built for people who want depth: real clients, real constraints, and
            teams that hold a high bar for engineering quality without corporate theater.
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 grid md:grid-cols-2 gap-px bg-white/10">
          {WORK_LIFE_STORIES.map((story) => (
            <article key={story.title} className="group bg-zinc-950">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
              </div>
              <div className="p-8 md:p-10 border-t border-white/[0.06]">
                <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                <p className="text-white/55 font-light leading-relaxed text-[15px]">
                  {story.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Values with imagery (white) ── */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 mb-14">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Principles that guide every engagement
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 space-y-16 md:space-y-24">
          {ENGINEERING_PRINCIPLES.map((item, i) => (
            <div
              key={item.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`relative h-72 md:h-96 overflow-hidden ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <span className="text-sm font-semibold text-[#2F80FF] mb-4 block">{item.id}</span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[17px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits (light gray) ── */}
      <section className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionLabel>Benefits</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-5">
              Support for the way you work best
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              We keep benefits practical and focused—structured for remote engineers, interns,
              and leaders who want room to grow.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white p-8 md:p-9">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">{b.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career paths + photo (split) ── */}
      <section className="grid lg:grid-cols-2 bg-zinc-950 text-white">
        <div className="relative min-h-[400px] lg:min-h-full">
          <Image
            src={CAREER_IMAGES.team}
            alt="Team at ScaleDesk"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-zinc-950/30 lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-950/80" />
        </div>
        <div className="px-6 xl:px-16 py-20 md:py-28 flex flex-col justify-center">
          <SectionLabel dark>Career growth</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            A path with increasing scope—not just seniority titles
          </h2>
          <div className="space-y-8">
            {CAREER_PATHS.map((path) => (
              <div key={path.level} className="border-l-2 border-[#2F80FF] pl-6">
                <h3 className="text-lg font-semibold mb-2">{path.level}</h3>
                <p className="text-white/55 font-light leading-relaxed text-[15px]">
                  {path.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Employee voices (white) ── */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SectionLabel>People</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-14">
            Perspectives from the team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {EMPLOYEE_VOICES.map((voice) => (
              <figure key={voice.name} className="grid sm:grid-cols-5 gap-6 items-start">
                <div className="sm:col-span-2 relative h-48 sm:h-full min-h-[12rem] overflow-hidden bg-zinc-100">
                  <Image
                    src={voice.image}
                    alt={voice.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 20vw"
                  />
                </div>
                <blockquote className="sm:col-span-3">
                  <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                  <figcaption>
                    <div className="text-sm font-semibold text-zinc-900">{voice.name}</div>
                    <div className="text-xs text-zinc-500 mt-1">{voice.tenure}</div>
                  </figcaption>
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Onboarding (light) ── */}
      <section className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Onboarding</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-5">
              Your first 90 days, structured
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-10">
              We ramp people quickly because client work is real from the start. You will not
              spend a quarter in orientation slides—you will ship, with support.
            </p>
            <div className="relative h-56 md:h-72 overflow-hidden">
              <Image
                src={CAREER_IMAGES.learning}
                alt="Learning at ScaleDesk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <ol className="space-y-0 border border-zinc-200 bg-white divide-y divide-zinc-200">
            {ONBOARDING_STEPS.map((step) => (
              <li key={step.week} className="p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2F80FF] mb-2">
                  {step.week}
                </p>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Technology strip (dark) ── */}
      <section className="py-16 md:py-20 bg-zinc-950 text-white border-b border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <SectionLabel dark>Technology</SectionLabel>
          <p className="text-white/50 text-sm mb-8 max-w-xl mx-auto">
            Stacks vary by engagement, but most teams work across modern product engineering,
            cloud, and AI tooling.
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 text-xs text-white/60 border border-white/10 bg-white/[0.03]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <ParallaxImage className="absolute inset-0 opacity-40" speed={8} scale={1.08}>
          <Image
            src={CAREER_IMAGES.office}
            alt="Join ScaleDesk"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 xl:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-5">
              Ready to apply?
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg">
              Browse open roles in engineering, design, and business—or introduce yourself if
              your profile is a strong fit for upcoming work.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
            <PrimaryButton href="/careers/opportunities">View all openings →</PrimaryButton>
            <a
              href="mailto:contact@leadforgrow.com?subject=Careers%20at%20ScaleDesk"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white border border-white/25 hover:border-white/50 transition-colors"
            >
              Email careers team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

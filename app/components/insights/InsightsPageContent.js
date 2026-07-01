"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../Parallax";
import { INSIGHTS, INSIGHT_CATEGORIES, getFeaturedInsight } from "../../data/insights";

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

function InsightCard({ article, large = false }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={`group block bg-white border border-zinc-200 hover:border-[#2F80FF]/40 transition-colors ${
        large ? "grid lg:grid-cols-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${large ? "min-h-[280px] lg:min-h-full" : "h-52"}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes={large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>
      <div className={`p-7 md:p-8 flex flex-col justify-between ${large ? "lg:p-10" : ""}`}>
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2F80FF]">
              {article.type}
            </span>
            <span className="text-[10px] text-zinc-400">·</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">
              {article.category}
            </span>
          </div>
          <h3
            className={`font-semibold text-zinc-900 tracking-tight leading-snug group-hover:text-[#2F80FF] transition-colors ${
              large ? "text-2xl md:text-3xl mb-4" : "text-lg mb-3"
            }`}
          >
            {article.title}
          </h3>
          <p className={`text-zinc-600 leading-relaxed font-light ${large ? "text-base" : "text-sm"}`}>
            {article.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-zinc-100 text-xs text-zinc-500">
          <span>{article.author}</span>
          <span>
            {article.date} · {article.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function InsightsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = getFeaturedInsight();

  const filtered = useMemo(() => {
    const list = INSIGHTS.filter((a) => !a.featured || activeCategory !== "All");
    if (activeCategory === "All") return list.filter((a) => !a.featured);
    return list.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-end bg-black">
        <ParallaxImage className="absolute inset-0" speed={12} scale={1.1}>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
            alt="ScaleDesk insights"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-12 pb-16 md:pb-20 pt-32">
          <SectionLabel dark>Insights</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Perspectives on product engineering
          </h1>
          <p className="text-lg text-white/65 font-light max-w-2xl leading-relaxed">
            Architecture decisions, AI strategy, cloud operations, and product thinking from
            the teams building scalable systems at ScaleDesk Technology.
          </p>
        </div>
      </section>

      {/* Topics strip */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-zinc-500 max-w-md">
            Filter by topic or explore our latest thinking on engineering products at scale.
          </p>
          <div className="flex flex-wrap gap-2">
            {INSIGHT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-zinc-600 border border-zinc-200 hover:border-zinc-400"
                }`}
                style={activeCategory === cat ? { backgroundColor: BLUE } : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {(activeCategory === "All" || activeCategory === featured.category) && (
        <section className="py-16 md:py-20 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <SectionLabel>Featured</SectionLabel>
            <InsightCard article={featured} large />
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              Latest articles
            </h2>
            <p className="text-sm text-zinc-500">{filtered.length} articles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
            {filtered.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial band - dark */}
      <section className="grid lg:grid-cols-2 bg-zinc-950 text-white">
        <div className="relative min-h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop"
            alt="Engineering research"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-zinc-950/40" />
        </div>
        <div className="px-6 xl:px-16 py-16 md:py-24 flex flex-col justify-center">
          <SectionLabel dark>How we publish</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight mb-5 leading-tight">
            Written by practitioners, not marketers
          </h2>
          <p className="text-white/55 font-light leading-relaxed mb-6">
            Every article reflects real delivery experience—architecture tradeoffs, production
            incidents, migration lessons, and product decisions from active engagements.
          </p>
          <p className="text-white/55 font-light leading-relaxed">
            We share what worked, what failed, and what we would do differently. That honesty
            is how we hold ourselves accountable to the engineering standards we recommend.
          </p>
        </div>
      </section>

      {/* Topics overview - white */}
      <section className="py-20 md:py-28 bg-white border-t border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SectionLabel>Topics</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-zinc-900">
            What we write about
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product Engineering",
                desc: "MVPs, platform evolution, and product thinking for engineering leaders.",
              },
              {
                title: "Architecture",
                desc: "Microservices, data pipelines, system design, and migration playbooks.",
              },
              {
                title: "AI & Automation",
                desc: "Production AI agents, LLM pipelines, and intelligent workflow design.",
              },
              {
                title: "Cloud & DevOps",
                desc: "Reliability, observability, SLOs, and cloud-native operations.",
              },
              {
                title: "Security",
                desc: "Zero-trust patterns, compliance, and secure delivery at scale.",
              },
              {
                title: "Case-linked research",
                desc: "Insights grounded in outcomes from retail, fintech, healthcare, and SaaS.",
              },
            ].map((topic) => (
              <div key={topic.title} className="border-l-2 border-[#2F80FF] pl-6">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{topic.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-black overflow-hidden">
        <ParallaxImage className="absolute inset-0 opacity-35" speed={8} scale={1.08}>
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
            alt="Join the conversation"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5">
            Want to go deeper?
          </h2>
          <p className="text-white/55 font-light mb-8">
            Explore case studies with measured outcomes—or talk to our team about your product
            engineering challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex px-7 py-3.5 text-sm font-semibold text-white"
              style={{ backgroundColor: BLUE }}
            >
              View case studies →
            </Link>
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 text-sm font-semibold text-white border border-white/25 hover:border-white/50 transition-colors"
            >
              Talk to our engineers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

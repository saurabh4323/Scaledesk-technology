"use client";

import { ImageOverlayCard, SplitCard } from "./PremiumCard";
import { ParallaxContent } from "../Parallax";

const INSIGHTS = [
  {
    type: "overlay",
    label: "Perspective",
    title: "From MVP validation to enterprise-grade product engineering",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    href: "/services/software-engineering",
  },
  {
    type: "overlay",
    label: "Research Report",
    title: "AI agents and intelligent automation for modern product teams",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    href: "/services/ai-automation",
  },
  {
    type: "split",
    label: "Case Study",
    title: "Engineering mission-critical enterprise software at scale",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    href: "/case-studies/fintech-transaction-ledger",
  },
  {
    type: "split",
    label: "Capability",
    title: "Cloud-native architecture built for reliability and growth",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    href: "/services/cloud-infrastructure",
  },
];

export default function InsightGrid() {
  return (
    <section className="bg-black py-4 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-16 lg:py-20">
        <ParallaxContent yRange={[28, -28]}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 mb-4 block">
                Insights
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                How we think about product engineering
              </h2>
            </div>
            <p className="text-white/50 text-[15px] max-w-md leading-relaxed">
              Strategy, architecture, and execution perspectives from the teams building
              scalable digital products.
            </p>
          </div>
        </ParallaxContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {INSIGHTS.map((card) =>
            card.type === "overlay" ? (
              <ImageOverlayCard key={card.title} {...card} />
            ) : (
              <SplitCard key={card.title} {...card} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

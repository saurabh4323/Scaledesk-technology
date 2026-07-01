"use client";

import Image from "next/image";
import Link from "next/link";
import { BLUE, SectionLabel, HEADING_STYLE, DarkBreadcrumbs } from "./shared";
import Breadcrumbs from "../seo/Breadcrumbs";
import CatalogCard from "./CatalogCard";

export default function CatalogHubPage({
  hubType,
  config,
  items,
  breadcrumbs,
}) {
  const featured = items.find((i) => i.featured);
  const rest = items.filter((i) => !i.featured);

  return (
    <main className="bg-white text-zinc-900">
      <section className="relative min-h-[68vh] flex items-end bg-black">
        <Image
          src={config.heroImage}
          alt={config.heroAlt}
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-12 pb-16 md:pb-20 pt-32">
          <DarkBreadcrumbs>
            <Breadcrumbs items={breadcrumbs} />
          </DarkBreadcrumbs>
          <SectionLabel dark>{config.label}</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-6"
            style={HEADING_STYLE}
          >
            {config.title}
          </h1>
          <p className="text-lg text-white/65 font-light max-w-2xl leading-relaxed">{config.subtitle}</p>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-12 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {config.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900" style={HEADING_STYLE}>
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {featured && (
        <section className="py-16 md:py-20 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <SectionLabel>{config.featuredLabel}</SectionLabel>
            <CatalogCard item={featured} large />
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <SectionLabel>{hubType === "products" ? "All Platforms" : hubType === "solutions" ? "All Solutions" : "All Industries"}</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900" style={HEADING_STYLE}>
                {config.gridTitle}
              </h2>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm">{config.gridSubtitle}</p>
          </div>
          <div className={`grid gap-6 ${hubType === "industries" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {(featured ? rest : items).map((item) => (
              <CatalogCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-xl">
            <SectionLabel dark>Get Started</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={HEADING_STYLE}>
              {config.ctaTitle}
            </h2>
            <p className="text-white/55 font-light leading-relaxed">{config.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href={config.ctaPrimary.href}
              className="inline-flex px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              {config.ctaPrimary.label}
            </Link>
            <Link
              href={config.ctaSecondary.href}
              className="inline-flex px-8 py-3.5 text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              {config.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../seo/Breadcrumbs";
import JsonLd from "../seo/JsonLd";
import CatalogCard from "./CatalogCard";
import { SectionLabel, DarkBreadcrumbs, BLUE } from "./SectionLabel";

export default function CatalogHub({
  label,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  breadcrumbs,
  stats,
  items,
  featuredItem,
  gridTitle,
  gridSubtitle,
  ctaTitle,
  ctaSubtitle,
  ctaPrimary,
  ctaSecondary,
  jsonLdGraph,
}) {
  const rest = featuredItem ? items.filter((i) => i.slug !== featuredItem.slug) : items;

  return (
    <>
      {jsonLdGraph && <JsonLd data={jsonLdGraph} />}
      <main className="bg-white text-zinc-900">
        <section className="relative min-h-[68vh] flex items-end bg-black">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-12 pb-16 md:pb-20 pt-32">
            <DarkBreadcrumbs items={breadcrumbs} Breadcrumbs={Breadcrumbs} />
            <SectionLabel dark>{label}</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              {title}
            </h1>
            <p className="text-lg text-white/65 font-light max-w-2xl leading-relaxed">{subtitle}</p>
          </div>
        </section>

        {stats?.length > 0 && (
          <section className="border-b border-zinc-200 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-12 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900"
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {featuredItem && (
          <section className="py-16 md:py-20 bg-zinc-50 border-b border-zinc-200">
            <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
              <SectionLabel>Featured</SectionLabel>
              <CatalogCard item={featuredItem} large />
            </div>
          </section>
        )}

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <SectionLabel>Explore</SectionLabel>
                <h2
                  className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {gridTitle || title}
                </h2>
              </div>
              {gridSubtitle && <p className="text-sm text-zinc-500 max-w-sm">{gridSubtitle}</p>}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((item) => (
                <CatalogCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white py-20 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-xl">
              <SectionLabel dark>Get Started</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                {ctaTitle}
              </h2>
              <p className="text-white/55 font-light leading-relaxed">{ctaSubtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href={ctaPrimary.href}
                className="inline-flex px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                {ctaPrimary.label}
              </Link>
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex px-8 py-3.5 text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../seo/Breadcrumbs";
import JsonLd from "../seo/JsonLd";
import CatalogCard from "./CatalogCard";
import { SectionLabel, DarkBreadcrumbs, BLUE } from "./SectionLabel";
import { pageGraph } from "../../../lib/seo/schema";

export default function CatalogDetail({ page, breadcrumbs, display, relatedItems = [] }) {
  const graph = pageGraph({
    breadcrumbs,
    page: {
      title: page.seoTitle || page.title,
      description: page.metaDescription || page.description,
      path: page.path,
    },
    product:
      page.category === "product"
        ? { name: page.title, description: page.metaDescription, path: page.path }
        : null,
    software:
      page.category === "product"
        ? {
            name: page.title,
            description: page.metaDescription,
            path: page.path,
            applicationCategory: "BusinessApplication",
          }
        : null,
    service:
      page.category === "service"
        ? { name: page.title, description: page.metaDescription, path: page.path }
        : null,
    faqs: page.faqs,
  });

  const categoryLabel =
    page.category === "product"
      ? "Product"
      : page.category === "solution"
        ? "Solution"
        : page.category === "industry"
          ? "Industry"
          : "ScaleDesk Technology";

  const sections =
    page.sections?.length > 0
      ? page.sections
      : (page.h2s || []).map((h2) => ({
          title: h2,
          content: page.intro,
        }));

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-white text-zinc-900">
        <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-end bg-black">
          <Image
            src={display.image}
            alt={display.imageAlt || page.h1}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-12 pb-14 md:pb-16 pt-32">
            <DarkBreadcrumbs items={breadcrumbs} Breadcrumbs={Breadcrumbs} />
            <SectionLabel dark>{categoryLabel}</SectionLabel>
            {display.tagline && (
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: BLUE }}>
                {display.tagline}
              </p>
            )}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-tight max-w-4xl mb-5"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              {page.h1 || page.title}
            </h1>
            {page.intro && (
              <p className="article-summary text-lg text-white/65 font-light max-w-2xl leading-relaxed">
                {page.intro}
              </p>
            )}
            {display.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {display.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 border border-white/20 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {display.metric && (
              <div>
                <div className="text-2xl md:text-3xl font-semibold" style={{ color: BLUE }}>
                  {display.metric}
                </div>
                <div className="text-sm text-zinc-500 mt-1">{display.metricLabel}</div>
              </div>
            )}
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-zinc-900">Enterprise</div>
              <div className="text-sm text-zinc-500 mt-1">Grade engineering</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-zinc-900">AI-first</div>
              <div className="text-sm text-zinc-500 mt-1">Intelligence built-in</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-zinc-900">Global</div>
              <div className="text-sm text-zinc-500 mt-1">Delivery model</div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative aspect-[4/3] overflow-hidden border border-zinc-200 bg-zinc-100 lg:sticky lg:top-32">
                <Image
                  src={display.image}
                  alt={display.imageAlt || page.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-10">
                {sections.map((section) => (
                  <article key={section.title} className="border-b border-zinc-100 pb-10 last:border-0">
                    <h2
                      className="text-xl md:text-2xl font-semibold text-zinc-900 mb-4 tracking-tight"
                      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                    >
                      {section.title}
                    </h2>
                    <p className="text-zinc-600 font-light leading-relaxed text-base md:text-lg">
                      {section.content}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {page.faqs?.length > 0 && (
          <section className="py-16 md:py-20 bg-zinc-50 border-y border-zinc-200">
            <div className="max-w-[900px] mx-auto px-6 xl:px-12">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-10 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {page.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-white border border-zinc-200 p-6 open:shadow-sm transition-shadow"
                  >
                    <summary className="font-medium text-zinc-900 cursor-pointer list-none flex justify-between items-center gap-4">
                      {faq.question}
                      <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-zinc-600 font-light leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedItems.length > 0 && (
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
              <SectionLabel>Related</SectionLabel>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-8 tracking-tight">Explore more</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedItems.slice(0, 3).map((item) => (
                  <CatalogCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-black text-white py-20 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
            <SectionLabel dark>Next Step</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 max-w-2xl mx-auto">
              Ready to get started?
            </h2>
            <p className="text-white/55 font-light mb-10 max-w-lg mx-auto">
              Talk to the ScaleDesk Technology engineering team about deployment, integration, and scale.
            </p>
            <Link
              href={page.cta?.href || "/contact"}
              className="inline-flex px-10 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              {page.cta?.label || "Contact Us"} →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

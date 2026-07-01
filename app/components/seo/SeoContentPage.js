import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import { pageGraph } from "../../../lib/seo/schema";
import { SITE } from "../../../lib/seo/config";

const BLUE = "#2F80FF";

export default function SeoContentPage({
  page,
  breadcrumbs,
  children,
  schemaExtras = {},
  showFaqs = true,
  showInternalLinks = true,
}) {
  const graph = pageGraph({
    breadcrumbs,
    page: page
      ? {
          title: page.seoTitle || page.title,
          description: page.metaDescription || page.description,
          path: page.path,
        }
      : null,
    service:
      page?.category === "service"
        ? { name: page.title, description: page.metaDescription, path: page.path }
        : null,
    product:
      page?.category === "product"
        ? { name: page.title, description: page.metaDescription, path: page.path }
        : null,
    software:
      page?.category === "product"
        ? {
            name: page.title,
            description: page.metaDescription,
            path: page.path,
            applicationCategory: "BusinessApplication",
          }
        : null,
    faqs: page?.faqs,
    ...schemaExtras,
  });

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <article className="max-w-[900px] mx-auto">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

          <header className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-4">
              {page?.category === "service" && "Service"}
              {page?.category === "industry" && "Industry"}
              {page?.category === "solution" && "Solution"}
              {page?.category === "product" && "Product"}
              {!page?.category && "ScaleDesk Technology"}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-[1.1]">
              {page?.h1 || page?.title}
            </h1>
            {page?.intro && (
              <p className="article-summary text-xl text-zinc-400 font-light leading-relaxed">
                {page.intro}
              </p>
            )}
          </header>

          {children}

          {page?.sections?.map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white border-b border-white/10 pb-3">
                {section.title}
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed text-lg">
                {section.content}
              </p>
            </section>
          ))}

          {page?.h2s?.length > 0 && !page?.sections?.length && (
            <div className="space-y-10 mb-12">
              {page.h2s.map((h2) => (
                <section key={h2}>
                  <h2 className="text-2xl font-semibold mb-3 text-white">{h2}</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    ScaleDesk Technology delivers {page.primaryKeyword?.toLowerCase() || "enterprise engineering"} with Product Engineering discipline, AI Solutions integration, and cloud-native architecture — led by Co-Founder & CTO{" "}
                    <Link href="/team/saurabh-singh" className="text-blue-400 hover:underline">
                      Saurabh Singh
                    </Link>
                    .
                  </p>
                </section>
              ))}
            </div>
          )}

          {showFaqs && page?.faqs?.length > 0 && (
            <section className="mb-12" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {page.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-white/10 rounded-xl p-6 bg-white/[0.02]"
                  >
                    <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-zinc-600 group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-zinc-400 font-light leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {showInternalLinks && (page?.internalLinks?.length > 0 || page?.relatedSlugs?.length > 0) && (
            <section className="mb-12" aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-xl font-semibold mb-4">
                Related Resources
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {(page.internalLinks || []).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-400 hover:text-blue-300 text-[15px] transition-colors"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {page?.cta && (
            <section className="mt-16 p-10 border border-white/10 rounded-2xl bg-white/[0.02] text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                Talk to the Product Engineering team at {SITE.name}. Led by Co-Founder & CTO Saurabh Singh.
              </p>
              <Link
                href={page.cta.href}
                className="inline-flex px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                {page.cta.label} →
              </Link>
            </section>
          )}
        </article>
      </main>
    </>
  );
}

import Link from "next/link";
import Breadcrumbs from "../seo/Breadcrumbs";
import { SectionLabel } from "../catalog/SectionLabel";
import { LEGAL_RELATED_LINKS } from "../../../lib/legal/pages";

const BLUE = "#2F80FF";

function SectionContent({ section }) {
  return (
    <section id={section.id} className="scroll-mt-32">
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight mb-4">
        {section.title}
      </h2>

      {section.paragraphs?.map((paragraph, i) => (
        <p key={i} className="text-zinc-600 font-light leading-relaxed mb-4 last:mb-0">
          {paragraph}
        </p>
      ))}

      {section.list && (
        <ul className="mt-4 space-y-2.5 list-disc pl-5 text-zinc-600 font-light leading-relaxed">
          {section.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {section.subsections?.map((sub, i) => (
        <div key={i} className="mt-6">
          <h3 className="text-base font-medium text-zinc-800 mb-3">{sub.title}</h3>
          {sub.list && (
            <ul className="space-y-2.5 list-disc pl-5 text-zinc-600 font-light leading-relaxed">
              {sub.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {section.table && (
        <div className="mt-6 overflow-x-auto border border-zinc-200">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200">
                {section.table.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 font-semibold text-zinc-900 text-xs uppercase tracking-wide"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i} className="border-b border-zinc-100 last:border-0">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 align-top font-light leading-relaxed ${
                        j === 0 ? "font-medium text-zinc-800" : "text-zinc-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.link && (
        <div className="mt-6">
          {section.link.external ? (
            <a
              href={section.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              {section.link.label} →
            </a>
          ) : (
            <Link
              href={section.link.href}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              {section.link.label} →
            </Link>
          )}
        </div>
      )}
    </section>
  );
}

export default function LegalPageContent({
  page,
  currentPath,
  variant = "legal",
}) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Legal", path: "/legal/privacy-policy" },
    { name: page.title, path: currentPath },
  ];

  const tocItems = page.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  const relatedLinks = LEGAL_RELATED_LINKS.filter((link) => link.href !== currentPath);

  return (
    <main className="bg-white min-h-screen text-zinc-900">
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-12">
          <Breadcrumbs items={breadcrumbs} />
          <SectionLabel>Legal</SectionLabel>
          <h1
            className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-4 max-w-3xl"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            {page.title}
          </h1>
          <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-3xl mb-6">
            {page.subtitle}
          </p>
          <p className="text-sm text-zinc-500">
            Last updated: <time>{page.lastUpdated}</time>
          </p>
        </div>
      </section>

      {/* Security highlights */}
      {variant === "security" && page.highlights && (
        <section className="py-12 md:py-16 border-b border-zinc-200">
          <div className="max-w-[1200px] mx-auto px-6 xl:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-6 border border-zinc-200 bg-white hover:border-zinc-300 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LinkedIn hero CTA */}
      {variant === "social" && page.companyUrl && (
        <section className="py-10 border-b border-zinc-200 bg-zinc-900 text-white">
          <div className="max-w-[1200px] mx-auto px-6 xl:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-2">
                Official channel
              </p>
              <p className="text-lg font-light text-white/80">
                Follow ScaleDesk Technology on LinkedIn for product news and careers.
              </p>
            </div>
            <a
              href={page.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </section>
      )}

      {/* Content + TOC */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12 xl:gap-20">
            {/* Table of contents */}
            <aside className="hidden lg:block">
              <nav
                aria-label="On this page"
                className="sticky top-28 border border-zinc-200 p-5 bg-zinc-50"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">
                  On this page
                </p>
                <ol className="space-y-2">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-zinc-600 hover:text-zinc-900 font-light leading-snug block transition-colors"
                      >
                        {i + 1}. {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Main content */}
            <article className="min-w-0">
              {page.intro?.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-zinc-600 font-light leading-relaxed mb-5 text-[17px]"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-12 space-y-14">
                {page.sections.map((section, i) => (
                  <div key={section.id}>
                    {i > 0 && <hr className="border-zinc-200 mb-14" />}
                    <SectionContent section={section} />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related + contact */}
      <section className="py-14 md:py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-4">Related documents</h2>
              <ul className="space-y-2">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-zinc-900 font-light transition-colors inline-flex items-center gap-1.5"
                    >
                      <span aria-hidden="true" style={{ color: BLUE }}>
                        →
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {page.contactEmail && (
              <div className="p-6 border border-zinc-200 bg-white">
                <h2 className="text-lg font-semibold text-zinc-900 mb-2">
                  {page.contactLabel || "Contact"}
                </h2>
                <p className="text-sm text-zinc-600 font-light mb-4">
                  Questions about this document? Our team will respond promptly.
                </p>
                <a
                  href={`mailto:${page.contactEmail}`}
                  className="text-sm font-medium hover:underline"
                  style={{ color: BLUE }}
                >
                  {page.contactEmail}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

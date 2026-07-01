import Link from "next/link";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import JsonLd from "../../components/seo/JsonLd";
import { FOUNDER } from "../../../lib/seo/founder";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph, profilePageSchema, personSchema } from "../../../lib/seo/schema";

export const metadata = buildPageMetadata({
  title: FOUNDER.seoTitle,
  seoTitle: FOUNDER.seoTitle,
  metaDescription: FOUNDER.metaDescription,
  path: "/team/saurabh-singh",
  primaryKeyword: FOUNDER.primaryKeyword,
  secondaryKeywords: FOUNDER.secondaryKeywords,
  longTailKeywords: FOUNDER.longTailKeywords,
  ogImage: FOUNDER.ogImage,
  authors: [{ name: FOUNDER.name, url: "https://scaledesktechnology.com/team/saurabh-singh" }],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/about" },
  { name: FOUNDER.name, path: "/team/saurabh-singh" },
];

export default function SaurabhSinghPage() {
  const graph = pageGraph({
    breadcrumbs,
    page: {
      title: FOUNDER.seoTitle,
      description: FOUNDER.metaDescription,
      path: "/team/saurabh-singh",
    },
    faqs: FOUNDER.faqs,
  });
  graph["@graph"].push(
    profilePageSchema({
      name: FOUNDER.name,
      description: FOUNDER.summary,
      path: "/team/saurabh-singh",
    }),
    personSchema({
      url: "https://scaledesktechnology.com/team/saurabh-singh",
      description: FOUNDER.summary,
    })
  );

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <article className="max-w-[900px] mx-auto" itemScope itemType="https://schema.org/Person">
          <Breadcrumbs items={breadcrumbs} />
          <meta itemProp="name" content={FOUNDER.name} />
          <meta itemProp="jobTitle" content={FOUNDER.title} />

          <header className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500 font-semibold mb-4">
              Co-Founder & Chief Technology Officer
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {FOUNDER.h1}
            </h1>
            <p className="article-summary text-xl text-zinc-400 font-light leading-relaxed">
              {FOUNDER.summary}
            </p>
            <p className="mt-4 text-zinc-500">
              <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <Link href="/" itemProp="url" className="text-blue-400 hover:underline">
                  <span itemProp="name">ScaleDesk Technology</span>
                </Link>
              </span>
              {" · "}
              <Link href="/products/leadforgrow-crm" className="text-blue-400 hover:underline">
                LeadForGrow™
              </Link>
              {" · "}
              <Link href="/products/scaledesk-hrm" className="text-blue-400 hover:underline">
                ScaleDesk HRM™
              </Link>
            </p>
          </header>

          {FOUNDER.biography.map((para, i) => (
            <p key={i} className="text-zinc-400 font-light leading-relaxed mb-6 text-lg">
              {para}
            </p>
          ))}

          <section className="my-12">
            <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-3">
              Expertise
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {FOUNDER.expertise.map((item) => (
                <li key={item} className="flex items-start gap-2 text-zinc-400">
                  <span className="text-blue-500 shrink-0">→</span> {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-3">
              Experience
            </h2>
            {FOUNDER.experience.map((exp) => (
              <div key={exp.role} className="mb-8 pl-4 border-l-2 border-blue-500/30">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-blue-400 text-sm mb-2">
                  {exp.company} · {exp.period}
                </p>
                <p className="text-zinc-400 font-light">{exp.description}</p>
              </div>
            ))}
          </section>

          <section className="my-12" aria-labelledby="founder-faq">
            <h2 id="founder-faq" className="text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FOUNDER.faqs.map((faq) => (
                <details key={faq.question} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                  <summary className="font-medium cursor-pointer">{faq.question}</summary>
                  <p className="mt-3 text-zinc-400 font-light">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-semibold mb-4">Related Pages</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {FOUNDER.internalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-400 hover:underline text-[15px]">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 p-10 border border-white/10 rounded-2xl text-center bg-white/[0.02]">
            <h2 className="text-2xl font-semibold mb-4">{FOUNDER.cta.label}</h2>
            <Link
              href={FOUNDER.cta.href}
              className="inline-flex px-8 py-3.5 text-sm font-semibold text-white bg-[#2F80FF] hover:opacity-90 transition-opacity"
            >
              Contact ScaleDesk Technology →
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

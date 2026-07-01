import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import JsonLd from "../../components/seo/JsonLd";
import { getGlossaryTerm, getGlossarySlugs } from "../../../lib/seo/glossary";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph, webPageSchema } from "../../../lib/seo/schema";

export function generateStaticParams() {
  return getGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return { title: "Glossary | ScaleDesk Technology" };
  return buildPageMetadata({
    title: term.seoTitle,
    seoTitle: term.seoTitle,
    metaDescription: term.metaDescription,
    path: `/glossary/${slug}`,
    primaryKeyword: term.term,
  });
}

export default async function GlossaryTermPage({ params }) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary" },
    { name: term.term, path: `/glossary/${slug}` },
  ];

  const graph = pageGraph({
    breadcrumbs,
    page: {
      title: term.seoTitle,
      description: term.metaDescription,
      path: `/glossary/${slug}`,
    },
    faqs: [
      {
        question: `What is ${term.term}?`,
        answer: term.definition,
      },
    ],
  });

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <article className="max-w-[800px] mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-semibold tracking-tight mb-6">What is {term.term}?</h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">{term.definition}</p>

          {term.relatedServices?.length > 0 && (
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-3">Related Services</h2>
              <ul className="space-y-2">
                {term.relatedServices.map((href) => (
                  <li key={href}>
                    <Link href={href} className="text-blue-400 hover:underline">
                      {href.replace("/services/", "").replace(/-/g, " ")} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {term.relatedTerms?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-3">Related Terms</h2>
              <ul className="flex flex-wrap gap-3">
                {term.relatedTerms.map((t) => (
                  <li key={t}>
                    <Link
                      href={`/glossary/${t}`}
                      className="px-4 py-2 border border-white/10 rounded-full text-sm text-zinc-400 hover:text-white hover:border-blue-500/30 transition-colors"
                    >
                      {t.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

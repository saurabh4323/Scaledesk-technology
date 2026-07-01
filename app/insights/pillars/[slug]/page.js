import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/seo/Breadcrumbs";
import JsonLd from "../../../components/seo/JsonLd";
import { getPillar, getPillarSlugs } from "../../../../lib/seo/blog-pillars";
import { buildPageMetadata } from "../../../../lib/seo/metadata";
import { pageGraph, articleSchema, faqSchema } from "../../../../lib/seo/schema";

export function generateStaticParams() {
  return getPillarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return { title: "Guide | ScaleDesk Technology" };
  return buildPageMetadata({
    title: pillar.seoTitle,
    seoTitle: pillar.seoTitle,
    metaDescription: pillar.metaDescription,
    path: `/insights/pillars/${slug}`,
    primaryKeyword: pillar.primaryKeyword,
    authors: [{ name: pillar.author, url: "https://scaledesktechnology.com/team/saurabh-singh" }],
    section: pillar.category,
    ogType: "article",
    publishedTime: pillar.date,
  });
}

export default async function PillarPage({ params }) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const path = `/insights/pillars/${slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: "Pillar Guides", path: "/resources" },
    { name: pillar.title, path },
  ];

  const graph = pageGraph({
    breadcrumbs,
    page: { title: pillar.seoTitle, description: pillar.metaDescription, path },
    faqs: pillar.faqs,
    article: {
      title: pillar.title,
      description: pillar.excerpt,
      path,
      datePublished: pillar.date,
      authorName: pillar.author,
      section: pillar.category,
    },
  });

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <article className="max-w-[900px] mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <header className="mb-12">
            <p className="text-[11px] uppercase tracking-widest text-blue-500 font-bold mb-3">
              Pillar Guide · {pillar.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">{pillar.title}</h1>
            <p className="article-summary text-xl text-zinc-400 font-light">{pillar.excerpt}</p>
            <p className="mt-4 text-sm text-zinc-600">
              By{" "}
              <Link href="/team/saurabh-singh" className="text-blue-400 hover:underline">
                {pillar.author}
              </Link>
              {" · "}{pillar.readTime}
            </p>
          </header>

          {pillar.sections.map((section) => (
            <section key={section.title} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">
                {section.title}
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed text-lg">{section.content}</p>
            </section>
          ))}

          {pillar.clusterArticles?.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
              <ul className="space-y-2">
                {pillar.clusterArticles.map((articleSlug) => (
                  <li key={articleSlug}>
                    <Link href={`/insights/${articleSlug}`} className="text-blue-400 hover:underline">
                      {articleSlug.replace(/-/g, " ")} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {pillar.faqs?.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
              {pillar.faqs.map((faq) => (
                <details key={faq.question} className="mb-4 border border-white/10 rounded-xl p-5">
                  <summary className="font-medium cursor-pointer">{faq.question}</summary>
                  <p className="mt-3 text-zinc-400 font-light">{faq.answer}</p>
                </details>
              ))}
            </section>
          )}

          <Link
            href="/contact"
            className="inline-flex px-8 py-3.5 text-sm font-semibold text-white bg-[#2F80FF]"
          >
            Talk to Our Engineers →
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}

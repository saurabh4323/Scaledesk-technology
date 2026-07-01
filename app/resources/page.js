import Link from "next/link";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import JsonLd from "../components/seo/JsonLd";
import { PILLAR_PAGES } from "../../lib/seo/blog-pillars";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";

const PAGE_DESCRIPTION =
  "Free resources — Product Engineering guides, AI Solutions playbooks, architecture templates, and technology consulting resources from ScaleDesk Technology.";

export const metadata = buildPageMetadata({
  title: "Resources & Guides",
  seoTitle: "Product Engineering Resources | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/resources",
  primaryKeyword: "Product Engineering Resources",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
];

export default function ResourcesPage() {
  const graph = pageGraph({
    breadcrumbs,
    page: { title: "Resources", description: PAGE_DESCRIPTION, path: "/resources" },
  });
  graph["@graph"].push(
    collectionPageSchema({ title: "Resources", description: PAGE_DESCRIPTION, path: "/resources" })
  );

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Product Engineering Resources & Guides
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-3xl">
            Authoritative guides, pillar content, and technology resources from ScaleDesk Technology — built for founders, CTOs, and engineering leaders.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Pillar Guides</h2>
            <div className="grid gap-4">
              {PILLAR_PAGES.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={`/insights/pillars/${pillar.slug}`}
                  className="group p-6 border border-white/10 rounded-xl hover:border-blue-500/30 transition-all"
                >
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">
                    {pillar.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-2">{pillar.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {/* <li><Link href="/services" className="text-blue-400 hover:underline">All Services →</Link></li> */}
              <li><Link href="/glossary" className="text-blue-400 hover:underline">Technology Glossary →</Link></li>
              <li><Link href="/insights" className="text-blue-400 hover:underline">Insights & Articles →</Link></li>
              <li><Link href="/case-studies" className="text-blue-400 hover:underline">Case Studies →</Link></li>
              {/* <li><Link href="/team/saurabh-singh" className="text-blue-400 hover:underline">Saurabh Singh — CTO →</Link></li> */}
              <li><Link href="/contact" className="text-blue-400 hover:underline">Contact →</Link></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

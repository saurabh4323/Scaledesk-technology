import Link from "next/link";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import JsonLd from "../components/seo/JsonLd";
import { GLOSSARY_TERMS } from "../../lib/seo/glossary";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";

const PAGE_DESCRIPTION =
  "Technology glossary — Product Engineering, AI Automation, Cloud Native, Enterprise Software, and SaaS terms defined by ScaleDesk Technology experts.";

export const metadata = buildPageMetadata({
  title: "Technology & Product Engineering Glossary",
  seoTitle: "Product Engineering & AI Glossary | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/glossary",
  primaryKeyword: "Product Engineering Glossary",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: "/glossary" },
];

export default function GlossaryHubPage() {
  const graph = pageGraph({
    breadcrumbs,
    page: { title: "Glossary", description: PAGE_DESCRIPTION, path: "/glossary" },
  });
  graph["@graph"].push(
    collectionPageSchema({ title: "Glossary", description: PAGE_DESCRIPTION, path: "/glossary" })
  );

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Technology & Product Engineering Glossary
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
            Definitions of key terms in Product Engineering, AI Solutions, Enterprise Software, and Cloud Native Development — by ScaleDesk Technology.
          </p>
          <dl className="space-y-6">
            {GLOSSARY_TERMS.map((term) => (
              <div key={term.slug} className="border-b border-white/10 pb-6">
                <dt>
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="text-lg font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {term.term}
                  </Link>
                </dt>
                <dd className="mt-2 text-zinc-500 font-light line-clamp-2">{term.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import { FOUNDER } from "../../../lib/seo/founder";
import { pageGraph, profilePageSchema, personSchema } from "../../../lib/seo/schema";

export default function FounderPageContent({ pageMeta, breadcrumbs, emphasis = "founder" }) {
  const graph = pageGraph({
    breadcrumbs,
    page: {
      title: pageMeta.seoTitle,
      description: pageMeta.metaDescription,
      path: pageMeta.path,
    },
    faqs: FOUNDER.faqs,
  });
  graph["@graph"].push(
    profilePageSchema({
      name: FOUNDER.name,
      description: FOUNDER.summary,
      path: pageMeta.path,
    }),
    personSchema()
  );

  const title =
    emphasis === "cto"
      ? "Chief Technology Officer — Saurabh Singh"
      : "Founder — Saurabh Singh";

  const subtitle =
    emphasis === "cto"
      ? "Technology leadership, Product Engineering, and AI Solutions at ScaleDesk Technology"
      : "Co-Founder of ScaleDesk Technology — builder of LeadForGrow™ and ScaleDesk HRM™";

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <article className="max-w-[900px] mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <header className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500 font-semibold mb-4">
              {FOUNDER.title}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">{title}</h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">{subtitle}</p>
          </header>

          <p className="text-zinc-400 font-light leading-relaxed mb-6 text-lg">{FOUNDER.summary}</p>

          {FOUNDER.biography.slice(0, 2).map((para, i) => (
            <p key={i} className="text-zinc-400 font-light leading-relaxed mb-6">
              {para}
            </p>
          ))}

          <section className="my-12 p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
            <h2 className="text-xl font-semibold mb-4">Entity Relationship</h2>
            <ol className="space-y-2 text-zinc-400">
              <li><strong className="text-white">{FOUNDER.name}</strong></li>
              <li>↓ Co-Founder</li>
              <li>↓ Chief Technology Officer</li>
              <li>↓ <Link href="/" className="text-blue-400 hover:underline">ScaleDesk Technology</Link></li>
              <li>↓ <Link href="/products/leadforgrow-crm" className="text-blue-400 hover:underline">LeadForGrow™</Link></li>
              <li>↓ <Link href="/products/scaledesk-hrm" className="text-blue-400 hover:underline">ScaleDesk HRM™</Link></li>
            </ol>
          </section>

          <section className="my-12">
            <h2 className="text-2xl font-semibold mb-4">Technology Leadership</h2>
            <p className="text-zinc-400 font-light leading-relaxed mb-4">
              As {emphasis === "cto" ? "CTO" : "Co-Founder & CTO"}, Saurabh Singh leads Product Engineering, AI Solutions, Enterprise Software Development, and cloud-native platform architecture at ScaleDesk Technology.
            </p>
            <Link href="/team/saurabh-singh" className="text-blue-400 hover:underline">
              Full profile & author page →
            </Link>
          </section>

          <Link
            href="/contact"
            className="inline-flex px-8 py-3.5 text-sm font-semibold text-white bg-[#2F80FF] hover:opacity-90 transition-opacity"
          >
            Talk to Our Engineering Team →
          </Link>
        </article>
      </main>
    </>
  );
}

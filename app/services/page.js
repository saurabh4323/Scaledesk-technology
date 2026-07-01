import Link from "next/link";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import JsonLd from "../components/seo/JsonLd";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { SERVICES } from "../../lib/seo/services";

const PAGE_DESCRIPTION =
  "ScaleDesk Technology services — Product Engineering, AI Development, Enterprise Software, SaaS, MVP, CRM, HRMS, Cloud Native, DevOps, and Technology Consulting.";

export const metadata = buildPageMetadata({
  title: "Product Engineering & Software Development Services",
  seoTitle: "Product Engineering & IT Services Company | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/services",
  primaryKeyword: "Product Engineering Services",
  secondaryKeywords: [
    "Software Development Company",
    "IT Services Company",
    "AI Development Company",
    "Enterprise Software Development",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesHubPage() {
  const graph = pageGraph({
    breadcrumbs,
    page: {
      title: "Services",
      description: PAGE_DESCRIPTION,
      path: "/services",
    },
  });
  graph["@graph"].push(
    collectionPageSchema({
      title: "ScaleDesk Technology Services",
      description: PAGE_DESCRIPTION,
      path: "/services",
    })
  );

  return (
    <>
      <JsonLd data={graph} />
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Product Engineering & Software Development Services
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-3xl">
            ScaleDesk Technology is a Product Engineering company delivering AI Solutions, Enterprise Software Development, Custom Software, SaaS, MVP, CRM, HRMS, Cloud Native, DevOps, and Technology Consulting — led by Co-Founder & CTO{" "}
            <Link href="/team/saurabh-singh" className="text-blue-400 hover:underline">
              Saurabh Singh
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.path}
                className="group p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all"
              >
                <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-zinc-500 font-light line-clamp-2">
                  {service.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

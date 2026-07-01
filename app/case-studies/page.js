import Footer from "../components/Footer";
import CaseStudiesListPage from "../components/case-studies/CaseStudiesListPage";
import JsonLd from "../components/seo/JsonLd";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";

const DESCRIPTION =
  "Case studies showcasing Product Engineering, AI Solutions, and Enterprise Software projects delivered by ScaleDesk Technology for fintech, healthcare, SaaS, retail, and logistics clients.";

export const metadata = buildPageMetadata({
  title: "Case Studies",
  seoTitle: "Product Engineering Case Studies | ScaleDesk Technology",
  metaDescription: DESCRIPTION,
  path: "/case-studies",
  primaryKeyword: "Product Engineering Case Studies",
  secondaryKeywords: ["Software Development Case Studies", "AI Solutions Case Studies", "Enterprise Software Projects"],
});

const graph = pageGraph({
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ],
  page: { title: "Case Studies", description: DESCRIPTION, path: "/case-studies" },
});
graph["@graph"].push(
  collectionPageSchema({ title: "Case Studies", description: DESCRIPTION, path: "/case-studies" })
);

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={graph} />
      <CaseStudiesListPage />
      <Footer />
    </>
  );
}

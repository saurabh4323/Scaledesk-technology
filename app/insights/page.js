import Footer from "../components/Footer";
import InsightsPageContent from "../components/insights/InsightsPageContent";
import JsonLd from "../components/seo/JsonLd";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";

const DESCRIPTION =
  "Insights on Product Engineering, AI Solutions, Enterprise Software, Cloud Native architecture, and Technology Consulting from ScaleDesk Technology — by Saurabh Singh and the engineering team.";

export const metadata = buildPageMetadata({
  title: "Insights — Product Engineering & AI",
  seoTitle: "Product Engineering Insights & Blog | ScaleDesk Technology",
  metaDescription: DESCRIPTION,
  path: "/insights",
  primaryKeyword: "Product Engineering Blog",
  secondaryKeywords: ["AI Solutions Insights", "Enterprise Software Blog", "Technology Consulting Articles"],
});

const graph = pageGraph({
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
  ],
  page: { title: "Insights", description: DESCRIPTION, path: "/insights" },
});
graph["@graph"].push(
  collectionPageSchema({ title: "Insights", description: DESCRIPTION, path: "/insights" })
);

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={graph} />
      <InsightsPageContent />
      <Footer />
    </>
  );
}

import Footer from "../components/Footer";
import SolutionsPageContent from "../components/solutions/SolutionsPageContent";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";

const PAGE_DESCRIPTION =
  "Enterprise solutions — AI CRM (LeadForGrow™), HRMS (ScaleDesk HRM™), business automation, AI agents, analytics, revenue protection, cloud migration, and digital transformation.";

export const metadata = buildPageMetadata({
  title: "Enterprise Solutions",
  seoTitle: "AI & Enterprise Software Solutions | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/solutions",
  primaryKeyword: "Enterprise Software Solutions",
  secondaryKeywords: ["AI CRM Solution", "HRMS Platform", "Business Automation Platform"],
});

export default function SolutionsHubPage() {
  const graph = pageGraph({
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
    ],
    page: { title: "Solutions", description: PAGE_DESCRIPTION, path: "/solutions" },
  });
  graph["@graph"].push(
    collectionPageSchema({ title: "Solutions", description: PAGE_DESCRIPTION, path: "/solutions" })
  );

  return (
    <>
      <SolutionsPageContent jsonLdGraph={graph} />
      <Footer />
    </>
  );
}

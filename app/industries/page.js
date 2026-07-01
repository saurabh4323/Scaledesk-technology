import Footer from "../components/Footer";
import IndustriesPageContent from "../components/industries/IndustriesPageContent";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";

const PAGE_DESCRIPTION =
  "Industry-specific software development — fintech, healthcare, SaaS, e-commerce, enterprise, startup, manufacturing, logistics, education, and energy solutions by ScaleDesk Technology.";

export const metadata = buildPageMetadata({
  title: "Industries We Serve",
  seoTitle: "Industry Software Development | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/industries",
  primaryKeyword: "Industry Software Development",
  secondaryKeywords: ["Fintech Development", "Healthcare Software", "Enterprise Solutions"],
});

export default function IndustriesHubPage() {
  const graph = pageGraph({
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ],
    page: { title: "Industries", description: PAGE_DESCRIPTION, path: "/industries" },
  });
  graph["@graph"].push(
    collectionPageSchema({ title: "Industries", description: PAGE_DESCRIPTION, path: "/industries" })
  );

  return (
    <>
      <IndustriesPageContent jsonLdGraph={graph} />
      <Footer />
    </>
  );
}

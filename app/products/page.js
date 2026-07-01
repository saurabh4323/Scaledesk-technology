import Footer from "../components/Footer";
import ProductsPageContent from "../components/products/ProductsPageContent";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";

const PAGE_DESCRIPTION =
  "ScaleDesk Technology products — LeadForGrow™ AI CRM, ScaleDesk HRM™ HRMS, AI Analytics, and Revenue Protection platforms engineered for enterprise growth.";

export const metadata = buildPageMetadata({
  title: "Products — LeadForGrow™ & ScaleDesk HRM™",
  seoTitle: "LeadForGrow™ & ScaleDesk HRM™ Products | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/products",
  primaryKeyword: "LeadForGrow CRM",
  secondaryKeywords: ["ScaleDesk HRM", "AI CRM Platform", "HRMS Software"],
});

export default function ProductsHubPage() {
  const graph = pageGraph({
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
    ],
    page: { title: "Products", description: PAGE_DESCRIPTION, path: "/products" },
  });
  graph["@graph"].push(
    collectionPageSchema({ title: "Products", description: PAGE_DESCRIPTION, path: "/products" })
  );

  return (
    <>
      <ProductsPageContent jsonLdGraph={graph} />
      <Footer />
    </>
  );
}

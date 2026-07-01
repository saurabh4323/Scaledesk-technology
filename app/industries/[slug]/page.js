import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import CatalogDetail from "../../components/catalog/CatalogDetail";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getIndustry, getIndustrySlugs, INDUSTRIES } from "../../../lib/seo/industries";
import { getIndustryCatalogItem, getRelatedIndustries } from "../../../lib/seo/catalog-helpers";

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry | ScaleDesk Technology" };
  return buildPageMetadata(industry);
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const display = getIndustryCatalogItem(slug);
  const related = getRelatedIndustries(
    industry.relatedSlugs?.filter((s) => INDUSTRIES.some((x) => x.slug === s)) || []
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.title, path: industry.path },
  ];

  return (
    <>
      <CatalogDetail page={industry} breadcrumbs={breadcrumbs} display={display} relatedItems={related} />
      <Footer />
    </>
  );
}

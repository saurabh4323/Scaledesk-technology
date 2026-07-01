import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import CatalogDetail from "../../components/catalog/CatalogDetail";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getSolution, getSolutionSlugs, SOLUTIONS } from "../../../lib/seo/solutions";
import { getSolutionCatalogItem, getRelatedSolutions } from "../../../lib/seo/catalog-helpers";

export function generateStaticParams() {
  return getSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Solution | ScaleDesk Technology" };
  return buildPageMetadata(solution);
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const display = getSolutionCatalogItem(slug);
  const related = getRelatedSolutions(
    solution.relatedSlugs?.filter((s) => SOLUTIONS.some((x) => x.slug === s)) || []
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: solution.title.split("—")[0].trim(), path: solution.path },
  ];

  return (
    <>
      <CatalogDetail page={solution} breadcrumbs={breadcrumbs} display={display} relatedItems={related} />
      <Footer />
    </>
  );
}

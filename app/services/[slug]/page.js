import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import SeoContentPage from "../../components/seo/SeoContentPage";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getService, getServiceSlugs } from "../../../lib/seo/services";

const CUSTOM_PAGES = new Set([
  "software-engineering",
  "ai-automation",
  "data-pipelines",
  "cloud-infrastructure",
]);

export function generateStaticParams() {
  return getServiceSlugs()
    .filter((slug) => !CUSTOM_PAGES.has(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service | ScaleDesk Technology" };
  return buildPageMetadata(service);
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || CUSTOM_PAGES.has(slug)) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: service.path },
  ];

  return (
    <>
      <SeoContentPage page={service} breadcrumbs={breadcrumbs} />
      <Footer />
    </>
  );
}

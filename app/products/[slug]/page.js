import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import CatalogDetail from "../../components/catalog/CatalogDetail";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getProduct, getProductSlugs, PRODUCTS } from "../../../lib/seo/products";
import { getProductCatalogItem, getRelatedProducts } from "../../../lib/seo/catalog-helpers";

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product | ScaleDesk Technology" };
  return buildPageMetadata(product);
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const display = getProductCatalogItem(slug);
  const related = getRelatedProducts(
    product.relatedSlugs?.filter((s) => PRODUCTS.some((p) => p.slug === s)) || []
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.title.split("—")[0].trim(), path: product.path },
  ];

  return (
    <>
      <CatalogDetail page={product} breadcrumbs={breadcrumbs} display={display} relatedItems={related} />
      <Footer />
    </>
  );
}

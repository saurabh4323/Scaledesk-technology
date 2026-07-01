import {
  PRODUCT_DISPLAY,
  SOLUTION_DISPLAY,
  INDUSTRY_DISPLAY,
  enrichCatalogItem,
  getCatalogImage,
} from "../../app/data/catalog-display";
import { getProduct, PRODUCTS } from "./products";
import { getSolution, SOLUTIONS } from "./solutions";
import { getIndustry, INDUSTRIES } from "./industries";

export function getProductCatalogItem(slug) {
  const display = PRODUCT_DISPLAY.find((d) => d.slug === slug) || { slug };
  const seo = getProduct(slug);
  const item = enrichCatalogItem(display, seo, "/products");
  return {
    ...item,
    name: seo?.title?.split("—")[0]?.trim() || item.name,
    image: getCatalogImage(slug),
  };
}

export function getSolutionCatalogItem(slug) {
  const display = SOLUTION_DISPLAY.find((d) => d.slug === slug) || { slug };
  const seo = getSolution(slug);
  return enrichCatalogItem(display, seo, "/solutions");
}

export function getIndustryCatalogItem(slug) {
  const display = INDUSTRY_DISPLAY.find((d) => d.slug === slug) || { slug };
  const seo = getIndustry(slug);
  return enrichCatalogItem(display, seo, "/industries");
}

export function getRelatedProducts(slugs = []) {
  return slugs
    .map((slug) => {
      const p = PRODUCTS.find((x) => x.slug === slug);
      if (!p) return null;
      return getProductCatalogItem(slug);
    })
    .filter(Boolean);
}

export function getRelatedSolutions(slugs = []) {
  return slugs
    .map((slug) => {
      if (!SOLUTIONS.find((x) => x.slug === slug)) return null;
      return getSolutionCatalogItem(slug);
    })
    .filter(Boolean);
}

export function getRelatedIndustries(slugs = []) {
  return slugs
    .map((slug) => {
      if (!INDUSTRIES.find((x) => x.slug === slug)) return null;
      return getIndustryCatalogItem(slug);
    })
    .filter(Boolean);
}

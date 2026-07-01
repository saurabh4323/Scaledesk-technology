"use client";

import CatalogHub from "../catalog/CatalogHub";
import {
  PRODUCT_DISPLAY,
  CATALOG_IMAGES,
  enrichCatalogItem,
} from "../../data/catalog-display";
import { PRODUCTS } from "../../../lib/seo/products";

const items = PRODUCT_DISPLAY.map((d) =>
  enrichCatalogItem(
    d,
    PRODUCTS.find((p) => p.slug === d.slug),
    "/products"
  )
);

export default function ProductsPageContent({ jsonLdGraph }) {
  const featured = items.find((i) => i.featured);

  return (
    <CatalogHub
      label="Products"
      title="Platforms engineered to scale your business"
      subtitle="AI CRM, HRMS, analytics, and revenue protection — built by ScaleDesk Technology with enterprise-grade Product Engineering."
      heroImage={CATALOG_IMAGES["hub-products"]}
      heroImageAlt="ScaleDesk Technology products"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ]}
      stats={[
        { value: "4", label: "Product platforms" },
        { value: "AI-first", label: "Intelligence built-in" },
        { value: "Enterprise", label: "Scale-ready architecture" },
        { value: "48hrs", label: "Typical setup time" },
      ]}
      items={items}
      featuredItem={featured}
      gridTitle="Built by ScaleDesk Technology"
      gridSubtitle="Each product is engineered for reliability, integration, and growth-stage velocity."
      ctaTitle="Ready to deploy a ScaleDesk platform?"
      ctaSubtitle="Talk to our engineering team about LeadForGrow™, ScaleDesk HRM™, or a custom product built for your workflow."
      ctaPrimary={{ label: "Request a Demo →", href: "/contact" }}
      ctaSecondary={{ label: "Explore LeadForGrow™", href: "/products/leadforgrow-crm" }}
      jsonLdGraph={jsonLdGraph}
    />
  );
}

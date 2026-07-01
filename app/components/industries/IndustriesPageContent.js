"use client";

import CatalogHub from "../catalog/CatalogHub";
import {
  INDUSTRY_DISPLAY,
  CATALOG_IMAGES,
  enrichCatalogItem,
} from "../../data/catalog-display";
import { INDUSTRIES } from "../../../lib/seo/industries";

const items = INDUSTRY_DISPLAY.map((d) =>
  enrichCatalogItem(
    d,
    INDUSTRIES.find((p) => p.slug === d.slug),
    "/industries"
  )
);

export default function IndustriesPageContent({ jsonLdGraph }) {
  const featured = items.find((i) => i.featured);

  return (
    <CatalogHub
      label="Industries"
      title="Industry software development"
      subtitle="Product Engineering and AI Solutions tailored to fintech, healthcare, SaaS, e-commerce, enterprise, and more — with compliance and scale built in."
      heroImage={CATALOG_IMAGES["hub-industries"]}
      heroImageAlt="ScaleDesk Technology industries"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
      ]}
      stats={[
        { value: "10", label: "Industries served" },
        { value: "Compliance", label: "Aware architecture" },
        { value: "Global", label: "Delivery footprint" },
        { value: "Custom", label: "Domain engineering" },
      ]}
      items={items}
      featuredItem={featured}
      gridTitle="Industries we serve"
      gridSubtitle="Deep domain expertise across regulated and high-growth verticals."
      ctaTitle="Building for your industry?"
      ctaSubtitle="Discuss compliance, architecture, and delivery with engineers who understand your sector."
      ctaPrimary={{ label: "Start a Conversation →", href: "/contact" }}
      ctaSecondary={{ label: "View Case Studies", href: "/case-studies" }}
      jsonLdGraph={jsonLdGraph}
    />
  );
}

"use client";

import CatalogHub from "../catalog/CatalogHub";
import {
  SOLUTION_DISPLAY,
  CATALOG_IMAGES,
  enrichCatalogItem,
} from "../../data/catalog-display";
import { SOLUTIONS } from "../../../lib/seo/solutions";

const items = SOLUTION_DISPLAY.map((d) =>
  enrichCatalogItem(
    d,
    SOLUTIONS.find((p) => p.slug === d.slug),
    "/solutions"
  )
);

export default function SolutionsPageContent({ jsonLdGraph }) {
  const featured = items.find((i) => i.featured);

  return (
    <CatalogHub
      label="Solutions"
      title="Enterprise AI & software solutions"
      subtitle="End-to-end solutions from LeadForGrow™ AI CRM and ScaleDesk HRM™ to cloud migration, AI agents, and digital transformation."
      heroImage={CATALOG_IMAGES["hub-solutions"]}
      heroImageAlt="ScaleDesk Technology solutions"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
      ]}
      stats={[
        { value: "10+", label: "Solution areas" },
        { value: "AI-native", label: "Intelligence layer" },
        { value: "Integrated", label: "Cross-platform" },
        { value: "Enterprise", label: "Ready to deploy" },
      ]}
      items={items}
      featuredItem={featured}
      gridTitle="All enterprise solutions"
      gridSubtitle="Purpose-built platforms and engineering solutions for growth teams and global enterprises."
      ctaTitle="Need a tailored solution?"
      ctaSubtitle="Our engineering team designs AI CRM, HRMS, automation, and cloud solutions aligned to your operations."
      ctaPrimary={{ label: "Talk to Engineers →", href: "/contact" }}
      ctaSecondary={{ label: "View Products", href: "/products" }}
      jsonLdGraph={jsonLdGraph}
    />
  );
}

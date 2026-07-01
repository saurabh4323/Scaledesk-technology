import { absoluteUrl } from "./config";
import { getServiceSlugs } from "./services";
import { getIndustrySlugs } from "./industries";
import { getSolutionSlugs } from "./solutions";
import { getProductSlugs } from "./products";
import { getGlossarySlugs } from "./glossary";
import { getInsightSlugs } from "../../app/data/insights";
import { getCaseStudySlugs } from "../../app/data/caseStudies";
import { getPillarSlugs } from "./blog-pillars";

const STATIC_PAGES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/founder", priority: 0.85, changeFrequency: "monthly" },
  { path: "/about/cto", priority: 0.85, changeFrequency: "monthly" },
  { path: "/team/saurabh-singh", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/industries", priority: 0.9, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.85, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.85, changeFrequency: "daily" },
  { path: "/resources", priority: 0.75, changeFrequency: "weekly" },
  { path: "/glossary", priority: 0.7, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/careers/opportunities", priority: 0.65, changeFrequency: "daily" },
  { path: "/legal/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/security", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/linkedin", priority: 0.3, changeFrequency: "yearly" },
];

export function getAllSitemapEntries() {
  const now = new Date();
  const entries = [...STATIC_PAGES];

  getServiceSlugs().forEach((slug) => {
    entries.push({ path: `/services/${slug}`, priority: 0.88, changeFrequency: "weekly" });
  });

  getIndustrySlugs().forEach((slug) => {
    entries.push({ path: `/industries/${slug}`, priority: 0.82, changeFrequency: "monthly" });
  });

  getSolutionSlugs().forEach((slug) => {
    entries.push({ path: `/solutions/${slug}`, priority: 0.84, changeFrequency: "monthly" });
  });

  getProductSlugs().forEach((slug) => {
    entries.push({ path: `/products/${slug}`, priority: 0.86, changeFrequency: "weekly" });
  });

  getGlossarySlugs().forEach((slug) => {
    entries.push({ path: `/glossary/${slug}`, priority: 0.6, changeFrequency: "monthly" });
  });

  getInsightSlugs().forEach((slug) => {
    entries.push({ path: `/insights/${slug}`, priority: 0.75, changeFrequency: "monthly" });
  });

  getPillarSlugs().forEach((slug) => {
    entries.push({ path: `/insights/pillars/${slug}`, priority: 0.8, changeFrequency: "monthly" });
  });

  getCaseStudySlugs().forEach((slug) => {
    entries.push({ path: `/case-studies/${slug}`, priority: 0.78, changeFrequency: "monthly" });
  });

  return entries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

export function getSitemapGroups() {
  const entries = getAllSitemapEntries();
  return {
    main: entries,
    services: entries.filter((e) => e.url.includes("/services/")),
    products: entries.filter((e) => e.url.includes("/products/")),
    insights: entries.filter((e) => e.url.includes("/insights")),
    industries: entries.filter((e) => e.url.includes("/industries/")),
    solutions: entries.filter((e) => e.url.includes("/solutions/")),
  };
}

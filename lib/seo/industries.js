import { createSeoPage, DEFAULT_INTERNAL_LINKS } from "./page-builder";

function industryPage(def) {
  return createSeoPage({
    category: "industry",
    searchIntent: "commercial",
    internalLinks: DEFAULT_INTERNAL_LINKS,
    cta: { label: "Discuss Your Industry Requirements", href: "/contact" },
    ...def,
  });
}

export const INDUSTRIES = [
  industryPage({
    slug: "fintech",
    title: "Fintech Software Development",
    seoTitle: "Fintech Software Development Company | ScaleDesk Technology",
    metaDescription:
      "Fintech software development — secure payment platforms, banking APIs, compliance-ready systems, and AI fraud detection for financial services.",
    primaryKeyword: "Fintech Software Development",
    secondaryKeywords: ["Financial Software Development", "Fintech Engineering", "Banking Software"],
    h1: "Fintech Software Development",
    intro:
      "ScaleDesk Technology engineers fintech platforms with security-first architecture, regulatory awareness, real-time transaction processing, and AI-powered fraud detection — built for financial services innovation.",
    h2s: ["Payment & Banking Platforms", "Compliance & Security", "AI Fraud Detection"],
    relatedSlugs: ["healthcare", "saas", "enterprise"],
  }),
  industryPage({
    slug: "healthcare",
    title: "Healthcare Software Development",
    seoTitle: "Healthcare Software Development | ScaleDesk Technology",
    metaDescription:
      "Healthcare software development — HIPAA-aware platforms, patient portals, telehealth systems, and healthcare automation for providers and healthtech startups.",
    primaryKeyword: "Healthcare Software Development",
    secondaryKeywords: ["Healthtech Development", "Medical Software", "Healthcare IT"],
    h1: "Healthcare Software Development",
    intro:
      "ScaleDesk Technology builds healthcare software with privacy-by-design, secure data handling, interoperability standards, and workflow automation for providers, payers, and healthtech innovators.",
    h2s: ["Healthtech Platforms", "Patient & Provider Portals", "Healthcare Automation"],
    relatedSlugs: ["fintech", "enterprise", "saas"],
  }),
  industryPage({
    slug: "saas",
    title: "SaaS Industry Solutions",
    seoTitle: "SaaS Product Engineering | ScaleDesk Technology",
    metaDescription:
      "SaaS product engineering for B2B and B2C SaaS companies — multi-tenant architecture, billing, analytics, and scale-ready engineering.",
    primaryKeyword: "SaaS Product Engineering",
    secondaryKeywords: ["SaaS Development", "B2B SaaS Engineering", "SaaS Platform Development"],
    h1: "SaaS Product Engineering",
    intro:
      "ScaleDesk Technology partners with SaaS companies from MVP through enterprise scale — multi-tenant architecture, subscription billing, usage analytics, and engineering teams that understand recurring revenue dynamics.",
    h2s: ["SaaS Architecture", "Growth-Stage Engineering", "Enterprise SaaS Scale"],
    relatedSlugs: ["startup", "enterprise", "ecommerce"],
  }),
  industryPage({
    slug: "ecommerce",
    title: "E-Commerce Software Development",
    seoTitle: "E-Commerce Development Company | ScaleDesk Technology",
    metaDescription:
      "E-commerce software development — custom storefronts, marketplace platforms, inventory systems, and AI-powered personalization for retail and D2C brands.",
    primaryKeyword: "E-Commerce Software Development",
    secondaryKeywords: ["Ecommerce Development", "Online Retail Platform", "Marketplace Development"],
    h1: "E-Commerce Software Development",
    intro:
      "ScaleDesk Technology builds e-commerce platforms with high-performance storefronts, inventory management, payment integration, and AI-driven personalization for retail, D2C, and marketplace businesses.",
    h2s: ["Custom Storefronts", "Marketplace Platforms", "Retail Automation"],
    relatedSlugs: ["saas", "startup", "enterprise"],
  }),
  industryPage({
    slug: "enterprise",
    title: "Enterprise Software Solutions",
    seoTitle: "Enterprise Industry Solutions | ScaleDesk Technology",
    metaDescription:
      "Enterprise software solutions for large organizations — ERP integration, workflow automation, system modernization, and AI-powered operations.",
    primaryKeyword: "Enterprise Software Solutions",
    secondaryKeywords: ["Enterprise IT Solutions", "Enterprise Digital Transformation", "Large Enterprise Software"],
    h1: "Enterprise Software Solutions",
    intro:
      "ScaleDesk Technology delivers enterprise software solutions for complex organizations — system modernization, workflow automation, integration hubs, and AI-powered operational intelligence at enterprise scale.",
    h2s: ["Enterprise Platform Engineering", "Legacy Modernization", "Enterprise Automation"],
    relatedSlugs: ["fintech", "healthcare", "manufacturing"],
  }),
  industryPage({
    slug: "startup",
    title: "Startup Product Engineering",
    seoTitle: "Startup Software Development Company | ScaleDesk Technology",
    metaDescription:
      "Startup software development — MVP development, rapid prototyping, and product engineering partners for funded startups and founders.",
    primaryKeyword: "Startup Software Development",
    secondaryKeywords: ["Startup Product Engineering", "MVP for Startups", "Startup Engineering Partner"],
    h1: "Startup Product Engineering",
    intro:
      "ScaleDesk Technology is a startup engineering partner — MVP development, rapid iteration, and architecture that scales when product-market fit arrives. We help founders ship fast without creating technical debt traps.",
    h2s: ["MVP Development for Startups", "Founder-Friendly Engineering", "Scale When Ready"],
    relatedSlugs: ["saas", "fintech", "ecommerce"],
  }),
  industryPage({
    slug: "manufacturing",
    title: "Manufacturing Software Solutions",
    seoTitle: "Manufacturing Software Development | ScaleDesk Technology",
    metaDescription:
      "Manufacturing software development — IoT integration, supply chain systems, ERP connectors, and operational automation for manufacturers.",
    primaryKeyword: "Manufacturing Software Development",
    secondaryKeywords: ["Industrial Software", "Supply Chain Software", "Manufacturing Automation"],
    h1: "Manufacturing Software Solutions",
    intro:
      "ScaleDesk Technology builds manufacturing software — supply chain visibility, IoT data pipelines, ERP integration, and shop-floor automation for modern industrial operations.",
    h2s: ["Supply Chain Systems", "IoT & Operational Data", "Manufacturing Automation"],
    relatedSlugs: ["enterprise", "logistics", "energy"],
  }),
  industryPage({
    slug: "logistics",
    title: "Logistics Software Development",
    seoTitle: "Logistics Software Development | ScaleDesk Technology",
    metaDescription:
      "Logistics software development — fleet management, route optimization, warehouse systems, and real-time tracking platforms.",
    primaryKeyword: "Logistics Software Development",
    secondaryKeywords: ["Supply Chain Software", "Fleet Management Software", "Warehouse Management"],
    h1: "Logistics Software Development",
    intro:
      "ScaleDesk Technology engineers logistics platforms with real-time tracking, route optimization, warehouse management, and integration layers for carriers, shippers, and 3PL operators.",
    h2s: ["Fleet & Route Optimization", "Warehouse Management", "Real-Time Tracking"],
    relatedSlugs: ["manufacturing", "ecommerce", "enterprise"],
  }),
  industryPage({
    slug: "education",
    title: "EdTech Software Development",
    seoTitle: "EdTech Software Development | ScaleDesk Technology",
    metaDescription:
      "EdTech software development — learning management systems, online education platforms, and AI-powered tutoring for education companies.",
    primaryKeyword: "EdTech Software Development",
    secondaryKeywords: ["Education Software", "LMS Development", "Online Learning Platform"],
    h1: "EdTech Software Development",
    intro:
      "ScaleDesk Technology builds EdTech platforms — LMS systems, interactive learning experiences, assessment engines, and AI tutoring integrations for education innovators.",
    h2s: ["Learning Management Systems", "Interactive Learning Platforms", "AI in Education"],
    relatedSlugs: ["saas", "startup", "enterprise"],
  }),
  industryPage({
    slug: "energy",
    title: "Energy & Utilities Software",
    seoTitle: "Energy Software Development | ScaleDesk Technology",
    metaDescription:
      "Energy software development — smart grid systems, asset monitoring, predictive maintenance, and operational dashboards for energy and utilities.",
    primaryKeyword: "Energy Software Development",
    secondaryKeywords: ["Utilities Software", "Smart Grid Software", "Energy Management Systems"],
    h1: "Energy & Utilities Software",
    intro:
      "ScaleDesk Technology develops energy and utilities software — asset monitoring, predictive maintenance, smart grid data pipelines, and operational dashboards for energy sector digital transformation.",
    h2s: ["Asset Monitoring", "Predictive Maintenance", "Energy Data Platforms"],
    relatedSlugs: ["manufacturing", "enterprise", "logistics"],
  }),
];

export function getIndustry(slug) {
  return INDUSTRIES.find((i) => i.slug === slug) ?? null;
}

export function getIndustrySlugs() {
  return INDUSTRIES.map((i) => i.slug);
}

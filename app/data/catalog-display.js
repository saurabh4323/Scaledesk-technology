/** Visual catalog data — images, tags, metrics for hub & detail pages */

export const BLUE = "#2F80FF";

export const CATALOG_IMAGES = {
  // Products
  "leadforgrow-crm":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  "scaledesk-hrm":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
  "ai-analytics":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  "revenue-protection":
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
  // Solutions
  "ai-crm":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
  "hrms-platform":
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
  "business-automation":
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop",
  "ai-agents":
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
  "data-analytics":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  "enterprise-portal":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  "cloud-migration":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  "digital-transformation":
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  "mvp-accelerator":
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
  // Industries
  fintech:
    "https://images.unsplash.com/photo-1563986768494-4bbd97990433?q=80&w=1600&auto=format&fit=crop",
  healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
  saas: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  ecommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
  enterprise:
    "https://images.unsplash.com/photo-1497366811353-687074457661?q=80&w=1600&auto=format&fit=crop",
  startup:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  manufacturing:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
  logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
  education:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
  energy:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
  // Hub heroes
  "hub-products":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
  "hub-solutions":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  "hub-industries":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
};

export const PRODUCT_DISPLAY = [
  {
    slug: "leadforgrow-crm",
    tagline: "AI CRM & Business Automation",
    tags: ["AI CRM", "Lead Scoring", "Revenue Intelligence"],
    metric: "<200ms",
    metricLabel: "Lead scoring latency",
    featured: true,
  },
  {
    slug: "scaledesk-hrm",
    tagline: "Human Resource Management",
    tags: ["HRMS", "Payroll", "Attendance"],
    metric: "360°",
    metricLabel: "Employee lifecycle",
    featured: false,
  },
  {
    slug: "ai-analytics",
    tagline: "Predictive Business Intelligence",
    tags: ["Predictive AI", "Dashboards", "BI"],
    metric: "Real-time",
    metricLabel: "Operational insights",
    featured: false,
  },
  {
    slug: "revenue-protection",
    tagline: "Fraud & Churn Prevention",
    tags: ["Fraud Detection", "Churn Prevention", "Security"],
    metric: "45 days",
    metricLabel: "Churn prediction window",
    featured: false,
  },
];

export const SOLUTION_DISPLAY = [
  { slug: "ai-crm", tagline: "AI-Powered CRM", tags: ["LeadForGrow", "Revenue AI"], metric: "98.7%", metricLabel: "Detection accuracy", featured: true },
  { slug: "hrms-platform", tagline: "Workforce Platform", tags: ["HRM", "Payroll", "HR"], metric: "1 platform", metricLabel: "Full HR stack" },
  { slug: "business-automation", tagline: "Workflow Automation", tags: ["CRM", "Ops", "Integrations"], metric: "10x", metricLabel: "Process efficiency" },
  { slug: "ai-agents", tagline: "Intelligent Agents", tags: ["LLM", "Automation", "RAG"], metric: "24/7", metricLabel: "Agent availability" },
  { slug: "data-analytics", tagline: "Business Intelligence", tags: ["ML", "Dashboards", "Insights"], metric: "Real-time", metricLabel: "Data processing" },
  { slug: "revenue-protection", tagline: "Revenue Security", tags: ["Fraud", "Churn", "Analytics"], metric: "$2.4B+", metricLabel: "Revenue protected" },
  { slug: "enterprise-portal", tagline: "Digital Experience", tags: ["Portal", "SSO", "RBAC"], metric: "Unified", metricLabel: "User experience" },
  { slug: "cloud-migration", tagline: "Cloud Transformation", tags: ["AWS", "GCP", "Azure"], metric: "Zero", metricLabel: "Downtime target" },
  { slug: "digital-transformation", tagline: "Enterprise Modernization", tags: ["Legacy", "Cloud", "AI"], metric: "End-to-end", metricLabel: "Transformation" },
  { slug: "mvp-accelerator", tagline: "Startup Velocity", tags: ["MVP", "Validation", "Scale"], metric: "Weeks", metricLabel: "Time to launch" },
];

export const INDUSTRY_DISPLAY = [
  { slug: "fintech", tagline: "Financial Services", tags: ["Payments", "Compliance", "Banking"], metric: "Secure", metricLabel: "By design", featured: true },
  { slug: "healthcare", tagline: "Health Technology", tags: ["HIPAA", "Telehealth", "EHR"], metric: "Privacy", metricLabel: "First approach" },
  { slug: "saas", tagline: "B2B & B2C SaaS", tags: ["Multi-tenant", "Billing", "Scale"], metric: "100x", metricLabel: "Scale potential" },
  { slug: "ecommerce", tagline: "Retail & D2C", tags: ["Storefront", "Inventory", "Payments"], metric: "High-perf", metricLabel: "Commerce stack" },
  { slug: "enterprise", tagline: "Large Organizations", tags: ["ERP", "Legacy", "Integration"], metric: "Global", metricLabel: "Delivery model" },
  { slug: "startup", tagline: "Growth Stage", tags: ["MVP", "PMF", "Velocity"], metric: "Fast", metricLabel: "Ship cycles" },
  { slug: "manufacturing", tagline: "Industrial Ops", tags: ["IoT", "Supply Chain", "ERP"], metric: "Connected", metricLabel: "Operations" },
  { slug: "logistics", tagline: "Supply Chain", tags: ["Fleet", "Warehouse", "Tracking"], metric: "Real-time", metricLabel: "Visibility" },
  { slug: "education", tagline: "EdTech", tags: ["LMS", "Learning", "Assessment"], metric: "Engaged", metricLabel: "Learner UX" },
  { slug: "energy", tagline: "Utilities & Energy", tags: ["Smart Grid", "IoT", "Monitoring"], metric: "Predictive", metricLabel: "Maintenance" },
];

export function getCatalogImage(slug, fallback = CATALOG_IMAGES["hub-products"]) {
  return CATALOG_IMAGES[slug] || fallback;
}

export function enrichCatalogItem(item, seoItem, basePath) {
  return {
    slug: item.slug,
    href: `${basePath}/${item.slug}`,
    name: seoItem?.title || item.slug,
    description: seoItem?.metaDescription || seoItem?.intro || "",
    tagline: item.tagline,
    tags: item.tags || [],
    metric: item.metric,
    metricLabel: item.metricLabel,
    featured: item.featured || false,
    image: getCatalogImage(item.slug),
    imageAlt: seoItem?.h1 || seoItem?.title || item.slug,
    page: seoItem,
  };
}

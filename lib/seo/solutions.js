import { createSeoPage, DEFAULT_INTERNAL_LINKS } from "./page-builder";

function solutionPage(def) {
  return createSeoPage({
    category: "solution",
    searchIntent: "commercial",
    internalLinks: DEFAULT_INTERNAL_LINKS,
    cta: { label: "Explore This Solution", href: "/contact" },
    ...def,
  });
}

export const SOLUTIONS = [
  solutionPage({
    slug: "ai-crm",
    title: "AI CRM Solution — LeadForGrow™",
    seoTitle: "AI CRM Solution | LeadForGrow™ by ScaleDesk Technology",
    metaDescription:
      "AI CRM solution with lead scoring, revenue intelligence, fraud protection, and business automation. LeadForGrow™ — AI CRM by ScaleDesk Technology.",
    primaryKeyword: "LeadForGrow AI CRM",
    secondaryKeywords: ["AI CRM Solution", "LeadForGrow CRM", "AI-Powered CRM"],
    h1: "AI CRM Solution — LeadForGrow™",
    intro:
      "LeadForGrow™ is ScaleDesk Technology's AI CRM solution — combining revenue intelligence, automated lead scoring, fraud protection, and CRM integration in one platform engineered for growth teams.",
    h2s: ["Revenue Intelligence", "Automated Lead Scoring", "Enterprise CRM Integration"],
    relatedSlugs: ["hrms-platform", "business-automation", "ai-agents"],
  }),
  solutionPage({
    slug: "hrms-platform",
    title: "HRMS Platform — ScaleDesk HRM™",
    seoTitle: "HRMS Platform | ScaleDesk HRM™ by ScaleDesk Technology",
    metaDescription:
      "HRMS platform for attendance, payroll, employee lifecycle, and HR automation. ScaleDesk HRM™ — human resource management by ScaleDesk Technology.",
    primaryKeyword: "ScaleDesk HRM",
    secondaryKeywords: ["HRMS Platform", "HR Management System", "HRM Software"],
    h1: "HRMS Platform — ScaleDesk HRM™",
    intro:
      "ScaleDesk HRM™ is a modern HRMS platform by ScaleDesk Technology — attendance tracking, payroll management, employee lifecycle, and HR automation designed for growing organizations.",
    h2s: ["Employee Lifecycle Management", "Payroll & Attendance", "HR Automation"],
    relatedSlugs: ["ai-crm", "business-automation", "enterprise-portal"],
  }),
  solutionPage({
    slug: "business-automation",
    title: "Business Automation Platform",
    seoTitle: "Business Automation Platform | ScaleDesk Technology",
    metaDescription:
      "Unified business automation platform connecting CRM, HRMS, finance, and operations. Automate workflows with AI-powered orchestration.",
    primaryKeyword: "Business Automation Platform",
    secondaryKeywords: ["Workflow Automation Platform", "Operations Automation", "Enterprise Automation"],
    h1: "Business Automation Platform",
    intro:
      "ScaleDesk Technology's business automation platform connects CRM, HRMS, finance, and operational systems — orchestrating workflows with AI agents, integrations, and measurable automation ROI.",
    h2s: ["Cross-System Automation", "AI Workflow Orchestration", "Integration Hub"],
    relatedSlugs: ["ai-crm", "hrms-platform", "ai-agents"],
  }),
  solutionPage({
    slug: "ai-agents",
    title: "Enterprise AI Agents Platform",
    seoTitle: "Enterprise AI Agents Platform | ScaleDesk Technology",
    metaDescription:
      "Enterprise AI agents platform for document processing, workflow routing, knowledge retrieval, and intelligent automation with production guardrails.",
    primaryKeyword: "Enterprise AI Agents",
    secondaryKeywords: ["AI Agents Platform", "Intelligent Automation Platform", "AI Workflow Agents"],
    h1: "Enterprise AI Agents Platform",
    intro:
      "ScaleDesk Technology builds enterprise AI agents platforms — document processing, workflow routing, internal knowledge retrieval, and assistive automation with evaluation harnesses and human-in-the-loop design.",
    h2s: ["Production AI Agents", "Knowledge Retrieval", "Workflow Routing"],
    relatedSlugs: ["business-automation", "ai-crm", "data-analytics"],
  }),
  solutionPage({
    slug: "data-analytics",
    title: "AI Analytics Platform",
    seoTitle: "AI Analytics Platform | ScaleDesk Technology",
    metaDescription:
      "AI analytics platform with predictive models, real-time dashboards, and revenue intelligence for data-driven decision making.",
    primaryKeyword: "AI Analytics Platform",
    secondaryKeywords: ["Predictive Analytics", "Business Intelligence Platform", "Revenue Analytics"],
    h1: "AI Analytics Platform",
    intro:
      "ScaleDesk Technology delivers AI analytics platforms — predictive models, real-time dashboards, anomaly detection, and revenue intelligence integrated into your operational workflows.",
    h2s: ["Predictive Analytics", "Real-Time Dashboards", "Revenue Intelligence"],
    relatedSlugs: ["ai-crm", "data-pipelines", "revenue-protection"],
  }),
  solutionPage({
    slug: "revenue-protection",
    title: "Revenue Protection Platform",
    seoTitle: "Revenue Protection Platform | ScaleDesk Technology",
    metaDescription:
      "Revenue protection platform detecting fraud, churn risk, and revenue leakage with AI-powered analytics and automated intervention.",
    primaryKeyword: "Revenue Protection Platform",
    secondaryKeywords: ["Fraud Detection Platform", "Churn Prevention", "Revenue Intelligence"],
    h1: "Revenue Protection Platform",
    intro:
      "ScaleDesk Technology's revenue protection platform combines fraud detection, churn prediction, and revenue leakage analytics — protecting enterprise revenue with sub-second AI decisioning.",
    h2s: ["Fraud Detection", "Churn Prediction", "Revenue Leakage Analytics"],
    relatedSlugs: ["ai-crm", "data-analytics", "leadforgrow-crm"],
  }),
  solutionPage({
    slug: "enterprise-portal",
    title: "Enterprise Portal Development",
    seoTitle: "Enterprise Portal Development | ScaleDesk Technology",
    metaDescription:
      "Enterprise portal development — customer portals, partner portals, employee intranets, and unified digital experience platforms.",
    primaryKeyword: "Enterprise Portal Development",
    secondaryKeywords: ["Customer Portal", "Partner Portal", "Employee Intranet"],
    h1: "Enterprise Portal Development",
    intro:
      "ScaleDesk Technology builds enterprise portals — customer self-service, partner ecosystems, employee intranets, and unified digital experience platforms with SSO, RBAC, and integration layers.",
    h2s: ["Customer & Partner Portals", "Employee Intranets", "Unified Digital Experience"],
    relatedSlugs: ["enterprise-software", "web-applications", "digital-transformation"],
  }),
  solutionPage({
    slug: "cloud-migration",
    title: "Cloud Migration Solutions",
    seoTitle: "Cloud Migration Solutions | ScaleDesk Technology",
    metaDescription:
      "Cloud migration solutions — lift-and-shift, re-platforming, and cloud-native transformation with zero-downtime cutover strategies.",
    primaryKeyword: "Cloud Migration Solutions",
    secondaryKeywords: ["Cloud Migration Services", "AWS Migration", "Azure Migration", "GCP Migration"],
    h1: "Cloud Migration Solutions",
    intro:
      "ScaleDesk Technology delivers cloud migration solutions — assessment, re-platforming, Strangler Fig migrations, and zero-downtime cutovers to AWS, GCP, and Azure.",
    h2s: ["Migration Assessment", "Re-Platforming Strategy", "Zero-Downtime Cutover"],
    relatedSlugs: ["system-modernization", "cloud-native", "devops"],
  }),
  solutionPage({
    slug: "digital-transformation",
    title: "Digital Transformation Solutions",
    seoTitle: "Digital Transformation Solutions | ScaleDesk Technology",
    metaDescription:
      "Digital transformation solutions combining system modernization, AI automation, cloud migration, and process digitization for enterprises.",
    primaryKeyword: "Digital Transformation Solutions",
    secondaryKeywords: ["Enterprise Digital Transformation", "Business Digitization", "Modernization Solutions"],
    h1: "Digital Transformation Solutions",
    intro:
      "ScaleDesk Technology's digital transformation solutions integrate system modernization, workflow automation, cloud migration, and AI adoption into cohesive roadmaps with measurable business outcomes.",
    h2s: ["Transformation Roadmap", "Process Digitization", "AI & Cloud Adoption"],
    relatedSlugs: ["cloud-migration", "business-automation", "enterprise-portal"],
  }),
  solutionPage({
    slug: "mvp-accelerator",
    title: "MVP Accelerator Program",
    seoTitle: "MVP Accelerator | ScaleDesk Technology",
    metaDescription:
      "MVP accelerator program for startups — rapid MVP development, product validation, and scalable architecture in weeks, not months.",
    primaryKeyword: "MVP Accelerator",
    secondaryKeywords: ["Startup MVP Program", "Rapid MVP Development", "Product Validation"],
    h1: "MVP Accelerator Program",
    intro:
      "ScaleDesk Technology's MVP Accelerator helps founders ship validated products in weeks — combining rapid development, user feedback loops, and architecture designed for post-PMF scale.",
    h2s: ["Rapid MVP Delivery", "Validation Framework", "Scale-Ready Architecture"],
    relatedSlugs: ["mvp-development", "startup", "saas-development"],
  }),
];

export function getSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug) ?? null;
}

export function getSolutionSlugs() {
  return SOLUTIONS.map((s) => s.slug);
}

import { createSeoPage, DEFAULT_INTERNAL_LINKS } from "./page-builder";

function productPage(def) {
  return createSeoPage({
    category: "product",
    searchIntent: "commercial",
    internalLinks: DEFAULT_INTERNAL_LINKS,
    cta: { label: "Request a Demo", href: "/contact" },
    ...def,
  });
}

export const PRODUCTS = [
  productPage({
    slug: "leadforgrow-crm",
    title: "LeadForGrow™ — AI CRM & Business Automation",
    seoTitle: "LeadForGrow™ AI CRM | ScaleDesk Technology",
    metaDescription:
      "LeadForGrow™ is an AI CRM and business automation platform by ScaleDesk Technology — revenue intelligence, lead scoring, fraud protection, and CRM integration.",
    primaryKeyword: "LeadForGrow CRM",
    secondaryKeywords: ["LeadForGrow", "LeadForGrow AI CRM", "AI CRM Platform", "Revenue Intelligence CRM"],
    longTailKeywords: [
      "LeadForGrow CRM by ScaleDesk Technology",
      "AI CRM with lead scoring and fraud protection",
      "revenue intelligence CRM platform",
    ],
    lsiKeywords: ["lead scoring", "churn prediction", "fraud analytics", "GTM automation"],
    semanticKeywords: ["ScaleDesk LeadForGrow", "Saurabh Singh LeadForGrow"],
    h1: "LeadForGrow™ — AI CRM & Business Automation Platform",
    intro:
      "LeadForGrow™ is ScaleDesk Technology's flagship AI CRM and business automation platform. Built under the engineering leadership of Co-Founder & CTO Saurabh Singh, LeadForGrow delivers revenue intelligence, automated lead scoring, advanced fraud protection, and enterprise CRM integration.",
    h2s: [
      "Revenue Intelligence, Not Just a CRM",
      "AI-Powered Lead Scoring",
      "Fraud Protection & Churn Prediction",
      "Enterprise CRM Integration",
    ],
    faqs: [
      {
        question: "What is LeadForGrow™?",
        answer:
          "LeadForGrow™ is an AI CRM and business automation platform developed by ScaleDesk Technology. It provides revenue intelligence, automated lead scoring, fraud protection, and CRM integration for enterprise growth teams.",
      },
      {
        question: "Who built LeadForGrow™?",
        answer:
          "LeadForGrow™ was engineered by ScaleDesk Technology under the leadership of Co-Founder & CTO Saurabh Singh, combining Product Engineering expertise with AI Solutions and enterprise CRM capabilities.",
      },
      {
        question: "How is LeadForGrow different from traditional CRMs?",
        answer:
          "LeadForGrow™ goes beyond contact management — it provides predictive revenue analytics, sub-200ms lead scoring, real-time fraud detection, and automated intervention triggers powered by machine learning.",
      },
    ],
    relatedSlugs: ["scaledesk-hrm", "ai-analytics", "revenue-protection"],
  }),
  productPage({
    slug: "scaledesk-hrm",
    title: "ScaleDesk HRM™ — Human Resource Management System",
    seoTitle: "ScaleDesk HRM™ | HRMS Platform by ScaleDesk Technology",
    metaDescription:
      "ScaleDesk HRM™ is a modern HRMS platform — attendance, payroll, employee lifecycle, and HR automation by ScaleDesk Technology.",
    primaryKeyword: "ScaleDesk HRM",
    secondaryKeywords: ["ScaleDesk HRM Platform", "HRMS Software", "HR Management System"],
    longTailKeywords: [
      "ScaleDesk HRM human resource management",
      "HRMS platform by ScaleDesk Technology",
      "HR automation software ScaleDesk",
    ],
    lsiKeywords: ["payroll management", "attendance tracking", "employee onboarding", "HR analytics"],
    semanticKeywords: ["Saurabh Singh ScaleDesk HRM", "ScaleDesk HRMS product"],
    h1: "ScaleDesk HRM™ — Modern Human Resource Management System",
    intro:
      "ScaleDesk HRM™ is ScaleDesk Technology's human resource management system — engineered for attendance tracking, payroll processing, employee lifecycle management, and HR workflow automation. Built with the same Product Engineering discipline that powers LeadForGrow™.",
    h2s: [
      "Complete Employee Lifecycle Management",
      "Payroll & Attendance Automation",
      "HR Analytics & Reporting",
      "Integration with Business Systems",
    ],
    faqs: [
      {
        question: "What is ScaleDesk HRM™?",
        answer:
          "ScaleDesk HRM™ is a human resource management system (HRMS) developed by ScaleDesk Technology, covering attendance, payroll, employee lifecycle, and HR automation for growing organizations.",
      },
      {
        question: "Can ScaleDesk HRM integrate with other systems?",
        answer:
          "Yes. ScaleDesk HRM™ supports integration with CRM, finance, and business automation platforms including LeadForGrow™ through ScaleDesk Technology's integration layer.",
      },
    ],
    relatedSlugs: ["leadforgrow-crm", "hrms-development", "business-automation"],
  }),
  productPage({
    slug: "ai-analytics",
    title: "AI Analytics Platform",
    seoTitle: "AI Analytics Platform | ScaleDesk Technology Products",
    metaDescription:
      "AI analytics platform with predictive models, real-time dashboards, and business intelligence powered by ScaleDesk Technology.",
    primaryKeyword: "AI Analytics Platform",
    secondaryKeywords: ["Predictive Analytics Software", "Business Intelligence Platform"],
    h1: "AI Analytics Platform",
    intro:
      "ScaleDesk Technology's AI Analytics platform delivers predictive models, real-time operational dashboards, and anomaly detection — turning raw data into actionable business intelligence.",
    h2s: ["Predictive Models", "Real-Time Dashboards", "Anomaly Detection"],
    relatedSlugs: ["leadforgrow-crm", "revenue-protection", "data-pipelines"],
  }),
  productPage({
    slug: "revenue-protection",
    title: "Revenue Protection Platform",
    seoTitle: "Revenue Protection Platform | ScaleDesk Technology",
    metaDescription:
      "Revenue protection platform with fraud detection, churn prediction, and revenue leakage analytics by ScaleDesk Technology.",
    primaryKeyword: "Revenue Protection Platform",
    secondaryKeywords: ["Fraud Detection Software", "Churn Prevention Platform"],
    h1: "Revenue Protection Platform",
    intro:
      "ScaleDesk Technology's Revenue Protection platform detects fraud, predicts churn, and identifies revenue leakage — protecting enterprise revenue with AI-powered analytics and automated intervention.",
    h2s: ["Fraud Detection", "Churn Prediction", "Revenue Leakage Prevention"],
    relatedSlugs: ["leadforgrow-crm", "ai-analytics", "ai-crm"],
  }),
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export function getProductSlugs() {
  return PRODUCTS.map((p) => p.slug);
}

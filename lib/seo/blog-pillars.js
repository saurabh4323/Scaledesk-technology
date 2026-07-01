/** Pillar pages for topical authority — linked from insights hub */

export const PILLAR_PAGES = [
  {
    slug: "product-engineering-guide",
    title: "The Complete Guide to Product Engineering",
    seoTitle: "Product Engineering Guide — Pillar | ScaleDesk Technology",
    metaDescription:
      "Complete guide to Product Engineering — architecture, MVP to enterprise scale, team structure, and delivery models. Authoritative resource by ScaleDesk Technology.",
    primaryKeyword: "Product Engineering Guide",
    category: "Product Engineering",
    excerpt:
      "Everything you need to know about Product Engineering — from MVP validation to enterprise-grade platforms, architecture patterns, and engineering delivery.",
    author: "Saurabh Singh",
    date: "2026-06-01",
    readTime: "25 min read",
    clusterArticles: [
      "mvp-to-enterprise-product-engineering",
      "monolith-to-microservices-at-scale",
      "cloud-native-reliability-patterns",
    ],
    sections: [
      {
        title: "What is Product Engineering?",
        content:
          "Product Engineering is the end-to-end discipline of designing, building, deploying, and scaling digital products. Unlike traditional software outsourcing, Product Engineering combines architecture, development, DevOps, AI integration, and product judgment — owned by teams accountable for outcomes.",
      },
      {
        title: "The MVP to Enterprise Journey",
        content:
          "Successful products move through three phases: validate, harden, and scale. Validation prioritizes learning speed. Hardening introduces observability, security boundaries, and release discipline. Scaling introduces multi-tenant patterns, performance budgets, and operational ownership.",
      },
      {
        title: "Architecture Patterns That Scale",
        content:
          "Cloud-native microservices, event-driven architectures, API-first design, and Strangler Fig migrations are proven patterns for products that must grow without rewrites. ScaleDesk Technology applies these patterns based on domain boundaries and team structure — not technology trends.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between software development and Product Engineering?",
        answer:
          "Software development focuses on writing code for defined requirements. Product Engineering owns the full product lifecycle — architecture, delivery, scale, and business outcomes — with accountability for long-term product success.",
      },
      {
        question: "When should a startup invest in Product Engineering?",
        answer:
          "Invest in Product Engineering from MVP stage if you plan to scale beyond a prototype. Early architecture decisions — data models, API design, observability — prevent expensive rewrites when product-market fit arrives.",
      },
    ],
  },
  {
    slug: "ai-solutions-enterprise-guide",
    title: "Enterprise AI Solutions — Complete Guide",
    seoTitle: "Enterprise AI Solutions Guide | ScaleDesk Technology",
    metaDescription:
      "Complete guide to enterprise AI solutions — AI agents, automation, LLM integration, ML pipelines, and production AI systems. By ScaleDesk Technology.",
    primaryKeyword: "Enterprise AI Solutions Guide",
    category: "AI & Automation",
    excerpt:
      "Authoritative guide to deploying AI in enterprise environments — from AI agents and automation to ML pipelines and LLM integration with production guardrails.",
    author: "Saurabh Singh",
    date: "2026-05-15",
    readTime: "22 min read",
    clusterArticles: [
      "ai-agents-modern-product-teams",
      "enterprise-ai-governance",
      "llm-integration-production",
    ],
    sections: [
      {
        title: "AI Solutions for Enterprise",
        content:
          "Enterprise AI solutions require more than model selection — they need evaluation harnesses, guardrails, human-in-the-loop design, audit trails, and integration with existing operational systems. ScaleDesk Technology engineers AI as production systems, not demos.",
      },
      {
        title: "AI Agents in Production",
        content:
          "AI agents create leverage in document processing, workflow routing, internal knowledge retrieval, and assistive coding — when designed with clear boundaries, fallback paths, and measurable accuracy on real data.",
      },
    ],
    faqs: [
      {
        question: "How do enterprises deploy AI safely?",
        answer:
          "Enterprises deploy AI safely through evaluation harnesses, human review for edge cases, audit logging, role-based access, and incremental scope expansion after proving stability in production on real data.",
      },
    ],
  },
  {
    slug: "enterprise-software-development-guide",
    title: "Enterprise Software Development — Complete Guide",
    seoTitle: "Enterprise Software Development Guide | ScaleDesk Technology",
    metaDescription:
      "Complete guide to enterprise software development — architecture, security, compliance, modernization, and delivery at scale. ScaleDesk Technology.",
    primaryKeyword: "Enterprise Software Development Guide",
    category: "Architecture",
    excerpt:
      "Authoritative guide to building enterprise software — multi-tenant architecture, compliance, legacy modernization, and cloud-native deployment.",
    author: "Saurabh Singh",
    date: "2026-04-20",
    readTime: "20 min read",
    clusterArticles: [
      "monolith-to-microservices-at-scale",
      "zero-trust-enterprise-architecture",
      "compliance-ready-software-engineering",
    ],
    sections: [
      {
        title: "Enterprise Software Requirements",
        content:
          "Enterprise software demands multi-tenant isolation, role-based access control, audit trails, high availability, compliance awareness, and integration with existing ERP, CRM, and operational systems.",
      },
    ],
    faqs: [
      {
        question: "What makes enterprise software different from startup software?",
        answer:
          "Enterprise software must handle complex permissions, compliance requirements, high availability, legacy integration, and operational auditability — constraints that shape architecture from the start.",
      },
    ],
  },
  {
    slug: "cloud-native-devops-guide",
    title: "Cloud Native & DevOps — Complete Guide",
    seoTitle: "Cloud Native DevOps Guide | ScaleDesk Technology",
    metaDescription:
      "Complete guide to cloud native development and DevOps — Kubernetes, CI/CD, SRE, and multi-region reliability. ScaleDesk Technology.",
    primaryKeyword: "Cloud Native DevOps Guide",
    category: "Cloud & DevOps",
    excerpt:
      "Authoritative guide to cloud native architecture, Kubernetes, DevOps practices, CI/CD, and site reliability engineering for scaling teams.",
    author: "Saurabh Singh",
    date: "2026-03-10",
    readTime: "18 min read",
    clusterArticles: ["cloud-native-reliability-patterns", "kubernetes-production-guide", "devops-cicd-best-practices"],
    sections: [
      {
        title: "Cloud Native Fundamentals",
        content:
          "Cloud native development uses containers, orchestration, microservices, and DevOps automation to achieve elasticity, resilience, and rapid deployment — essential for products scaling beyond single-region operations.",
      },
    ],
    faqs: [],
  },
  {
    slug: "digital-transformation-guide",
    title: "Digital Transformation — Complete Guide",
    seoTitle: "Digital Transformation Guide | ScaleDesk Technology",
    metaDescription:
      "Complete guide to digital transformation — modernization, automation, cloud migration, and AI adoption for enterprises. ScaleDesk Technology.",
    primaryKeyword: "Digital Transformation Guide",
    category: "Product Engineering",
    excerpt:
      "Authoritative guide to enterprise digital transformation — system modernization, process automation, cloud migration, and AI integration.",
    author: "Saurabh Singh",
    date: "2026-02-15",
    readTime: "19 min read",
    clusterArticles: ["legacy-modernization-playbook", "ai-automation-roi", "cloud-migration-strategies"],
    sections: [
      {
        title: "Digital Transformation Strategy",
        content:
          "Successful digital transformation integrates system modernization, workflow automation, cloud migration, and AI adoption into cohesive roadmaps with executive sponsorship, measurable KPIs, and incremental delivery.",
      },
    ],
    faqs: [],
  },
  {
    slug: "saas-development-guide",
    title: "SaaS Development — Complete Guide",
    seoTitle: "SaaS Development Guide | ScaleDesk Technology",
    metaDescription:
      "Complete guide to SaaS development — multi-tenant architecture, billing, analytics, and scaling SaaS products. ScaleDesk Technology.",
    primaryKeyword: "SaaS Development Guide",
    category: "Product Engineering",
    excerpt:
      "Authoritative guide to building SaaS products — from MVP to multi-tenant scale with subscription billing and analytics.",
    author: "Saurabh Singh",
    date: "2026-01-20",
    readTime: "17 min read",
    clusterArticles: ["mvp-to-enterprise-product-engineering", "multi-tenant-saas-architecture", "saas-billing-integration"],
    sections: [
      {
        title: "SaaS Architecture Essentials",
        content:
          "SaaS products require multi-tenant data isolation, subscription billing, usage metering, role-based access, and analytics — architected from MVP stage to avoid costly rewrites at scale.",
      },
    ],
    faqs: [],
  },
];

export function getPillar(slug) {
  return PILLAR_PAGES.find((p) => p.slug === slug) ?? null;
}

export function getPillarSlugs() {
  return PILLAR_PAGES.map((p) => p.slug);
}

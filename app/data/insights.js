export const INSIGHT_CATEGORIES = [
  "All",
  "Product Engineering",
  "Architecture",
  "AI & Automation",
  "Cloud & DevOps",
  "Security",
];

export const INSIGHTS = [
  {
    slug: "mvp-to-enterprise-product-engineering",
    category: "Product Engineering",
    type: "Perspective",
    title: "From MVP validation to enterprise-grade product engineering",
    excerpt:
      "How growth-stage companies evolve from fast prototypes to platforms that survive real traffic, real compliance, and real operational load.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    date: "June 12, 2026",
    readTime: "8 min read",
    author: "Product Engineering Team",
    featured: true,
    body: [
      "Most teams can ship an MVP. Fewer teams can evolve that MVP into a platform that enterprise customers trust. The gap is rarely talent—it is sequencing, architecture discipline, and product judgment under pressure.",
      "At ScaleDesk, we help companies move through three phases: validate, harden, and scale. Validation is about learning speed. Hardening introduces observability, security boundaries, and release discipline. Scaling introduces multi-tenant patterns, performance budgets, and operational ownership.",
      "The mistake we see most often is skipping the hardening phase because revenue pressure is high. That creates fragile systems that become expensive to fix later. A better path is incremental hardening alongside feature delivery—treating reliability as a product feature, not a future project.",
    ],
  },
  {
    slug: "ai-agents-modern-product-teams",
    category: "AI & Automation",
    type: "Research Report",
    title: "AI agents and intelligent automation for modern product teams",
    excerpt:
      "Where AI agents create real leverage in product workflows—and where human-in-the-loop design still matters.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    date: "May 28, 2026",
    readTime: "10 min read",
    author: "AI Solutions Team",
    featured: false,
    body: [
      "AI agents are moving from demos to production—but only when teams treat them as systems, not chat widgets. That means clear boundaries, evaluation harnesses, and fallback paths when confidence is low.",
      "The highest-value use cases we see today are operational: document processing, workflow routing, internal knowledge retrieval, and assistive coding inside defined guardrails. Each requires different latency, accuracy, and audit requirements.",
      "Our recommendation: start with a narrow workflow, measure accuracy on real data, and design explicit human review for edge cases. Expand scope only after the system proves stable in production.",
    ],
  },
  {
    slug: "monolith-to-microservices-at-scale",
    category: "Architecture",
    type: "Technical Deep Dive",
    title: "Migrating from monolith to microservices without stopping the business",
    excerpt:
      "A practical playbook for Strangler Fig migrations, domain boundaries, and zero-downtime cutovers.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    date: "May 14, 2026",
    readTime: "12 min read",
    author: "Platform Architecture Team",
    featured: false,
    body: [
      "Monolith migrations fail when teams try to rewrite everything at once. Successful migrations isolate high-value domains, route traffic incrementally, and maintain backward compatibility until cutover is proven.",
      "We begin with domain mapping workshops—not infrastructure diagrams. Understanding transactional boundaries and team ownership matters more than picking Kubernetes first.",
      "The Strangler Fig pattern remains the most reliable approach: proxy traffic through a gateway, migrate services one domain at a time, and keep observability consistent across old and new paths.",
    ],
  },
  {
    slug: "cloud-native-reliability-patterns",
    category: "Cloud & DevOps",
    type: "Capability",
    title: "Cloud-native architecture patterns for reliability and growth",
    excerpt:
      "SLOs, autoscaling, and failure-domain design for teams moving from single-region to multi-region operations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    date: "April 30, 2026",
    readTime: "9 min read",
    author: "Cloud Infrastructure Team",
    featured: false,
    body: [
      "Reliability is a design choice. Teams that define SLOs early make better tradeoffs between speed and resilience—and communicate those tradeoffs clearly to stakeholders.",
      "We standardize on health checks, graceful degradation, circuit breakers, and blast-radius containment. Multi-region is not always day one, but failure domains should be explicit from the start.",
      "Infrastructure as code and automated rollbacks are table stakes. What separates mature teams is how they practice incidents: blameless reviews, action items tied to system changes, and measurable recovery improvements.",
    ],
  },
  {
    slug: "zero-trust-multi-cloud",
    category: "Security",
    type: "Perspective",
    title: "Zero-trust architecture in multi-cloud environments",
    excerpt:
      "Identity-aware access, mTLS, and key rotation across AWS and GCP without slowing delivery teams.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    date: "April 8, 2026",
    readTime: "11 min read",
    author: "Security Engineering",
    featured: false,
    body: [
      "Zero-trust is not a product purchase—it is a set of defaults: never trust the network, always verify identity, and assume breach.",
      "For multi-cloud teams, the challenge is consistency. We implement centralized identity, short-lived credentials, and policy-as-code so security scales with engineering velocity.",
      "The goal is not perfect isolation on day one. It is measurable reduction of lateral movement risk while keeping developer experience acceptable.",
    ],
  },
  {
    slug: "kafka-high-throughput-pipelines",
    category: "Architecture",
    type: "Technical Deep Dive",
    title: "Processing billions of events daily with Apache Kafka",
    excerpt:
      "Partitioning strategy, consumer group tuning, and operational practices for high-throughput data pipelines.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    date: "March 22, 2026",
    readTime: "10 min read",
    author: "Data Infrastructure Team",
    featured: false,
    body: [
      "Kafka performance problems are usually design problems: hot partitions, oversized messages, or consumers that cannot keep pace with producers.",
      "We design topics around access patterns, not org charts. Partition keys must reflect real distribution, and replayability must be tested—not assumed.",
      "Operations matter as much as code: lag alerts, broker health dashboards, and runbooks for rebalancing are part of the product, not optional ops work.",
    ],
  },
  {
    slug: "product-thinking-for-engineering-leaders",
    category: "Product Engineering",
    type: "Perspective",
    title: "Product thinking for engineering leaders",
    excerpt:
      "Why the best technical leaders translate constraints into product decisions—not just faster delivery.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    date: "March 5, 2026",
    readTime: "7 min read",
    author: "ScaleDesk Leadership",
    featured: false,
    body: [
      "Engineering leaders are often judged on output. The best ones are evaluated on outcomes: retention, revenue enablement, operational cost, and customer trust.",
      "Product thinking means asking what problem is being solved, what success looks like, and what can be deliberately not built. That discipline protects teams from infinite scope.",
      "When engineering and product share a language of tradeoffs, roadmaps become realistic and architecture decisions stay aligned with business strategy.",
    ],
  },
  {
    slug: "observability-beyond-dashboards",
    category: "Cloud & DevOps",
    type: "Capability",
    title: "Observability beyond dashboards",
    excerpt:
      "Tracing, structured logging, and SLO-based alerting that helps teams fix issues before customers report them.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    date: "February 18, 2026",
    readTime: "8 min read",
    author: "Platform Engineering",
    featured: false,
    body: [
      "Dashboards show that something is wrong. Observability helps you understand why. That requires correlated traces, meaningful log context, and alerts tied to user impact—not CPU graphs alone.",
      "We implement observability as part of feature delivery. Every new service ships with golden signals, ownership tags, and runbook links.",
      "Mature teams measure mean time to understand, not just mean time to recovery. Faster understanding leads to fewer repeat incidents.",
    ],
  },
];

export function getInsight(slug) {
  return INSIGHTS.find((item) => item.slug === slug);
}

export function getInsightSlugs() {
  return INSIGHTS.map((item) => item.slug);
}

export function getFeaturedInsight() {
  return INSIGHTS.find((item) => item.featured) || INSIGHTS[0];
}

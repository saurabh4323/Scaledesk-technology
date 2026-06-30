export const CASE_STUDIES = [
  {
    slug: "global-retail-supply-index",
    title: "Global Retail Supply Index",
    client: "Fortune 500 Retailer",
    industry: "Retail & Logistics",
    metric: "400ms → 18ms",
    metricLabel: "API latency reduction",
    excerpt:
      "Re-architected a fragmented legacy logistics platform into a unified, API-first system serving three global regions with sub-20ms response times.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1566576721346-548413edf1f0?q=80&w=2000&auto=format&fit=crop",
    timeline: "9 Months",
    teamSize: "12 Engineers",
    services: ["Product Engineering", "Cloud Architecture", "Data Pipelines"],
    tags: ["Microservices", "Kafka", "Kubernetes", "Go"],
    results: [
      { value: "95%", label: "Latency reduction" },
      { value: "3", label: "Global regions live" },
      { value: "0", label: "Downtime migrations" },
      { value: "4x", label: "Deployment frequency" },
    ],
    challenge:
      "A Fortune 500 retailer relied on a monolithic logistics stack built over fifteen years. Peak-season traffic caused API latency to spike above 400ms, inventory sync failed across warehouses, and every release required a maintenance window. Leadership needed a platform that could scale globally without rewriting the business overnight.",
    approach:
      "ScaleDesk partnered as an embedded engineering team—running discovery workshops, mapping domain boundaries, and defining a phased modernization roadmap. We prioritized the highest-impact supply-chain flows first while keeping the legacy system operational.",
    solution:
      "We decomposed the monolith using a Strangler Fig pattern, routing traffic through an API gateway to new Go microservices on multi-region Kubernetes. Event-driven inventory updates ran on Kafka, with PostgreSQL and Redis handling transactional and cache layers. Observability, CI/CD, and security gates were built in from day one.",
    outcome:
      "Average API latency dropped from 400ms to 18ms. The platform now runs across three regions with zero-downtime deployments and four times the previous release cadence. Operations teams gained real-time visibility into supply-chain health for the first time.",
    technologies: [
      "Go",
      "Kubernetes",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "Terraform",
      "Datadog",
    ],
    quote: {
      text: "ScaleDesk didn't just migrate our systems—they gave us a supply-chain platform we can grow on for the next decade.",
      author: "VP of Engineering",
      company: "Global Retail Group",
    },
  },
  {
    slug: "fintech-transaction-ledger",
    title: "High-Frequency Transaction Ledger",
    client: "Series C Fintech",
    industry: "Financial Services",
    metric: "10,000 TPS",
    metricLabel: "Sustained throughput",
    excerpt:
      "Engineered a distributed ledger capable of 10,000 transactions per second with ACID guarantees, audit trails, and zero downtime during a live migration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    timeline: "7 Months",
    teamSize: "10 Engineers",
    services: ["Enterprise Software", "Cloud Infrastructure", "Technology Consulting"],
    tags: ["Rust", "PostgreSQL", "Redis", "AWS"],
    results: [
      { value: "10K", label: "Transactions per second" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "50M+", label: "Records migrated" },
      { value: "<2ms", label: "P99 write latency" },
    ],
    challenge:
      "A fast-growing fintech needed to replace a brittle ledger that couldn't pass due diligence for enterprise clients. Peak loads caused reconciliation delays, audit exports took hours, and the team feared a big-bang migration would freeze customer funds.",
    approach:
      "We ran a technical due-diligence sprint, modeled transaction volumes, and designed a dual-write migration path. Compliance and security requirements were treated as product features—not late-stage checkboxes.",
    solution:
      "ScaleDesk built a Rust-based ledger service with PostgreSQL as the system of record, Redis for hot-path caching, and event sourcing for immutable audit logs. Shadow traffic validated correctness for six weeks before cutover. Infrastructure ran on AWS with automated failover and encryption at every layer.",
    outcome:
      "The new ledger sustains 10,000 TPS with sub-2ms P99 writes and passed SOC 2 scrutiny within the same quarter. Enterprise deals that were blocked on architecture finally closed.",
    technologies: [
      "Rust",
      "PostgreSQL",
      "Redis",
      "AWS",
      "gRPC",
      "Terraform",
      "Grafana",
    ],
    quote: {
      text: "They delivered a ledger our compliance team actually trusts—and our engineers enjoy maintaining.",
      author: "CTO",
      company: "Series C Fintech",
    },
  },
  {
    slug: "ai-automated-compliance",
    title: "AI-Automated Compliance Platform",
    client: "National Healthcare Network",
    industry: "Healthcare",
    metric: "99.9%",
    metricLabel: "Parsing accuracy",
    excerpt:
      "Deployed a HIPAA-compliant AI pipeline to automate medical record review, cutting manual compliance work by 70% while improving audit consistency.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2000&auto=format&fit=crop",
    timeline: "6 Months",
    teamSize: "8 Engineers",
    services: ["AI Solutions", "Product Engineering", "Data Pipelines"],
    tags: ["LLMs", "Vector DB", "Python", "HIPAA"],
    results: [
      { value: "70%", label: "Less manual review" },
      { value: "99.9%", label: "Field-level accuracy" },
      { value: "10x", label: "Faster audit prep" },
      { value: "100%", label: "HIPAA controls met" },
    ],
    challenge:
      "Clinical staff spent thousands of hours manually reviewing records for regulatory compliance. Legacy OCR tools missed context, false positives overwhelmed reviewers, and leadership needed AI without risking patient data exposure.",
    approach:
      "We mapped compliance workflows with clinical ops, defined human-in-the-loop guardrails, and prototyped on de-identified data before touching production environments.",
    solution:
      "ScaleDesk engineered a secure pipeline: document ingestion, PHI redaction, vector search over policy libraries, and LLM-assisted extraction with confidence scoring. Low-confidence cases routed to reviewers in a custom dashboard. All workloads ran in a HIPAA-aligned VPC with full audit logging.",
    outcome:
      "Manual review dropped 70%, audit preparation became ten times faster, and accuracy held at 99.9% across pilot and production rollouts.",
    technologies: [
      "Python",
      "OpenAI API",
      "Pinecone",
      "FastAPI",
      "AWS",
      "PostgreSQL",
      "React",
    ],
    quote: {
      text: "For the first time, compliance scale doesn't mean hiring an army of reviewers.",
      author: "Director of Clinical Operations",
      company: "National Healthcare Network",
    },
  },
  {
    slug: "saas-platform-scale",
    title: "SaaS Platform Scale-Up",
    client: "B2B SaaS Unicorn",
    industry: "SaaS",
    metric: "100x",
    metricLabel: "User growth supported",
    excerpt:
      "Took a successful MVP to enterprise-grade infrastructure—multi-tenant architecture, SSO, and observability that supported 100x user growth in 12 months.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    timeline: "12 Months",
    teamSize: "14 Engineers",
    services: ["Product Engineering", "Cloud-Native Architecture", "AI Automation"],
    tags: ["Node.js", "React", "Kubernetes", "Multi-tenant"],
    results: [
      { value: "100x", label: "Active users supported" },
      { value: "60%", label: "Infra cost per user down" },
      { value: "SSO", label: "Enterprise auth shipped" },
      { value: "99.95%", label: "SLA achieved" },
    ],
    challenge:
      "A breakout B2B SaaS product was buckling under enterprise demand. Single-tenant hacks, manual onboarding, and missing SSO blocked six-figure deals. The founding team needed to scale the product without pausing feature development.",
    approach:
      "ScaleDesk embedded alongside internal squads, introduced platform engineering practices, and sequenced work across reliability, tenancy, and enterprise features.",
    solution:
      "We redesigned the core around true multi-tenancy, shipped SAML/OIDC SSO, and moved workloads to Kubernetes with autoscaling and SLO-based alerting. A design system and API versioning strategy reduced regressions as the team doubled in size.",
    outcome:
      "The platform absorbed 100x user growth, cut infra cost per user by 60%, and unlocked enterprise contracts with Fortune 500 customers.",
    technologies: [
      "Node.js",
      "React",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Auth0",
      "Vercel",
    ],
    quote: {
      text: "ScaleDesk helped us grow from startup MVP to enterprise-ready without losing product velocity.",
      author: "Co-founder & CEO",
      company: "B2B SaaS Unicorn",
    },
  },
  {
    slug: "logistics-fleet-intelligence",
    title: "Fleet Intelligence & Route Optimization",
    client: "Regional Logistics Provider",
    industry: "Logistics",
    metric: "32%",
    metricLabel: "Fuel cost reduction",
    excerpt:
      "Built a real-time fleet intelligence platform with route optimization and predictive maintenance—reducing fuel costs 32% across a 2,000-vehicle network.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1494412511400-896548cc6898?q=80&w=2000&auto=format&fit=crop",
    timeline: "8 Months",
    teamSize: "9 Engineers",
    services: ["Custom Software", "AI Solutions", "Data Pipelines"],
    tags: ["IoT", "Python", "GCP", "Machine Learning"],
    results: [
      { value: "32%", label: "Fuel savings" },
      { value: "2K", label: "Vehicles connected" },
      { value: "18%", label: "On-time delivery gain" },
      { value: "Real-time", label: "Fleet visibility" },
    ],
    challenge:
      "Dispatchers relied on spreadsheets and phone calls to manage 2,000 vehicles. Route planning was manual, maintenance was reactive, and leadership lacked a single view of fleet performance.",
    approach:
      "We shadowed dispatch operations, instrumented telematics feeds, and validated ML models on historical routes before recommending live optimizations.",
    solution:
      "ScaleDesk delivered a unified operations hub: live GPS ingestion, ML-based route suggestions, and predictive maintenance alerts. Mobile apps for drivers and a command center for dispatchers replaced fragmented tools. Everything ran on GCP with streaming analytics.",
    outcome:
      "Fuel costs fell 32%, on-time deliveries improved 18%, and leadership gained real-time visibility across the entire network.",
    technologies: [
      "Python",
      "GCP",
      "BigQuery",
      "TensorFlow",
      "React Native",
      "Pub/Sub",
      "Looker",
    ],
    quote: {
      text: "We finally operate like a technology company—not a trucking company with spreadsheets.",
      author: "COO",
      company: "Regional Logistics Provider",
    },
  },
];

export function getCaseStudy(slug) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getCaseStudySlugs() {
  return CASE_STUDIES.map((study) => study.slug);
}

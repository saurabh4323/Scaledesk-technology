export const CAREER_IMAGES = {
  hero: "/heroimage.png",
  company:
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
  collaboration:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
  engineering:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
  meeting:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  remote:
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2000&auto=format&fit=crop",
  workshop:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  presentation:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
  learning:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop",
  team:
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000&auto=format&fit=crop",
  architect:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
};

export const COMPANY_STATS = [
  { value: "Remote-first", label: "Global delivery model" },
  { value: "50+", label: "Products engineered" },
  { value: "12+", label: "Open positions" },
  { value: "5", label: "Industries served" },
];

export const COMPANY_ABOUT = {
  headline: "We are a product engineering company—not a staffing agency.",
  paragraphs: [
    "ScaleDesk Technology partners with startups, high-growth companies, and enterprises to design, build, and scale digital products. Our teams embed alongside client engineering organizations to deliver architecture, software, AI, and cloud platforms that hold up in production.",
    "We hire people who care about craft: clear system design, thoughtful code, measurable outcomes, and the discipline to ship reliably. If you want your work to reach real users at real companies, you will find meaningful problems here.",
    "Our culture is direct, collaborative, and standards-driven. We invest in people who want to grow from strong individual contributors into technical leaders.",
  ],
};

export const WORK_LIFE_STORIES = [
  {
    title: "Client-facing engineering",
    desc: "Work on active product engagements with structured delivery rhythms, architecture reviews, and direct stakeholder communication.",
    image: CAREER_IMAGES.meeting,
  },
  {
    title: "Deep technical ownership",
    desc: "Own features and systems end-to-end—from design docs and implementation to observability, security, and production support.",
    image: CAREER_IMAGES.engineering,
  },
  {
    title: "Remote, connected teams",
    desc: "Collaborate across time zones with intentional rituals: weekly demos, pairing sessions, and documentation that keeps everyone aligned.",
    image: CAREER_IMAGES.remote,
  },
  {
    title: "Continuous learning",
    desc: "Exposure to modern stacks, enterprise constraints, and AI-native product patterns through mentorship and dedicated learning time.",
    image: CAREER_IMAGES.learning,
  },
];

export const ENGINEERING_PRINCIPLES = [
  {
    id: "01",
    title: "Product-First Thinking",
    desc: "We engineer for users, reliability, and business outcomes—not vanity features or throwaway deliverables.",
    image: CAREER_IMAGES.architect,
  },
  {
    id: "02",
    title: "Built for Scale",
    desc: "Performance, security, and maintainability are designed in from the first architecture conversation.",
    image: CAREER_IMAGES.office,
  },
  {
    id: "03",
    title: "End-to-End Ownership",
    desc: "Engineers own the full lifecycle: discovery, build, deploy, monitor, and iterate.",
    image: CAREER_IMAGES.workshop,
  },
  {
    id: "04",
    title: "Clear Communication",
    desc: "We document decisions, give direct feedback, and keep clients and teammates informed without noise.",
    image: CAREER_IMAGES.presentation,
  },
];

export const ONBOARDING_STEPS = [
  {
    week: "Week 1",
    title: "Orientation & first ship",
    desc: "Meet your squad, review engineering standards, set up environments, and land a meaningful first contribution.",
  },
  {
    week: "Weeks 2–4",
    title: "Embedded delivery",
    desc: "Pair on production work, participate in design reviews, and learn client context and delivery cadence.",
  },
  {
    week: "Month 2",
    title: "Owned workstream",
    desc: "Lead a module, feature, or internal initiative with support from senior engineers.",
  },
  {
    week: "Month 3+",
    title: "Expanded scope",
    desc: "Drive larger initiatives, mentor others, and shape technical direction on engagements.",
  },
];

export const BENEFITS = [
  {
    title: "Remote-first flexibility",
    desc: "Work from where you do your best work, with async-friendly collaboration and clear team rituals.",
  },
  {
    title: "Learning & certification budget",
    desc: "Annual allowance for courses, conferences, books, and certifications relevant to your role.",
  },
  {
    title: "Modern engineering exposure",
    desc: "Build with cloud-native tooling, AI systems, and product stacks used by scaling companies.",
  },
  {
    title: "Real production impact",
    desc: "Ship software used by paying customers—not internal demos that never leave staging.",
  },
  {
    title: "Mentorship & growth paths",
    desc: "Structured feedback, pairing with senior engineers, and a clear path from intern to lead.",
  },
  {
    title: "Balanced intensity",
    desc: "We move fast on delivery, but we respect focus time, sustainable pace, and time off.",
  },
];

export const CAREER_PATHS = [
  {
    level: "Intern / Associate",
    focus: "Learn delivery practices, ship with mentorship, build fundamentals across product engineering.",
  },
  {
    level: "Product Engineer",
    focus: "Own features and services, contribute to architecture discussions, deliver reliably in production.",
  },
  {
    level: "Senior Engineer",
    focus: "Lead technical streams, guide design decisions, and raise the bar for code quality and observability.",
  },
  {
    level: "Principal / Lead",
    focus: "Shape engagement strategy, mentor teams, and define engineering standards across accounts.",
  },
];

export const EMPLOYEE_VOICES = [
  {
    quote:
      "What stands out is the quality of problems. You are not maintaining legacy tickets—you are building products that companies depend on.",
    name: "Senior Product Engineer",
    tenure: "Engineering · 2 years",
    image: CAREER_IMAGES.collaboration,
  },
  {
    quote:
      "The onboarding was structured but not bureaucratic. I was in client code in week one, with real support from day one.",
    name: "Product Engineering Intern",
    tenure: "Engineering · Internship",
    image: CAREER_IMAGES.workshop,
  },
];

export const TECH_STACK = [
  "React / Next.js",
  "TypeScript",
  "Go",
  "Python",
  "Rust",
  "Kubernetes",
  "Terraform",
  "AWS",
  "GCP",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "AI / LLMs",
  "Datadog",
];

export const OPPORTUNITIES = [
  {
    id: "SDT-ENG-001",
    title: "Senior Product Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead end-to-end product engineering for client platforms—from architecture and implementation to production deployment.",
  },
  {
    id: "SDT-ENG-002",
    title: "Cloud Infrastructure Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Design and operate cloud-native infrastructure on AWS/GCP with Kubernetes, Terraform, and observability best practices.",
  },
  {
    id: "SDT-ENG-003",
    title: "AI Solutions Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build production AI systems—LLM pipelines, intelligent automation, and data products for enterprise clients.",
  },
  {
    id: "SDT-INT-001",
    title: "Product Engineering Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    description:
      "Work alongside senior engineers on real client products. Ideal for students passionate about software and product thinking.",
  },
  {
    id: "SDT-INT-002",
    title: "AI/ML Engineering Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    description:
      "Support the design and deployment of AI features, data pipelines, and automation workflows in production environments.",
  },
  {
    id: "SDT-INT-003",
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote",
    type: "Internship",
    description:
      "Craft premium product experiences for SaaS and enterprise platforms in close collaboration with engineering teams.",
  },
  {
    id: "SDT-INT-004",
    title: "Growth Marketing Intern",
    department: "Business",
    location: "Remote",
    type: "Internship",
    description:
      "Help scale ScaleDesk's brand through content, campaigns, and go-to-market initiatives for a technical audience.",
  },
  {
    id: "SDT-INT-005",
    title: "Business Strategy Intern",
    department: "Business",
    location: "Remote",
    type: "Internship",
    description:
      "Support client discovery, market research, and strategic initiatives across product engineering engagements.",
  },
  {
    id: "SDT-INT-006",
    title: "Product Operations Intern",
    department: "Business",
    location: "Remote",
    type: "Internship",
    description:
      "Coordinate delivery workflows, documentation, and cross-functional operations for active engineering projects.",
  },
];

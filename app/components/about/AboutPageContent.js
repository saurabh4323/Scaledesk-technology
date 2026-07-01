"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../seo/Breadcrumbs";
import CatalogCard from "../catalog/CatalogCard";
import { SectionLabel, DarkBreadcrumbs, BLUE } from "../catalog/SectionLabel";
import { CATALOG_IMAGES } from "../../data/catalog-display";

const PRODUCTS = [
  {
    slug: "leadforgrow-crm",
    href: "/products/leadforgrow-crm",
    name: "LeadForGrow™",
    tagline: "AI CRM & Business Automation",
    description:
      "Our flagship AI CRM platform — revenue intelligence, automated lead scoring, fraud protection, and enterprise CRM integration for growth teams worldwide.",
    image: CATALOG_IMAGES["leadforgrow-crm"],
    imageAlt: "LeadForGrow AI CRM platform by ScaleDesk Technology",
    tags: ["AI CRM", "Revenue Intelligence", "Automation"],
    metric: "98.7%",
    metricLabel: "Fraud detection accuracy",
  },
  {
    slug: "scaledesk-hrm",
    href: "/products/scaledesk-hrm",
    name: "ScaleDesk HRM™",
    tagline: "Human Resource Management",
    description:
      "A modern HRMS platform covering attendance, payroll, employee lifecycle management, and HR workflow automation for growing organizations.",
    image: CATALOG_IMAGES["scaledesk-hrm"],
    imageAlt: "ScaleDesk HRM human resource management system",
    tags: ["HRMS", "Payroll", "Workforce"],
    metric: "360°",
    metricLabel: "Employee lifecycle",
  },
];

const CAPABILITIES = [
  {
    title: "Product Engineering",
    description:
      "End-to-end product engineering — from MVP validation to enterprise-grade platforms. We own architecture, development, DevOps, and scale.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Solutions & Automation",
    description:
      "Production-grade AI systems — intelligent agents, ML pipelines, LLM integration, and business automation with guardrails and measurable ROI.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Enterprise Software",
    description:
      "Secure, scalable enterprise platforms — multi-tenant architecture, compliance-aware design, legacy modernization, and system integration.",
    image: "https://images.unsplash.com/photo-1497366811353-687074457661?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud-native engineering on AWS, GCP, and Azure — Kubernetes, CI/CD, observability, and multi-region reliability for high-traffic products.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "Structure over chaos",
    body: "Every system we build is designed to scale. We reject shortcuts that create operational debt — architecture discipline is non-negotiable from day one.",
  },
  {
    num: "02",
    title: "Zero-trust by default",
    body: "Privacy and security are foundational, not afterthoughts. We engineer with zero-trust infrastructure defaults, encryption, and audit-ready boundaries.",
  },
  {
    num: "03",
    title: "Automate relentlessly",
    body: "Manually intensive processes are eliminated through intelligent automation — AI agents, workflow orchestration, and integration layers that free teams to focus on growth.",
  },
  {
    num: "04",
    title: "Outcomes over output",
    body: "We measure success by business results — retention, revenue enablement, operational cost, and customer trust — not lines of code shipped.",
  },
];

const VALUES = [
  { label: "Engineering Excellence", desc: "World-class code that outlives founders" },
  { label: "Client Partnership", desc: "Embedded teams accountable to your outcomes" },
  { label: "Transparency", desc: "Clear communication, honest timelines, no surprises" },
  { label: "Continuous Innovation", desc: "AI-first thinking applied to every engagement" },
];

const CLIENT_TYPES = [
  "Startups & Founders",
  "High-Growth SaaS",
  "Enterprise Organizations",
  "Fintech & Healthcare",
  "E-Commerce & Retail",
  "Global IT Leaders",
];

export default function AboutPageContent({ faqs = [] }) {
  return (
    <main className="bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end bg-black">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
          alt="ScaleDesk Technology engineering team collaboration"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-12 pb-16 md:pb-24 pt-32">
          <DarkBreadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]}
            Breadcrumbs={Breadcrumbs}
          />
          <SectionLabel dark>About ScaleDesk Technology</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.06] tracking-tight max-w-5xl mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            We engineer digital products that move businesses forward
          </h1>
          <p className="text-lg md:text-xl text-white/65 font-light max-w-3xl leading-relaxed">
            ScaleDesk Technology is a Product Engineering company delivering AI Solutions, Enterprise
            Software, and Technology Consulting for startups, high-growth businesses, and enterprises
            worldwide — headquartered in San Francisco with global delivery including India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "2026", label: "Founded" },
            { value: "Global", label: "Delivery footprint" },
            { value: "2", label: "Flagship products" },
            { value: "Enterprise", label: "Grade engineering" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-zinc-200 bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                alt="ScaleDesk Technology product engineering workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6 leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                Born to eliminate technical barriers for growing businesses
              </h2>
              <div className="space-y-5 text-zinc-600 font-light leading-relaxed text-base md:text-lg">
                <p>
                  ScaleDesk Technology was established by a collective of enterprise-level architects
                  who saw a recurring problem: growing companies could ship fast, but rarely could they
                  scale without rewrites, outages, and operational debt. We built ScaleDesk to be the
                  unseen force behind global operational success — a dedicated Product Engineering
                  partner, not a generic outsourcing vendor.
                </p>
                <p>
                  Our core expertise is <strong className="font-medium text-zinc-800">Product Engineering</strong> —
                  the end-to-end discipline of designing, building, deploying, and scaling digital products.
                  Alongside that, we deliver Software Development, AI Solutions, Enterprise Software, IT
                  Services, and Technology Consulting with the same engineering rigor.
                </p>
                <p>
                  Today, ScaleDesk Technology engineers its own flagship products —{" "}
                  <Link href="/products/leadforgrow-crm" className="text-[#2F80FF] hover:underline">
                    LeadForGrow™
                  </Link>{" "}
                  and{" "}
                  <Link href="/products/scaledesk-hrm" className="text-[#2F80FF] hover:underline">
                    ScaleDesk HRM™
                  </Link>{" "}
                  — while partnering with startups and enterprises globally to build, modernize,
                  automate, and scale their most critical digital systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Mission & Vision</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Why we exist
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-zinc-200 bg-zinc-50 overflow-hidden">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop"
                  alt="ScaleDesk Technology mission — engineering digital transformation"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">Our Mission</h3>
                <p className="text-zinc-600 font-light leading-relaxed">
                  To help startups, high-growth businesses, and enterprises build, modernize, automate,
                  and scale digital products with enterprise-grade Product Engineering — eliminating
                  technical barriers so our clients can focus on growth, customers, and market leadership.
                </p>
              </div>
            </div>
            <div className="border border-zinc-200 bg-zinc-50 overflow-hidden">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop"
                  alt="ScaleDesk Technology vision — global product engineering authority"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">Our Vision</h3>
                <p className="text-zinc-600 font-light leading-relaxed">
                  To become the most trusted Product Engineering and AI Solutions partner globally —
                  recognized for engineering products that outlive their founders, platforms that prevent
                  operational debt, and AI systems that deliver measurable business outcomes in production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionLabel dark>What We Do</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                Core capabilities
              </h2>
            </div>
            <p className="text-white/55 font-light max-w-md text-base">
              Product Engineering is our foundation. Everything we build extends from that discipline.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="group border border-white/10 bg-white/[0.03] overflow-hidden hover:border-[#2F80FF]/40 transition-colors">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{cap.title}</h3>
                  <p className="text-sm text-white/55 font-light leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "SaaS Development",
              "MVP Development",
              "CRM Development",
              "HRMS Development",
              "Digital Transformation",
              "Technology Consulting",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-white/70 border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SectionLabel>Our Products</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Platforms built by ScaleDesk
          </h2>
          <p className="text-zinc-600 font-light max-w-2xl mb-12 text-lg">
            We don&apos;t just build for clients — we engineer our own products with the same
            enterprise-grade discipline we bring to every engagement.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <CatalogCard key={product.slug} item={product} large />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: BLUE }}
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership — hidden for now
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Leadership</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                Led by engineers who build at scale
              </h2>
              <div className="space-y-5 text-zinc-600 font-light leading-relaxed">
                <p>
                  ScaleDesk Technology is co-founded and led by{" "}
                  <strong className="font-medium text-zinc-800">Saurabh Singh</strong>, Co-Founder &
                  Chief Technology Officer (CTO). Saurabh defines the technical vision across Product
                  Engineering, AI Solutions, Enterprise Software, and Cloud Native Development.
                </p>
                <p>
                  Under his leadership, ScaleDesk developed LeadForGrow™ — an AI CRM and business
                  automation platform — and ScaleDesk HRM™, a modern human resource management system.
                  His engineering philosophy — structure over chaos, zero-trust defaults, and relentless
                  automation — shapes every product and client engagement.
                </p>
                <p>
                  Saurabh Singh → Co-Founder → Chief Technology Officer → ScaleDesk Technology →
                  LeadForGrow™ → ScaleDesk HRM™
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about/founder"
                  className="inline-flex px-6 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  About the Founder →
                </Link>
                <Link
                  href="/about/cto"
                  className="inline-flex px-6 py-3 text-sm font-semibold text-zinc-700 border border-zinc-300 hover:border-zinc-400 transition-colors"
                >
                  CTO Profile →
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden border border-zinc-200 bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="ScaleDesk Technology leadership and engineering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-black text-white p-6 max-w-[240px] border border-zinc-800">
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Co-Founder & CTO</p>
                <p className="text-lg font-semibold">Saurabh Singh</p>
                <p className="text-sm text-white/55 mt-2 font-light">Product Engineering · AI Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Principles */}
      <section className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <SectionLabel>Engineering Principles</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-14"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            How we engineer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="flex gap-6 p-8 bg-white border border-zinc-200">
                <span className="text-3xl font-bold shrink-0" style={{ color: BLUE }}>
                  {p.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">{p.title}</h3>
                  <p className="text-zinc-600 font-light leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values + Global */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Our Values</SectionLabel>
              <h2
                className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-8 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                What we stand for
              </h2>
              <ul className="space-y-6">
                {VALUES.map((v) => (
                  <li key={v.label} className="flex gap-4 border-b border-zinc-100 pb-6">
                    <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: BLUE }} />
                    <div>
                      <p className="font-semibold text-zinc-900">{v.label}</p>
                      <p className="text-zinc-500 font-light mt-1">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>Global Presence</SectionLabel>
              <h2
                className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                Worldwide delivery
              </h2>
              <div className="relative aspect-video overflow-hidden border border-zinc-200 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="ScaleDesk Technology global offices and delivery"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <p className="text-zinc-600 font-light leading-relaxed mb-4">
                Headquartered in <strong className="text-zinc-800">San Francisco, California</strong>,
                ScaleDesk Technology serves clients across the United States, India, Europe, and APAC
                with remote-first engineering teams and enterprise delivery models.
              </p>
              <p className="text-zinc-500 text-sm">
                contact@scaledesktechnology.com · Innovation Hub, San Francisco, CA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 md:py-20 bg-black text-white border-t border-zinc-800">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <SectionLabel dark>Who We Serve</SectionLabel>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-10 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Trusted by builders at every stage
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {CLIENT_TYPES.map((type) => (
              <span
                key={type}
                className="px-5 py-2.5 text-sm text-white/80 border border-white/15 bg-white/[0.04]"
              >
                {type}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/industries" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              Industries we serve →
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              Case studies →
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-[900px] mx-auto px-6 xl:px-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-10 tracking-tight">
              About ScaleDesk Technology
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white border border-zinc-200 p-6 open:shadow-sm"
                >
                  <summary className="font-medium text-zinc-900 cursor-pointer list-none flex justify-between items-center gap-4">
                    {faq.question}
                    <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-zinc-600 font-light leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-black text-white py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-xl">
            <SectionLabel dark>Work With Us</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Ready to build with ScaleDesk?
            </h2>
            <p className="text-white/55 font-light leading-relaxed">
              Whether you need a product engineered from scratch, an AI platform deployed, or enterprise
              software modernized — our team is ready to talk.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Contact Us →
            </Link>
            <Link
              href="/products"
              className="inline-flex px-8 py-3.5 text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

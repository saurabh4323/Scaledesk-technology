import Footer from "../components/Footer";
import AboutPageContent from "../components/about/AboutPageContent";
import JsonLd from "../components/seo/JsonLd";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph } from "../../lib/seo/schema";

const ABOUT_FAQS = [
  {
    question: "What is ScaleDesk Technology?",
    answer:
      "ScaleDesk Technology is a Product Engineering company providing AI Solutions, Enterprise Software Development, Custom Software Development, IT Services, and Technology Consulting for startups, high-growth businesses, and enterprises worldwide. We are headquartered in San Francisco with global delivery including India.",
  },
  {
    question: "What does ScaleDesk Technology specialize in?",
    answer:
      "Our core expertise is Product Engineering — the end-to-end discipline of building and scaling digital products. We also deliver AI Solutions, AI Automation, Enterprise Software, SaaS Development, MVP Development, CRM & HRMS Development, Cloud Native Engineering, DevOps, Digital Transformation, and Technology Consulting.",
  },
  {
    question: "What products does ScaleDesk Technology build?",
    answer:
      "ScaleDesk Technology builds LeadForGrow™, an AI CRM and business automation platform with revenue intelligence, lead scoring, and fraud protection; and ScaleDesk HRM™, a modern human resource management system for attendance, payroll, and employee lifecycle management.",
  },
  {
    question: "Who does ScaleDesk Technology work with?",
    answer:
      "We partner with startups, high-growth SaaS companies, and enterprise organizations across fintech, healthcare, e-commerce, retail, logistics, education, energy, and more — anyone building digital products that need to scale reliably.",
  },
  {
    question: "How is ScaleDesk different from other software companies?",
    answer:
      "ScaleDesk is a Product Engineering partner, not a generic outsourcing vendor. We own outcomes — architecture, reliability, AI integration, and long-term scale — with engineering principles like structure over chaos, zero-trust security defaults, and relentless automation of manual processes.",
  },
  {
    question: "How do I contact ScaleDesk Technology?",
    answer:
      "Reach us at contact@scaledesktechnology.com or visit scaledesktechnology.com/contact to schedule a consultation with our Product Engineering team.",
  },
];

export const metadata = buildPageMetadata({
  title: "About ScaleDesk Technology",
  seoTitle: "About ScaleDesk Technology — Product Engineering Company",
  metaDescription:
    "Learn about ScaleDesk Technology — a Product Engineering, AI Solutions, and Enterprise Software company founded in 2026. Building LeadForGrow™ AI CRM and ScaleDesk HRM™. Global delivery from San Francisco.",
  path: "/about",
  primaryKeyword: "ScaleDesk Technology",
  secondaryKeywords: [
    "About ScaleDesk",
    "Product Engineering Company",
    "AI Solutions Company",
    "Enterprise Software Company",
    "ScaleDesk Technology India",
  ],
  longTailKeywords: [
    "about ScaleDesk Technology company",
    "Product Engineering company San Francisco",
    "ScaleDesk Technology founder Saurabh Singh",
  ],
});

const graph = pageGraph({
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
  page: {
    title: "About ScaleDesk Technology",
    description:
      "Product Engineering, AI Solutions, Enterprise Software, and Technology Consulting company.",
    path: "/about",
  },
  faqs: ABOUT_FAQS,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph} />
      <AboutPageContent faqs={ABOUT_FAQS} />
      <Footer />
    </>
  );
}

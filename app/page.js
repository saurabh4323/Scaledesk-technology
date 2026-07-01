import Footer from "./components/Footer";
import JsonLd from "./components/seo/JsonLd";
import { buildPageMetadata } from "../lib/seo/metadata";
import { pageGraph } from "../lib/seo/schema";
import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import ProductEngineeringIntro from "./components/home/ProductEngineeringIntro";
import InsightGrid from "./components/home/InsightGrid";
import EngineeringCapabilities from "./components/home/EngineeringCapabilities";
import PlatformsSection from "./components/home/PlatformsSection";
import WhyScaleDesk from "./components/home/WhyScaleDesk";
import EngineeringProcess from "./components/home/EngineeringProcess";
import IndustriesSection from "./components/home/IndustriesSection";
import FinalCTA from "./components/home/FinalCTA";

const HOME_FAQS = [
  {
    question: "What is ScaleDesk Technology?",
    answer:
      "ScaleDesk Technology is a Product Engineering, AI Solutions, Enterprise Software, Software Development, IT Services, and Technology Consulting company helping startups, high-growth businesses, and enterprises build, modernize, automate, and scale digital products.",
  },
  {
    question: "What products does ScaleDesk Technology offer?",
    answer:
      "ScaleDesk Technology offers LeadForGrow™, an AI CRM and business automation platform, and ScaleDesk HRM™, a human resource management system. Both products are engineered by ScaleDesk's Product Engineering team.",
  },
  {
    question: "Who founded ScaleDesk Technology?",
    answer:
      "ScaleDesk Technology was co-founded by Saurabh Singh, who serves as Co-Founder and Chief Technology Officer (CTO), leading Product Engineering, AI Solutions, and enterprise software development.",
  },
  {
    question: "What services does ScaleDesk Technology provide?",
    answer:
      "ScaleDesk Technology provides Product Engineering, Enterprise Software Development, Custom Software Development, AI Development, AI Automation, SaaS Development, MVP Development, CRM Development, HRMS Development, Cloud Native Development, DevOps, and Technology Consulting.",
  },
];

const graph = pageGraph({
  page: {
    title: "ScaleDesk Technology — Product Engineering Company",
    description:
      "Product Engineering, AI Solutions, Enterprise Software Development, and IT Services by ScaleDesk Technology.",
    path: "/",
  },
  faqs: HOME_FAQS,
});

export const metadata = buildPageMetadata({
  title: "Product Engineering Company — AI Solutions & Enterprise Software",
  seoTitle:
    "ScaleDesk Technology | Product Engineering, AI Solutions & Enterprise Software",
  metaDescription:
    "ScaleDesk Technology is a Product Engineering company delivering AI Solutions, Enterprise Software Development, Custom Software, IT Services, and Technology Consulting. Products: LeadForGrow™ AI CRM & ScaleDesk HRM™.",
  path: "/",
  primaryKeyword: "Product Engineering Company",
  secondaryKeywords: [
    "ScaleDesk Technology",
    "ScaleDesk",
    "AI Solutions Company",
    "Software Development Company",
    "Enterprise Software Company",
    "LeadForGrow CRM",
    "ScaleDesk HRM",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={graph} />
      <main className="site-flow min-h-screen pb-0 flex flex-col bg-black">
        <Hero />
        <TrustIndicators />
        <ProductEngineeringIntro />
        <InsightGrid />
        <EngineeringCapabilities />
        <PlatformsSection />
        <WhyScaleDesk />
        <EngineeringProcess />
        <IndustriesSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}

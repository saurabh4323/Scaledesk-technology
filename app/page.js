import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import Showcase from "./components/Showcase";
import StickyScrollStorytelling from "./components/StickyScrollStorytelling";
import About from "./components/About";
import Services from "./components/Service";
import ProductLeadForGrow from "./components/ProductLeadForGrow";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import NarrativeRail from "./components/NarrativeRail";

export default function Home() {
  return (
    <main className="site-flow bg-[#030303] min-h-screen pb-0 flex flex-col">
      <NarrativeRail />
      <Hero />
      <TrustIndicators />
      <Showcase />
      <StickyScrollStorytelling />
      <About />
      {/* <Services /> */}
      <ProductLeadForGrow />
      <CaseStudies />
      <Footer />
    </main>
  );
}

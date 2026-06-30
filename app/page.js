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
import Footer from "./components/Footer";

export default function Home() {
  return (
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
  );
}

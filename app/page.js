import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Services from "./components/Service";
import ProductLeadForGrow from "./components/ProductLeadForGrow";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030303] min-h-screen pb-0 flex flex-col">
      <Hero />
      <TrustIndicators />
      <Showcase />
      <About />
      <Services />
      <ProductLeadForGrow />
      <CaseStudies />
      <Footer />
    </main>
  );
}

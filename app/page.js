import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import ProductLeadForGrow from "./components/ProductLeadForGrow";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen pb-0 flex flex-col">
      <Hero />
      <About />
      <Services />
      <ProductLeadForGrow />
      <CaseStudies />
      <Footer />
    </main>
  );
}

"use client";

import Hero from "./components/Hero";
import PipelineLayers from "./components/PipelineLayers";
import MetricsStack from "./components/MetricsStack";
import FinalCTA from "./components/FinalCTA";
import Footer from "../../components/Footer";

export default function DataPipelinesPage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#00cfff]/30 overflow-hidden font-sans">
      <Hero />
      <PipelineLayers />
      <MetricsStack />
      <FinalCTA />
      <Footer />
    </main>
  );
}

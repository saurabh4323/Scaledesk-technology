"use client";

import Hero from "./components/Hero";
import ServiceLayers from "./components/ServiceLayers";
import MetricsProcess from "./components/MetricsProcess";
import FinalCTA from "./components/FinalCTA";
import Footer from "../../components/Footer";

export default function SoftwareEngineeringPage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#00ff88]/30 overflow-hidden font-sans">
      <Hero />
      <ServiceLayers />
      <MetricsProcess />
      <FinalCTA />
      <Footer />
    </main>
  );
}

"use client";

import Hero from "./components/Hero";
import AutomationLayers from "./components/AutomationLayers";
import MetricsUseCases from "./components/MetricsUseCases";
import FinalCTA from "./components/FinalCTA";
import Footer from "../../components/Footer";

export default function AIAutomationPage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#7b61ff]/30 overflow-hidden font-sans">
      <Hero />
      <AutomationLayers />
      <MetricsUseCases />
      <FinalCTA />
      <Footer />
    </main>
  );
}

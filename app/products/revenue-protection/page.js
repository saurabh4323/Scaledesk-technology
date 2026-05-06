"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/Footer";

// Sections
import Hero from "./components/Hero";
import ThreatTicker from "./components/ThreatTicker";
import ProblemSection from "./components/ProblemSection";
import ProtectionLayers from "./components/ProtectionLayers";
import FinalCTA from "./components/FinalCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RevenueProtectionPage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-blue-500/30 overflow-hidden">
      <Hero />
      <ThreatTicker />
      <ProblemSection />
      <ProtectionLayers />
      <FinalCTA />
      <Footer />
    </main>
  );
}

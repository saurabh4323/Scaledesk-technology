"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/Footer";

// Component Imports
import Hero from "./components/Hero";
import DataStreamTicker from "./components/DataStreamTicker";
import WhatIsIt from "./components/WhatIsIt";
import CapabilitiesScroll from "./components/CapabilitiesScroll";
import LiveDashboard from "./components/LiveDashboard";

import ModelAccuracy from "./components/ModelAccuracy";
import UseCases from "./components/UseCases";
import Integrations from "./components/Integrations";
import FinalCTA from "./components/FinalCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIAnalyticsProductPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Smooth scroll logic or Lenis could go here if needed
    ScrollTrigger.refresh();
  }, []);

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen relative overflow-hidden selection:bg-[#7b61ff]/30">
      <Hero />
      <DataStreamTicker />
      <WhatIsIt />
      <CapabilitiesScroll />
      <LiveDashboard />

      <ModelAccuracy />
      <UseCases />
      <Integrations />
      <FinalCTA />
      
      <Footer />

      <style jsx global>{`
        .glass-dark {
          background: rgba(15, 15, 15, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #222;
        }
      `}</style>
    </main>
  );
}

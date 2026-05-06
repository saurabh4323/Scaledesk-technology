"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPABILITIES = [
  {
    title: "Predictive Revenue Forecasting",
    headline: "See Revenue 45 Days Out.",
    body: "Our forecasting engine ingests pipeline velocity, deal stage transitions, rep behavior, and market signals to produce a rolling 45-day revenue forecast — updated every 15 minutes.",
    badge: "↑ Forecast Confidence: 94.2%",
    icon: "📈",
    color: "#00ff88"
  },
  {
    title: "Anomaly Detection",
    headline: "Catch What Humans Miss.",
    body: "LeadForGrow monitors 200+ signals in real time. When patterns deviate from baseline — a sudden lead drop, abnormal deal velocity, unusual login behavior — it flags, explains, and recommends action instantly.",
    badge: "3 Anomalies Detected · 2m ago",
    icon: "📡",
    color: "#ff3b3b"
  },
  {
    title: "Cohort & Segment Intelligence",
    headline: "Know Which Segments Actually Convert.",
    body: "Automatically groups leads and customers into behavioral cohorts. Surfaces which segments have highest LTV, fastest close rates, and lowest churn risk — without any manual tagging.",
    badge: "Enterprise Segment · 3.2x LTV",
    icon: "👥",
    color: "#00cfff"
  },
  {
    title: "Attribution Modeling",
    headline: "Every Dollar. Every Touchpoint.",
    body: "Multi-touch attribution models map which channels, campaigns, and reps are actually driving closed revenue — not just last-click vanity metrics.",
    badge: "Email Seq → $420K Influenced",
    icon: "🔗",
    color: "#7b61ff"
  },
  {
    title: "Churn Prediction",
    headline: "Protect Revenue Before It Leaves.",
    body: "Behavioral ML models score every active account on churn probability daily. High-risk accounts are automatically surfaced to CS teams with recommended intervention playbooks.",
    badge: "Account #4821 · Churn Risk: High",
    icon: "🛡️",
    color: "#ffaa00"
  },
  {
    title: "Real-Time Pipeline Intelligence",
    headline: "A Pipeline That Talks Back.",
    body: "Live deal scoring, stage-by-stage conversion analysis, and rep performance benchmarking — updated in real time so your revenue leadership always has ground truth.",
    badge: "Pipeline Health: 87/100",
    icon: "⚡",
    color: "#ffffff"
  }
];

const CapabilitiesScroll = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".cap-panel");
      
      // Initialize panels
      panels.forEach((panel, i) => {
         if (i !== 0) gsap.set(panel, { opacity: 0, y: 100, visibility: "hidden" });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
        }
      });

      // Animate progress bar
      tl.to(".cap-progress-bar", {
         scaleY: 1,
         ease: "none",
         duration: panels.length
      }, 0);

      // Panels swapping
      panels.forEach((panel, i) => {
         if (i === 0) return;
         
         // Add a small pause to read the panel before animating out
         tl.to({}, { duration: 0.5 });
         
         // Fade out previous
         tl.to(panels[i - 1], { 
            opacity: 0, 
            y: -100, 
            duration: 1 
         });
         
         // Fade in current
         tl.to(panel, { 
            visibility: "visible",
            opacity: 1, 
            y: 0, 
            duration: 1 
         }, "<");
         
         // Animate dots
         tl.to(gsap.utils.toArray(".cap-dot")[i-1], { backgroundColor: "#27272a" }, "<");
         tl.to(gsap.utils.toArray(".cap-dot")[i], { backgroundColor: "#3b82f6" }, "<");
      });
      
      // Keep last panel on screen for a moment
      tl.to({}, { duration: 1 });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-black flex overflow-hidden">
      {/* Left Fixed Panel */}
      <div ref={leftRef} className="w-1/3 h-full flex flex-col justify-center px-16 border-r border-white/5 relative">
        <div className="absolute top-20 left-16 flex items-center gap-4">
           <div className="w-1 h-12 bg-zinc-800 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-[#3b82f6] cap-progress-bar h-full origin-top scale-y-0" />
           </div>
           <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Core Capabilities</div>
        </div>

        <h2 className="text-7xl font-bold tracking-tighter leading-none text-white whitespace-pre-line">
          Six Engines.{"\n"}
          One Platform.
        </h2>

        <div className="mt-16 flex gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-zinc-800 cap-dot" />
          ))}
        </div>
      </div>

      {/* Right Panels */}
      <div className="w-2/3 h-full relative">
        {CAPABILITIES.map((cap, i) => (
          <div key={i} className="cap-panel absolute inset-0 flex items-center justify-center px-24">
            <div className="max-w-3xl">
               <div className="text-8xl mb-12 grayscale opacity-50">{cap.icon}</div>
               <div className="mb-8 font-black uppercase tracking-[0.4em] text-xs" style={{ color: cap.color }}>{cap.title}</div>
               <h3 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-10 leading-[0.9]">{cap.headline}</h3>
               <p className="text-2xl text-zinc-400 font-light leading-relaxed mb-12">{cap.body}</p>
               <div className="inline-block px-6 py-3 rounded-2xl border border-white/10 glass-dark text-[11px] font-black uppercase tracking-widest text-white shadow-2xl">
                 <span className="mr-3" style={{ color: cap.color }}>●</span> {cap.badge}
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesScroll;

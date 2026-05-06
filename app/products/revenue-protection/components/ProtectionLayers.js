"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProtectionLayers() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const dots = gsap.utils.toArray(".layer-dot");
      const panels = gsap.utils.toArray(".layer-panel");
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: true,
        animation: gsap.timeline()
          .to(".layer-progress", { height: "100%", ease: "none" })
          .to(".layers-wrapper", {
             yPercent: -100 * (panels.length - 1) / panels.length,
             ease: "none"
          }, 0)
      });
      
      panels.forEach((panel, i) => {
         ScrollTrigger.create({
           trigger: containerRef.current,
           start: `top+=${i * 100}% top`,
           end: `top+=${(i + 1) * 100}% top`,
           onEnter: () => setActiveDot(i),
           onEnterBack: () => setActiveDot(i),
         });
      });
      
      function setActiveDot(index) {
         dots.forEach((dot, i) => {
            if (i === index) {
               gsap.to(dot, { backgroundColor: "#3b82f6", boxShadow: "0 0 10px #3b82f6", duration: 0.3 });
            } else {
               gsap.to(dot, { backgroundColor: "#333", boxShadow: "none", duration: 0.3 });
            }
         });
      }
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const layers = [
    {
       title: "Stop Fraud Before It Clears.",
       body: "Multi-layer fraud scoring on every transaction — device fingerprinting, velocity checks, behavioral biometrics, and graph-based network analysis — all in under 50ms.",
       color: "#3b82f6",
       metric: "50ms avg. detection time",
       stats: ["99.1% Detection Rate", "0.03% False Positive Rate", "24/7 Active Monitoring"]
    },
    {
       title: "Catch Churn 45 Days Early.",
       body: "Behavioral ML models score every active account daily across 80+ engagement signals. High-risk accounts trigger automated CS playbooks — before the customer even thinks about leaving.",
       color: "#818cf8",
       metric: "45-day avg. early warning",
       stats: ["67% Churn Reduction", "80+ Signals Monitored", "Auto Playbook Triggers"]
    },
    {
       title: "Find the Leaks You Don't Know Exist.",
       body: "Automated reconciliation across billing systems, payment processors, and CRM data catches underbilling, failed retries, and dunning failures that silently drain revenue month over month.",
       color: "#60a5fa",
       metric: "$284K avg. recovered per enterprise client",
       stats: ["5–9% Revenue Recovered", "Automated Reconciliation", "Real-time Alerts"]
    },
    {
       title: "Turn Failed Payments Into Recovered Revenue.",
       body: "Intelligent retry logic, card updater integration, and dunning sequence optimization recovers payments that would otherwise churn silently — with zero manual intervention.",
       color: "#3b82f6",
       metric: "89% payment recovery rate",
       stats: ["Intelligent Retry Engine", "Auto Card Updater", "Smart Dunning Sequences"]
    },
    {
       title: "Protection That Stays Compliant.",
       body: "Every protection layer operates within PCI DSS, SOC 2 Type II, and GDPR frameworks. Full audit trails, encrypted data pipelines, and role-based access — built in, not bolted on.",
       color: "#818cf8",
       metric: "SOC 2 Type II Certified",
       stats: ["PCI DSS Compliant", "GDPR Ready", "Full Audit Trail"]
    }
  ];

  return (
    <div ref={containerRef} className="h-screen bg-black flex overflow-hidden border-y border-white/5">
       {/* Left Fixed Panel */}
       <div className="w-1/3 h-full flex flex-col justify-center px-12 relative z-10 border-r border-white/5 bg-black">
          <div className="text-[11px] tracking-[0.4em] uppercase text-zinc-500 mb-6 font-black">PROTECTION LAYERS</div>
          <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter">
             <span className="text-white block">Five Shields.</span>
             <span className="text-zinc-600 block">One System.</span>
          </h2>
          
          <div className="relative h-40 w-1 bg-white/10 rounded-full mt-8">
             <div className="layer-progress absolute top-0 left-0 w-full bg-blue-500 rounded-full" style={{ height: '0%' }}></div>
             <div className="absolute top-0 -left-1.5 h-full flex flex-col justify-between">
                {[0,1,2,3,4].map(i => (
                  <div key={i} className="layer-dot w-4 h-4 rounded-full bg-[#333]"></div>
                ))}
             </div>
          </div>
       </div>
       
       {/* Right Scrolling Panels */}
       <div className="w-2/3 h-full relative overflow-hidden bg-[#0a0a0a]">
          <div className="layers-wrapper w-full h-[500%] flex flex-col">
            {layers.map((layer, i) => (
              <div key={i} className="layer-panel w-full h-[20%] flex flex-col justify-center px-16 bg-[#050505]">
                 <div className="max-w-[600px]">
                    <h3 className="text-4xl font-black mb-6 tracking-tighter" style={{ color: layer.color }}>{layer.title}</h3>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-10">{layer.body}</p>
                    
                    <div className="inline-block px-4 py-2 border rounded text-[11px] uppercase tracking-widest font-bold mb-10 bg-white/5" style={{ borderColor: layer.color, color: layer.color }}>
                       {layer.metric}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                       {layer.stats.map((stat, idx) => (
                          <div key={idx} className="text-sm text-zinc-300 font-bold uppercase tracking-wider">{stat}</div>
                       ))}
                    </div>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </div>
  );
}

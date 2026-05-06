"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  { id: '01', t: "Connect", d: "Integrate with your CRM, data warehouse, and third-party sources in under 48 hours.", icon: "🔌" },
  { id: '02', t: "Ingest", d: "LeadForGrow maps and normalizes your revenue, behavioral, and operational data streams.", icon: "🧠" },
  { id: '03', t: "Model", d: "Our ML pipeline trains on your historical data and deploys custom models scoped to your business.", icon: "⬡" },
  { id: '04', t: "Detect", d: "Real-time inference runs on every event — leads, deals, transactions, logins — 24/7.", icon: "📡" },
  { id: '05', t: "Surface", d: "Insights, anomalies, and recommendations are pushed via CRM, Slack, or email.", icon: "🔔" },
  { id: '06', t: "Improve", d: "Models retrain continuously on new outcomes, getting smarter with every closed deal.", icon: "🔄" }
];

const HowItWorks = () => {
  const horizontalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".step-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + horizontalRef.current.offsetWidth,
        }
      });
    }, triggerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#050505]">
      <div ref={horizontalRef} className="flex flex-nowrap h-screen">
        {STEPS.map((step, i) => (
          <section key={i} className="step-panel w-screen h-full flex flex-col items-center justify-center shrink-0 px-20 relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0" />
             
             <div className="relative z-10 max-w-4xl text-center group">
                <div className="text-[120px] mb-12 opacity-80 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                <div className="text-[14px] font-black tracking-[0.6em] text-[#7b61ff] uppercase mb-10">{step.id} / Implementation Phase</div>
                <h3 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-10 text-white">{step.t}</h3>
                <p className="text-2xl md:text-3xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">{step.d}</p>
                
                {/* Visual Progress Line */}
                <div className="absolute top-1/2 -right-full w-full h-[2px] border-t-2 border-dashed border-[#7b61ff]/10 group-hover:border-[#7b61ff]/30 transition-colors" />
             </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

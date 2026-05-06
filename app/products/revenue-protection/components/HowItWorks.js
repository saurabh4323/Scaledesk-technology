"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowItWorks() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
       const sections = gsap.utils.toArray(".step-panel");
       
       gsap.to(sections, {
         xPercent: -100 * (sections.length - 1),
         ease: "none",
         scrollTrigger: {
           trigger: containerRef.current,
           pin: true,
           scrub: 1,
           end: () => "+=" + scrollRef.current.offsetWidth
         }
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { title: "MONITOR", icon: "👁️", body: "Every transaction, login, payment, and behavioral signal is ingested and analyzed in real time." },
    { title: "DETECT", icon: "📡", body: "ML models score each event against fraud patterns, churn signals, and revenue leak indicators simultaneously." },
    { title: "DECIDE", icon: "⚡", body: "Sub-50ms decisioning engine determines threat level and routes to the appropriate protection response — block, flag, or allow." },
    { title: "RESPOND", icon: "🛡️", body: "Automated responses execute instantly — blocking fraud, triggering CS playbooks, retrying failed payments, alerting your team." },
    { title: "REPORT", icon: "📊", body: "Every action is logged with full audit trail. Revenue recovered, threats blocked, and protection ROI are surfaced in your dashboard." },
  ];

  return (
    <div ref={containerRef} className="h-screen bg-black overflow-hidden relative">
       <div className="absolute top-20 left-12 z-10">
         <h2 className="text-[12px] font-black text-blue-500 tracking-[0.5em] uppercase mb-8">How It Works</h2>
       </div>
       
       <div ref={scrollRef} className="h-full flex w-[500vw]">
          {steps.map((step, i) => (
             <div key={i} className="step-panel w-screen h-full flex flex-col items-center justify-center relative">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -z-10"></div>
                <div className="w-24 h-24 rounded-full bg-[#0f0f0f] border-2 border-blue-500 flex items-center justify-center text-4xl mb-8 relative shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                   {step.icon}
                   <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm">
                      {i+1}
                   </div>
                </div>
                <h3 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase">{step.title}</h3>
                <p className="text-xl text-zinc-400 font-medium max-w-md text-center leading-relaxed">{step.body}</p>
             </div>
          ))}
       </div>
    </div>
  );
}

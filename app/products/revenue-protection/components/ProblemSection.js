"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProblemSection() {
  const ref = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".prob-card", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.fromTo(".prob-line", 
        { scaleX: 0, transformOrigin: "left" },
        { 
          scaleX: 1, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".prob-footer",
            start: "top 80%"
          }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "Fraud",
      stat: "$8.7 Trillion",
      label: "Lost globally to payment fraud annually",
      body: "Sophisticated fraud rings probe your payment infrastructure 24/7. Manual review catches less than 30% of it.",
      color: "#3b82f6", // blue-500
      icon: "💸"
    },
    {
      title: "Churn",
      stat: "67% of churn",
      label: "Is preventable with early intervention",
      body: "By the time a customer cancels, the signal was there 45 days ago. You just didn't have a system watching for it.",
      color: "#818cf8", // indigo-400
      icon: "⚠️"
    },
    {
      title: "Leakage",
      stat: "5–9% of revenue",
      label: "Leaked silently through billing & ops gaps",
      body: "Underbilling, failed retries, duplicate charges, expired cards — small leaks that compound into massive losses at scale.",
      color: "#60a5fa", // blue-400
      icon: "📉"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-[#020202] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
      <div className="max-w-[1240px] mx-auto z-10 relative">
        <h2 className="text-4xl md:text-[52px] font-black leading-tight mb-20 tracking-tighter">
          <span className="text-white block">Revenue Doesn't Vanish Overnight.</span>
          <span className="text-blue-500 italic block">It Bleeds Out Slowly.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, i) => (
            <div key={i} className="prob-card bg-[#0f0f0f] p-10 border-l-4 rounded-r-2xl border-y border-r border-white/5 hover:bg-[#141414] transition-colors" style={{ borderLeftColor: card.color }}>
              <div className="text-4xl mb-6">{card.icon}</div>
              <div className="text-4xl mb-4 font-black" style={{ color: card.color }}>{card.stat}</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-6">{card.label}</div>
              <p className="text-zinc-400 leading-relaxed font-medium text-lg">{card.body}</p>
            </div>
          ))}
        </div>
        
        <div className="prob-footer text-center">
          <h3 className="text-2xl text-white font-black tracking-tighter mb-6 uppercase">LeadForGrow Revenue Protection closes all three.</h3>
          <div className="prob-line h-[2px] w-full max-w-[400px] mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

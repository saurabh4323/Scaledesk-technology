"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Metrics() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
       gsap.from(".metric-card", {
          scrollTrigger: {
             trigger: containerRef.current,
             start: "top 70%"
          },
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out"
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const metrics = [
    { val: "$2.4B+", label: "Revenue Protected to Date", color: "#3b82f6" },
    { val: "99.1%", label: "Fraud Detection Accuracy", color: "#818cf8" },
    { val: "50ms", label: "Avg. Threat Response Time", color: "#60a5fa" },
    { val: "67%", label: "Average Churn Reduction", color: "#3b82f6" },
    { val: "0.03%", label: "False Positive Rate", color: "#818cf8" },
    { val: "89%", label: "Failed Payment Recovery Rate", color: "#60a5fa" }
  ];

  return (
    <section ref={containerRef} className="py-48 px-6 lg:px-12 bg-black border-y border-white/5">
       <div className="max-w-[1240px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-20 text-white">The Numbers Behind the Shield.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {metrics.map((m, i) => (
                <div key={i} className="metric-card group bg-[#0f0f0f] border border-white/5 p-10 rounded-2xl hover:-translate-y-2 transition-all duration-300" style={{ '--hover-color': m.color }}>
                   <div className="text-5xl font-black mb-4 transition-colors tracking-tighter" style={{ color: m.color, textShadow: `0 0 20px ${m.color}40` }}>
                      {m.val}
                   </div>
                   <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{m.label}</div>
                   <div className="mt-10 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-current w-0 group-hover:w-full transition-all duration-1000 ease-out" style={{ color: m.color }}></div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

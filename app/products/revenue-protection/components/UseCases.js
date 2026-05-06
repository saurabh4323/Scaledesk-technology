"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function UseCases() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
       gsap.from(".use-card:nth-child(odd)", {
          scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
          x: -50, opacity: 0, stagger: 0.2, duration: 0.8
       });
       gsap.from(".use-card:nth-child(even)", {
          scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
          x: 50, opacity: 0, stagger: 0.2, duration: 0.8
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const cases = [
    { title: "Finance Teams", tag: "Finance", body: "Real-time fraud alerts and revenue reconciliation that close the books with confidence." },
    { title: "Revenue Operations", tag: "RevOps", body: "Pipeline protection and churn prevention that keeps your forecast reliable quarter after quarter." },
    { title: "Customer Success", tag: "CS Teams", body: "Automated early-warning system surfaces at-risk accounts 45 days before churn — with playbooks ready." },
    { title: "Engineering & Security", tag: "Engineering", body: "API-first architecture with full audit logging, SOC 2 compliance, and enterprise-grade SLAs." },
    { title: "Executive Leadership", tag: "C-Suite", body: "Board-ready revenue protection metrics — threats blocked, revenue recovered, ROI on protection spend." },
    { title: "Growth Teams", tag: "Growth", body: "Protect the revenue your campaigns generate. Fraud prevention that doesn't block legitimate customers." },
  ];

  return (
    <section ref={containerRef} className="py-48 px-6 lg:px-12 bg-[#020202]">
       <div className="max-w-[1240px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-24 text-white">Built for Every Team That Touches Revenue.</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
             {cases.map((c, i) => (
                <div key={i} className="use-card bg-[#0f0f0f] border border-white/5 p-12 rounded-[2rem] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                   <div className="absolute top-8 right-8 px-4 py-2 bg-white/5 rounded-full text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{c.tag}</div>
                   <h3 className="text-3xl font-black tracking-tight text-white mb-6 group-hover:text-blue-500 transition-colors">{c.title}</h3>
                   <p className="text-zinc-400 leading-relaxed text-lg font-medium">{c.body}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

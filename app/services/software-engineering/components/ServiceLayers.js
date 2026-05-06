"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PANELS = [
  {
    title: "Full-Stack Product Development",
    headline: "End-to-End. Zero Handoff Problems.",
    body: "We own the entire stack — React/Next.js frontend, Node/Python backend, PostgreSQL/MongoDB data layer. One team, one codebase, zero blame-shifting.",
    stats: "MVP in 6 Weeks · Full-Stack Ownership · 96% Test Coverage",
    color: "#3b82f6",
    visual: (
      <div className="flex flex-col gap-4 items-center scale-90 md:scale-100">
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="w-48 py-4 bg-zinc-900 border border-white/20 rounded-lg text-center text-xs font-bold text-white uppercase tracking-widest">Frontend (Next.js)</motion.div>
        <div className="w-1 h-6 bg-white/20"></div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:0.2}} className="w-48 py-4 bg-zinc-900 border border-white/20 rounded-lg text-center text-xs font-bold text-white uppercase tracking-widest">Backend (Node/Go)</motion.div>
        <div className="w-1 h-6 bg-white/20"></div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:0.4}} className="w-48 py-4 bg-zinc-900 border border-white/20 rounded-lg text-center text-xs font-bold text-white uppercase tracking-widest">Database (PostgreSQL)</motion.div>
      </div>
    )
  },
  {
    title: "API & Microservices",
    headline: "APIs That Scale to Millions.",
    body: "REST, GraphQL, gRPC — designed for high throughput, built with versioning, rate limiting, and observability from day one.",
    stats: "10M+ Requests/day · <50ms P99 · Auto-scaling",
    color: "#60a5fa",
    visual: (
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute w-20 h-20 bg-blue-500/10 rounded-lg border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400">API Gateway</div>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-400 rounded-full"
            animate={{
              x: [Math.cos(i * Math.PI/2) * 100, 0],
              y: [Math.sin(i * Math.PI/2) * 100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>
    )
  },
  {
    title: "System Architecture",
    headline: "Architecture That Survives Growth.",
    body: "We design systems for where you're going, not where you are — event-driven architecture, CQRS, domain-driven design for complex domains.",
    stats: "Enterprise-Grade · Fault Tolerant · Future-Proof",
    color: "#94a3b8",
    visual: (
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="w-24 h-24 bg-zinc-900 border border-white/20 rounded-lg flex items-center justify-center text-[10px] text-center font-bold">Event Producer</div>
        <div className="w-24 h-24 bg-zinc-900 border border-white/20 rounded-lg flex items-center justify-center text-[10px] text-center font-bold">Message Bus</div>
        <div className="w-24 h-24 bg-zinc-900 border border-white/20 rounded-lg flex items-center justify-center text-[10px] text-center font-bold">Consumer A</div>
        <div className="w-24 h-24 bg-zinc-900 border border-white/20 rounded-lg flex items-center justify-center text-[10px] text-center font-bold">Consumer B</div>
      </div>
    )
  },
  {
    title: "Performance Engineering",
    headline: "Fast by Design. Not by Accident.",
    body: "Database query optimization, caching strategies, CDN configuration, and load testing — we make slow systems fast and keep fast systems fast.",
    stats: "10x Faster · Core Web Vitals 100 · Sub-100ms TTFB",
    color: "#cbd5e1",
    visual: (
      <div className="w-64 h-32 bg-zinc-900 border border-white/10 rounded relative overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <motion.path
            d="M0 80 Q 50 80, 100 80 T 200 80"
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.3"
          />
          <motion.path
            d="M0 80 Q 50 80, 80 20 T 150 10 T 200 10"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
    )
  },
  {
    title: "Legacy Modernization",
    headline: "Kill the Legacy. Keep the Business Logic.",
    body: "We migrate monoliths to modern architectures without downtime, data loss, or business disruption — strangler fig pattern, zero-downtime deployments.",
    stats: "Zero Downtime · Data Integrity 100% · 40% Cost Reduction",
    color: "#ffffff",
    visual: (
      <div className="flex gap-8 items-center text-zinc-400">
        <div className="p-4 bg-zinc-900 border border-white/10 rounded font-mono text-[8px]">
          class LegacySystem {'{'}<br/>
          &nbsp;&nbsp;doEverything() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;// outdated<br/>
          &nbsp;&nbsp;{'}'}<br/>
          {'}'}
        </div>
        <div className="text-2xl text-white">→</div>
        <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded font-mono text-[8px] text-blue-400">
          service Users {'{'} ... {'}'}<br/>
          service Auth {'{'} ... {'}'}<br/>
          service Billing {'{'} ... {'}'}
        </div>
      </div>
    )
  }
];

export default function ServiceLayers() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel-item");
      const dots = gsap.utils.toArray(".dot-indicator");
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(".progress-line-fill", {
            height: `${self.progress * 100}%`,
            duration: 0.1,
            ease: "none"
          });
          
          const activeIndex = Math.min(
            Math.floor(self.progress * PANELS.length),
            PANELS.length - 1
          );
          
          dots.forEach((dot, i) => {
            if (i === activeIndex) {
              gsap.to(dot, { backgroundColor: PANELS[i].color, scale: 1.5, duration: 0.3 });
            } else {
              gsap.to(dot, { backgroundColor: "#333", scale: 1, duration: 0.3 });
            }
          });
          
          // Panel transitions
          gsap.to(".panels-wrapper", {
            yPercent: -20 * activeIndex,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-black flex overflow-hidden border-y border-white/5">
      {/* Left Fixed Panel */}
      <div className="w-1/3 h-full flex flex-col justify-center px-12 relative z-10 border-r border-white/5 bg-black">
        <div className="text-[11px] tracking-[0.4em] uppercase text-zinc-500 mb-6 font-black font-[family-name:var(--font-jetbrains-mono)]">WHAT WE BUILD</div>
        <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter leading-tight uppercase">
          <div className="text-white">Every Layer.</div>
          <div className="text-blue-500">Every Stack.</div>
        </h2>
        
        <div className="relative h-48 w-[2px] bg-white/10 rounded-full mt-8">
          <div className="progress-line-fill absolute top-0 left-0 w-full bg-blue-600 rounded-full h-0 transition-colors duration-500" />
          <div className="absolute top-0 -left-[5px] h-full flex flex-col justify-between py-2">
            {PANELS.map((_, i) => (
              <div key={i} className="dot-indicator w-3 h-3 rounded-full bg-[#333] transition-all" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Right Scrolling Panels */}
      <div className="w-2/3 h-full relative overflow-hidden">
        <div className="panels-wrapper w-full h-[500%] flex flex-col">
          {PANELS.map((panel, i) => (
            <div key={i} className="panel-item w-full h-[20%] flex flex-col justify-center px-20 bg-[#050505]">
              <div className="max-w-[700px] space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-1 bg-current" style={{ color: panel.color }}></div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 font-[family-name:var(--font-jetbrains-mono)]">{panel.title}</span>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                  <div className="flex-1 space-y-6">
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
                      {panel.headline}
                    </h3>
                    <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                      {panel.body}
                    </p>
                    <div className="inline-block px-4 py-2 border rounded text-[11px] uppercase tracking-widest font-black bg-white/5 border-white/10 text-zinc-300 font-[family-name:var(--font-jetbrains-mono)]">
                      {panel.stats}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl min-w-[280px]">
                    {panel.visual}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

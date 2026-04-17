"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERVICES = [
  { id: 1, title: 'Platform Engineering', desc: 'Scalable, production-grade digital systems', group: 'left', y: '100px' },
  { id: 2, title: 'Product Development', desc: 'End-to-end digital product delivery', group: 'left', y: '350px' },
  { id: 3, title: 'Intelligent Automation', desc: 'Enterprise workflow & process automation', group: 'left', y: '600px' },
  { id: 4, title: 'Venture Acceleration', desc: 'Rapid build cycles from zero to market', group: 'right', y: '100px' },
  { id: 5, title: 'Cloud Infrastructure', desc: 'High-availability distributed architecture', group: 'right', y: '350px' },
  { id: 6, title: 'Engineering Advisory', desc: 'Strategic architecture & technology consulting', group: 'right', y: '600px' }
];

export default function Services() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: ".services-trigger",
            start: "top 75%",
         }
      });

      // 1. Core Ignite
      tl.fromTo(".svc-engine", 
         { scale: 0, opacity: 0 },
         { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.5)" }
      );

      // 2. SVG Lines draw
      const lines = gsap.utils.toArray(".svc-line");
      tl.to(lines, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", stagger: 0.15 }, "-=0.2");

      // 3. Cards reveal
      tl.fromTo(".svc-card", 
         { x: (i, el) => el.classList.contains('left-card') ? 30 : -30, opacity: 0 },
         { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
         "-=1.2"
      );

      // Removed endless idle animations (particles, ring spins, pulses, floating) to maintain a static, premium gradient aesthetic.
    }, containerRef);
    
    // Depth Parallax Tracking
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      gsap.to(".svc-parallax-group", { 
         rotateY: x * 15, 
         rotateX: -y * 15, 
         duration: 2, 
         ease: "power2.out" 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  const getPath = (id) => {
     switch(id) {
         case 1: return "M620,400 C500,400 500,150 360,150";
         case 2: return "M620,400 L360,400";
         case 3: return "M620,400 C500,400 500,650 360,650";
         case 4: return "M620,400 C740,400 740,150 880,150";
         case 5: return "M620,400 L880,400";
         case 6: return "M620,400 C740,400 740,650 880,650";
         default: return "";
     }
  };

  return (
    <section id="services" ref={containerRef} className="relative w-full py-5 overflow-hidden services-trigger">
       
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center mb-24 relative">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Engineering Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">for Scale</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light mx-auto max-w-2xl">
            From MVP to enterprise infrastructure — we design, build, and scale mission-critical systems.
          </p>
          <div className="mt-8 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
        </div>

        {/* Desktop System Visualization (Hidden on Mobile) */}
        <div className="hidden lg:block relative w-full h-[700px] mb-0" style={{ perspective: '1200px' }}>
            <div className="svc-parallax-group w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
            {/* SVG Wire Mesh Layer */}
            <svg viewBox="0 0 1240 700" className="absolute inset-0 pointer-events-none">
                <defs>
                   <linearGradient id="lineGlowLeft" x1="1" y1="0" x2="0" y2="0">
                       <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                       <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
                   </linearGradient>
                   <linearGradient id="lineGlowRight" x1="0" y1="0" x2="1" y2="0">
                       <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                       <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
                   </linearGradient>
                </defs>

                {SERVICES.map((s) => (
                    <g key={`wire-${s.id}`}>
                        {/* Static Base Path Gradient */}
                        <path 
                           d={getPath(s.id)} 
                           className="svc-line transition-all duration-500"
                           stroke={hoveredCard === s.id ? "rgba(96,165,250,0.8)" : "rgba(59,130,246,0.3)"} 
                           strokeWidth={hoveredCard === s.id ? "2.5" : "1.5"}
                           fill="none" 
                           strokeDasharray="1000"
                           strokeDashoffset="1000"
                           style={{ filter: hoveredCard === s.id ? 'drop-shadow(0px 0px 8px rgba(96,165,250,0.6))' : 'none' }}
                        />
                    </g>
                ))}
            </svg>

            {/* Central Node: ScaleDesk Engine */}
            <div className="svc-engine absolute top-[400px] left-[620px] -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center pointer-events-auto group">
               <div className="absolute inset-2 rounded-full border border-blue-500/20 bg-gradient-to-tr from-blue-900/10 to-transparent" />
               <div className="absolute inset-6 rounded-full border border-blue-400/30 bg-gradient-to-bl from-blue-800/10 to-transparent" />
               
               <div className="w-16 h-16 bg-[#0B0F1A] border border-blue-500/40 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center backdrop-blur-md group-hover:shadow-[0_0_50px_rgba(96,165,250,0.6)] transition-all duration-500">
                   <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]" />
               </div>
               
               <div className="absolute -bottom-8 whitespace-nowrap text-xs font-semibold text-blue-400 tracking-widest uppercase">ScaleDesk Engine</div>
            </div>

            {/* Floating Service Cards */}
            {SERVICES.map((s) => (
                <div 
                   key={s.id}
                   onMouseEnter={() => setHoveredCard(s.id)}
                   onMouseLeave={() => setHoveredCard(null)}
                   className={`absolute w-[300px] h-[100px] -translate-y-1/2 pointer-events-auto ${s.group === 'left' ? 'left-[30px]' : 'left-[910px]'}`}
                   style={{ top: s.y }}
                >
                   <div className={`svc-card ${s.group}-card w-full h-full bg-[#0d121f]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:bg-[#111827]/95 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] flex items-center gap-4 relative overflow-hidden group`}>
                      
                      {/* Connection Anchor Dot */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500/50 transition-all duration-300 ${hoveredCard === s.id ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,1)] scale-150' : ''} ${s.group === 'left' ? '-right-1' : '-left-1'}`} />

                      {/* Internal Hover Sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                      
                      {/* Abstract Icon Block */}
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex flex-wrap items-center justify-center gap-1 p-2.5 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                         {/* Very minimal geometric abstract icon based on ID */}
                         {s.id % 2 === 0 ? (
                             <div className="w-full h-[3px] bg-blue-400/80 rounded-sm" />
                         ) : (
                             <div className="w-2.5 h-2.5 bg-indigo-400/80 rounded-sm" />
                         )}
                         {s.id % 3 === 0 && <div className="w-2.5 h-2.5 bg-blue-300/80 rounded-full" />}
                         {s.id === 5 && <div className="w-full h-[3px] bg-indigo-400/80 rounded-sm mt-1" />}
                         {s.id === 1 && <div className="w-2.5 h-2.5 bg-cyan-400/80 rounded-sm" />}
                      </div>

                      <div className="flex flex-col relative z-10">
                         <h3 className="text-white font-medium text-base mb-1 group-hover:text-blue-200 transition-colors">{s.title}</h3>
                         <p className="text-zinc-500 text-xs font-light leading-tight">{s.desc}</p>
                      </div>
                   </div>
                </div>
            ))}
            </div>
        </div>

        {/* Mobile Linear Fallback (Shows below large devices) */}
        <div className="lg:hidden flex flex-col gap-6 relative z-10 mb-12">
            <div className="w-full flex justify-center py-8">
               <div className="w-24 h-24 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-t border-l border-blue-400/80 animate-spin" />
                  <div className="w-10 h-10 bg-[#0B0F1A] border border-blue-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                      <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
               </div>
            </div>
            {SERVICES.map((s) => (
                <div key={s.id} className="w-full bg-[#0d121f]/90 border border-white/5 rounded-2xl p-5 shadow-lg flex items-center gap-4 hover:border-blue-500/30 transition-colors">
                     <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex flex-wrap items-center justify-center gap-1 p-2">
                         <div className="w-2 h-2 bg-blue-400 rounded-sm" />
                         <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                     </div>
                     <div>
                         <h3 className="text-white font-medium text-[15px] mb-1">{s.title}</h3>
                         <p className="text-zinc-500 text-xs">{s.desc}</p>
                     </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

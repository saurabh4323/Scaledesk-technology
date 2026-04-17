"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IDENTITY_CARDS = [
  {
    title: "Enterprise Focus",
    desc: "Built to handle massive scale, rigid security, and complex integrations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
    )
  },
  {
    title: "Proven Rapid Delivery",
    desc: "Engineering frameworks that accelerate time-to-market without compromising quality.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    )
  },
  {
    title: "Expert Engineering",
    desc: "Top-tier talent seamlessly integrating into your workflow as an extension of your team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    )
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't just build and leave. We scale, optimize, and maintain your core systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )
  }
];

const PROCESS_STEPS = [
  { title: "Think", desc: "Strategic Engineering Alignment" },
  { title: "Build", desc: "Rapid MVP & System Development" },
  { title: "Scale", desc: "Infrastructure & Automation" },
  { title: "Optimize", desc: "Continuous Improvement" }
];

export default function About() {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  
  // Refs for ScrollTrigger mapping
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };
  
  const processWrapRef = useRef(null);
  const metricsWrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Safety check for empty refs during React 19 StrictMode remounts
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // ════ SCENE 1 & 2: Content && System Visual ════
      const scene1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scene-1",
          start: "top 75%",
        }
      });
      
      // Reveal Left Text
      scene1Tl.fromTo(leftContentRef.current.children, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      
      // Right Side Depth Panel Entry
      scene1Tl.fromTo(".arch-panel", 
        { opacity: 0, scale: 0.85, rotateX: 30 }, 
        { opacity: 1, scale: 1, rotateX: 15, duration: 1.5, ease: "power3.out" }, 0
      );

      // Chaos Left Nodes & System Core initial states
      const chaosNodes = document.querySelectorAll(".chaos-node");
      gsap.set(chaosNodes, { opacity: 0 });
      gsap.set(".transformation-wave", { left: "-20%", opacity: 0 });
      gsap.set(".ui-element", { opacity: 0, x: 20 });
      gsap.set(".system-core-rings", { scale: 0.5, opacity: 0 });

      // Prepare Stable Lines
      const stableLines = document.querySelectorAll(".stable-lines path");
      stableLines.forEach(line => {
         const length = line.getTotalLength();
         gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      });

      // 1. Scene Starts: Fade in chaos nodes
      scene1Tl.to(chaosNodes, { opacity: 0.5, duration: 1, stagger: 0.1 }, 0);
      
      // 2. The Transformation Wave Sweeps
      scene1Tl.to(".transformation-wave", { opacity: 1, duration: 0.3 }, 0.5)
              .to(".transformation-wave", { left: "110%", duration: 2.5, ease: "power2.inOut" }, 0.8)
              .to(".transformation-wave", { opacity: 0, duration: 0.5 }, 3.0);
              
      // 3. System Core Activates as wave passes center (approx 1.2s)
      scene1Tl.to(".system-core-rings", { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.5)" }, 1.2);
      
      // 4. Stable Lines draw out sequentially
      scene1Tl.to(stableLines, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", stagger: 0.25 }, 1.4);
      
      // 5. UI Elements Pop In aligning with line sequence
      scene1Tl.to(".ui-element", { opacity: 1, x: 0, duration: 1, stagger: 0.25, ease: "power3.out" }, 1.9);

      // --- Micro-Animations ---
      
      // Core Radial Energy Waves looping
      gsap.to(".core-wave", { 
         scale: 2.5, opacity: 0, duration: 2.5, stagger: 1.2, repeat: -1, ease: "power2.out"
      });
      
      // Core Node Pulse
      gsap.to(".core-node", { filter: "drop-shadow(0px 0px 30px rgba(59,130,246,1))", duration: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" });

      // Chaos Nodes flickering
      gsap.to(chaosNodes, { opacity: 0.1, duration: () => gsap.utils.random(0.5, 2), yoyo: true, repeat: -1, stagger: { each: 0.2, from: "random" } });

      // Floating Cards Drift
      const drifts = gsap.utils.toArray(".ui-drift");
      drifts.forEach((drift, i) => {
         gsap.to(drift, { 
           y: gsap.utils.random(-8, 8), 
           x: gsap.utils.random(-4, 4),
           rotation: gsap.utils.random(-3, 3),
           duration: gsap.utils.random(4, 6), 
           yoyo: true, repeat: -1, ease: "sine.inOut", delay: i
         });
      });

      // Data Packet Flow Particles
      const uiParticles = document.querySelectorAll(".ui-particles path");
      if (uiParticles.length) {
         gsap.to(uiParticles, { strokeDashoffset: -400, duration: 3, repeat: -1, ease: "none", stagger: 1.0 });
      }

      // Stable Lines subtle pulse
      const stablePaths = document.querySelectorAll(".stable-lines path");
      if (stablePaths.length) {
         gsap.to(stablePaths, { strokeOpacity: 0.3, duration: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
      }

      // ════ SCENE 3: Identity Cards ════
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
          scrollTrigger: {
            trigger: "#scene-3",
            start: "top 80%",
          }
        }
      );

      // ════ SCENE 4: Process Flow ════
      const flowSteps = gsap.utils.toArray(".flow-step");
      const flowLines = gsap.utils.toArray(".flow-connector");
      
      const flowTl = gsap.timeline({
        scrollTrigger: {
          trigger: processWrapRef.current,
          start: "top 85%",
        }
      });
      
      flowSteps.forEach((step, i) => {
        flowTl.fromTo(step, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, i === 0 ? 0 : ">");
        if (flowLines[i]) {
          flowTl.fromTo(flowLines[i], { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "none" });
        }
      });

      // ════ SCENE 5: Metrics Counter ════
      const metrics = gsap.utils.toArray(".metric-val");
      
      metrics.forEach((metric) => {
        const targetNumber = parseFloat(metric.getAttribute("data-target"));
        const suffix = metric.getAttribute("data-suffix") || "";
        const isDecimal = targetNumber % 1 !== 0;
        
        ScrollTrigger.create({
          trigger: metricsWrapRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
             const obj = { val: 0 };
             gsap.to(obj, {
               val: targetNumber,
               duration: 2,
               ease: "power2.out",
               onUpdate: () => {
                 metric.innerHTML = Number(obj.val).toFixed(isDecimal ? 1 : 0) + suffix;
               }
             });
             gsap.fromTo(metric.parentNode, 
                { opacity: 0, filter: "blur(4px)", scale: 0.95 },
                { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.5, ease: "power2.out" }
             );
          }
        });
      });
      
      // ════ SCENE 6: Trust Layer ════
      gsap.fromTo(".trust-logo", 
        { opacity: 0, y: 15 },
        { 
          opacity: 0.3, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", 
          scrollTrigger: { trigger: "#scene-6", start: "top 90%" } 
        }
      );

      // No continuous ambient nodes animation here anymore, moved to scene1Tl above.

    }, containerRef);
    
    // Mouse Parallax Effect 
    const handleMouseMove = (e) => {
      if (!window) return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      // Affect elements inside the container by grabbing their current class
      gsap.to(".arch-panel", { 
         rotateY: -25 + (x * 20), 
         rotateX: 20 + (-y * 15), 
         duration: 2, 
         ease: "power2.out" 
      });
      gsap.to(".ui-element", { x: x * -35, y: y * -35, duration: 2, ease: "power2.out" });
      gsap.to(".deep-bg-grid", { x: x * 40, y: y * 40, duration: 2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
       window.removeEventListener("mousemove", handleMouseMove);
       ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#0a0a0a] border-t border-white/5 py-32 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-800/5 blur-[150px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 flex flex-col gap-32">
        
        {/* ════ SCENE 1 & 2: Main Identity & Visual ════ */}
        <div id="scene-1" className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left: Content Reveal */}
          <div ref={leftContentRef} className="w-full lg:w-1/2 pr-0 lg:pr-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-[1.15] tracking-tight mb-8">
              From Fragmented Systems <br className="hidden md:block"/>
              to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]">Institutional Scale</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
              ScaleDesk transforms disconnected technology into scalable, high-performance systems through structured engineering and automation.
            </p>
            
            <ul className="flex flex-col gap-4 mb-10">
               {[
                  "Enterprise-grade architecture",
                  "Scalable system design",
                  "Automation-first approach",
                  "Long-term technology partnership"
               ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                     <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                     </div>
                     {item}
                  </li>
               ))}
            </ul>

            <div className="h-[1px] w-12 bg-blue-600 mb-8" />
          </div>

          {/* Right: Realistic Enterprise Architecture Panel */}
          <div className="w-full lg:w-1/2 aspect-[4/3] md:aspect-square relative flex items-center justify-center">
            {/* Cinematic Ambient Glow from right */}
            <div className="absolute right-[-15%] top-[40%] -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/60 blur-[150px] rounded-full pointer-events-none mix-blend-screen scale-125" />
            <div className="absolute left-[5%] bottom-[10%] w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="arch-panel w-full h-[85%] relative origin-center" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1400px) rotateX(20deg) rotateY(-25deg) rotateZ(5deg)' }}>
               
                {/* 1. Deepest Layer: Blurred Grid & Base Shadows */}
               <div className="deep-bg-grid absolute inset-[-10%] bg-blue-900/10 rounded-[3rem] blur-[20px] pointer-events-none" style={{ transform: 'translateZ(-120px)' }} />
               
               {/* 2. Main System Panel (Background Base) */}
               <div className="absolute inset-0 bg-[#0a0a0e]/90 border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl overflow-hidden" style={{ transform: 'translateZ(-60px)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
                  
                  {/* Transformation Wave Scanner */}
                  <div className="transformation-wave absolute top-[-10%] bottom-[-10%] w-[3px] bg-blue-400 shadow-[0_0_30px_6px_rgba(96,165,250,0.9)] -left-[20%] opacity-0 z-20 
                    after:absolute after:inset-0 after:-left-[60px] after:w-[60px] after:bg-gradient-to-l after:from-blue-500/40 after:to-transparent" 
                    style={{ transform: 'rotate(8deg)' }} />

                  {/* Header bar of the main system */}
                  <div className="absolute inset-x-0 top-0 h-10 border-b border-indigo-500/10 bg-indigo-500/[0.02] flex items-center px-5 gap-2.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/70 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/70 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                     <div className="ml-auto text-[9px] uppercase tracking-widest text-indigo-300/40 font-mono">Core.Transform_SYS</div>
                  </div>
               </div>

               {/* 3. Mid Layer: The Structured System Grid & Nodes */}
               <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(20px)' }}>
                  
                  {/* Global Flow SVG */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <svg className="w-full h-full overflow-visible" viewBox="0 0 400 400">
                        {/* CHAOS Left Side */}
                        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 14" fill="none">
                           <path d="M20 50 L180 150 M40 120 L150 180 M20 300 L160 220 M10 200 L180 205 M50 350 L170 280" />
                        </g>
                        
                        {/* STABLE Right Side Connectors */}
                        <g className="stable-lines" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" fill="none">
                           <path d="M200 200 L260 80 L380 80" />
                           <path d="M200 200 L280 180 L380 180" />
                           <path d="M200 200 L240 340 L380 340" />
                           <path d="M200 200 L260 280 L340 280" />
                        </g>

                        {/* Animated Packets */}
                        <g className="ui-particles">
                           <path d="M200 200 L260 80 L380 80" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px #60A5FA)' }}/>
                           <path d="M200 200 L280 180 L380 180" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px #60A5FA)' }}/>
                           <path d="M200 200 L240 340 L380 340" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px #60A5FA)' }}/>
                           <path d="M200 200 L260 280 L340 280" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px #60A5FA)' }}/>
                        </g>
                     </svg>
                  </div>
                  
                  {/* Chaos Nodes on Left */}
                  <div className="absolute inset-0">
                     <div className="chaos-node absolute top-[12%] left-[10%] w-2 h-2 bg-zinc-600 rounded-sm pointer-events-auto cursor-pointer hover:!bg-blue-400 hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(96,165,250,1)] transition-all duration-300" />
                     <div className="chaos-node absolute top-[30%] left-[25%] w-3 h-3 bg-zinc-500 rounded-sm pointer-events-auto cursor-pointer hover:!bg-blue-400 hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(96,165,250,1)] transition-all duration-300" />
                     <div className="chaos-node absolute top-[50%] left-[5%] w-2 h-2 bg-zinc-700 rounded-sm pointer-events-auto cursor-pointer hover:!bg-blue-400 hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(96,165,250,1)] transition-all duration-300" />
                     <div className="chaos-node absolute top-[75%] left-[20%] w-3 h-3 bg-zinc-600 rounded-sm pointer-events-auto cursor-pointer hover:!bg-blue-400 hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(96,165,250,1)] transition-all duration-300" />
                     <div className="chaos-node absolute top-[85%] left-[15%] w-2 h-2 bg-zinc-500 rounded-sm pointer-events-auto cursor-pointer hover:!bg-blue-400 hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(96,165,250,1)] transition-all duration-300" />
                     <div className="chaos-node absolute top-[45%] left-[30%] w-4 h-4 border border-zinc-500/30 rounded-sm pointer-events-auto cursor-pointer hover:!border-blue-400 hover:!bg-blue-500/20 hover:!opacity-100 hover:scale-125 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all duration-300" />
                  </div>

                  {/* Dynamic System Core (Center Point) */}
                  <div className="system-core-rings absolute top-1/2 left-1/2 -mt-16 -ml-16 w-32 h-32 flex items-center justify-center">
                     <div className="core-wave absolute inset-0 rounded-full border border-blue-500/50 scale-100 opacity-0" />
                     <div className="core-wave absolute inset-0 rounded-full border border-indigo-400/30 scale-100 opacity-0" style={{ animationDelay: '-1.2s' }} />
                     
                     <div className="absolute inset-2 rounded-full border-t border-r border-blue-400/80 animate-[spin_4s_linear_infinite]" />
                     <div className="absolute inset-4 rounded-full border-b border-l border-indigo-500/60 animate-[spin_3s_linear_infinite_reverse]" />
                     
                     {/* The literal core node generating lines */}
                     <div className="core-node absolute w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_40px_rgba(59,130,246,1)] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-white rounded-full opacity-90" />
                     </div>
                  </div>
               </div>

               {/* 4. Foreground: UI Component Labels */}
               <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(90px)' }}>
                  
                  {/* API Layer */}
                  <div className="ui-element absolute top-[15%] right-[-5%] min-w-[140px] pointer-events-auto group cursor-pointer" style={{ transform: 'rotate(1deg)' }}>
                     <div className="ui-drift">
                        <div className="bg-[#0f111a]/95 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-l-2 border-l-blue-500 flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] group-hover:border-white/30 group-hover:scale-[1.02] relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                           <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)] group-hover:shadow-[0_0_15px_rgba(96,165,250,1)] transition-shadow duration-300" />
                           <span className="text-[11px] uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors font-semibold">API Layer</span>
                        </div>
                     </div>
                  </div>

                  {/* Automation Engine */}
                  <div className="ui-element absolute top-[40%] right-[-10%] min-w-[170px] pointer-events-auto group cursor-pointer" style={{ transform: 'rotate(-1deg)' }}>
                     <div className="ui-drift">
                        <div className="bg-[#0f111a]/95 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-l-2 border-l-indigo-500 flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] group-hover:border-white/30 group-hover:scale-[1.02] relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)] group-hover:shadow-[0_0_15px_rgba(129,140,248,1)] transition-shadow duration-300" />
                           <span className="text-[11px] uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors font-semibold">Automation Engine</span>
                        </div>
                     </div>
                  </div>
                  
                  {/* System Health */}
                  <div className="ui-element absolute top-[65%] right-[2%] min-w-[140px] pointer-events-auto group cursor-pointer" style={{ transform: 'rotate(2deg)' }}>
                     <div className="ui-drift">
                        <div className="bg-[#0f111a]/95 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-l-2 border-l-green-500 flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] group-hover:border-white/30 group-hover:scale-[1.02] relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                           <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-ping group-hover:shadow-[0_0_15px_rgba(74,222,128,1)] transition-shadow duration-300" />
                           <span className="text-[11px] uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors font-semibold">System Health</span>
                        </div>
                     </div>
                  </div>

                  {/* Data Pipeline */}
                  <div className="ui-element absolute top-[80%] right-[10%] min-w-[150px] pointer-events-auto group cursor-pointer">
                     <div className="ui-drift">
                        <div className="bg-[#0f111a]/95 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-l-2 border-l-cyan-500 flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] group-hover:border-white/30 group-hover:scale-[1.02] relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                           <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:shadow-[0_0_15px_rgba(34,211,238,1)] transition-shadow duration-300" />
                           <span className="text-[11px] uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors font-semibold">Data Pipeline</span>
                        </div>
                     </div>
                  </div>

               </div>

            </div>
          </div>
        </div>

        {/* ════ SCENE 3: Core Identity Cards ════ */}
        <div id="scene-3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IDENTITY_CARDS.map((card, idx) => (
            <div
              key={card.title}
              ref={addToCards}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden flex flex-col"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 p-12 bg-blue-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 shrink-0 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                 {card.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{card.title}</h3>
              <p className="text-zinc-500 font-light leading-relaxed flex-grow text-sm md:text-base">
                 {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ════ SCENE 4: Process Flow ════ */}
        <div id="scene-4" className="w-full" ref={processWrapRef}>
           <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 text-xs font-medium tracking-widest uppercase mb-4">How We Operate</div>
              <h2 className="text-3xl font-medium text-white">Engineered for Velocity & Scale</h2>
           </div>

           <div className="flex flex-col md:flex-row items-start justify-between relative max-w-5xl mx-auto">
             {PROCESS_STEPS.map((step, idx) => (
                <div key={step.title} className="flex-1 w-full flex flex-row md:flex-col items-center gap-6 md:gap-0 relative z-10 group mb-10 md:mb-0">
                  
                  {/* Mobile Line */}
                  {idx !== PROCESS_STEPS.length - 1 && (
                     <div className="md:hidden absolute top-[44px] left-[27px] bottom-[-24px] w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent flow-connector origin-top" />
                  )}

                  <div className="flow-step w-full md:w-auto flex flex-row md:flex-col items-center justify-start md:justify-center relative">
                    <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-blue-900/50 shadow-[0_0_30px_rgba(59,130,246,0.1)] flex items-center justify-center text-blue-500 font-semibold mb-0 md:mb-6 shrink-0 z-10 relative">
                       <div className="absolute inset-0 rounded-full border border-blue-500/20 group-hover:border-blue-400/60 group-hover:scale-110 transition-all duration-300" />
                       0{idx + 1}
                    </div>
                    
                    <div className="text-left md:text-center md:px-4 ml-6 md:ml-0">
                       <h4 className="text-white text-lg font-medium mb-1">{step.title}</h4>
                       <p className="text-zinc-500 text-sm font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Desktop Connecting Line */}
                  {idx !== PROCESS_STEPS.length - 1 && (
                     <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[1px]">
                        <div className="w-full h-full bg-gradient-to-r from-blue-500/40 to-blue-500/10 flow-connector origin-left" />
                     </div>
                  )}
                </div>
             ))}
           </div>
        </div>

        {/* ════ SCENE 5: Metrics Proof ════ */}
        <div id="scene-5" ref={metricsWrapRef} className="border-y border-white/5 bg-gradient-to-r from-white/[0.01] via-blue-500/[0.02] to-transparent py-16 -mx-6 px-6 relative rounded-tr-3xl rounded-bl-3xl">
           <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
           <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
           
           <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-4 max-w-5xl mx-auto">
              
              <div className="text-center group">
                 <div className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-2 flex justify-center items-baseline group-hover:hidden drop-shadow-[0_0_24px_rgba(255,255,255,0.1)]">
                    <span className="metric-val" data-target="60" data-suffix="%">0%</span>
                 </div>
                 {/* Duplicated for a soft glow effect that works specifically inside group */}
                 <div className="text-5xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 tracking-tighter mb-2 items-baseline hidden group-hover:flex">
                    60%
                 </div>
                 <div className="text-sm uppercase tracking-[0.15em] text-zinc-500 font-medium">Workload Reduction</div>
              </div>

              <div className="text-center group">
                 <div className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-2 flex justify-center items-baseline drop-shadow-[0_0_24px_rgba(255,255,255,0.1)]">
                    <span className="metric-val" data-target="2.4" data-suffix="x">0x</span>
                 </div>
                 <div className="text-sm uppercase tracking-[0.15em] text-zinc-500 font-medium">Faster Deployment</div>
              </div>

              <div className="text-center group">
                 <div className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-2 flex justify-center items-baseline drop-shadow-[0_0_24px_rgba(255,255,255,0.1)]">
                    <span className="metric-val" data-target="99.9" data-suffix="%">0%</span>
                 </div>
                 <div className="text-sm uppercase tracking-[0.15em] text-zinc-500 font-medium">System Reliability</div>
              </div>

           </div>
        </div>

        {/* ════ SCENE 6: Trust Layer ════ */}
        <div id="scene-6" className="text-center pt-8">
           <p className="text-xs uppercase tracking-widest text-zinc-600 font-medium mb-10">Trusted by growing organizations worldwide</p>
           <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-80 mix-blend-screen">
              {/* Minimal SVG Placeholders for Brands */}
              <svg className="trust-logo h-7 w-auto fill-zinc-500 aspect-[3/1]" viewBox="0 0 120 40"><path d="M10,20 Q20,10 30,20 T50,20 L50,30 L10,30 Z" /><circle cx="70" cy="20" r="8" /><rect x="90" y="10" width="20" height="20" rx="3"/></svg>
              <svg className="trust-logo h-6 w-auto fill-zinc-500" viewBox="0 0 100 30"><rect x="10" y="5" width="20" height="20" rx="10"/><path d="M40 5 L60 5 L50 25 Z" /><circle cx="85" cy="15" r="10" /></svg>
              <svg className="trust-logo h-8 w-auto fill-zinc-500" viewBox="0 0 140 40"><path d="M10,30 L30,10 L50,30 L70,10 L90,30" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/><circle cx="115" cy="20" r="12" /></svg>
              <svg className="trust-logo h-7 w-auto fill-zinc-500" viewBox="0 0 110 35"><rect x="10" y="10" width="15" height="15" rx="2" /><rect x="35" y="10" width="15" height="15" rx="2" /><rect x="60" y="10" width="15" height="15" rx="2" /><rect x="85" y="10" width="15" height="15" rx="2" /></svg>
              <svg className="trust-logo h-6 w-auto fill-zinc-500" viewBox="0 0 90 30"><path d="M15,15 A10,10 0 0,1 35,15 A10,10 0 0,1 15,15 M45,15 A10,10 0 0,0 65,15 A10,10 0 0,0 45,15 M75,15 L85,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/></svg>
           </div>
        </div>

      </div>
    </section>
  );
}

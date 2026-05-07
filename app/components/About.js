"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Services from "./components/Service";

const IDENTITY_CARDS = [
   {
      category: "STRATEGY",
      title: "Enterprises Focus",
      desc: "Built to handle massive scale, rigid security, and integrations.",
      bgType: "from-[#080413] via-[#0f0426] to-[#1a0840]",
      glowColor: "bg-fuchsia-600/30"
   },
   {
      category: "DELIVERY",
      title: "Proven Rapid Delivery",
      desc: "Frameworks that accelerate time-to-market without compromising quality.",
      bgType: "from-[#050616] via-[#091033] to-[#120a40]",
      glowColor: "bg-blue-600/20"
   },
   {
      category: "ENGINEERING",
      title: "Expert Engineering",
      desc: "Seamlessly integrated top-tier technical talent.",
      bgType: "from-[#0b030e] via-[#1a052e] to-[#3b0a45]",
      glowColor: "bg-purple-500/30"
   },
   {
      category: "ADVISORY",
      title: "Long-Term Partnership",
      desc: "We build, scale, optimize, and maintain your core systems.",
      bgType: "from-[#060310] via-[#100724] to-[#250d4d]",
      glowColor: "bg-indigo-500/30"
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
         gsap.to(".core-node", { filter: "drop-shadow(0px 0px 30px rgba(239,68,68,1))", duration: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" });

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

         // --- Background Scroll Parallax ---
         gsap.to(".parallax-bg-text", {
            y: 150,
            ease: "none",
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top bottom",
               end: "bottom top",
               scrub: true
            }
         });

         gsap.to(".scroll-parallax", {
            y: -100,
            ease: "none",
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top bottom",
               end: "bottom top",
               scrub: true
            }
         });

      }, containerRef);

      // Mouse Parallax Effect 
      const handleMouseMove = (e) => {
         if (!window) return;
         const x = (e.clientX / window.innerWidth) - 0.5;
         const y = (e.clientY / window.innerHeight) - 0.5;

         // Affect elements inside the container by grabbing their current class
         // Base rotations: rotateX(12deg) rotateY(18deg) rotateZ(-2deg)
         gsap.to(".arch-panel", {
            rotateY: 18 + (x * 12), // Subtle tilt around base 18
            rotateX: 12 + (-y * 10), // Subtle tilt around base 12
            duration: 2,
            ease: "power2.out"
         });
         gsap.to(".ui-element", { x: x * -25, y: y * -25, duration: 2, ease: "power2.out" });
         gsap.to(".deep-bg-grid", { x: x * 30, y: y * 30, duration: 2, ease: "power2.out" });
         gsap.to(".parallax-bg-text", { x: x * -40, duration: 3, ease: "power2.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         ctx.revert();
      };
   }, []);

   return (
      <section id="about" ref={containerRef} className="relative z-20 w-full pt-4 md:pt-0 md:-mt-12 overflow-visible">

         {/* Background Ambience Removed for pure black */}
         <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="parallax-bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
               SYSTEMS
            </div>
         </div>

         <div className="max-w-[1240px] mx-auto px-6 relative z-10 flex flex-col gap-32">

            {/* ════ SCENE 1 & 2: Main Identity & Visual ════ */}
            <div id="scene-1" className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 lg:gap-8">

               {/* Left/Right swapped on desktop: Content Reveal */}
               <div ref={leftContentRef} className="w-full lg:w-[50%] pl-0 lg:pl-12 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-8">
                     <span className="md:whitespace-nowrap text-zinc-500">From Fragmented <span className="text-zinc-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Systems</span></span> <br className="hidden lg:block" />
                     <span className="text-zinc-500">to </span>
                     <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Institutional</span>{" "}
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Scale</span>
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
                           <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>

                  <div className="h-[1px] w-12 bg-white/30 mb-8" />
               </div>

               {/* Left/Right swapped on desktop: Realistic Enterprise Architecture Panel */}
               <div className="w-full lg:w-1/2 aspect-[4/3] md:aspect-square relative flex items-center justify-center">
                  {/* Cinematic Ambient Glow from right removed for pure black */}

                  <div className="arch-panel scroll-parallax w-full h-[85%] relative origin-center" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1400px) rotateX(12deg) rotateY(18deg) rotateZ(-2deg)' }}>

                     {/* 1. Deepest Layer: Blurred Grid & Base Shadows */}
                     <div className="deep-bg-grid absolute inset-[-10%] bg-white/[0.02] rounded-[3rem] blur-[20px] pointer-events-none" style={{ transform: 'translateZ(-120px)' }} />

                     {/* 2. Main System Panel (Background Base) */}
                     <div className="absolute inset-0 bg-[#0a0a0e]/90 border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl overflow-hidden" style={{ transform: 'translateZ(-60px)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

                        {/* Transformation Wave Scanner */}
                        <div className="transformation-wave absolute top-[-10%] bottom-[-10%] w-[3px] bg-white shadow-[0_0_30px_6px_rgba(255,255,255,0.6)] -left-[20%] opacity-0 z-20 
                    after:absolute after:inset-0 after:-left-[60px] after:w-[60px] after:bg-gradient-to-l after:from-white/20 after:to-transparent"
                           style={{ transform: 'rotate(8deg)' }} />

                        {/* Header bar of the main system */}
                        <div className="absolute inset-x-0 top-0 h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-5 gap-2.5">
                           <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono">Core.Transform_SYS</div>
                           <div className="ml-auto w-2.5 h-2.5 rounded-full bg-zinc-600" />
                           <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                           <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
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

                              {/* STABLE Dual-Side Connectors */}
                              <g className="stable-lines" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" fill="none">
                                 <path d="M200 200 L140 80 L20 80" />
                                 <path d="M200 200 L280 180 L380 180" />
                                 <path d="M200 200 L140 280 L60 280" />
                                 <path d="M200 200 L240 340 L380 340" />
                              </g>

                              {/* Animated Packets */}
                              <g className="ui-particles">
                                 <path d="M200 200 L140 80 L20 80" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px rgba(239,68,68,0.8))' }} />
                                 <path d="M200 200 L280 180 L380 180" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px rgba(239,68,68,0.8))' }} />
                                 <path d="M200 200 L140 280 L60 280" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px rgba(239,68,68,0.8))' }} />
                                 <path d="M200 200 L240 340 L380 340" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="15 400" strokeDashoffset="0" fill="none" style={{ filter: 'drop-shadow(0px 0px 6px rgba(239,68,68,0.8))' }} />
                              </g>
                           </svg>
                        </div>

                        {/* Chaos Nodes on Left */}
                        <div className="absolute inset-0">
                           <div className="chaos-node absolute top-[12%] left-[10%] w-2 h-2 bg-zinc-600 rounded-sm pointer-events-auto cursor-pointer hover:!bg-white hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
                           <div className="chaos-node absolute top-[30%] left-[25%] w-3 h-3 bg-zinc-500 rounded-sm pointer-events-auto cursor-pointer hover:!bg-white hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
                           <div className="chaos-node absolute top-[50%] left-[5%] w-2 h-2 bg-zinc-700 rounded-sm pointer-events-auto cursor-pointer hover:!bg-white hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
                           <div className="chaos-node absolute top-[75%] left-[20%] w-3 h-3 bg-zinc-600 rounded-sm pointer-events-auto cursor-pointer hover:!bg-white hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
                           <div className="chaos-node absolute top-[85%] left-[15%] w-2 h-2 bg-zinc-500 rounded-sm pointer-events-auto cursor-pointer hover:!bg-white hover:!opacity-100 hover:scale-150 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
                           <div className="chaos-node absolute top-[45%] left-[30%] w-4 h-4 border border-zinc-500/30 rounded-sm pointer-events-auto cursor-pointer hover:!border-white hover:!bg-white/20 hover:!opacity-100 hover:scale-125 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300" />
                        </div>

                        {/* Dynamic System Core (Center Point) */}
                        <div className="system-core-rings absolute top-1/2 left-1/2 -mt-16 -ml-16 w-32 h-32 flex items-center justify-center">
                           <div className="core-wave absolute inset-0 rounded-full border border-red-500/50 scale-100 opacity-0" />
                           <div className="core-wave absolute inset-0 rounded-full border border-orange-400/30 scale-100 opacity-0" style={{ animationDelay: '-1.2s' }} />

                           <div className="absolute inset-2 rounded-full border-t border-r border-red-400/80 animate-[spin_4s_linear_infinite]" />
                           <div className="absolute inset-4 rounded-full border-b border-l border-orange-500/60 animate-[spin_3s_linear_infinite_reverse]" />

                           {/* The literal core node generating lines */}
                           <div className="core-node absolute w-6 h-6 bg-red-500 rounded-full shadow-[0_0_40px_rgba(239,68,68,1)] flex items-center justify-center">
                              <div className="w-2.5 h-2.5 bg-white rounded-full opacity-90" />
                           </div>
                        </div>
                     </div>

                     {/* 4. Foreground: UI Component Labels (Mirrored to Left Side) */}
                     <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(90px)' }}>

                        {/* API Layer */}
                        <div className="ui-element absolute top-[15%] left-[-5%] min-w-[140px] pointer-events-auto group cursor-pointer" style={{ transform: 'rotate(-1deg)' }}>
                           <div className="ui-drift">
                              <div className="bg-[#0f111a]/95 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-r-2 border-r-blue-500 flex flex-row-reverse items-center gap-2 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] group-hover:border-white/30 group-hover:scale-[1.02] relative overflow-hidden">
                                 <div className="absolute inset-0 bg-gradient-to-l from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[100%] group-hover:-translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
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
                        <div className="ui-element absolute top-[65%] left-[2%] min-w-[140px] pointer-events-auto group cursor-pointer" style={{ transform: 'rotate(-2deg)' }}>
                           <div className="ui-drift">
                              <div className="bg-[#0f111a]/95 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-r-2 border-r-green-500 flex flex-row-reverse items-center gap-2 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] group-hover:border-white/30 group-hover:scale-[1.02] relative overflow-hidden">
                                 <div className="absolute inset-0 bg-gradient-to-l from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[100%] group-hover:-translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
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

            {/* ════ SCENE 3: Research Report Style Cards (1x4 Grid) ════ */}
            <div id="scene-3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {IDENTITY_CARDS.map((card, idx) => (
                  <div
                     key={card.title}
                     ref={addToCards}
                     className={`group relative flex flex-col h-[280px] rounded hover:-translate-y-2 transition-transform duration-500 overflow-hidden cursor-pointer bg-gradient-to-b ${card.bgType}`}
                  >
                     {/* Abstract Base Textures/Glow overlay mimicking the screenshot */}
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay" />

                     {/* Flare effect positioned at bottom */}
                     <div className={`absolute -bottom-24 -right-10 w-[150%] h-[120%] rounded-full blur-[70px] ${card.glowColor} group-hover:opacity-90 opacity-40 transition-opacity duration-1000 saturate-150 pointer-events-none`} />

                     {/* Upper Content Content layout matching screenshot strictly */}
                     <div className="relative p-6 flex flex-col flex-grow z-10">
                        {/* Category Label */}
                        <div className="text-[10px] uppercase tracking-widest text-[#d8b4fe] mb-4 font-semibold opacity-90 drop-shadow-md">
                           {card.category}
                        </div>

                        <h3 className="text-[18px] md:text-[20px] font-semibold text-white tracking-tight leading-[1.25] drop-shadow-lg mb-3">
                           {card.title}
                        </h3>

                        <p className="text-zinc-300 font-light leading-relaxed text-[13px] md:text-[14px] opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                           {card.desc}
                        </p>
                     </div>
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
                     <div key={step.title} className="flex-1 w-full flex flex-row md:flex-col items-center gap-6 md:gap-0 relative z-10 group mb-10 md:mb-0 cursor-pointer">

                        {/* Mobile Line */}
                        {idx !== PROCESS_STEPS.length - 1 && (
                           <div className="md:hidden absolute top-[44px] left-[27px] bottom-[-24px] w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent flow-connector origin-top" />
                        )}

                        <div className="flow-step w-full md:w-auto flex flex-row md:flex-col items-center justify-start md:justify-center relative">
                           <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 group-hover:border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center text-zinc-500 group-hover:text-white font-semibold mb-0 md:mb-6 shrink-0 z-10 relative transition-all duration-500">
                              <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/30 group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500" />
                              0{idx + 1}
                           </div>

                           <div className="text-left md:text-center md:px-4 ml-6 md:ml-0 group-hover:-translate-y-1 transition-transform duration-500">
                              <h4 className="text-white text-lg font-medium mb-1 transition-colors duration-300">{step.title}</h4>
                              <p className="text-zinc-500 text-sm font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{step.desc}</p>
                           </div>
                        </div>

                        {/* Desktop Connecting Line */}
                        {idx !== PROCESS_STEPS.length - 1 && (
                           <div className="hidden md:block absolute top-[27px] left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[1px]">
                              <div className="w-full h-full bg-gradient-to-r from-white/20 via-white/5 to-transparent flow-connector origin-left" />
                           </div>
                        )}
                     </div>
                  ))}
               </div>

            </div>

            {/* <Services></Services> */}

            {/* ════ SCENE 5: Metrics Proof ════ */}
            <div id="scene-5" ref={metricsWrapRef} className="border-y border-white/5 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-transparent py-16 -mx-6 px-6 relative rounded-tr-3xl rounded-bl-3xl">
               <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
               <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

               <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-4 max-w-5xl mx-auto">

                  <div className="text-center group">
                     <div className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-2 flex justify-center items-baseline group-hover:hidden drop-shadow-[0_0_24px_rgba(255,255,255,0.1)]">
                        <span className="metric-val" data-target="60" data-suffix="%">0%</span>
                     </div>
                     {/* Duplicated for a soft glow effect that works specifically inside group */}
                     <div className="text-5xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 tracking-tighter mb-2 items-baseline hidden group-hover:flex">
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

            {/* ════ SCENE 6: Leadership & Culture ════ */}
            <div id="scene-6" className="py-16 md:py-32 w-full border-t border-white/5 relative mt-16">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent blur-[120px] pointer-events-none" />
               <div className="mx-auto px-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                     <div className="lg:col-span-5 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-6">
                           <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                           <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest mono-text">Leadership & Culture</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                           Engineered by Builders. <br className="hidden md:block" />
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a1a1aa] to-[#52525b]">For Builders.</span>
                        </h2>
                        <p className="text-lg text-[#888888] font-light leading-relaxed mb-8">
                           We are a collective of elite software engineers, system architects, and technical operators.
                           We don't just write code; we take ownership of complex technical challenges and deliver solutions that redefine what's possible for our enterprise partners.
                        </p>

                        <div className="flex flex-col gap-6 border-l border-white/10 pl-6 mb-10">
                           <div>
                              <h4 className="text-white font-medium mb-1">Extreme Ownership</h4>
                              <p className="text-sm text-[#666]">We take full accountability for the systems we design and deploy.</p>
                           </div>
                           <div>
                              <h4 className="text-white font-medium mb-1">Engineering Excellence</h4>
                              <p className="text-sm text-[#666]">We adhere to the highest standards of code quality and architecture.</p>
                           </div>
                        </div>
                     </div>

                     <div className="lg:col-span-7 relative z-10 flex gap-4 md:gap-6 h-[400px] md:h-[500px]">
                        <div className="w-1/2 h-full rounded-2xl bg-[#0a0a0e] border border-white/5 overflow-hidden relative group translate-y-8">
                           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale mix-blend-luminosity"></div>
                           <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent"></div>
                           <div className="absolute bottom-6 left-6 right-6">
                              <h3 className="text-white text-lg font-medium">Collaborative Design</h3>
                              <p className="text-[#888] text-sm mt-1">Cross-functional engineering pods.</p>
                           </div>
                        </div>
                        <div className="w-1/2 h-full rounded-2xl bg-[#0a0a0e] border border-white/5 overflow-hidden relative group">
                           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale mix-blend-luminosity"></div>
                           <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent"></div>
                           <div className="absolute bottom-6 left-6 right-6">
                              <h3 className="text-white text-lg font-medium">Deep Focus</h3>
                              <p className="text-[#888] text-sm mt-1">Solving hard technical problems.</p>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

         </div>
      </section>
   );
}

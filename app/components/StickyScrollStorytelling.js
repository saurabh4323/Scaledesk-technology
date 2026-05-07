"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Code2, 
  Cloud, 
  Database, 
  Cpu, 
  Zap,
  Activity,
  Globe,
  Lock,
  Layers,
  ChevronRight,
  Server,
  Network,
  Workflow,
  Sparkles
} from "lucide-react";

const SECTIONS = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    eyebrow: "Distributed Core",
    description: "Architecting high-performance distributed systems with modular integrity and cinematic code quality. We build the foundation that scales silently.",
    icon: Code2,
    color: "#3b82f6",
    image: "/images/storytelling/software.png",
    details: [
      { label: "Performance", value: "99.9th Percentile", icon: Zap },
      { label: "Scalability", value: "Elastic Horizontal", icon: Layers },
      { label: "Security", value: "Zero-Trust Mesh", icon: Lock }
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    eyebrow: "Global Resiliency",
    description: "Immutable infrastructure-as-code deployments across multi-region cloud environments with automated resilience and sub-20ms edge latency.",
    icon: Cloud,
    color: "#6366f1",
    image: "/images/storytelling/cloud.png",
    details: [
      { label: "Availability", value: "Multi-Region Active", icon: Globe },
      { label: "Latency", value: "< 20ms Edge", icon: Activity },
      { label: "Recovery", value: "Instant Failover", icon: Server }
    ]
  },
  {
    id: "data-pipelines",
    title: "Data Pipelines",
    eyebrow: "Semantic Ingestion",
    description: "Ultra-low latency streaming architectures processing petabytes of telemetry with real-time semantic consistency and atomic delivery guarantees.",
    icon: Database,
    color: "#0ea5e9",
    image: "/images/storytelling/data.png",
    details: [
      { label: "Throughput", value: "1M+ Events/sec", icon: Workflow },
      { label: "Precision", value: "Atomic Delivery", icon: Network },
      { label: "Integration", value: "Universal Sink", icon: Database }
    ]
  },
  {
    id: "ai-orchestration",
    title: "AI Orchestration",
    eyebrow: "Neural Logic",
    description: "Intelligent agent coordination and LLM fine-tuning pipelines integrated directly into core system logic with governed ethics and sub-second RAG.",
    icon: Cpu,
    color: "#818cf8",
    image: "/images/storytelling/ai.png",
    details: [
      { label: "Inference", value: "Sub-second RAG", icon: Sparkles },
      { label: "Training", value: "Distributed LoRA", icon: Cpu },
      { label: "Ethics", value: "Governed Guardrails", icon: Lock }
    ]
  }
];

export default function StickyScrollStorytelling() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * SECTIONS.length),
        SECTIONS.length - 1
      );
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeIndex]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[500vh] w-full bg-[#030303] overflow-visible"
      id="story-capabilities"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-[0.015]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-stretch overflow-hidden">
        
        {/* Left Side: Vertical List of Service Titles */}
        <div className="relative w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:px-20 lg:px-24 z-10">
          
          <div className="space-y-12 md:space-y-16 relative">
            {/* Vertical Progress Rail */}
            <div className="absolute left-[-20px] md:left-[-40px] top-0 bottom-0 w-[1px] bg-white/[0.03]">
              <motion.div 
                className="absolute top-0 left-[-1px] w-[3px] rounded-full bg-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>

            {SECTIONS.map((section, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={section.id} className="relative group">
                  <motion.div
                    animate={{ 
                      opacity: isActive ? 1 : 0.25,
                      x: isActive ? 12 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-4">
                       <span className={`text-[10px] mono-text transition-colors duration-500 ${isActive ? 'text-blue-500/70' : 'text-white/20'}`}>
                         0{index + 1}
                       </span>
                       <h3 className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/20'}`}>
                         {section.title}
                       </h3>
                    </div>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-10"
                        >
                          <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-md mb-8 font-light">
                            {section.description}
                          </p>

                          <div className="flex flex-wrap gap-4 mb-8">
                            {section.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.015] border border-white/[0.04]">
                                <detail.icon size={10} className="text-white/20" />
                                <span className="text-[10px] text-white/60 font-medium">{detail.value}</span>
                              </div>
                            ))}
                          </div>

                          <motion.button
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-xs font-medium text-blue-500/80 group/btn"
                          >
                            Explore capability 
                            <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visual Preview Card with Premium Generated Images */}
        <div className="relative flex-1 h-full hidden md:flex items-center justify-center">
          <div 
            className="absolute inset-0 blur-[120px] opacity-10 transition-colors duration-1000 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 50%, ${SECTIONS[activeIndex].color}, transparent 60%)` }}
          />
          
          <div className="relative w-[75%] aspect-[1.1/1] max-w-[620px] flex items-center justify-center">
            <motion.div 
              className="absolute inset-0 glass-panel rounded-[32px] border-ambient overflow-hidden p-0.5"
              animate={{ rotateX: activeIndex % 2 === 0 ? 1 : -1, rotateY: activeIndex % 2 === 0 ? 1.5 : -1.5 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            >
               <div className="absolute inset-0 bg-grid-fine opacity-5 pointer-events-none" />
               
               <div className="w-full h-full flex items-center justify-center relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 1.1, filter: "brightness(0.5) blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.9, filter: "brightness(0.5) blur(10px)" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={SECTIONS[activeIndex].image} 
                        alt={SECTIONS[activeIndex].title}
                        className="w-full h-full object-cover"
                      />
                      {/* Depth Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                    </motion.div>
                  </AnimatePresence>
               </div>

               <div className="absolute top-4 left-6 flex items-center gap-2 text-[8px] mono-text text-white/20 tracking-[0.3em] uppercase z-10">
                  <div className="w-1 h-1 rounded-full bg-blue-500/40 animate-pulse" />
                  <span>Interactive_Module_0{activeIndex + 1}</span>
               </div>
               
               {/* Decorative Accents */}
               <div className="absolute inset-0 border border-white/5 rounded-[32px] pointer-events-none" />
            </motion.div>

            {/* Subtle Floating Micro-Cards */}
            <motion.div
              style={{ x: useTransform(smoothProgress, [0, 1], [-15, 15]), y: useTransform(smoothProgress, [0, 1], [-30, 30]) }}
              className="absolute -top-10 -right-8 w-44 h-44 glass rounded-2xl p-5 hidden lg:block z-20 border-white/[0.03]"
            >
               <div className="flex flex-col gap-3">
                  <div className="w-full h-1 rounded-full bg-white/[0.03]">
                    <motion.div className="h-full bg-blue-500/60" animate={{ width: ["15%", "85%", "35%", "75%"] }} transition={{ duration: 5, repeat: Infinity }} />
                  </div>
                  <div className="w-full h-1 rounded-full bg-white/[0.03]">
                    <motion.div className="h-full bg-indigo-500/60" animate={{ width: ["55%", "15%", "75%", "25%"] }} transition={{ duration: 6, repeat: Infinity, delay: 0.8 }} />
                  </div>
                  <div className="flex justify-between items-end mt-4">
                     <span className="text-[9px] mono-text text-white/20 uppercase tracking-widest">Uptime</span>
                     <span className="text-lg font-semibold text-white/70 tracking-tighter">99.99%</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-[#030303] to-transparent z-50 pointer-events-none" />
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const typewriterCode = `import { Service } from '@scaledesk/core';

export default async function ScalableEngine() {
  const engine = await Service.initialize({
    performance: 'ultra-high',
    security: 'enterprise-grade',
    scaling: 'auto-horizontal'
  });

  return await engine.deploy({
    region: 'global-edge',
    uptime: '99.99%'
  });
}`;

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= typewriterCode.length) {
        setDisplayText(typewriterCode.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/[0.06] shadow-[0_0_25px_rgba(59,130,246,0.15)] backdrop-blur-sm group mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></span>
            <span className="text-[12px] uppercase tracking-[0.15em] font-bold text-zinc-300 font-[family-name:var(--font-jetbrains-mono)]">Software Engineering · by ScaleDesk Technology</span>
          </motion.div>
          
          <h1 className="text-[52px] sm:text-[68px] leading-[1.05] tracking-tight font-black uppercase">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-white"
            >
              We Don't Just
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-white"
            >
              Write Code.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-blue-500 italic lowercase"
            >
              We Engineer Growth.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-zinc-400 text-[18px] leading-[1.7] max-w-[480px] font-medium"
          >
            From MVP to enterprise infrastructure — ScaleDesk 
            delivers production-ready software that scales with 
            your business, not against it.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center gap-2">
              Start Building <ChevronRight className="w-4 h-4" />
            </button>
            <button className="group px-10 py-5 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[11px] rounded hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* Right: Code Visual */}
        <div className="relative flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[550px] aspect-[4/3] bg-[#0c0c0c] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Window controls */}
            <div className="h-10 bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
              <div className="ml-4 text-[10px] text-zinc-600 font-[family-name:var(--font-jetbrains-mono)]">ScalableEngine.ts — Scaledesk Editor</div>
            </div>
            
            {/* Typewriter content */}
            <div className="p-6 font-[family-name:var(--font-jetbrains-mono)] text-[13px] leading-relaxed">
              <pre className="text-zinc-500">
                <code className="text-blue-400">{displayText}</code>
                <span className="animate-pulse border-r-2 border-blue-400 ml-1"></span>
              </pre>
            </div>
          </motion.div>

          {/* Orbiting Badges */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md border border-blue-500 rounded-full text-[10px] text-blue-400 font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Production Ready
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute top-1/2 -right-4 -translate-y-1/2 px-4 py-2 bg-black/60 backdrop-blur-md border border-zinc-500 rounded-full text-[10px] text-zinc-300 font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              99.99% Uptime
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white rounded-full text-[10px] text-white font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Shipped in Weeks
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

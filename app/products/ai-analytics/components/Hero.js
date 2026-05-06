"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BarChart2, ArrowRight, ChevronDown } from "lucide-react";

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let timeout;
    if (delay > 0) {
      timeout = setTimeout(() => {
        startTyping();
      }, delay);
    } else {
      startTyping();
    }
    
    function startTyping() {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 50);
    }
    
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const NodeGraph = () => {
  const satellites = [
    { label: "Revenue", angle: 0 },
    { label: "Leads", angle: 45 },
    { label: "Fraud", angle: 90 },
    { label: "Churn", angle: 135 },
    { label: "Pipeline", angle: 180 },
    { label: "Forecast", angle: 225 },
    { label: "Cohorts", angle: 270 },
    { label: "Attribution", angle: 315 },
  ];

  const radius = 110;

  return (
    <div className="relative w-[340px] h-[280px] flex items-center justify-center mx-auto">
      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="-170 -140 340 280">
        {satellites.map((sat, i) => {
          const rad = (sat.angle * Math.PI) / 180;
          const x2 = Math.cos(rad) * radius;
          const y2 = Math.sin(rad) * radius;
          
          return (
            <g key={i}>
              <line 
                x1="0" y1="0" 
                x2={x2} y2={y2} 
                stroke="#333" 
                strokeWidth="1" 
              />
              <motion.line 
                x1="0" y1="0" 
                x2={x2} y2={y2} 
                stroke="#3b82f6" 
                strokeWidth="2" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center Node */}
      <div className="absolute z-10 flex items-center justify-center w-20 h-20 bg-black border-2 border-[#3b82f6] rounded-xl shadow-[0_0_30px_rgba(59, 130, 246,0.4)]">
        <div className="w-10 h-10 bg-[#3b82f6] rounded-sm animate-pulse rotate-45" />
      </div>

      {/* Satellite Nodes */}
      {satellites.map((sat, i) => {
        const rad = (sat.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center justify-center gap-2"
            style={{ 
              transform: `translate(${x}px, ${y}px)`,
              marginLeft: '-40px',
              marginTop: '-20px',
              width: '80px',
              height: '40px'
            }}
          >
            <motion.div 
              className="w-3 h-3 bg-black border border-[#3b82f6] rounded-full"
              animate={{ 
                boxShadow: ["0 0 0px rgba(59, 130, 246,0)", "0 0 15px rgba(59, 130, 246,0.8)", "0 0 0px rgba(59, 130, 246,0)"],
                backgroundColor: ["#000", "#3b82f6", "#000"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.5 }}
            />
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider">{sat.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

const NumberCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count.toLocaleString()}</>;
};

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-sans">
      {/* Layer 1: Animated grid lines */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 2: Radial gradient orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[120px] opacity-15"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00cfff] rounded-full blur-[120px] opacity-10"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Layer 3: Floating micro-particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-sm"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
          }}
          animate={{ y: "-100vh" }}
          transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="relative z-10 w-full max-w-[1600px] mx-auto py-24 px-16 h-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* LEFT */}
        <div className="w-full lg:w-auto max-w-[520px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-[#3b82f6] bg-[radial-gradient(ellipse_at_center,rgba(59, 130, 246,0.12),transparent)] w-max"
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-[#3b82f6]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[12px] uppercase tracking-[0.15em] text-white font-[family-name:var(--font-space-grotesk)]">
              AI Analytics <span className="text-zinc-500 mx-2">·</span> by ScaleDesk Technology
            </span>
          </motion.div>

          <div className="flex flex-col gap-1 mb-6">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-white text-[clamp(48px,5vw,68px)] font-[800] leading-none whitespace-nowrap"
            >
              Your Data Is Talking.
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-white text-[clamp(48px,5vw,68px)] font-[800] leading-none whitespace-nowrap"
            >
              Are You Listening?
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              className="text-[#3b82f6] text-[clamp(48px,5vw,60px)] italic font-bold leading-tight"
              style={{ textShadow: '0 0 40px rgba(59, 130, 246,0.6)' }}
            >
              AI Analytics.
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-[18px] text-[#888888] font-[family-name:var(--font-inter)] mb-10 flex flex-wrap items-center gap-3"
          >
            <span>Real-time intelligence</span>
            <span className="text-[#3b82f6] font-bold">·</span>
            <span>Predictive models</span>
            <span className="text-[#3b82f6] font-bold">·</span>
            <span className="text-white italic"><TypewriterText text="Zero guesswork." delay={1200} /></span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#3b82f6] text-white font-[family-name:var(--font-space-grotesk)] text-[15px] tracking-[0.05em] rounded-[6px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(59, 130, 246,0.5)]">
              <BarChart2 size={18} />
              Explore the Platform
            </button>
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#333] text-white font-[family-name:var(--font-space-grotesk)] text-[15px] rounded-[6px] transition-all duration-300 hover:border-[#3b82f6]">
              Request a Live Demo
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 flex items-center gap-3 text-[12px] text-[#555] font-[family-name:var(--font-jetbrains-mono)]"
          >
            <motion.span 
              className="text-green-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ●
            </motion.span>
            <span>Live system</span>
            <span>·</span>
            <span>98.7% accuracy</span>
            <span>·</span>
            <span>&lt;200ms latency</span>
          </motion.div>
        </div>



        {/* RIGHT */}
        <div className="w-full flex-1 flex flex-col items-center justify-center gap-6 mt-16 lg:mt-0">
          
          {/* Top Cards Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[500px] gap-4">
            {/* Card 1: Top Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-[190px] p-4 bg-[rgba(15,15,15,0.85)] backdrop-blur-[12px] border border-[#1f1f1f] border-l-[3px] border-l-[#3b82f6] rounded-[10px] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(59, 130, 246,0.1)] transition-all duration-300 group"
            >
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#3b82f6] mb-2 tracking-widest leading-tight">MODEL ACCURACY</div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl text-white leading-none mb-2">98.7%</div>
              <div className="text-[12px] text-[#00ff88]">↑ vs 61% industry avg</div>
            </motion.div>

            {/* Card 2: Top Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-[190px] p-4 bg-[rgba(15,15,15,0.85)] backdrop-blur-[12px] border border-[#1f1f1f] border-l-[3px] border-l-[#00cfff] rounded-[10px] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,207,255,0.1)] transition-all duration-300 group"
            >
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#00cfff] mb-2 tracking-widest leading-tight">PREDICTIONS/SEC</div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl text-white leading-none mb-2">
                <NumberCounter target={12400} />
              </div>
              <div className="text-[12px] text-zinc-400 flex items-center gap-2">
                <span className="text-green-500 animate-pulse">●</span> Processing live
              </div>
            </motion.div>
          </div>

          <NodeGraph />

          {/* Bottom Cards Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[500px] gap-4">
            {/* Card 3: Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-[190px] p-4 bg-[rgba(15,15,15,0.85)] backdrop-blur-[12px] border border-[#1f1f1f] border-l-[3px] border-l-[#00ff88] rounded-[10px] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,255,136,0.1)] transition-all duration-300 group"
            >
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#00ff88] mb-2 tracking-widest leading-tight">DATA STREAMS</div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl text-white leading-none mb-2">
                24
              </div>
              <div className="flex gap-1 mb-2 h-2">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-full bg-[#00ff88] rounded-sm"
                    animate={{ height: ["40%", "100%", "40%"] }}
                    transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                  />
                ))}
              </div>
              <div className="text-[12px] text-zinc-400">Across 6 integrations</div>
            </motion.div>

            {/* Card 4: Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="w-[190px] p-4 bg-[rgba(15,15,15,0.85)] backdrop-blur-[12px] border border-[#1f1f1f] border-l-[3px] border-l-[#ff3b3b] rounded-[10px] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(255,59,59,0.1)] transition-all duration-300 group"
            >
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#ff3b3b] mb-2 tracking-widest leading-tight">ANOMALIES DETECTED</div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl text-white leading-none mb-2 flex items-center gap-3">
                3 <motion.span className="w-3 h-3 bg-[#ff3b3b] rounded-full shadow-[0_0_10px_#ff3b3b]" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              </div>
              <div className="text-[12px] text-zinc-400">Last detected: 2m ago</div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#444] tracking-widest">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#444]" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;

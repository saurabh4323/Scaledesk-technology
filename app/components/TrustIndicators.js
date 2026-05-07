"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const TRUST_NAMES = [
  "SOC 2 Type II",
  "AWS Advanced Partner",
  "Google Cloud",
  "Kubernetes Certified",
  "ISO 27001",
  "Datadog",
  "Cloudflare Enterprise",
  "Terraform",
  "Snowflake",
  "GitHub Enterprise",
  "Vercel",
  "Azure"
];

export default function TrustIndicators() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax translation for a single row
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const smoothX = useSpring(xTranslate, { stiffness: 45, damping: 25 });

  return (
    <section 
      ref={containerRef}
      id="story-trust" 
      className="relative w-full h-[100px] flex items-center overflow-hidden bg-[#030303] border-t border-b border-white/5"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] via-transparent to-indigo-500/[0.02] pointer-events-none" />
      
      {/* Gradients to hide edges for a "floating" feel */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        style={{ x: smoothX }}
        className="flex gap-24 md:gap-32 items-center whitespace-nowrap px-40"
      >
        {TRUST_NAMES.map((name, i) => (
          <span 
            key={i}
            className="text-lg md:text-xl font-bold text-white/20 tracking-tighter hover:text-white transition-colors duration-500 cursor-default"
          >
            {name}
          </span>
        ))}
        {/* Duplicate for continuity in the parallax range */}
        {TRUST_NAMES.map((name, i) => (
          <span 
            key={`dup-${i}`}
            className="text-lg md:text-xl font-bold text-white/10 tracking-tighter hover:text-white transition-colors duration-500 cursor-default"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

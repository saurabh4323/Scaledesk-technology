"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const STREAMS = [
  { top: "18%", speed: "12s", opacity: 0.12 },
  { top: "30%", speed: "9s",  opacity: 0.10 },
  { top: "44%", speed: "14s", opacity: 0.14 },
  { top: "58%", speed: "10s", opacity: 0.09 },
  { top: "70%", speed: "13s", opacity: 0.11 },
  { top: "82%", speed: "8s",  opacity: 0.10 },
];

export default function FinalCTA() {
  return (
    <section className="relative py-48 bg-black overflow-hidden px-6">
      {/* Flowing data streams */}
      {STREAMS.map((s, i) => (
        <div
          key={i}
          className="absolute left-0 w-[200%] flex gap-8 items-center pointer-events-none"
          style={{ top: s.top, opacity: s.opacity }}
        >
          <div
            className="flex gap-8 animate-data-stream"
            style={{ animationDuration: s.speed }}
          >
            {[...Array(60)].map((_, j) => (
              <div key={j} className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
            ))}
          </div>
        </div>
      ))}

      <div className="max-w-[900px] mx-auto text-center relative z-10 space-y-10">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black tracking-tighter leading-[0.85] uppercase"
        >
          <span className="block text-white text-5xl md:text-8xl">Your Data Should Be</span>
          <span className="block text-[#00cfff] italic text-5xl md:text-8xl">Working Harder.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[18px] text-[#888] leading-[1.7] max-w-[520px] mx-auto font-medium"
        >
          Tell us your data sources, volume, and destination. We'll design your
          pipeline architecture in a free 30-minute call.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-4 mx-auto px-14 py-7 bg-[#00cfff] text-black font-black uppercase tracking-[0.25em] text-lg rounded-2xl shadow-[0_0_50px_rgba(0,207,255,0.25)] hover:shadow-[0_0_80px_rgba(0,207,255,0.5)] transition-all duration-300 cta-pulse"
        >
          Design My Pipeline
          <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </motion.button>

        {/* Micro-copy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[12px] font-[family-name:var(--font-jetbrains-mono)] text-[#555] font-bold uppercase tracking-widest"
        >
          <span className="flex items-center gap-2">
            <span className="text-cyan-500">●</span> Free architecture review
          </span>
          <span className="flex items-center gap-2">
            <span className="text-cyan-500">●</span> Response in 24h
          </span>
          <span className="flex items-center gap-2">
            <span className="text-cyan-500">●</span> NDA on request
          </span>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes data-stream {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-data-stream {
          animation: data-stream linear infinite;
        }
        @keyframes cta-pulse-glow {
          0%, 100% { box-shadow: 0 0 50px rgba(0,207,255,0.25); }
          50%       { box-shadow: 0 0 80px rgba(0,207,255,0.55); }
        }
        .cta-pulse {
          animation: cta-pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

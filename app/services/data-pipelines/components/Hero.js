"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Database, Globe, FileText, Radio, Archive, LayoutDashboard, BrainCircuit } from "lucide-react";

// Animated packet that travels along a path
function DataPacket({ pathId, delay, color = "#00cfff", duration = 3 }) {
  return (
    <motion.circle r="4" fill={color} filter={`drop-shadow(0 0 4px ${color})`}>
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
        calcMode="linear"
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </motion.circle>
  );
}

const SOURCE_NODES = [
  { y: 80, label: "Database", Icon: Database },
  { y: 165, label: "API", Icon: Globe },
  { y: 250, label: "Files", Icon: FileText },
  { y: 335, label: "Stream", Icon: Radio },
];

const DEST_NODES = [
  { y: 100, label: "Warehouse", Icon: Archive },
  { y: 215, label: "Dashboard", Icon: LayoutDashboard },
  { y: 330, label: "ML Model", Icon: BrainCircuit },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-[1fr_1.15fr] gap-16 items-center z-10">

        {/* ── LEFT: Copy ── */}
        <div className="space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/[0.06] shadow-[0_0_25px_rgba(0,207,255,0.12)] backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00cfff]" />
            <span className="text-[12px] uppercase tracking-[0.15em] font-bold text-zinc-300 font-[family-name:var(--font-jetbrains-mono)]">
              Data Pipelines · by ScaleDesk Technology
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-black tracking-tighter leading-[1.0]">
            <motion.span
              className="block text-white text-[52px] sm:text-[68px]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Raw Data Is Worthless.
            </motion.span>
            <motion.span
              className="block text-[44px] sm:text-[60px] text-[#00cfff] italic"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Flowing Data Wins.
            </motion.span>
          </h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[18px] text-[#888] leading-[1.7] max-w-[480px] font-medium"
          >
            ScaleDesk builds high-throughput, fault-tolerant data pipelines
            that move, transform, and deliver your data exactly where it needs
            to be — in real time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button className="flex items-center gap-2 px-10 py-5 bg-[#00cfff] text-black font-black uppercase tracking-widest text-[11px] rounded hover:shadow-[0_0_40px_rgba(0,207,255,0.45)] transition-all duration-300">
              Build My Pipeline <ChevronRight className="w-4 h-4" />
            </button>
            <button className="group flex items-center gap-2 px-10 py-5 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[11px] rounded hover:bg-white/5 transition-all">
              See Architecture
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT: SVG Pipeline Diagram ── */}
        <div className="relative flex items-center justify-center">
          {/* Status cards */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-5 py-2.5 bg-black/70 backdrop-blur-md border border-cyan-500 rounded-full text-[11px] font-bold text-white shadow-[0_0_18px_rgba(0,207,255,0.2)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            4.2B Records / day
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 px-5 py-2.5 bg-black/70 backdrop-blur-md border border-green-500 rounded-xl text-[11px] font-bold text-white shadow-[0_0_18px_rgba(34,197,94,0.15)]"
          >
            Latency: &lt;100ms
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 px-5 py-2.5 bg-black/70 backdrop-blur-md border border-white rounded-full text-[11px] font-bold text-white shadow-[0_0_18px_rgba(255,255,255,0.06)]"
          >
            Zero Data Loss
          </motion.div>

          {/* Pipeline SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-[600px]"
          >
            <svg viewBox="0 0 580 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Paths from sources to center */}
                <path id="p1" d="M 90 80 C 200 80, 200 210, 290 210" />
                <path id="p2" d="M 90 165 C 200 165, 200 210, 290 210" />
                <path id="p3" d="M 90 250 C 200 250, 200 210, 290 210" />
                <path id="p4" d="M 90 335 C 200 335, 200 210, 290 210" />
                {/* Paths from center to destinations */}
                <path id="p5" d="M 290 210 C 380 210, 380 100, 490 100" />
                <path id="p6" d="M 290 210 C 380 210, 380 215, 490 215" />
                <path id="p7" d="M 290 210 C 380 210, 380 330, 490 330" />
              </defs>

              {/* Path lines */}
              {["p1","p2","p3","p4","p5","p6","p7"].map((id) => (
                <use key={id} href={`#${id}`} stroke="white" strokeOpacity="0.08" strokeWidth="1.5" />
              ))}

              {/* Animated packets — source to center */}
              {[0, 0.75, 1.5, 2.25].map((d, i) => (
                <DataPacket key={`src-${i}`} pathId={`p${i+1}`} delay={d} duration={2.5} />
              ))}

              {/* Animated packets — center to destination (green = transformed) */}
              {[0, 0.8, 1.6].map((d, i) => (
                <DataPacket key={`dst-${i}`} pathId={`p${i+5}`} delay={d + 1.2} color="#00ff88" duration={2} />
              ))}

              {/* Source Nodes */}
              {SOURCE_NODES.map(({ y, label, Icon }, i) => (
                <g key={i} transform={`translate(60, ${y})`}>
                  <rect x="-30" y="-28" width="60" height="56" rx="12" fill="#0d0d0d" stroke="white" strokeOpacity="0.1" />
                  <text x="0" y="36" textAnchor="middle" fill="#555" fontSize="8" fontWeight="700" letterSpacing="0.05em">{label}</text>
                  <foreignObject x="-10" y="-14" width="20" height="20">
                    <div xmlns="http://www.w3.org/1999/xhtml" className="text-zinc-500 w-5 h-5">
                      <Icon size={16} />
                    </div>
                  </foreignObject>
                </g>
              ))}

              {/* Central Processing Node — pulses */}
              <g transform="translate(290, 210)">
                <motion.circle r="44" fill="#050505" stroke="#00cfff" strokeWidth="1.5"
                  animate={{ r: [44, 48, 44], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <text textAnchor="middle" fill="#00cfff" fontSize="8" fontWeight="800" letterSpacing="0.12em" y="-10">PROCESS</text>
                <text textAnchor="middle" fill="#00cfff" fontSize="8" fontWeight="800" letterSpacing="0.12em" y="4">ENGINE</text>
              </g>

              {/* Destination Nodes */}
              {DEST_NODES.map(({ y, label, Icon }, i) => (
                <g key={i} transform={`translate(520, ${y})`}>
                  <rect x="-30" y="-28" width="60" height="56" rx="12" fill="#0d0d0d" stroke="#00ff88" strokeOpacity="0.25" />
                  <text x="0" y="36" textAnchor="middle" fill="#555" fontSize="8" fontWeight="700" letterSpacing="0.05em">{label}</text>
                  <foreignObject x="-10" y="-14" width="20" height="20">
                    <div xmlns="http://www.w3.org/1999/xhtml" className="text-green-500 w-5 h-5">
                      <Icon size={16} />
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

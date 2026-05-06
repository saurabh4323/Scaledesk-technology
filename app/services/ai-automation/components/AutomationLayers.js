"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ── Panel visuals ─────────────────────────────────────── */

function GaugeVisual() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="relative w-36 h-[72px] overflow-hidden">
        {/* Track */}
        <svg viewBox="0 0 144 72" className="absolute inset-0 w-full h-full">
          <path d="M8 72 A64 64 0 0 1 136 72" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" />
          <motion.path
            d="M8 72 A64 64 0 0 1 136 72"
            fill="none" stroke="#7b61ff" strokeWidth="10" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 0.974 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      </div>
      <div className="text-center">
        <div className="text-[28px] font-black text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>97.4%</div>
        <div className="text-[9px] text-[#7b61ff] font-bold tracking-[0.2em] uppercase mt-0.5" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Model Accuracy</div>
      </div>
    </div>
  );
}

function BeforeAfterVisual() {
  return (
    <div className="flex items-center justify-between w-full h-full px-2">
      <div className="flex flex-col items-center gap-2">
        <div className="text-[9px] text-zinc-600 font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Before</div>
        <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-lg">⌛</div>
        <div className="text-sm font-bold text-zinc-500">4h / task</div>
      </div>
      <motion.div
        animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}
        className="text-[#00ff88] text-2xl"
      >→</motion.div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-[9px] text-[#60a5fa] font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>After</div>
        <motion.div
          animate={{ filter: ["drop-shadow(0 0 0px #60a5fa)", "drop-shadow(0 0 12px #60a5fa)", "drop-shadow(0 0 0px #60a5fa)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-10 rounded-full border border-[#00ff88] bg-[#00ff88]/10 flex items-center justify-center text-lg"
        >⚡</motion.div>
        <div className="text-sm font-bold text-[#00ff88]">0.3s × 5</div>
      </div>
    </div>
  );
}

function LLMVisual() {
  const [response, setResponse] = useState("");
  const full = "24-month, $50k cap on liability...";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= full.length) { setResponse(full.slice(0, i)); i++; }
      else { setTimeout(() => { setResponse(""); i = 0; }, 1500); }
    }, 60);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col w-full h-full gap-3" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: 11 }}>
      <div className="bg-[#111] rounded-lg p-3 border border-white/5">
        <span className="text-[#3b82f6]">User: </span>
        <span className="text-zinc-400">Summarize this contract...</span>
      </div>
      <div className="bg-[#111] rounded-lg p-3 border border-[#93c5fd]/20 flex-1 min-h-0">
        <span className="text-[#93c5fd]">AI: </span>
        <span className="text-zinc-300">{response}<span className="animate-pulse">▌</span></span>
      </div>
      <div className="flex justify-center gap-4 mt-1">
        {["💬", "📊", "✉️"].map((e, i) => (
          <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
            className="w-7 h-7 rounded-md bg-[#93c5fd]/10 border border-[#93c5fd]/20 flex items-center justify-center text-xs">{e}</motion.div>
        ))}
      </div>
    </div>
  );
}

function DocScanVisual() {
  return (
    <div className="flex items-center gap-4 w-full h-full">
      <div className="relative w-16 h-24 rounded-md bg-[#111] border border-white/5 overflow-hidden shrink-0 p-2">
        {[1, 0.7, 0.85, 0.5].map((w, i) => (
          <div key={i} className="h-1.5 rounded-sm mb-1.5 bg-zinc-800" style={{ width: `${w * 100}%` }} />
        ))}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] shadow-[0_0_8px_#ffaa00]"
          style={{ background: "#94a3b8" }}
        />
      </div>
      <div className="flex-1 space-y-2">
        {["Vendor: Acme Corp", "Amount: $12,400", "Due: 2026-05-01"].map((row, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.6, repeat: Infinity, repeatDelay: 2 }}
            className="text-[10px] text-zinc-300 bg-[#94a3b8]/5 border border-[#94a3b8]/15 rounded px-2 py-1"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >{row}</motion.div>
        ))}
      </div>
    </div>
  );
}

function AgentVisual() {
  const positions = [{ x: 50, y: 8 }, { x: 8, y: 72 }, { x: 92, y: 72 }];
  const labels = ["Research", "Analyze", "Execute"];
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full">
      <div className="relative w-28 h-20">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          {[[0, 1], [1, 2], [2, 0]].map(([a, b], i) => (
            <motion.line key={i}
              x1={positions[a].x} y1={positions[a].y} x2={positions[b].x} y2={positions[b].y}
              stroke="#64748b" strokeWidth="1"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
          {positions.map((p, i) => (
            <motion.circle key={i} cx={p.x} cy={p.y} r="7" fill="#0a0a0a" stroke="#64748b" strokeWidth="1.5"
              animate={{ r: [7, 8.5, 7] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>
      <div className="flex gap-2">
        {labels.map((l, i) => (
          <div key={i} className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{l}</div>
        ))}
      </div>
      <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.2, repeat: Infinity }}
        className="px-3 py-1 rounded-full border border-[#64748b]/60 bg-[#64748b]/10 text-[#94a3b8] text-[9px] font-black tracking-widest uppercase"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
        AUTONOMOUS
      </motion.div>
    </div>
  );
}

/* ── Panel data ─────────────────────────────────────────── */
const PANELS = [
  {
    id: "panel-0", title: "Custom AI Models", headline: "Models Built for Your Business. Not Borrowed.",
    body: "Off-the-shelf models solve generic problems. We train custom ML models on your data — classification, regression, NLP, computer vision — scoped to your exact use case.",
    stats: ["97.4% Avg Accuracy", "Custom Trained", "Production-Ready"],
    color: "#3b82f6", Visual: GaugeVisual
  },
  {
    id: "panel-1", title: "Process Automation", headline: "Same Output. No Human Required.",
    body: "We map your manual workflows and rebuild them as intelligent automation — document processing, data entry, approval routing — running 24/7 without error or fatigue.",
    stats: ["60% Cost Reduction", "24/7 Operation", "99.9% Accuracy"],
    color: "#60a5fa", Visual: BeforeAfterVisual
  },
  {
    id: "panel-2", title: "LLM Integration", headline: "GPT-4, Claude, Gemini — In Your Workflow.",
    body: "We integrate frontier LLMs directly into your products and internal tools — prompt engineering, RAG pipelines, fine-tuning, and guardrails that keep outputs reliable.",
    stats: ["RAG Pipelines", "Fine-tuned Models", "Hallucination Guards"],
    color: "#93c5fd", Visual: LLMVisual
  },
  {
    id: "panel-3", title: "Data Extraction", headline: "Documents In. Structured Data Out.",
    body: "OCR, NLP, and vision models that extract structured data from invoices, contracts, forms, and emails — feeding directly into your databases with zero manual review.",
    stats: ["98.9% Accuracy", "Any Format", "Real-Time Processing"],
    color: "#94a3b8", Visual: DocScanVisual
  },
  {
    id: "panel-4", title: "Agentic Systems", headline: "AI That Doesn't Wait to Be Asked.",
    body: "We build autonomous AI agents that monitor conditions, make decisions, and take actions without human intervention — from prospecting to incident response.",
    stats: ["Fully Autonomous", "Multi-Agent", "Self-Correcting"],
    color: "#64748b", Visual: AgentVisual
  },
];

/* ── Component ──────────────────────────────────────────── */
export default function AutomationLayers() {
  console.log('AutomationLayers rendered');
  const wrapRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!wrapRef.current) return;
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top top",
        end: `+=${PANELS.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate(self) {
          const idx = Math.min(Math.floor(self.progress * PANELS.length), PANELS.length - 1);
          setActive(idx);
          gsap.to(".fill-line", { height: `${self.progress * 100}%`, duration: 0.1, ease: "none" });
          gsap.to(".panels-track", { yPercent: -(idx * 100), duration: 0.4, ease: "power2.out" });
        }
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
<section ref={wrapRef} className="w-full flex overflow-hidden bg-black" style={{ height: `${PANELS.length * 100}vh` }}>

      {/* ── LEFT: step navigator ── */}
      <div className="w-[38%] shrink-0 h-full flex flex-col justify-center pl-16 pr-10 bg-black border-r border-[#111]">
        <p className="text-[11px] tracking-[0.2em] text-[#555] mb-8 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          Capabilities
        </p>
        <h2 className="text-[44px] text-white leading-[1.2] mb-12" style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700 }}>
          Five Ways We<br />Replace Manual<br />Work With AI.
        </h2>

        {/* Step list with progress line */}
        <div className="relative pl-5">
          {/* background rail */}
          <div className="absolute top-0 left-0 w-[1px] h-full bg-[#222]">
            <div className="fill-line absolute top-0 left-0 w-full h-0 bg-[#3b82f6] transition-none" />
          </div>

          <div className="flex flex-col gap-5">
            {PANELS.map((p, i) => {
              const isActive = i === active;
              return (
                <div key={i} className="flex items-center gap-4 transition-all duration-300 relative">
                  {isActive && (
                    <div className="absolute -left-5 top-0 bottom-0 w-[3px] bg-[#3b82f6] rounded-r-sm" />
                  )}
                  <span
                    className="text-[13px] font-bold transition-colors duration-300"
                    style={{ color: isActive ? "#3b82f6" : "#333", fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="text-[15px] font-semibold transition-colors duration-300"
                    style={{ color: isActive ? "#fff" : "#444" }}
                  >
                    {p.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── RIGHT: panels track ── */}
      <div className="flex-1 h-full overflow-hidden bg-[#050505]">
        <div className="panels-track w-full" style={{ height: `${PANELS.length * 100}%` }}>
          {PANELS.map((panel, i) => {
            const { Visual } = panel;
            return (
              <div key={panel.id} className="w-full h-[20%] flex items-center justify-center p-10">
                {/* Panel card */}
                <div
                  className="w-full max-w-[900px] h-[420px] rounded-[16px] border border-[#1a1a1a] flex overflow-hidden"
                  style={{ background: "#050505", borderLeft: `4px solid ${panel.color}` }}
                >
                  {/* Visual side */}
                  <div className="w-[42%] shrink-0 h-full border-r border-[#1a1a1a] flex items-center justify-center p-8 bg-[#0a0a0a]">
                    <div className="w-full h-full max-h-[220px]">
                      <Visual />
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="flex-1 h-full flex flex-col justify-center p-12">
                    <div
                      className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
                      style={{ color: panel.color, fontFamily: "var(--font-jetbrains-mono)" }}
                    >{panel.title}</div>

                    <h3
                      className="text-[30px] font-[700] text-white leading-[1.25] tracking-tight mb-5"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >{panel.headline}</h3>

                    <p className="text-[15px] text-[#888] leading-[1.7] max-w-[340px] mb-8">
                      {panel.body}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {panel.stats.map((s, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-[11px] font-bold text-zinc-400"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

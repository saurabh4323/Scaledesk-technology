"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Real-time clock ── */
function DigitalClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      setT(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[#ffaa00] text-[28px] font-bold tracking-widest">
      {t}
    </span>
  );
}

/* ── Circular progress ring ── */
function Ring({ percent = 97.4, color = "#00cfff", size = 140 }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#1a1a1a" strokeWidth="8" />
        <motion.circle
          cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - (circ * percent / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
      <span className="text-[22px] font-black text-white relative z-10" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        {percent}%
      </span>
    </div>
  );
}

/* ── Use-case cards data ── */
const USE_CASES = [
  { team: "SALES", title: "Sales Teams", desc: "AI lead scoring, outreach personalization, and pipeline forecasting on autopilot.", color: "#7b61ff" },
  { team: "OPS", title: "Operations", desc: "Document processing, approval workflows, and reporting — fully automated end to end.", color: "#00ff88" },
  { team: "FINANCE", title: "Finance", desc: "Invoice extraction, fraud detection, and reconciliation running 24/7 without error.", color: "#00cfff" },
  { team: "SUPPORT", title: "Customer Support", desc: "LLM-powered agents that resolve 70% of tickets before a human sees them.", color: "#ffaa00" },
  { team: "HR", title: "HR & Recruiting", desc: "Resume screening, interview scheduling, and onboarding workflows fully automated.", color: "#7b61ff" },
  { team: "ENG", title: "Product & Engineering", desc: "AI code review, automated testing, and incident response without the on-call burden.", color: "#00ff88" },
];

/* ── Main component ── */
export default function MetricsUseCases() {
  const headlineRef = useRef(null);
  const headlineInView = useInView(headlineRef, { once: true });

  return (
    <section className="py-40 bg-black border-t border-[#0f0f0f] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 space-y-36">

        {/* ── PART A: METRICS ── */}
        <div>
          {/* Headline */}
          <div ref={headlineRef} className="text-center mb-20 relative">
            <h2 className="text-[48px] text-white inline-block relative" style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700 }}>
              The Impact Is Measurable.
              <motion.div
                initial={{ scaleX: 0 }}
                animate={headlineInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#7b61ff] origin-left"
              />
            </h2>
          </div>

          {/* 4 unique cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">

            {/* Card 1: 60% — purple gradient + bar chart */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative rounded-2xl border border-[#1a1a1a] overflow-hidden flex flex-col p-8 gap-6"
              style={{ background: "#0a0a0a", minHeight: 320 }}
            >
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(123,97,255,0.12) 0%, transparent 55%)" }} />
              <div>
                <div className="text-[72px] font-black text-white leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>60%</div>
                <div className="text-sm font-bold text-[#7b61ff] uppercase tracking-widest mt-2" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Workload Reduction</div>
              </div>
              {/* Bar drop: 100 → 40 */}
              <div className="flex items-end gap-3 h-16 mt-auto">
                <div className="flex-1 h-full bg-zinc-800 rounded-t-sm" />
                <motion.div
                  initial={{ height: "100%" }} whileInView={{ height: "40%" }} viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                  className="flex-1 rounded-t-sm"
                  style={{ background: "#7b61ff" }}
                />
              </div>
            </motion.div>

            {/* Card 2: 10x — speed lines + before/after */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              className="relative rounded-2xl border border-[#1a1a1a] overflow-hidden flex flex-col p-8 gap-6"
              style={{ background: "#0a0a0a", minHeight: 360 }}
            >
              {/* Speed lines */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
                {[15, 30, 50, 65, 80].map((top, i) => (
                  <motion.div key={i}
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{ duration: 0.9 + i * 0.15, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                    className="absolute h-[1px] bg-[#00ff88]"
                    style={{ top: `${top}%`, width: `${50 + i * 10}%` }}
                  />
                ))}
              </div>
              <div>
                <div className="text-[72px] font-black text-white leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>10x</div>
                <div className="text-sm font-bold text-[#00ff88] uppercase tracking-widest mt-2" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Faster Completion</div>
              </div>
              <div className="mt-auto bg-[#111] border border-white/5 rounded-xl p-4 flex items-center justify-between" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                <span className="text-zinc-500 text-sm line-through">4h</span>
                <span className="text-[#00ff88] text-lg">→</span>
                <span className="text-[#00ff88] text-sm font-bold">0.3s</span>
              </div>
            </motion.div>

            {/* Card 3: 97.4% — circular ring */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
              className="relative rounded-2xl border border-[#1a1a1a] flex flex-col items-center justify-center p-8 gap-6"
              style={{ background: "#0a0a0a", minHeight: 320 }}
            >
              <Ring />
              <div className="text-center">
                <div className="text-sm font-bold text-[#00cfff] uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Model Accuracy</div>
              </div>
            </motion.div>

            {/* Card 4: 24/7 — real clock, no broken rendering */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}
              className="relative rounded-2xl border border-[#1a1a1a] overflow-hidden flex flex-col justify-between p-8"
              style={{ background: "#0a0a0a", minHeight: 360 }}
            >
              <div>
                {/* Explicitly rendered as text to avoid the "247/" bug */}
                <div className="text-[72px] font-black text-white leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  24<span className="text-[#ffaa00]">/</span>7
                </div>
                <div className="text-sm font-bold text-[#ffaa00] uppercase tracking-widest mt-2" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Always Running</div>
              </div>
              <div className="space-y-3 mt-auto">
                <DigitalClock />
                <div className="text-[11px] text-zinc-600 font-bold tracking-wider uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  365 days · no downtime · no sick days
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── PART B: USE CASES ── */}
        <div>
          <div className="text-center mb-14">
            <h2 className="text-[48px] text-white" style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700 }}>
              Built for Every Team That Touches Work.
            </h2>
          </div>

          <div
            className="flex gap-5 overflow-x-auto pb-6"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {USE_CASES.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative shrink-0 flex flex-col p-8 rounded-xl border border-[#1a1a1a] cursor-pointer transition-all duration-300 overflow-hidden group"
                style={{
                  width: 280, minHeight: 340, background: "#050505", scrollSnapAlign: "start",
                  borderLeft: `4px solid ${uc.color}`
                }}
              >
                {/* Hover: glow + lift handled via CSS */}
                <style jsx>{`
                  .group:hover { transform: translateY(-6px); box-shadow: -12px 0 40px -15px ${uc.color}50; }
                `}</style>

                {/* Watermark team name */}
                <div
                  className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
                  aria-hidden="true"
                >
                  <span className="text-[80px] font-black text-white tracking-tighter -rotate-12"
                    style={{ opacity: 0.025, fontFamily: "var(--font-space-grotesk)" }}>
                    {uc.team}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-white mb-4 relative z-10">{uc.title}</h3>
                <p className="text-[14px] text-[#777] leading-relaxed relative z-10">{uc.desc}</p>

                <div className="mt-auto relative z-10">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
                    style={{
                      color: uc.color, borderColor: `${uc.color}40`,
                      background: `${uc.color}10`, fontFamily: "var(--font-jetbrains-mono)"
                    }}
                  >{uc.team}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

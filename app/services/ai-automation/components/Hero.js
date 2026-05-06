"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TASK_LIST = [
  { text: "Lead #4821 scored → 94/100", time: "0.1s" },
  { text: "Invoice extracted → Salesforce", time: "0.2s" },
  { text: "Churn risk flagged → CS notified", time: "0.3s" },
  { text: "Report generated → Slack sent", time: "0.1s" },
  { text: "Fraud attempt blocked → $4,200", time: "0.0s" },
];

export default function Hero() {
  const [visibleTasks, setVisibleTasks] = useState([]);
  const [count, setCount] = useState(0);

  // Stream tasks in, reset, loop with mounted guard
  useEffect(() => {
    let i = 0;
    let resetTimeout;
    let isMounted = true;
    const interval = setInterval(() => {
      if (!isMounted) return;
      if (i < TASK_LIST.length) {
        setVisibleTasks(prev => [...prev, TASK_LIST[i]]);
        i++;
      } else {
        resetTimeout = setTimeout(() => {
          if (!isMounted) return;
          setVisibleTasks([]);
          i = 0;
        }, 1200);
      }
    }, 1100);
    return () => {
      isMounted = false;
      clearInterval(interval);
      clearTimeout(resetTimeout);
    };
  }, []);

  // Counter 0 → 48294
  useEffect(() => {
    const target = 48294;
    const duration = 2200;
    const step = target / (duration / 16);
    let current = 0;
    const t = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center py-28 px-6 lg:px-20 bg-black overflow-hidden">

      {/* BG: grid + orb */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(to right,rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(59,130,246,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 70%)", filter: "blur(140px)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full grid lg:grid-cols-[60%_40%] gap-16 items-center">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col gap-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#3b82f6] text-[11px] font-bold tracking-[0.15em] uppercase text-white"
            style={{ background: "rgba(59,130,246,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            AI &amp; Automation · ScaleDesk Technology
          </motion.div>

          {/* Headline */}
          <h1 className="flex flex-col gap-0 leading-[1.05]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {/* Line 1: clip from left */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="block text-white font-[800]"
                style={{ fontSize: "clamp(52px,6vw,76px)" }}
              >
                Your Team
              </motion.span>
            </div>
            {/* Line 2: clip from right */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                className="block text-white font-[800]"
                style={{ fontSize: "clamp(52px,6vw,76px)" }}
              >
                Should Think.
              </motion.span>
            </div>
            {/* Line 3: scale + glow */}
            <motion.span
              initial={{ scale: 0.8, opacity: 0, filter: "drop-shadow(0 0 0px #3b82f6)" }}
              animate={{ scale: 1, opacity: 1, filter: "drop-shadow(0 0 24px rgba(59,130,246,0.5))" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
              className="text-[#7b61ff] italic font-[800]"
              style={{ fontSize: "clamp(44px,5vw,64px)" }}
            >
              Not Execute.
            </motion.span>
          </h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[17px] leading-[1.8] max-w-[420px]"
            style={{ color: "#666" }}
          >
            We build AI systems and automation that handle the repetitive — so your team focuses only on what humans do best.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <button
              className="px-8 py-4 rounded-[8px] bg-[#3b82f6] text-white font-bold text-[14px] tracking-wide transition-all hover:bg-[#2563eb] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Automate My Workflow
            </button>
            <button
              className="group px-8 py-4 rounded-[8px] bg-transparent border border-white/20 text-white font-bold text-[14px] tracking-wide transition-all hover:border-[#7b61ff] flex items-center gap-2"
            >
              See What's Possible
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[11px] tracking-wider"
            style={{ color: "#555", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            ● 60% avg workload reduction · deployed in 2 weeks
          </motion.p>
        </div>

        {/* ── RIGHT COLUMN: Automation Console ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full rounded-[16px] border border-[#1f1f1f] overflow-hidden flex flex-col"
          style={{ background: "#0a0a0a", boxShadow: "0 0 60px rgba(59,130,246,0.12)", minHeight: 460 }}
        >
          {/* Top bar */}
          <div className="h-10 flex items-center px-4 border-b border-[#1f1f1f] justify-between shrink-0" style={{ background: "#111" }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-2 text-[12px] text-zinc-400" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              AUTOMATION ENGINE <span className="text-zinc-600">●</span>
              <span className="text-green-400 flex items-center gap-1.5">
                RUNNING <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </span>
            </div>
            <div className="w-12" />
          </div>

          {/* Console body */}
          <div className="flex-1 p-6 flex flex-col justify-end gap-3 overflow-hidden" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: 13 }}>
            <AnimatePresence>
              {visibleTasks.map((task, idx) => (
                <motion.div
                  key={`${task.text}-${idx}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between text-zinc-300"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#3b82f6]">✓</span>
                    {task.text}
                  </span>
                  <span className="text-zinc-600 ml-4 shrink-0">{task.time}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex items-center gap-3 text-zinc-600">
              <span className="text-[#3b82f6] animate-pulse">▌</span>
              Processing next task...
            </div>
          </div>

          {/* Bottom bar: counter */}
          <div className="h-20 border-t border-[#1f1f1f] flex items-center justify-between px-6 shrink-0" style={{ background: "#0d0d0d" }}>
            <span className="text-[12px] font-bold uppercase tracking-widest text-zinc-500" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              Tasks completed today:
            </span>
            <span className="text-[28px] font-bold text-[#3b82f6]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              {count.toLocaleString()}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

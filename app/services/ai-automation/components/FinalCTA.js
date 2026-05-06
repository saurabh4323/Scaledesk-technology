"use client";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Shield, Repeat } from "lucide-react";

const PROOF = [
  { icon: <Zap className="w-4 h-4" />, text: "Deployed in 2 weeks" },
  { icon: <Shield className="w-4 h-4" />, text: "60% cost reduction avg" },
  { icon: <Repeat className="w-4 h-4" />, text: "Runs 24/7 without fail" },
];

const SCAN_SPEEDS = [40, 55, 35, 60, 45];

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6 py-20">

      {/* ── Background: drifting scan lines ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {SCAN_SPEEDS.map((speed, i) => (
          <motion.div
            key={i}
            initial={{ y: "-5%" }}
            animate={{ y: "105%" }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: i * (speed / 5) }}
            className="absolute left-0 w-full h-[1px]"
            style={{ top: `${i * 20}%`, background: "rgba(123,97,255,0.08)" }}
          />
        ))}
      </div>

      {/* ── Background: centred radial glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,97,255,0.10) 0%, transparent 70%)", filter: "blur(200px)" }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto text-center flex flex-col items-center gap-10">

        {/* Moment 1 — slides up from bottom */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[800] text-white leading-none"
            style={{ fontSize: "clamp(44px,7vw,80px)", fontFamily: "var(--font-space-grotesk)" }}
          >
            Stop Doing What
          </motion.h2>
        </div>

        {/* Moment 2 — word-by-word clip reveal */}
        <div className="flex flex-wrap justify-center gap-x-4 -mt-6 overflow-hidden">
          {["AI", "Can", "Do", "Better."].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                className="inline-block font-[800] italic text-[#7b61ff] leading-none"
                style={{ fontSize: "clamp(44px,7vw,80px)", fontFamily: "var(--font-space-grotesk)" }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Proof pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {PROOF.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#222] bg-[#0a0a0a]"
            >
              <span className="text-[#7b61ff]">{p.icon}</span>
              <span className="text-[14px] text-[#888]">{p.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <button
            className="px-8 py-4 bg-[#7b61ff] text-white font-bold rounded-[8px] transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(123,97,255,0.45)] cta-pulse-4s text-[15px]"
          >
            Book a Free Automation Audit
          </button>
          <button
            className="group px-8 py-4 bg-transparent border border-[#333] text-white font-bold rounded-[8px] hover:border-[#7b61ff] transition-colors flex items-center gap-2 text-[15px]"
          >
            Talk to an Engineer
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-[11px] tracking-wider"
          style={{ color: "#444", fontFamily: "var(--font-jetbrains-mono)" }}
        >
          ● Free 30-min audit · No commitment · Response in 24h
        </motion.p>

      </div>

      <style jsx>{`
        @keyframes pulse4s {
          0%, 88%, 100% { box-shadow: 0 0 20px rgba(123,97,255,0.2); }
          94% { box-shadow: 0 0 40px rgba(123,97,255,0.5); }
        }
        .cta-pulse-4s { animation: pulse4s 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const INTEGRATIONS = {
  inner: ["Salesforce", "HubSpot", "Stripe"],
  outer: ["Snowflake", "BigQuery", "Redshift", "AWS", "GCP"],
  third: ["Slack", "Email", "Webhook", "API"]
};

const Integrations = () => {
  return (
    <section className="py-48 px-6 bg-black relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1240px] mx-auto text-center mb-32 z-10 relative">
        <h2 className="text-5xl md:text-[6.5rem] font-bold tracking-tighter leading-[0.9] mb-12">
          Plugs Into Everything <br /> <span className="text-zinc-600">You Already Use.</span>
        </h2>
      </div>

      <div className="relative h-[800px] w-full flex items-center justify-center">
        {/* Core AI Node */}
        <div className="relative z-20 w-48 h-48 glass-dark border border-blue-500/30 rounded-[3rem] flex items-center justify-center shadow-[0_0_100px_rgba(37,99,235,0.2)]">
          <div className="text-center font-black">
             <div className="text-blue-500 text-xs tracking-widest uppercase mb-1">LeadForGrow</div>
             <div className="text-white text-2xl tracking-tighter uppercase">AI Analytics</div>
          </div>
        </div>

        {/* Inner Orbit (Clockwise 30s) */}
        <div className="absolute w-[350px] h-[350px] rounded-full border border-white/5 border-dashed animate-spin-slow" />
        {INTEGRATIONS.inner.map((item, i) => {
          const angle = (i * 360) / INTEGRATIONS.inner.length;
          return (
            <motion.div
              key={item}
              className="absolute w-24 h-24 glass-dark border border-white/10 rounded-2xl flex items-center justify-center font-bold text-xs text-zinc-500 hover:text-blue-400 hover:border-blue-400/50 transition-all z-10"
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * 175,
                y: Math.sin((angle * Math.PI) / 180) * 175,
              }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {item}
            </motion.div>
          );
        })}

        {/* Outer Orbit (Counter-Clockwise 45s) */}
        <div className="absolute w-[550px] h-[550px] rounded-full border border-white/5 border-dashed animate-spin-reverse" />
        {INTEGRATIONS.outer.map((item, i) => {
          const angle = (i * 360) / INTEGRATIONS.outer.length;
          return (
            <motion.div
              key={item}
              className="absolute w-24 h-24 glass-dark border border-white/10 rounded-2xl flex items-center justify-center font-bold text-xs text-zinc-500 hover:text-cyan-400 hover:border-cyan-400/50 transition-all z-10"
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * 275,
                y: Math.sin((angle * Math.PI) / 180) * 275,
              }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            >
              {item}
            </motion.div>
          );
        })}

        {/* Third Orbit (Clockwise 60s) */}
        <div className="absolute w-[750px] h-[750px] rounded-full border border-white/5 border-dashed animate-spin-slow" />
        {INTEGRATIONS.third.map((item, i) => {
          const angle = (i * 360) / INTEGRATIONS.third.length;
          return (
            <motion.div
              key={item}
              className="absolute w-24 h-24 glass-dark border border-white/10 rounded-2xl flex items-center justify-center font-bold text-xs text-zinc-500 hover:text-purple-400 hover:border-purple-400/50 transition-all z-10"
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * 375,
                y: Math.sin((angle * Math.PI) / 180) * 375,
              }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-20 text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600">
        + 40 more integrations  •  REST API  •  Custom connectors
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 45s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Integrations;

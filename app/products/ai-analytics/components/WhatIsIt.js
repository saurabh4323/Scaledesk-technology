"use client";

import { motion } from "framer-motion";

const WhatIsIt = () => {
  return (
    <section className="py-48 px-6 bg-black relative overflow-hidden">
      <div className="max-w-[860px] mx-auto text-center z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-16 text-white"
        >
          Not a Dashboard. <br />
          <span className="text-zinc-600">An Intelligence Layer.</span>
        </motion.h2>

        <div className="space-y-12">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed"
          >
            Most analytics tools show you what happened. <br />
            <span className="text-white font-bold">LeadForGrow AI Analytics tells you what's about to happen</span> — and exactly what to do about it.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed"
          >
            Built on a multi-model ML architecture trained on revenue, fraud, and pipeline data, it sits as a live intelligence layer on top of your CRM — surfacing signals your team would otherwise miss entirely.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-20">
          {[
            { t: "200+ Behavioral Signals Monitored", c: "#00ff88" },
            { t: "45-Day Predictive Horizon", c: "#00cfff" },
            { t: "<200ms Inference Latency", c: "#7b61ff" }
          ].map((pill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + (i * 0.2) }}
              style={{ borderColor: `${pill.c}44`, backgroundColor: `${pill.c}11` }}
              className="px-8 py-3 rounded-full border backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <span style={{ color: pill.c }} className="text-[12px] font-bold uppercase tracking-[0.15em]">
                {pill.t}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default WhatIsIt;

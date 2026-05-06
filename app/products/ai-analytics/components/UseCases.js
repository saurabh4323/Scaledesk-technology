"use client";

import { motion } from "framer-motion";

const USE_CASES = [
  {
    tag: "RevOps",
    title: "Revenue Operations",
    icon: "📈",
    desc: "Give your RevOps team a live forecasting engine that replaces spreadsheets and quarterly guesswork."
  },
  {
    tag: "Sales",
    title: "Sales Leadership",
    icon: "🎯",
    desc: "Real-time pipeline health, rep performance benchmarks, and deal risk scoring — everything your VP Sales needs in one view."
  },
  {
    tag: "CS Teams",
    title: "Customer Success",
    icon: "🛡️",
    desc: "Identify at-risk accounts 45 days before they churn. Trigger playbooks automatically. Save revenue before the renewal conversation."
  },
  {
    tag: "Finance",
    title: "Finance & CFO Office",
    icon: "🔒",
    desc: "Rolling revenue forecasts, anomaly alerts, and fraud detection that your finance team can actually trust and act on."
  },
  {
    tag: "Marketing",
    title: "Growth & Marketing",
    icon: "🧲",
    desc: "Cohort intelligence and attribution modeling that shows which campaigns drive revenue — not just traffic."
  },
  {
    tag: "Product",
    title: "Product Teams",
    icon: "🥞",
    desc: "Usage anomaly detection and behavioral cohorts help product teams understand what drives activation and retention."
  }
];

const UseCases = () => {
  return (
    <section className="py-48 px-6 bg-black relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-[6.5rem] font-bold tracking-tighter leading-[0.9] mb-32 text-center"
        >
          Built for Teams <br /> <span className="text-zinc-600">Who Move Fast.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-dark p-12 rounded-[3.5rem] border border-white/5 group hover:border-blue-500/20 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity grayscale">{uc.icon}</div>
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-blue-500 mb-6">{uc.tag}</div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{uc.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

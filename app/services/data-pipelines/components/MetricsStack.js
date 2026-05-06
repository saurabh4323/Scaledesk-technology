"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericStr = value.replace(/[^0-9.]/g, "");
    const end = parseFloat(numericStr);
    if (isNaN(end)) { setDisplay(value); return; }

    const prefix = value.startsWith("<") ? "<" : "";
    const suffix = value.replace(/[<>0-9.]/g, "");
    const duration = 2000;
    const steps = duration / 16;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      const decimals = end < 10 && numericStr.includes(".") ? 2 : 0;
      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="bg-[#0f0f0f] border border-white/10 p-10 rounded-2xl hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,207,255,0.07)] transition-all duration-300 group"
    >
      <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:text-cyan-400 transition-colors font-[family-name:var(--font-space-grotesk)]">
        {display}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold font-[family-name:var(--font-jetbrains-mono)]">
        {label}
      </div>
    </div>
  );
}

const STACK = [
  {
    category: "Ingestion",
    tools: ["Kafka", "Kinesis", "Pub/Sub", "Fivetran", "Airbyte"],
  },
  {
    category: "Processing",
    tools: ["Apache Spark", "Flink", "dbt", "Airflow", "Dagster"],
  },
  {
    category: "Storage",
    tools: ["Snowflake", "BigQuery", "Redshift", "Delta Lake", "ClickHouse"],
  },
];

export default function MetricsStack() {
  return (
    <section className="py-40 bg-black px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-40">

        {/* Part A: Count-up Metrics */}
        <div>
          <div className="mb-16">
            <p className="text-xs font-black text-cyan-500 tracking-[0.5em] uppercase mb-4 font-[family-name:var(--font-jetbrains-mono)]">
              BY THE NUMBERS
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              The Scale We Operate At.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CountUp value="4.2B+" label="Records Processed Daily" />
            <CountUp value="100ms" label="End-to-End Latency" />
            <CountUp value="99.99%" label="Pipeline Uptime SLA" />
            <CountUp value="10x" label="Avg. Query Speed Improvement" />
          </div>
        </div>

        {/* Part B: Tech Stack */}
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <p className="text-xs font-black text-cyan-500 tracking-[0.5em] uppercase font-[family-name:var(--font-jetbrains-mono)]">
              TECH STACK
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              Built on the Best.{" "}
              <span className="text-cyan-400 italic">Owned by You.</span>
            </h2>
          </div>

          <div className="space-y-10">
            {STACK.map((row, i) => (
              <div key={i} className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-white/10" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-black font-[family-name:var(--font-jetbrains-mono)]">
                    {row.category}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {row.tools.map((tool, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.08 }}
                      className="px-6 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-sm font-bold text-zinc-400 hover:border-cyan-500/60 hover:text-white hover:shadow-[0_0_20px_rgba(0,207,255,0.12)] transition-all cursor-default"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] font-[family-name:var(--font-jetbrains-mono)] text-[#555] font-bold uppercase tracking-widest">
            All open-source friendly. No vendor lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}

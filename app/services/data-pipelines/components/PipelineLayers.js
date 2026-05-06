"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Panel Visuals ─────────────────────────────────── */

function StreamingVisual() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let c = 0;
    const t = setInterval(() => {
      c += 1200;
      if (c >= 48000) { setCount(48000); clearInterval(t); } else setCount(c);
    }, 16);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="space-y-5 w-full">
      {[...Array(5)].map((_, i) => (
        <motion.div key={i} className="h-2.5 rounded-full bg-[#00cfff]/20 overflow-hidden">
          <motion.div
            className="h-full bg-[#00cfff] rounded-full shadow-[0_0_8px_#00cfff]"
            animate={{ x: ["-100%", "110%"] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.28, ease: "linear" }}
          />
        </motion.div>
      ))}
      <div className="pt-2 text-center">
        <div className="text-3xl font-black text-[#00cfff] font-[family-name:var(--font-space-grotesk)]">
          {count.toLocaleString()}
        </div>
        <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest font-[family-name:var(--font-jetbrains-mono)]">Events / Sec</div>
      </div>
    </div>
  );
}

function EtlVisual() {
  const stages = ["EXTRACT", "TRANSFORM", "LOAD"];
  return (
    <div className="flex items-center justify-between gap-3 w-full">
      {stages.map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div
            animate={{ borderColor: ["#333", "#7b61ff", "#333"] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
            className="flex flex-col items-center gap-2 border rounded-xl p-3 border-[#333] bg-[#0a0a0a]"
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, j) => (
                <motion.div key={j} animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.6 + j * 0.2 }}
                  className="w-2 h-2 rounded-sm bg-[#7b61ff]"
                />
              ))}
            </div>
            <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">{s}</span>
          </motion.div>
          {i < 2 && <div className="text-zinc-700 text-lg font-black">→</div>}
        </div>
      ))}
    </div>
  );
}

function WarehouseVisual() {
  return (
    <div className="space-y-3 w-full">
      {["users", "events", "revenue"].map((table, i) => (
        <div key={i} className="space-y-1">
          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest font-[family-name:var(--font-jetbrains-mono)]">{table}</span>
          <div className="flex gap-1">
            {[...Array(8)].map((_, j) => (
              <motion.div key={j} animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, delay: i * 0.4 + j * 0.07, repeat: Infinity, repeatDelay: 2 }}
                className="h-4 flex-1 bg-[#00ff88]/15 rounded-sm border border-[#00ff88]/20"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function QualityVisual() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    let s = 0;
    const t = setInterval(() => {
      s += 1.2;
      if (s >= 99.8) { setScore(99.8); clearInterval(t); } else setScore(s);
    }, 16);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="space-y-4 w-full">
      <div className="text-center">
        <div className="text-4xl font-black text-[#ffaa00] font-[family-name:var(--font-space-grotesk)]">{score.toFixed(1)}%</div>
        <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">Quality Score</div>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div animate={{ width: `${score}%` }} className="h-full bg-[#ffaa00] rounded-full shadow-[0_0_8px_#ffaa00]" />
      </div>
      <div className="flex gap-2">
        {["✓ lineage", "✓ freshness", "✗ nulls"].map((t, i) => (
          <div key={i} className={`px-2 py-1 rounded text-[8px] font-bold border ${i === 2 ? "border-red-500/40 text-red-500" : "border-[#ffaa00]/30 text-[#ffaa00]"}`}>{t}</div>
        ))}
      </div>
    </div>
  );
}

function BatchVisual() {
  return (
    <div className="space-y-4 w-full">
      {["job_nightly", "job_hourly", "job_adhoc"].map((job, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-zinc-600 font-[family-name:var(--font-jetbrains-mono)]">
            <span>{job}</span><span className="text-green-500">DONE</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity, repeatDelay: 1 }}
              className="h-full bg-[#ff3b3b] rounded-full"
            />
          </div>
        </div>
      ))}
      <div className="pt-1 text-center text-[10px] font-bold text-zinc-500 font-[family-name:var(--font-jetbrains-mono)]">10TB · 4m 12s</div>
    </div>
  );
}

/* ── Panel Data ─────────────────────────────────────── */

const PANELS = [
  {
    title: "Real-Time Streaming Pipelines",
    headline: "Data That Never Sleeps.",
    body: "Kafka, Kinesis, and Pub/Sub architectures that process millions of events per second — built for financial data, user behavior, IoT signals, and real-time analytics.",
    stats: "48K Events/sec · Sub-100ms · Exactly-Once Delivery",
    color: "#00cfff",
    visual: <StreamingVisual />,
  },
  {
    title: "ETL / ELT Architecture",
    headline: "Extract. Transform. Trust.",
    body: "Schema-on-read ELT for modern cloud warehouses or traditional ETL for legacy systems — we build both, optimized for your data volume and latency requirements.",
    stats: "Petabyte Scale · dbt Transformations · Auto Schema Evolution",
    color: "#7b61ff",
    visual: <EtlVisual />,
  },
  {
    title: "Data Warehouse Engineering",
    headline: "Warehouses That Answer Fast.",
    body: "Snowflake, BigQuery, Redshift — we design the schema, build the ingestion pipelines, and optimize query performance so your analysts get answers in seconds, not hours.",
    stats: "10x Query Speed · 40% Cost Reduction · Auto-partitioning",
    color: "#00ff88",
    visual: <WarehouseVisual />,
  },
  {
    title: "Data Quality & Observability",
    headline: "Bad Data Is Worse Than No Data.",
    body: "Automated data quality checks, anomaly detection on your pipelines, and full lineage tracking — so you always know where your data came from and whether to trust it.",
    stats: "99.8% Data Quality · Full Lineage · Auto Alerting",
    color: "#ffaa00",
    visual: <QualityVisual />,
  },
  {
    title: "Batch Processing at Scale",
    headline: "Terabytes. Minutes. Not Hours.",
    body: "Spark, Flink, and Airflow-orchestrated batch jobs that process your entire data estate on schedule — nightly, hourly, or on-demand — with full retry logic and alerting.",
    stats: "10TB in <5min · Spark Optimized · Full Orchestration",
    color: "#ff3b3b",
    visual: <BatchVisual />,
  },
];

/* ── Component ──────────────────────────────────────── */

export default function PipelineLayers() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const dots = gsap.utils.toArray(".dot-indicator");

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.to(".progress-line-fill", {
            height: `${progress * 100}%`,
            duration: 0.1,
            ease: "none",
          });

          const activeIdx = Math.min(
            Math.floor(progress * PANELS.length),
            PANELS.length - 1
          );

          dots.forEach((dot, i) => {
            gsap.to(dot, {
              backgroundColor: i === activeIdx ? PANELS[i].color : "#2a2a2a",
              scale: i === activeIdx ? 1.6 : 1,
              duration: 0.3,
            });
          });

          gsap.to(".panels-wrapper", {
            yPercent: -20 * activeIdx,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen bg-black flex overflow-hidden border-y border-white/[0.05]"
    >
      {/* ── Left Fixed Panel ── */}
      <div className="w-[38%] h-full flex flex-col justify-center px-10 xl:px-16 border-r border-white/[0.05] bg-black shrink-0">
        <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-8 font-black font-[family-name:var(--font-jetbrains-mono)]">
          PIPELINE CAPABILITIES
        </p>
        <h2 className="text-4xl xl:text-6xl font-black tracking-tighter leading-[1.0] uppercase mb-12">
          <span className="block text-white">Any Source.</span>
          <span className="block text-zinc-600">Any Destination.</span>
          <span className="block text-cyan-500">Any Scale.</span>
        </h2>

        {/* Progress track */}
        <div className="relative h-40 w-[2px] bg-white/8 rounded-full">
          <div className="progress-line-fill absolute top-0 left-0 w-full bg-cyan-500 rounded-full h-0 shadow-[0_0_8px_#00cfff]" />
          <div className="absolute top-0 left-[-5px] h-full flex flex-col justify-between py-[3px]">
            {PANELS.map((_, i) => (
              <div key={i} className="dot-indicator w-3 h-3 rounded-full bg-[#2a2a2a] transition-transform" />
            ))}
          </div>
        </div>
      </div>

      {/* ── Right Scrolling Panels ── */}
      <div className="flex-1 h-full overflow-hidden">
        <div className="panels-wrapper w-full h-[500%] flex flex-col">
          {PANELS.map((panel, i) => (
            <div
              key={i}
              className="w-full h-[20%] flex items-center px-12 xl:px-20 bg-[#050505]"
            >
              <div className="max-w-[760px] w-full space-y-8">
                {/* Label */}
                <div className="flex items-center gap-5">
                  <div className="w-12 h-[2px]" style={{ backgroundColor: panel.color }} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 font-[family-name:var(--font-jetbrains-mono)]">
                    {panel.title}
                  </span>
                </div>

                {/* Content row */}
                <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
                  <div className="space-y-5">
                    <h3
                      className="text-3xl xl:text-5xl font-black tracking-tighter text-white leading-tight uppercase"
                    >
                      {panel.headline}
                    </h3>
                    <p className="text-base xl:text-lg text-zinc-400 leading-relaxed font-medium max-w-[480px]">
                      {panel.body}
                    </p>
                    <div
                      className="inline-block px-4 py-2 rounded border text-[10px] uppercase tracking-widest font-black text-zinc-400 bg-white/[0.03] border-white/10 font-[family-name:var(--font-jetbrains-mono)]"
                    >
                      {panel.stats}
                    </div>
                  </div>

                  {/* Visual box */}
                  <div className="w-[260px] xl:w-[300px] shrink-0 p-6 bg-black/50 border border-white/[0.06] rounded-2xl">
                    {panel.visual}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

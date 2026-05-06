"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Map, Settings, Cloud, BarChart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function CountUp({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(value.replace(/[^0-9.]/g, ''));
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formattedCount = value.includes('%') ? `${count.toFixed(count < 10 ? 2 : 0)}%` : value.includes('x') ? `${count.toFixed(0)}x` : value.includes('Weeks') ? `${Math.ceil(count)} Weeks` : count;

  return (
    <div ref={ref} className="bg-[#0f0f0f] border border-white/10 p-10 rounded-2xl hover:border-blue-500/30 transition-all group">
      <div className="text-5xl font-black text-white mb-4 tracking-tighter group-hover:text-blue-500 transition-colors">
        {isInView ? formattedCount : "0"}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold font-[family-name:var(--font-jetbrains-mono)]">
        {label}
      </div>
    </div>
  );
}

const STEPS = [
  {
    title: "ARCHITECT",
    body: "We map your system requirements, define the stack, and design for scale before a single line is written.",
    icon: <Map className="w-6 h-6" />
  },
  {
    title: "BUILD",
    body: "Agile sprints, daily deploys, full test coverage — velocity without compromising quality.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "SHIP",
    body: "CI/CD pipelines, automated testing, staged rollouts — production-grade delivery from day one.",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "SCALE",
    body: "Post-launch monitoring, performance tuning, and iterative improvement.",
    icon: <BarChart className="w-6 h-6" />
  }
];

export default function MetricsProcess() {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Main timeline line animation
      gsap.fromTo(lineRef.current, 
        { scaleX: 0 },
        { 
          scaleX: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
            onUpdate: (self) => {
              // Calculate which step is active based on progress
              const progress = self.progress;
              const stepProgress = 1 / STEPS.length;
              const index = Math.floor(progress / stepProgress);
              if (index !== activeIndex) {
                setActiveIndex(index);
              }
            }
          }
        }
      );
    }, timelineRef);
    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section className="py-40 bg-black px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Part A: Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          <CountUp value="96%" label="Code Coverage Standard" />
          <CountUp value="6 Weeks" label="Average MVP Delivery" />
          <CountUp value="10x" label="Performance Improvement" />
          <CountUp value="99.99%" label="Uptime SLA" />
        </div>

        {/* Part B: Process Timeline */}
        <div ref={timelineRef} className="relative">
          <div className="mb-20">
            <h2 className="text-xs font-black text-blue-500 tracking-[0.5em] uppercase mb-4 font-[family-name:var(--font-jetbrains-mono)]">ENGINEERING PROCESS</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Velocity Meets Precision.</h3>
          </div>

          {/* Timeline Line */}
          <div className="absolute top-[120px] left-0 w-full h-[1px] bg-white/10 hidden lg:block">
            <div ref={lineRef} className="h-full bg-blue-500 origin-left shadow-[0_0_10px_#3b82f6]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6"
              >
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-[#0f0f0f] border transition-all duration-500 flex items-center justify-center group relative z-20 overflow-hidden ${i <= activeIndex ? "border-blue-500 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]" : "border-white/10 text-zinc-500"}`}>
                    <div className="absolute inset-0 bg-blue-500/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className={`text-xl font-black tracking-tight uppercase flex items-center gap-3 transition-colors duration-500 ${i <= activeIndex ? "text-white" : "text-zinc-600"}`}>
                    <span className={`w-2 h-2 rounded-full transition-all duration-500 ${i <= activeIndex ? "bg-blue-600 shadow-[0_0_8px_#2563eb] scale-125" : "bg-zinc-800"}`}></span>
                    {step.title}
                  </h4>
                  <p className={`text-sm leading-relaxed font-medium transition-colors duration-500 ${i <= activeIndex ? "text-zinc-400" : "text-zinc-700"}`}>
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

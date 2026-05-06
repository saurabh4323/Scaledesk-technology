"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MetricCard = ({ value, label, subtext, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 85%",
        onEnter: () => {
           const target = parseFloat(value.replace(/[^0-9.]/g, ''));
           gsap.to({ val: 0 }, {
             val: target,
             duration: 2.5,
             ease: "power3.out",
             onUpdate: function() {
               setCount(this.targets()[0].val.toFixed(value.includes('.') ? 1 : 0));
             }
           });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, [value]);

  return (
    <div ref={ref} className="glass-dark p-12 rounded-[4rem] border border-white/5 hover:border-blue-500/20 transition-all duration-700 shadow-3xl group relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] blur-[100px] rounded-full pointer-events-none" style={{ backgroundColor: color }} />
       <div className="relative z-10">
          <div className="text-[72px] font-black tracking-tighter mb-4 flex items-baseline gap-1" style={{ color: color }}>
             {value.includes("<") && <span>&lt;</span>}
             {count}
             {value.includes("%") && <span className="text-4xl opacity-50">%</span>}
             {value.includes("ms") && <span className="text-4xl opacity-50">ms</span>}
             {value.includes("Days") && <span className="text-4xl opacity-50 ml-2">Days</span>}
          </div>
          <div className="text-[12px] font-black uppercase tracking-[0.4em] text-white mb-6 italic">{label}</div>
          <div className="text-zinc-500 text-lg font-medium">{subtext}</div>
          
          <div className="mt-12 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
             <motion.div 
               className="h-full rounded-full" 
               style={{ backgroundColor: color }}
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 2, ease: "easeOut" }}
             />
          </div>
       </div>
    </div>
  );
};

const ModelAccuracy = () => {
  return (
    <section className="py-56 px-6 bg-black relative">
       <div className="max-w-[1440px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-[6.5rem] font-bold tracking-tighter leading-[0.9] text-center mb-32"
          >
            Numbers That <br /> <span className="text-zinc-600 italic">Earn Trust.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
             <MetricCard 
                value="98.7%" 
                label="Fraud Detection Accuracy" 
                subtext="Across 2.4B+ transactions analyzed annually." 
                color="#00ff88" 
             />
             <MetricCard 
                value="94.2%" 
                label="Revenue Forecast Accuracy" 
                subtext="Predictive 45-day rolling horizon vs. industry avg of 61%." 
                color="#00cfff" 
             />
             <MetricCard 
                value="<200ms" 
                label="End-to-End Inference Latency" 
                subtext="Processing 12,000+ predictions per second at peak scale." 
                color="#7b61ff" 
             />
             <MetricCard 
                value="45 Days" 
                label="Predictive Horizon for Churn" 
                subtext="Average lead time provided before critical churn events." 
                color="#facc15" 
             />
          </div>
       </div>
    </section>
  );
};

export default ModelAccuracy;

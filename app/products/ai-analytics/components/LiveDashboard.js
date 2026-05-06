"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LiveDashboard = () => {
  const containerRef = useRef(null);
  const dashboardRef = useRef(null);
  const [predictions, setPredictions] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 3D Tilt -> Flatten on scroll
      gsap.fromTo(dashboardRef.current, 
        { rotateX: 15, y: 100, opacity: 0 },
        { 
          rotateX: 0, 
          y: 0, 
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: true
          }
        }
      );

      // Predictions Counter
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: 148256,
            duration: 3,
            ease: "power3.out",
            onUpdate: function() {
              setPredictions(Math.floor(this.targets()[0].val));
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-56 px-6 bg-[#020202] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center mb-32">
        <h5 className="text-[11px] uppercase tracking-[0.6em] text-zinc-500 font-black mb-8">User Interface</h5>
        <h2 className="text-4xl md:text-[6rem] font-bold tracking-tight leading-[1] text-white">
          Command Center for <br /> <span className="text-[#00cfff]">Revenue Intelligence.</span>
        </h2>
      </div>

      <div className="perspective-[1200px] flex justify-center">
        <div ref={dashboardRef} className="w-full max-w-[1240px] glass-dark rounded-[4rem] border border-white/10 p-4 md:p-8 shadow-[0_50px_100px_rgba(0,0,0,1)] relative group">
          <div className="bg-black rounded-[3rem] overflow-hidden border border-white/5 aspect-video relative flex flex-col p-10 gap-8">
             
             {/* Header */}
             <div className="flex justify-between items-center pb-8 border-b border-white/5">
                <div className="flex items-center gap-4">
                   <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                   <div className="text-white font-bold tracking-widest text-[10px] uppercase">Live Neural Feed: Active</div>
                </div>
                <div className="flex gap-4">
                   <div className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.03] text-[9px] font-black uppercase text-zinc-500">Node-4821</div>
                   <div className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-[9px] font-black uppercase text-blue-400">Model v4.2</div>
                </div>
             </div>

             {/* Grid layout for widgets */}
             <div className="grid grid-cols-12 gap-8 flex-1">
                {/* Main Forecast Chart Widget */}
                <div className="col-span-8 glass-dark rounded-3xl border border-white/5 p-8 relative overflow-hidden">
                   <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-6">Rolling Revenue Forecast (45D)</div>
                   <div className="flex items-end gap-1 h-full pb-10">
                      {[40, 60, 45, 78, 55, 90, 85, 110, 105, 115, 130].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 1 }}
                          className={`flex-1 rounded-t-lg ${i > 7 ? 'bg-[#00cfff] opacity-40 border-t-2 border-dashed border-white' : 'bg-gradient-to-t from-blue-600 to-indigo-500'}`}
                        />
                      ))}
                   </div>
                   <div className="absolute top-1/2 left-2/3 -translate-y-1/2 flex flex-col items-center">
                       <div className="text-xs font-black text-white bg-blue-600 px-3 py-1 rounded mb-2">94.2% CONFIDENCE</div>
                       <div className="w-[2px] h-20 bg-blue-500 animate-pulse" />
                   </div>
                </div>

                <div className="col-span-4 flex flex-col gap-6">
                   {/* Predictions Count Widget */}
                   <div className="flex-1 glass-dark rounded-3xl border border-white/5 p-8">
                      <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-4">Predictions Today</div>
                      <div className="text-5xl font-black text-white tracking-tighter">{predictions.toLocaleString()}</div>
                      <div className="text-blue-400 text-[10px] font-bold mt-4 uppercase tracking-[0.2em]">Scale: 12,400 / sec</div>
                   </div>
                   {/* Anomaly Gauge Widget */}
                   <div className="flex-1 glass-dark rounded-3xl border border-white/5 p-8 relative overflow-hidden">
                      <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-4">Pipeline Health</div>
                      <div className="text-5xl font-black text-white">87<span className="text-xl opacity-30">/100</span></div>
                      <div className="w-full h-2 bg-zinc-900 rounded-full mt-6 overflow-hidden">
                         <div className="w-[87%] h-full bg-gradient-to-r from-blue-600 to-indigo-500" />
                      </div>
                   </div>
                </div>
             </div>

             {/* Bottom Tapes */}
             <div className="flex justify-between px-2 pt-4 border-t border-white/5">
                <div className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest flex gap-8">
                   <span>Latency: 184ms</span>
                   <span>Precision: 0.992</span>
                   <span>Recall: 0.984</span>
                </div>
                <div className="text-[9px] font-bold text-blue-500 uppercase tracking-widest animate-pulse">● System Optimal</div>
             </div>
          </div>

          {/* Floating Corners */}
          <div className="absolute top-4 left-4 -translate-x-1/2 -translate-y-1/2 glass-dark px-6 py-3 rounded-full border border-white/10 text-[9px] font-black text-blue-400 uppercase tracking-widest z-20">● LIVE 12,400 predictions/sec</div>
          <div className="absolute top-4 right-4 translate-x-1/2 -translate-y-1/2 glass-dark px-6 py-3 rounded-full border border-white/10 text-[9px] font-black text-white uppercase tracking-widest z-20">MODEL v4.2 Last Retrained: 4h ago</div>
          <div className="absolute bottom-4 left-4 -translate-x-1/2 translate-y-1/2 glass-dark px-6 py-3 rounded-full border border-white/10 text-[9px] font-black text-white uppercase tracking-widest z-20">$2.4B Revenue Under Protection</div>
          <div className="absolute bottom-4 right-4 translate-x-1/2 translate-y-1/2 glass-dark px-6 py-3 rounded-full border border-white/10 text-[9px] font-black text-blue-400 uppercase tracking-widest z-20">System Health: 99.97% Uptime</div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};

export default LiveDashboard;

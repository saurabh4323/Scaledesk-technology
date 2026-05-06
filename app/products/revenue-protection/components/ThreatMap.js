"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ThreatMap() {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        onEnter: () => {
           let obj = { val: 0 };
           gsap.to(obj, {
              val: 1247,
              duration: 2.5,
              ease: "power2.out",
              onUpdate: () => setCount(Math.floor(obj.val))
           });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black border-b border-white/5 relative overflow-hidden">
       <div className="max-w-[1240px] mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-white mb-6">
             Threats Stopped. Revenue Saved. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Right Now.</span>
          </h2>
       </div>
       
       <div className="relative w-full max-w-[1000px] h-[500px] mx-auto bg-[#0a0a0a] rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.05)]">
          {/* Mock Map Representation using CSS/SVG patterns */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="absolute top-6 right-6 bg-black/80 px-4 py-3 border border-white/5 rounded text-[10px] uppercase tracking-widest font-bold z-10 backdrop-blur-sm">
             Threats blocked today: <span className="text-blue-500 ml-2">0 → {count}</span>
          </div>

          <div className="text-zinc-600 font-mono text-[10px] tracking-widest font-bold animate-pulse z-10">[Live Visual Threat Feed Active]</div>
          
          {/* Simulated threat dots */}
          {[...Array(10)].map((_, i) => (
             <div key={i} className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] animate-ping" style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random()}s`,
                color: Math.random() > 0.5 ? '#ef4444' : '#3b82f6',
                backgroundColor: 'currentColor'
             }}></div>
          ))}
       </div>

       <div className="max-w-[1000px] mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "1,247", l: "Threats Blocked Today", c: "#3b82f6" },
            { v: "$840K", l: "Revenue Protected (24h)", c: "#818cf8" },
            { v: "99.97%", l: "System Uptime", c: "#60a5fa" },
            { v: "50ms", l: "Avg. Response Time", c: "#93c5fd" }
          ].map((stat, i) => (
             <div key={i} className="text-center p-8 border border-white/5 rounded-2xl bg-[#0f0f0f]">
                <div className="text-4xl font-black mb-2" style={{ color: stat.c }}>{stat.v}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{stat.l}</div>
             </div>
          ))}
       </div>
    </section>
  );
}

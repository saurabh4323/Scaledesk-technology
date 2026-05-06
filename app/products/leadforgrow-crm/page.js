"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

// --- Components ---

const CountUp = ({ value, label, prefix = "", suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 90%",
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: parseFloat(value.replace(/[^0-9.]/g, '')),
            duration: 2.5,
            ease: "power3.out",
            onUpdate: function() {
              setDisplayValue(this.targets()[0].val.toFixed(value.includes('.') ? 1 : 0));
            }
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, [value]);

  return (
    <div ref={ref} className="text-center px-8 border-r border-white/10 last:border-0 grow">
      <div className="text-4xl md:text-5xl font-mono font-bold text-blue-500 mb-2 tracking-tighter">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

// --- Main Page Implementation ---

export default function LeadForGrowCRMRedesign() {
  const mainRef = useRef(null);
  const horizontalRef = useRef(null);
  const pinSectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 3. Solution Reveal — Pinned Scroll Storytelling
      const panels = gsap.utils.toArray(".solution-panel");
      if (panels.length > 0) {
        gsap.to(panels, {
          yPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: pinSectionRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${pinSectionRef.current.offsetHeight * 3}`,
          }
        });
      }

      // 6. How It Works — Horizontal Scroll
      const horizPanels = gsap.utils.toArray(".timeline-step");
      if (horizPanels.length > 0) {
        gsap.to(horizPanels, {
          xPercent: -100 * (horizPanels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${horizontalRef.current.offsetWidth * 5}`,
          }
        });
      }

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-black text-white min-h-screen relative overflow-hidden selection:bg-blue-500/30">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0 overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-drift" />
         <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
         {/* Particles */}
         <div className="particle-container absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`absolute w-1 h-1 bg-blue-500/40 rounded-full animate-float-slow`} style={{ left: `${i * 20}%`, top: '100%', animationDelay: `${i * 2}s` }} />
            ))}
         </div>
      </div>

      {/* 1. New Hero Redesign (Zones 1, 2, 3) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-40 overflow-hidden">
        
        {/* ZONE 1 — Identity Bar */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="z-20 mb-14"
        >
           <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/[0.06] shadow-[0_0_25px_rgba(37,99,235,0.15)] backdrop-blur-sm group">
              <span className="text-blue-400 text-sm animate-pulse-fast">⬡</span>
              <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-zinc-300">
                 LeadForGrow CRM  <span className="text-blue-500/40 mx-2 text-[10px]">•</span>  by ScaleDesk Technology
              </span>
           </div>
        </motion.div>

        <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          
          {/* ZONE 2 — Hero Statement & CTAs */}
          <div className="relative z-10 text-left">
            <div className="space-y-2 mb-10 overflow-hidden">
               <motion.h1 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-white"
               >
                  Revenue Intelligence.
               </motion.h1>
               <motion.h1 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="text-4xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-white"
               >
                  Not Just a CRM.
               </motion.h1>
               <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                  className="relative inline-block"
               >
                  <h1 className="text-4xl md:text-[5rem] font-black italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 tracking-tighter shadow-glow-blue">LeadForGrow.</h1>
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.5, 0], scale: [1, 2, 3] }} transition={{ delay: 0.8, duration: 0.8 }} className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
               </motion.div>
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 0.8 }}
               className="text-[#888888] font-medium tracking-widest text-xs md:text-sm uppercase mb-12"
            >
               Predict. Protect. Grow. — Powered by AI.
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6 items-center mb-6">
               <button className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-sm hover:brightness-110 transition-all shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)]">
                  Request Early Access
               </button>
               <button className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[11px] group transition-all">
                  Watch Platform Demo 
                  <span className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300">→</span>
               </button>
            </div>
            <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.2em] ml-2">
               No credit card required <span className="mx-2 text-zinc-800">•</span> Setup in 48 hours
            </p>
          </div>

          {/* ZONE 3 — 3D Dashboard Experience */}
          <div className="relative h-full flex items-center justify-center lg:pl-10">
             <motion.div 
                style={{ rotateX: 8, rotateY: -6 }}
                animate={{ rotateX: 0, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 20 }}
                className="relative z-10 w-full max-w-[650px] group cursor-crosshair transform-gpu"
             >
                <div className="glass-dark p-2 md:p-3 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                  <div className="bg-[#0f0f0f] rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border border-white/5">
                      <Image 
                        src="/leadforgrow-crm-dashboard-new.png" 
                        alt="CRM Terminal" 
                        width={1800} 
                        height={1200} 
                        className="opacity-95 object-cover"
                      />
                  </div>
                </div>

                {/* Floating Cards Around Dashboard */}
                {/* Card 1: Live Leads */}
                <motion.div 
                   initial={{ x: -50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.3, duration: 0.8 }}
                   className="absolute -top-10 -left-10 glass-dark p-4 md:p-6 rounded-2xl border border-blue-500/20 shadow-2xl z-20 min-w-[180px] md:min-w-[220px] hidden sm:block"
                >
                   <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                      <span className="text-[9px] md:text-[10px] font-black text-zinc-500 uppercase tracking-widest">Live Status</span>
                   </div>
                   <div className="text-2xl md:text-3xl font-black text-white">148,256</div>
                   <div className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase mt-1">Total Active Leads</div>
                   <div className="mt-2 md:mt-3 text-blue-400 text-[9px] md:text-[10px] font-black">+12.5% THIS MONTH</div>
                </motion.div>

                {/* Card 2: Secured System */}
                <motion.div 
                   initial={{ y: -50, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.5, duration: 0.8 }}
                   className="absolute -top-8 right-0 glass-dark p-3 md:p-5 rounded-2xl border border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.1)] z-20 flex items-center gap-3 md:gap-4 hidden sm:flex"
                >
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-sm md:text-base">
                      🛡️
                   </div>
                   <div>
                      <div className="text-[8px] md:text-[9px] font-black text-zinc-500 uppercase tracking-widest">Protocol Integrity</div>
                      <div className="text-[11px] md:text-sm font-black text-white tracking-widest uppercase">SYSTEM: SECURED</div>
                   </div>
                </motion.div>

                {/* Card 3: Protected Revenue */}
                <motion.div 
                   initial={{ y: 50, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.7, duration: 0.8 }}
                   className="absolute -bottom-6 left-0 glass-dark p-4 md:p-6 rounded-2xl border border-blue-500/20 shadow-2xl z-20 hidden sm:block"
                >
                   <div className="text-[9px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Protected Revenue</div>
                   <div className="text-3xl md:text-4xl font-black text-white">$2.1M</div>
                   <div className="text-[9px] md:text-[10px] font-bold text-zinc-600 uppercase mt-1 tracking-tighter">SAVED THIS QUARTER</div>
                </motion.div>

                {/* Card 4: Threat Intelligence */}
                <motion.div 
                   initial={{ x: 50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.9, duration: 0.8 }}
                   className="absolute bottom-4 -right-8 md:-right-16 glass-dark p-4 md:p-6 rounded-2xl border border-blue-500/20 shadow-2xl z-20 flex items-center gap-4 md:gap-5 hidden sm:flex"
                >
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 bg-red-400/5">
                      ⚠️
                   </div>
                   <div>
                      <div className="text-[9px] md:text-[10px] font-black text-red-400 uppercase tracking-widest">Fraud Analytics</div>
                      <div className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter leading-none">0 Active Threats</div>
                   </div>
                </motion.div>
             </motion.div>

             {/* Background Glow behind Dashboard */}
             <div className="absolute inset-x-20 inset-y-10 bg-blue-500/5 blur-[180px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 2. Problem Statement Section */}
      <section className="py-48 px-6 relative bg-[#020202] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,59,0.02),transparent_70%)]" />
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-24 text-center">
            Revenue Doesn't Just Disappear. <br/>
            <span className="text-zinc-600 italic">It Leaks.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Unscored leads burn sales team time", s: "$8.7T", desc: "lost globally to revenue leakage annually", icon: "💸" },
              { t: "Fraud slips through manual review", s: "48%", desc: "increase in digital fraud detection latency last year", icon: "⚠️" },
              { t: "Late-stage churn goes undetected", s: "22%", desc: "of enterprise contracts lost due to silent signals", icon: "📉" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-[#0f0f0f] border-l-4 border-red-500/50 p-12 rounded-r-2xl border-y border-r border-white/5 group hover:bg-[#141414] transition-colors"
              >
                <div className="text-4xl mb-10 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-8 leading-tight">{item.t}</h3>
                <div className="mt-auto pt-8 border-t border-white/5">
                   <div className="text-5xl font-black text-red-500/80 mb-1">{item.s}</div>
                   <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Reveal — Pinned Scroll Storytelling */}
      <section ref={pinSectionRef} className="h-screen relative overflow-hidden flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h5 className="text-blue-500 text-[12px] font-black uppercase tracking-[0.5em] mb-10">One Platform.</h5>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] sticky top-30">
              Four <br/>
              <span className="text-blue-400 italic">Shields.</span>
            </h2>
          </div>
          
          <div className="relative h-[600px] overflow-hidden">
             {/* Feature Panels */}
             <div className="flex flex-col">
                <div className="solution-panel h-[600px] flex flex-col justify-center gap-12 bg-black border border-white/5 p-12 rounded-[3.5rem]">
                   <div className="w-full h-48 bg-[#0f0f0f] rounded-2xl relative overflow-hidden flex items-end px-12">
                      <div className="absolute inset-x-8 bottom-12 h-20 bg-gradient-to-t from-blue-500/20 to-transparent border-t-2 border-blue-500 animate-pulse" />
                   </div>
                   <div>
                      <h3 className="text-3xl font-extrabold mb-6 italic text-blue-400">Predictive Revenue Analytics</h3>
                      <p className="text-zinc-400 text-lg leading-relaxed">Model future revenue risk before it materializes. Our ML pipeline ingests 200+ behavioral signals to surface churn risk 45 days ahead.</p>
                   </div>
                </div>
                
                <div className="solution-panel h-[600px] flex flex-col justify-center gap-12 bg-black border border-white/5 p-12 rounded-[3.5rem]">
                   <div className="w-full h-48 bg-[#0f0f0f] rounded-2xl relative flex items-center justify-center">
                      <div className="w-64 h-4 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                         <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} whileInView={{ width: '87%' }} transition={{ duration: 2 }} />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-black text-blue-500/20 pointer-events-none">87%</div>
                   </div>
                   <div>
                      <h3 className="text-3xl font-extrabold mb-6 italic text-blue-400">Automated Lead Scoring</h3>
                      <p className="text-zinc-400 text-lg leading-relaxed">Stop guessing who's worth your team's time. LeadForGrow scores every inbound lead in &lt;200ms using conversion-trained models.</p>
                   </div>
                </div>

                <div className="solution-panel h-[600px] flex flex-col justify-center gap-12 bg-black border border-white/5 p-12 rounded-[3.5rem]">
                   <div className="w-full h-48 bg-[#0f0f0f] rounded-2xl relative flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-2 border-blue-500/20 relative flex items-center justify-center scale-x-[-1]">
                         <div className="w-full h-full rounded-full border-t border-blue-400 animate-spin" />
                         <div className="absolute w-20 h-20 bg-blue-500/10 rounded-full animate-ping" />
                      </div>
                   </div>
                   <div>
                      <h3 className="text-3xl font-extrabold mb-6 italic text-blue-400">Advanced Fraud Protection</h3>
                      <p className="text-zinc-400 text-lg leading-relaxed">Multi-layer fraud detection with real-time transaction graph analysis. Sub-second decisioning at enterprise volume.</p>
                   </div>
                </div>

                <div className="solution-panel h-[600px] flex flex-col justify-center gap-12 bg-black border border-white/5 p-12 rounded-[3.5rem]">
                   <div className="w-full h-48 bg-[#0f0f0f] rounded-2xl relative flex items-center justify-center gap-8">
                      {['SF', 'HB', 'SP'].map(l => <div key={l} className="w-16 h-16 glass-dark rounded-xl flex items-center justify-center font-black text-zinc-600 text-xs border border-white/10">{l}</div>)}
                   </div>
                   <div>
                      <h3 className="text-3xl font-extrabold mb-6 italic text-blue-400">Enterprise CRM Integration</h3>
                      <p className="text-zinc-400 text-lg leading-relaxed">Plug into your existing stack in days, not months. Native connectors for all major CRMs with full audit trail.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Metrics / Social Proof Bar */}
      <section className="bg-zinc-950 py-32 border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-wrap justify-between gap-y-16">
           <CountUp value="$2.4" label="Revenue Protected" suffix="B+" prefix="" />
           <CountUp value="98.7" label="Fraud Detection Accuracy" suffix="%" prefix="" />
           <CountUp value="200" label="Lead Scoring Latency" suffix="ms" prefix="<" />
           <CountUp value="45" label="Churn Prediction Window" suffix=" Days" prefix="" />
        </div>
      </section>

      {/* 5. Dashboard Preview Section — Heading Only */}
      <section className="pt-48 pb-10 px-6 relative bg-black overflow-hidden">
         <div className="max-w-[1240px] mx-auto text-center">
            <h5 className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-black mb-6">Visual Intelligence</h5>
            <h2 className="text-4xl md:text-[6rem] font-bold tracking-tight leading-[1]">Command Center for <br/><span className="text-blue-500">Revenue Intelligence</span></h2>
         </div>
      </section>

      {/* 6. How It Works — Horizontal Scroll Timeline */}
      <section ref={horizontalRef} className="h-screen bg-[#050505] relative overflow-hidden flex items-center">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0" />
         
         <div className="flex h-full">
            {[
               { id: '01', t: "Connect", d: "Integrate with your CRM and data sources", icon: "🔌" },
               { id: '02', t: "Ingest", d: "LeadForGrow maps your revenue signals", icon: "🧠" },
               { id: '03', t: "Score", d: "Real-time ML scoring on every lead and transaction", icon: "⚡" },
               { id: '04', t: "Protect", d: "Automated fraud and churn intervention triggers", icon: "🛡️" },
               { id: '05', t: "Grow", d: "Revenue intelligence feeds back into your GTM strategy", icon: "📈" }
            ].map((step, i) => (
               <div key={i} className="timeline-step w-screen h-full flex items-center justify-center px-40 flex-shrink-0">
                  <div className="relative group p-20 max-w-2xl text-center">
                     <div className="text-7xl mb-14 opacity-80 group-hover:scale-110 transition-transform">{step.icon}</div>
                     <div className="text-[12px] font-black text-blue-500 tracking-[0.5em] uppercase mb-8">{step.id} / Execution</div>
                     <h3 className="text-6xl font-bold mb-10 tracking-tighter uppercase leading-tight">{step.t}</h3>
                     <p className="text-2xl text-zinc-500 font-light leading-relaxed">{step.d}</p>
                     
                     {/* Connecting Line Enhancement */}
                     <div className="absolute top-1/2 -right-full w-full h-[2px] border-t-2 border-dashed border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-1000" />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 10. Final CTA / Footer Bridge */}
      <section className="min-h-screen py-40 flex items-center justify-center relative bg-black text-center px-6 overflow-hidden">
         <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-blue-500/10 blur-[180px] h-[600px] w-full rounded-full animate-glow pointer-events-none" />
         <div className="max-w-[1440px] mx-auto z-10">
            <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="text-5xl md:text-[8.5rem] font-black tracking-tighter mb-16 leading-[0.85] uppercase"
            >
               Stop Leaking <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Revenue.</span>
            </motion.h2>
            <p className="text-xl md:text-3xl text-zinc-500 font-light mb-16 max-w-4xl mx-auto leading-relaxed px-4">
               Join enterprise teams using LeadForGrow to protect and grow <br className="hidden md:block" /> their most critical asset.
            </p>
            <button className="px-12 md:px-20 py-8 md:py-10 bg-blue-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all text-xl md:text-2xl shadow-[0_0_100px_rgba(37,99,235,0.4)]">
               Book a Demo
            </button>
         </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes grid-drift {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        .animate-grid-drift {
          animation: grid-drift 4s linear infinite;
        }
        @keyframes float-slow {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .animate-float-slow {
          animation: float-slow 15s linear infinite;
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-pulse-fast {
          animation: pulse-fast 1s ease-in-out infinite;
        }
        .shadow-glow-blue {
           text-shadow: 0 0 30px rgba(37, 99, 235, 0.4);
        }
        .shadow-3xl {
           box-shadow: 0 50px 100px -20px rgba(0,0,0,1);
        }
      `}</style>
    </main>
  );
}

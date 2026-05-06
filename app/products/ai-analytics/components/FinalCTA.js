"use client";

import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-64 px-6 relative bg-black text-center overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[600px] bg-[#7b61ff]/10 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1240px] mx-auto z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-[7.5rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase"
        >
          <span className="text-white block">Stop Analyzing the Past.</span>
          <span className="text-[#7b61ff] italic block">Start Predicting the Future.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-zinc-500 font-light mb-20 max-w-4xl mx-auto leading-relaxed"
        >
          Join revenue teams using LeadForGrow AI Analytics to protect pipeline, close faster, and eliminate blind spots.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="relative inline-block group"
        >
          <button className="px-20 py-10 bg-[#7b61ff] text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all text-2xl shadow-[0_0_100px_rgba(123,97,255,0.4)] animate-pulse-glow">
            Book a Live Demo
          </button>
          <div className="mt-8 text-[11px] text-zinc-600 font-bold uppercase tracking-[0.3em] space-x-4">
            <span>No credit card required</span>
            <span className="text-zinc-800">•</span>
            <span>Live demo in 24 hours</span>
            <span className="text-zinc-800">•</span>
            <span>Setup in 48 hours</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 100px rgba(123,97,255,0.4); }
          50% { box-shadow: 0 0 130px rgba(123,97,255,0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;

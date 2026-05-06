"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-48 bg-black overflow-hidden px-6">
      {/* Code Rain Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="flex justify-around h-full">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent h-full animate-code-rain"
              style={{ 
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${3 + i}s`,
                left: `${i * 12.5}%`
              }}
            >
              <div className="text-[8px] font-[family-name:var(--font-jetbrains-mono)] text-blue-500 mt-[-100%] flex flex-col gap-4">
                {"101010111001010101".split("").map((char, j) => (
                  <span key={j}>{char}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-10"
        >
          <span className="text-white block">Ready to Build</span>
          <span className="text-blue-500 italic block">Something That Lasts?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 font-medium leading-relaxed mb-16 max-w-2xl mx-auto"
        >
          Tell us what you're building. We'll tell you 
          exactly how to engineer it for scale.
        </motion.p>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="px-12 md:px-20 py-8 bg-blue-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl text-xl md:text-2xl shadow-[0_0_50px_rgba(37,99,235,0.3)] hover:shadow-[0_0_80px_rgba(37,99,235,0.5)] transition-all flex items-center gap-4 mx-auto group"
        >
          Start a Project <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-[12px] font-[family-name:var(--font-jetbrains-mono)] text-[#555] uppercase tracking-widest flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          <span className="flex items-center gap-2 text-zinc-600 font-bold tracking-[0.1em]"><span className="text-blue-500">●</span> Free technical consultation</span>
          <span className="flex items-center gap-2 text-zinc-600 font-bold tracking-[0.1em]"><span className="text-blue-500">●</span> Response in 24h</span>
          <span className="flex items-center gap-2 text-zinc-600 font-bold tracking-[0.1em]"><span className="text-blue-500">●</span> NDA on request</span>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes code-rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-code-rain {
          animation: code-rain linear infinite;
        }
      `}</style>
    </section>
  );
}

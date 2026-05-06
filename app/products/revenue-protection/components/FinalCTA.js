export default function FinalCTA() {
  return (
    <section className="py-48 px-6 bg-[#020202] text-center relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
       
       <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="text-5xl md:text-[8.5rem] font-black tracking-tighter mb-10 leading-[0.85] uppercase">
             <span className="text-white block">Your Revenue Deserves</span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic block">A Guardian.</span>
          </h2>
          
          <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
             Every minute without protection is revenue at risk. 
             LeadForGrow Revenue Protection activates in 48 hours 
             and pays for itself in the first month.
          </p>
          
          <button className="px-12 md:px-20 py-8 md:py-10 bg-blue-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all text-xl md:text-2xl shadow-[0_0_100px_rgba(37,99,235,0.4)]">
             Activate Protection Now
          </button>
          
          <div className="mt-10 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
             <span className="text-blue-500 mr-2">●</span> Setup in 48 hours · No credit card required · First threat blocked, guaranteed
          </div>
       </div>
    </section>
  );
}

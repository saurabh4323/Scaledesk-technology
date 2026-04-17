export default function CaseStudies() {
  const CASES = [
    {
      title: "Global Supply Chain Overhaul",
      metric: "40%",
      metricLabel: "Increase in efficiency",
      desc: "Re-architected fragmented legacy logistics software into a unified AI-driven platform for a Fortune 500 retailer."
    },
    {
      title: "FinTech Security Architecture",
      metric: "Zero",
      metricLabel: "Downtime during migration",
      desc: "Seamlessly migrated 50M+ records to a highly scalable, compliance-heavy cloud infrastructure."
    },
    {
      title: "Healthcare Data Interoperability",
      metric: "10x",
      metricLabel: "Faster data retrieval",
      desc: "Built a centralized data warehouse pipeline processing real-time diagnostics securely."
    }
  ];

  return (
    <section id="case-studies" className="w-full py-32">
       <div className="max-w-[1240px] mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
             <div>
               <h5 className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold mb-4">Case Studies</h5>
               <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight max-w-2xl">
                 Real-world engineering.<br/>Measured impact.
               </h2>
             </div>
             <button className="text-white border-b border-white pb-1 group hover:text-zinc-400 hover:border-zinc-400 transition-colors font-medium">
                View All Work
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
             {CASES.map((item, idx) => (
                <div key={idx} className="group flex flex-col h-full border-t border-white/10 pt-8 cursor-pointer">
                   <div className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tighter group-hover:text-zinc-400 transition-colors">{item.metric}</div>
                   <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold mb-8">{item.metricLabel}</div>
                   <h3 className="text-2xl font-semibold text-white mb-4 leading-snug group-hover:text-zinc-100">{item.title}</h3>
                   <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  )
}

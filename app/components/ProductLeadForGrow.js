export default function ProductLeadForGrow() {
  return (
    <section id="story-product" className="story-band relative w-full pt-16 pb-36 overflow-hidden">
      <div className="story-beam story-beam-right" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
         {/* Left Side: Text */}
         <div className="w-full md:w-1/2">
            <h5 className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold mb-6">Our Businesses</h5>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              LeadForGrow:<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 drop-shadow-sm">AI Revenue Protection.</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-lg">
              We don't just build systems; we build intelligence. LeadForGrow is our advanced CRM and revenue protection platform, engineered natively to monitor, protect, and scale your financial operations with predictive AI.
            </p>
            
            <div className="flex flex-col gap-6">
               {[
                 "Predictive Revenue Analytics",
                 "Automated Lead Scoring",
                 "Advanced Fraud Protection",
                 "Enterprise CRM Integration"
               ].map((feature, i) => (
                  <div key={i} className="story-feature-row flex items-center gap-4" style={{ "--row-index": i }}>
                     <div className="story-check w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>
                     </div>
                     <span className="text-zinc-300 font-medium text-[15px]">{feature}</span>
                  </div>
               ))}
            </div>
            
            <div className="mt-12">
               <a href="https://leadforgrow.com" target="_blank" rel="noopener noreferrer" className="btn-system-link inline-block px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors">
                  Explore LeadForGrow
               </a>
            </div>
         </div>

         {/* Right Side: Dashboard Image */}
         <div className="w-full md:w-1/2 relative">
             <div className="product-dashboard-frame relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                 {/* Placeholder for the user's uploaded dashboard image */}
                 <img 
                    src="/leadforgrow-dashboard.png" 
                    alt="LeadForGrow AI CRM Dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 {/* Fallback empty state if image isn't loaded yet */}
                 <div className="absolute inset-0 -z-10 bg-[#0B0F1A] flex items-center justify-center">
                     <span className="text-zinc-600 font-mono text-sm">Waiting for image /leadforgrow-dashboard.png</span>
                 </div>
                 
                 {/* Internal Glows */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-10" />
                 <div className="dashboard-scan" />
                 <div className="dashboard-node dashboard-node-a" />
                 <div className="dashboard-node dashboard-node-b" />
                 <div className="dashboard-node dashboard-node-c" />
                 <div className="dashboard-caption">
                    <span>Revenue signal</span>
                    <strong>Protected</strong>
                 </div>
             </div>
         </div>
      </div>
    </section>
  )
}

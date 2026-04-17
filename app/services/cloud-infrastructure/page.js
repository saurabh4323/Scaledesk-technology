export default function CloudInfrastructure() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6" style={{ backgroundImage: "radial-gradient(ellipse at top, #0a1128 0%, #000 70%)" }}>
      <div className="max-w-[800px] mx-auto pt-20">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Cloud Infrastructure</h1>
        <p className="text-lg text-zinc-300 font-light leading-relaxed mb-12">
          Your architecture determines your limits. We build, migrate, and structure highly available, intensely resilient cloud environments on AWS, Azure, and Google Cloud.
        </p>
        
        <div className="grid grid-cols-2 gap-px bg-white/10 p-px rounded-xl overflow-hidden mt-12">
           <div className="bg-[#050505] p-10 flex items-center justify-center text-center">
             <span className="text-zinc-400 font-light">Global Content Delivery</span>
           </div>
           <div className="bg-[#050505] p-10 flex items-center justify-center text-center">
             <span className="text-zinc-400 font-light">Zero-Downtime Migration</span>
           </div>
           <div className="bg-[#050505] p-10 flex items-center justify-center text-center">
             <span className="text-zinc-400 font-light">Multi-Region Redundancy</span>
           </div>
           <div className="bg-[#050505] p-10 flex items-center justify-center text-center">
             <span className="text-zinc-400 font-light">Kubernetes Orchestration</span>
           </div>
        </div>
      </div>
    </main>
  );
}

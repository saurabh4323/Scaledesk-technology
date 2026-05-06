export default function IntegrationEcosystem() {
  return (
    <section className="py-40 px-6 bg-black overflow-hidden border-y border-white/5">
       <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-20">Wraps Around Your Existing Stack.</h2>
          
          <div className="relative w-full max-w-[600px] h-[600px] mx-auto flex items-center justify-center">
             {/* Center */}
             <div className="relative z-10 w-24 h-24 bg-black border border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
             </div>
             
             {/* Inner Orbit */}
             <div className="absolute w-[250px] h-[250px] rounded-full border border-white/10 animate-[spin_25s_linear_infinite]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
             </div>
             
             {/* Middle Orbit */}
             <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10 animate-[spin_35s_linear_infinite_reverse]">
                <div className="absolute -top-5 left-1/4 w-10 h-10 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
                <div className="absolute bottom-1/4 -right-5 w-10 h-10 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
             </div>
             
             {/* Outer Orbit */}
             <div className="absolute w-[550px] h-[550px] rounded-full border border-white/10 animate-[spin_50s_linear_infinite]">
                <div className="absolute top-1/4 -left-6 w-12 h-12 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
                <div className="absolute -bottom-6 left-1/2 w-12 h-12 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
                <div className="absolute top-1/4 -right-6 w-12 h-12 bg-zinc-800 rounded-full border border-white/20 hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6] transition-all"></div>
             </div>
          </div>
          
          <div className="mt-20 text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase">
             REST API  ·  Webhooks  ·  Native SDKs  ·  Custom Connectors
          </div>
       </div>
    </section>
  );
}

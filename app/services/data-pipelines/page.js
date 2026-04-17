export default function DataPipelines() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6 flex items-center">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest text-zinc-400 mb-8">Data Engineering</div>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Data Pipelines</h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
          Harness the true power of your infrastructure. We engineer robust, scalable data ingestion pipelines that process petabytes of information securely, allowing real-time analytics and mission-critical decision making.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
           <div className="p-8 border border-white/5 bg-[#050505] rounded-xl">
             <h4 className="text-lg font-semibold mb-3">Real-Time Processing</h4>
             <p className="text-sm text-zinc-500 font-light">Streaming architecture designed to process events at absolute zero latency.</p>
           </div>
           <div className="p-8 border border-white/5 bg-[#050505] rounded-xl">
             <h4 className="text-lg font-semibold mb-3">Data Warehousing</h4>
             <p className="text-sm text-zinc-500 font-light">Centralized hubs structured perfectly for immediate AI and Business Intelligence extraction.</p>
           </div>
        </div>
      </div>
    </main>
  );
}

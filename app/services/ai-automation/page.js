export default function AIAutomation() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h5 className="text-[11px] uppercase tracking-widest text-zinc-500 mb-6 font-medium">Intelligence Systems</h5>
        <h1 className="text-5xl font-semibold tracking-tight mb-8">AI & Automation</h1>
        <p className="text-xl text-zinc-300 font-light leading-relaxed mb-16 max-w-2xl">
          We integrate advanced machine learning models directly into your workflow to dissolve manual overhead and automate complex logic at scale.
        </p>
        
        <div className="space-y-6">
           <div className="flex flex-col md:flex-row shadow-sm border border-white/10 rounded-2xl p-8 items-center justify-between">
              <div>
                 <h3 className="text-xl font-medium mb-2 text-blue-400">Predictive Modeling</h3>
                 <p className="text-zinc-500 font-light max-w-md">Forecast trends and systemic risks before they emerge.</p>
              </div>
           </div>
           <div className="flex flex-col md:flex-row shadow-sm border border-white/10 rounded-2xl p-8 items-center justify-between">
              <div>
                 <h3 className="text-xl font-medium mb-2 text-blue-400">Robotic Process Automation</h3>
                 <p className="text-zinc-500 font-light max-w-md">Eliminate repetitive tasks and streamline operations reliably.</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}

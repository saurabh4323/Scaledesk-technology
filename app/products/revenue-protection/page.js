export default function RevenueProtection() {
  return (
    <main className="bg-black min-h-screen text-white flex items-center px-6">
      <div className="max-w-[700px] mx-auto border border-white/5 p-12 bg-[#050505] rounded-3xl">
        <h5 className="text-blue-500 text-xs tracking-widest uppercase mb-4">Risk Management</h5>
        <h1 className="text-4xl font-semibold tracking-tight mb-6">Revenue Protection</h1>
        <p className="text-zinc-400 font-light mb-8">
          Shield your pipeline. Our revenue protection suite integrates predictive algorithms to flag transactional anomalies, avert churn, and secure intellectual data without hindering consumer velocity.
        </p>
        <button className="px-6 py-2 border w-full md:w-auto border-white/10 rounded text-sm hover:bg-white hover:text-black transition-colors">Request a Security Audit</button>
      </div>
    </main>
  );
}

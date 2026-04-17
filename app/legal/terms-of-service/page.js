export default function TermsOfService() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl font-medium tracking-tight mb-4">Terms of Service</h1>
        <p className="text-zinc-500 text-sm mb-12">Last Updated: April 2026</p>
        
        <div className="prose prose-invert max-w-none text-zinc-400 font-light space-y-6">
           <p>By utilizing ScaleDesk Technology's infrastructure, you agree to comply strictly with the terms set legally herein.</p>
           <h3 className="text-xl font-medium text-zinc-200 pt-6 border-t border-white/10 mt-6">1. Acceptable Use</h3>
           <p>Clients are solely responsible for ensuring workloads do not compromise the integrity of shared computational resources.</p>
        </div>
      </div>
    </main>
  );
}

export default function Security() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs uppercase tracking-widest mb-6">SOC-2 Compliant</div>
        <h1 className="text-4xl font-medium tracking-tight mb-6">Platform Security</h1>
        <p className="text-zinc-400 font-light leading-relaxed">
           ScaleDesk operates under a Zero Trust Network Architecture paradigm. All requests mandate verifiable cryptographic authorization layers, rendering perimeter security obsolete and heavily secured.
        </p>
      </div>
    </main>
  );
}

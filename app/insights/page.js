export default function Insights() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6 flex items-center justify-center text-center">
      <div className="max-w-[600px] border border-white/10 rounded-2xl p-16">
         <h1 className="text-3xl font-medium tracking-tight mb-4 text-zinc-200">ScaleDesk Insights</h1>
         <p className="text-zinc-500 font-light text-sm mb-8">Engineering whitepapers, architecture blogs, and scale strategy logs.</p>
         <div className="bg-white/5 py-2 px-6 rounded-full inline-block text-zinc-300 text-xs uppercase tracking-widest border border-white/10">Loading Database...</div>
      </div>
    </main>
  );
}

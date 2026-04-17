import Footer from "../../components/Footer";

export default function CaseStudiesList() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 flex flex-col">
      <div className="max-w-[1240px] w-full mx-auto px-6 mb-24">
        <h1 className="text-5xl font-medium tracking-tight mb-8">Case Studies</h1>
        <p className="text-zinc-400 text-lg font-light max-w-2xl mb-16">
          Explore exactly how we restructured, optimized, and significantly grew global enterprises through raw engineering capability.
        </p>

        <div className="flex flex-col gap-12 border-t border-white/5 pt-12">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
                  <div className="w-full md:w-1/3 aspect-[4/3] bg-[#050505] rounded-xl border border-white/5 group-hover:border-blue-500/30 transition-colors" />
                  <div className="w-full md:w-2/3">
                     <h3 className="text-2xl font-semibold mb-3 group-hover:text-zinc-200 transition-colors">Global Retail Supply Index {i}</h3>
                     <p className="text-zinc-400 font-light leading-relaxed mb-6">Designed an API-first monolithic breakup reducing average request latency from 400ms down to 18ms across 3 global regions.</p>
                     <span className="text-blue-400 text-sm font-medium">Read Whitepaper →</span>
                  </div>
               </div>
            ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

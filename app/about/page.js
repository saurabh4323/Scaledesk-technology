import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
        <div className="max-w-[800px] mx-auto pt-16">
          <h1 className="text-5xl font-medium tracking-tight mb-8">About <span className="text-blue-500">ScaleDesk.</span></h1>
          <p className="text-xl text-zinc-300 font-light leading-relaxed mb-6">
            We are the unseen force behind global operational successes. Born from a collective of enterprise-level architects, ScaleDesk was established to eliminate technical barriers for growing businesses.
          </p>
          <p className="text-xl text-zinc-300 font-light leading-relaxed mb-16">
            We believe in code that outlives the founders, structure that prevents operational debt, and absolute autonomy.
          </p>
          
          <h3 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-4">Our Principles</h3>
          <div className="space-y-4">
             <div className="flex items-start gap-4"><span className="text-blue-500 shrink-0">01</span> <p className="text-zinc-400 font-light">Structure over chaos. Everything must scale.</p></div>
             <div className="flex items-start gap-4"><span className="text-blue-500 shrink-0">02</span> <p className="text-zinc-400 font-light">Zero trust infrastructure default. Privacy is absolute.</p></div>
             <div className="flex items-start gap-4"><span className="text-blue-500 shrink-0">03</span> <p className="text-zinc-400 font-light">Automate manually intensive processes unconditionally.</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

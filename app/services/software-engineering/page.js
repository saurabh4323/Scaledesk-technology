import Link from "next/link";
export default function SoftwareEngineering() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto border-l border-white/10 pl-8 md:pl-12">
        <h5 className="text-[11px] uppercase tracking-widest text-blue-500 mb-6 font-medium">Services / Engineering</h5>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Software Engineering</h1>
        <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-12">
          We architect, build, and scale world-class enterprise software. From microservices to massive distributed systems, our engineering team constructs technology that forms the backbone of global operations.
        </p>
        <div className="h-[1px] w-32 bg-white/10 mb-12" />
        <h3 className="text-xl font-medium mb-6">Core Capabilities</h3>
        <ul className="space-y-4 text-zinc-400 font-light">
          <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Full-Stack Enterprise Architecture</li>
          <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> API & Microservices Development</li>
          <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Legacy System Modernization</li>
          <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Secure DevOps Lifecycles</li>
        </ul>
      </div>
    </main>
  );
}

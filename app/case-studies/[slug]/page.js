import Link from "next/link";
import Footer from "../../components/Footer";

export default function CaseStudyDetail({ params }) {
  const { slug } = params;
  
  // Create a display title based on the slug
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="bg-[#030303] min-h-screen text-white flex flex-col">
      <article className="pt-40 pb-24 border-b border-white/5">
         <div className="max-w-[800px] mx-auto px-6">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#888] hover:text-white transition-colors mb-12 text-sm font-medium">
               ← Back to Case Studies
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-8">
               <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-blue-400 text-[11px] mono-text uppercase tracking-wider">Engineering</span>
               <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/70 text-[11px] mono-text uppercase tracking-wider">Architecture</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
               {title}
            </h1>
            
            <div className="flex items-center gap-8 py-6 border-y border-white/10 mb-16">
               <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#666] font-bold mb-1 mono-text">Client</div>
                  <div className="text-white font-medium">Enterprise Corp</div>
               </div>
               <div className="w-px h-8 bg-white/10"></div>
               <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#666] font-bold mb-1 mono-text">Timeline</div>
                  <div className="text-white font-medium">6 Months</div>
               </div>
               <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
               <div className="hidden sm:block">
                  <div className="text-[10px] uppercase tracking-widest text-[#666] font-bold mb-1 mono-text">Key Metric</div>
                  <div className="text-blue-400 font-bold">100x Scale</div>
               </div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-[#a1a1aa] prose-p:font-light prose-p:leading-relaxed prose-a:text-blue-400">
               <h2 className="text-2xl font-semibold mb-4 mt-12 text-white">The Challenge</h2>
               <p className="text-[#a1a1aa] font-light leading-relaxed mb-6">
                 Our client was operating on a legacy monolithic architecture that had reached its scaling limits. During peak traffic events, request latency spiked to unacceptable levels, resulting in significant revenue loss. The system lacked fault tolerance, and deployments required extensive downtime.
               </p>
               
               <h2 className="text-2xl font-semibold mb-4 mt-12 text-white">Architectural Decision</h2>
               <p className="text-[#a1a1aa] font-light leading-relaxed mb-6">
                 We engineered a complete structural shift to a microservices architecture. By decoupling core domains, we enabled independent scaling and deployment. We chose <strong className="text-white font-medium">Go</strong> for its concurrency model and low latency, and deployed on a multi-region <strong className="text-white font-medium">Kubernetes</strong> cluster.
               </p>
               
               <div className="my-12 p-8 rounded-2xl bg-[#0a0a0a] border border-white/10">
                  <h4 className="text-white text-lg font-medium mb-4">Core Technologies Used:</h4>
                  <ul className="grid grid-cols-2 gap-4 text-sm text-[#888]">
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Go (Golang)</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Kubernetes</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Apache Kafka</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> PostgreSQL</li>
                  </ul>
               </div>

               <h2 className="text-2xl font-semibold mb-4 mt-12 text-white">Implementation Phase</h2>
               <p className="text-[#a1a1aa] font-light leading-relaxed mb-6">
                 The migration was executed using the Strangler Fig pattern. We systematically routed traffic to the new microservices via an API Gateway while maintaining the legacy monolith for un-migrated paths. This allowed for zero-downtime deployment.
               </p>
               
               <h2 className="text-2xl font-semibold mb-4 mt-12 text-white">The Outcome</h2>
               <p className="text-[#a1a1aa] font-light leading-relaxed mb-6">
                 Following the complete rollout, the system demonstrated a 95% reduction in average latency and easily sustained 100x the previous peak load. Deployment frequency increased from bi-weekly to multiple times a day.
               </p>
            </div>
         </div>
      </article>
      <Footer />
    </main>
  );
}

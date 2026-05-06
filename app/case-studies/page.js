"use client";

import Link from "next/link";
import Footer from "../components/Footer";

const CASE_STUDIES = [
  {
    slug: "global-retail-supply-index",
    title: "Global Retail Supply Index",
    client: "Fortune 500 Retailer",
    metric: "400ms → 18ms",
    desc: "Designed an API-first monolithic breakup reducing average request latency from 400ms down to 18ms across 3 global regions.",
    tags: ["Microservices", "Kafka", "Kubernetes"]
  },
  {
    slug: "fintech-transaction-ledger",
    title: "High-Frequency Transaction Ledger",
    client: "Fintech Unicorn",
    metric: "10,000 TPS",
    desc: "Architected a distributed ledger system capable of processing 10,000 transactions per second with absolute ACID compliance.",
    tags: ["Rust", "PostgreSQL", "Redis"]
  },
  {
    slug: "ai-automated-compliance",
    title: "AI-Automated Compliance",
    client: "Healthcare Provider",
    metric: "99.9% Accuracy",
    desc: "Deployed a secure, HIPAA-compliant LLM pipeline to automate medical record parsing and regulatory compliance checks.",
    tags: ["LLMs", "Vector DB", "Python"]
  }
];

export default function CaseStudiesList() {
  return (
    <main className="bg-[#030303] min-h-screen text-white flex flex-col">
      <section className="pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 to-transparent blur-[120px] pointer-events-none" />
         
         <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8 backdrop-blur-md">
               <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
               <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mono-text">Technical Case Studies</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-3xl leading-[1.1]">
               Proven engineering <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">at enterprise scale.</span>
            </h1>
            
            <p className="text-lg text-[#888] font-light max-w-2xl leading-relaxed">
               Explore exactly how we restructured, optimized, and significantly grew global enterprises through rigorous system architecture and raw engineering capability.
            </p>
         </div>
      </section>

      <section className="py-24">
         <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <div className="flex flex-col gap-12">
               {CASE_STUDIES.map((study) => (
                  <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group block">
                     <div className="flex flex-col lg:flex-row gap-10 p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)] relative overflow-hidden">
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out pointer-events-none" />
                        
                        <div className="w-full lg:w-1/3 flex flex-col justify-between relative z-10 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-10">
                           <div>
                              <div className="text-[11px] uppercase tracking-widest text-[#666] font-semibold mb-2 mono-text">{study.client}</div>
                              <h3 className="text-3xl font-semibold mb-4 text-white tracking-tight">{study.title}</h3>
                           </div>
                           <div className="mt-8 lg:mt-0">
                              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 tracking-tighter">{study.metric}</div>
                              <div className="text-[10px] uppercase tracking-widest text-[#666] font-bold mt-2 mono-text">Key Outcome</div>
                           </div>
                        </div>
                        
                        <div className="w-full lg:w-2/3 flex flex-col justify-between relative z-10">
                           <p className="text-[#a1a1aa] font-light leading-relaxed text-lg mb-10 max-w-2xl">{study.desc}</p>
                           
                           <div className="flex flex-wrap items-center justify-between gap-6">
                              <div className="flex flex-wrap gap-3">
                                 {study.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/70 text-[11px] mono-text uppercase tracking-wider">
                                       {tag}
                                    </span>
                                 ))}
                              </div>
                              <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                                 Read Whitepaper <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                              </div>
                           </div>
                        </div>
                        
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

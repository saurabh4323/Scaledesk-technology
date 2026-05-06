"use client";

import Link from "next/link";
import Footer from "../components/Footer";

const POSTS = [
  {
    category: "Architecture",
    title: "Migrating from monolith to microservices at scale",
    desc: "A deep dive into our methodology for breaking down a 5-year-old monolith into 40+ Go microservices on Kubernetes.",
    date: "May 12, 2026",
    author: "System Core Team"
  },
  {
    category: "Data Engineering",
    title: "Processing 10B events daily with Apache Kafka",
    desc: "How we configured our Kafka clusters and optimized consumer groups to handle massive throughput with zero data loss.",
    date: "April 28, 2026",
    author: "Data Infrastructure"
  },
  {
    category: "Security",
    title: "Zero-Trust architecture in multi-cloud environments",
    desc: "Implementing mTLS, identity-aware proxies, and automated key rotation across AWS and GCP.",
    date: "March 15, 2026",
    author: "Security Pod"
  }
];

export default function Insights() {
  return (
    <main className="bg-[#030303] min-h-screen text-white flex flex-col">
      <section className="pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-indigo-600/10 to-transparent blur-[120px] pointer-events-none" />
         
         <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8 backdrop-blur-md">
               <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
               <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mono-text">Engineering Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-3xl leading-[1.1]">
               Insights from the <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">engineering frontlines.</span>
            </h1>
            
            <p className="text-lg text-[#888] font-light max-w-2xl leading-relaxed">
               Technical deep dives, architectural decisions, and post-mortems from the teams building high-performance systems at ScaleDesk.
            </p>
         </div>
      </section>

      <section className="py-24 flex-grow">
         <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {POSTS.map((post, i) => (
                  <Link href="#" key={i} className="group flex flex-col p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                     <div className="text-[11px] uppercase tracking-widest text-indigo-400 font-semibold mb-4 mono-text">{post.category}</div>
                     <h3 className="text-2xl font-medium mb-4 text-white tracking-tight group-hover:text-indigo-300 transition-colors">{post.title}</h3>
                     <p className="text-[#a1a1aa] font-light leading-relaxed mb-10 flex-grow">{post.desc}</p>
                     
                     <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                        <div>
                           <div className="text-white text-sm font-medium">{post.author}</div>
                           <div className="text-[#666] text-xs mt-1">{post.date}</div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                           <span className="leading-none text-lg translate-x-px -translate-y-px">↗</span>
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

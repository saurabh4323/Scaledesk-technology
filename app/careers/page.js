"use client";

import Link from "next/link";
import Footer from "../components/Footer";

const PRINCIPLES = [
  { id: "01", title: "Extreme Ownership", desc: "No problem is 'someone else's.' We take full end-to-end responsibility for the systems we build." },
  { id: "02", title: "Scale First", desc: "If it doesn't work at 100x the current load, it doesn't work. We architect for the future." },
  { id: "03", title: "Simplicity Over Complexity", desc: "Complex systems fail. We rigorously simplify architectures and avoid unnecessary dependencies." },
  { id: "04", title: "Ego-less Engineering", desc: "The best idea wins, regardless of title. We critique the code, not the coder." }
];

const ONBOARDING = [
  { week: "Week 1", title: "Immersion", desc: "Understand our core infrastructure, get access to all tools, and deploy your first production commit on Day 3." },
  { week: "Week 2", title: "Shadowing", desc: "Pair program with lead engineers, understand architectural decisions, and review current CI/CD pipelines." },
  { week: "Month 1", title: "Ownership", desc: "Take full ownership of a minor feature or internal tool. Present your architectural approach to the team." },
  { week: "Month 3", title: "Scale", desc: "Lead a major infrastructure update or product feature from inception to deployment." }
];

export default function Careers() {
  return (
    <main className="bg-[#030303] min-h-screen text-white flex flex-col overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative w-full pt-48 pb-24 flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="relative z-10 max-w-[1000px] w-full mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8 backdrop-blur-md">
             <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
             <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mono-text">Join The Collective</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Build the infrastructure <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">of tomorrow.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#888] font-light mb-12 leading-relaxed max-w-2xl">
            ScaleDesk is seeking relentless builders, system architects, and analytical minds. Join an elite engineering culture where complexity is celebrated, scale is mandatory, and autonomy is standard.
          </p>
          
          <Link 
            href="/careers/opportunities" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            View Open Roles
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </section>

      {/* ENGINEERING PRINCIPLES */}
      <section className="w-full py-32 border-b border-white/5 relative">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Engineering Principles</h2>
            <p className="text-[#888] font-light max-w-xl">The core tenets that govern how we design, build, and scale systems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {PRINCIPLES.map((p) => (
                <div key={p.id} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-colors group">
                   <div className="text-blue-500/50 text-sm mono-text font-bold mb-6 group-hover:text-blue-400 transition-colors">{p.id}</div>
                   <h3 className="text-xl font-medium text-white mb-4">{p.title}</h3>
                   <p className="text-[#666] text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* TECH STACK VISUALIZATION */}
      <section className="w-full py-32 border-b border-white/5 bg-[#050505]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Technology Stack</h2>
          <p className="text-[#888] font-light max-w-2xl mx-auto mb-20">We use modern, battle-tested tools to build reliable distributed systems.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
             {/* Replace standard strings with a tech visualization array */}
             {["React / Next.js", "TypeScript", "Go", "Rust", "Python", "Kubernetes", "Terraform", "AWS", "GCP", "PostgreSQL", "Redis", "Kafka", "Docker", "GitHub Actions", "Datadog"].map((tech) => (
                <div key={tech} className="py-6 px-4 rounded-xl border border-white/5 bg-[#080808] hover:bg-white/[0.02] transition-colors flex items-center justify-center">
                   <span className="text-[#888] hover:text-white transition-colors text-sm font-medium">{tech}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ONBOARDING TIMELINE */}
      <section className="w-full py-32 relative border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
          <div className="mb-20">
             <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Onboarding Timeline</h2>
             <p className="text-[#888] font-light max-w-xl">We believe in throwing engineers into the deep end, but with a highly structured safety net.</p>
          </div>
          
          <div className="relative">
             <div className="absolute left-[30px] top-0 bottom-0 w-px bg-white/10" />
             
             <div className="flex flex-col gap-12">
                {ONBOARDING.map((step, idx) => (
                   <div key={idx} className="flex items-start gap-8 relative">
                      <div className="w-[60px] h-[60px] rounded-full bg-[#0a0a0a] border border-blue-500/30 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                         <div className="w-3 h-3 rounded-full bg-blue-500" />
                      </div>
                      <div className="pt-2">
                         <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mono-text mb-2">{step.week}</div>
                         <h3 className="text-2xl font-medium text-white mb-3">{step.title}</h3>
                         <p className="text-[#888] font-light max-w-2xl leading-relaxed">{step.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="w-full py-32 bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center relative mix-blend-luminosity grayscale">
         <div className="absolute inset-0 bg-[#030303]/90 backdrop-blur-sm" />
         <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to build the future?</h2>
            <p className="text-[#888] text-lg mb-10 max-w-2xl mx-auto">We are always looking for exceptional talent to join our collective.</p>
            <Link 
              href="/careers/opportunities" 
              className="inline-block px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              See Open Positions
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import Link from "next/link";
import Footer from "../components/Footer";

const TESTIMONIALS = [
  {
    text: "The autonomy and trust given to interns here is unmatched. It truly is a high-performance, yet incredibly supportive environment. You build real things that impact the business.",
    author: "Former AI Intern",
    role: "Now Full-Time ML Engineer"
  },
  {
    text: "Working at ScaleDesk feels like being part of an elite task force. The problems are complex, the team is brilliant, and the culture operates entirely without ego.",
    author: "Strategy Consult Intern",
    role: "Business Operations"
  }
];

export default function Careers() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-[85vh] min-h-[650px] flex items-center justify-start overflow-hidden border-b border-white/10">
        {/* Corporate Office Background Setup */}
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-cover bg-right"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-60" />
        
        <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6">
          <div className="max-w-[700px]">
             <div className="inline-block px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-zinc-300 mb-6 backdrop-blur-md">
               ScaleDesk Careers
             </div>
             
             <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
               Scale your potential.<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Engineer the future.</span>
             </h1>
             
             <p className="text-lg md:text-xl text-zinc-400 font-light mb-10 leading-relaxed border-l-2 border-white/20 pl-6">
               ScaleDesk is seeking relentless builders and analytical minds. Step into a corporate environment where complexity is celebrated, scale is mandatory, and autonomy is standard.
             </p>
             
             <div className="flex items-center gap-6">
                <Link 
                  href="/careers/opportunities" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                >
                  View Open Roles
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                
                {/* Decorative Team Stack */}
                <div className="hidden sm:flex -space-x-3">
                   <div className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80')", backgroundSize:'cover'}} />
                   <div className="w-12 h-12 rounded-full border-2 border-black bg-zinc-700" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80')", backgroundSize:'cover'}} />
                   <div className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white shadow-inner">+40</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CULTURE / ENVIRONMENT SECTION */}
      <section className="w-full max-w-[1240px] mx-auto px-6 py-24">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
               <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(255,255,255,0.02)]">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Happy collaborative team environment" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
               </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <h3 className="text-3xl font-semibold mb-6">Who We Are & How We Work</h3>
               <p className="text-zinc-400 font-light mb-8 leading-relaxed">
                 We are a collective of relentless engineers, designers, and strategists. We operate in a highly collaborative, fast-paced environment where autonomy is expected and innovation is standard. We celebrate wins together and tackle systemic challenges without ego.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["Remote-First Culture", "Competitive Compensation", "Continuous Learning", "Health & Wellness"].map((perk, i) => (
                    <div key={i} className="flex flex-col p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                       <span className="text-blue-400 font-bold mb-2">0{i+1}.</span>
                       <span className="font-medium text-zinc-200">{perk}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full max-w-[1240px] mx-auto px-6 py-24 border-t border-white/5">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Life at ScaleDesk</h2>
            <p className="text-zinc-400 font-light mx-auto max-w-2xl">Don't just take our word for it. Hear directly from the people who build, scale, and innovate with us every day.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
               <div key={i} className="p-10 rounded-3xl bg-[#050505] border border-white/5 relative shadow-2xl">
                  {/* Quote Icon */}
                  <div className="absolute top-8 left-8 text-blue-500/20">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <p className="text-lg text-zinc-300 font-light italic leading-relaxed mb-8 mt-6 relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                        <span className="text-zinc-500 font-bold">{t.author.charAt(0)}</span>
                     </div>
                     <div>
                        <h5 className="font-semibold text-white">{t.author}</h5>
                        <p className="text-sm text-zinc-500">{t.role}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* OUR TEAM GROUP PICTURE SECTION */}
      <section className="w-full bg-[#050505] py-32 border-t border-white/5">
         <div className="max-w-[1240px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
            <p className="text-zinc-400 font-light max-w-2xl mx-auto mb-16">
              A diverse collective of engineers, designers, and business strategists united by a shared obsession with excellence and scale.
            </p>
            
            {/* Massive Group Picture */}
            <div className="w-full relative aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
               {/* 
                  Using a high-quality placeholder team photo. 
                  Replace with your actual team photo later!
               */}
               <img 
                 src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80" 
                 alt="ScaleDesk Group Team" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

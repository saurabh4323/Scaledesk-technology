"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const OPPORTUNITIES = [
  { id: "SDT-INT-001", title: "Business Strategy Intern", department: "Business", location: "Remote" },
  { id: "SDT-INT-002", title: "Growth Marketing Intern", department: "Business", location: "Remote" },
  { id: "SDT-INT-003", title: "Enterprise Sales Intern", department: "Business", location: "Remote" },
  { id: "SDT-INT-004", title: "Product Operations Intern", department: "Business", location: "Remote" },
  { id: "SDT-INT-005", title: "UI/UX Design Intern", department: "Design", location: "Remote" },
  { id: "SDT-INT-006", title: "AI/ML Engineering Intern", department: "Engineering", location: "Remote" }
];

export default function Opportunities() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Intern Application: ${selectedJob.title} (${selectedJob.id})`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n[Please attach your resume and cover letter below]`);
    window.location.href = `mailto:contact@leadforgrow.com?subject=${subject}&body=${body}`;
    setSelectedJob(null); // Close modal after click
  };

  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      {/* <Navbar /> */}
      
      <section className="w-full max-w-[1240px] px-6 mx-auto py-24 flex-1">
         <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Open Opportunities</h1>
            <p className="text-zinc-400 font-light max-w-2xl text-lg">
              Join our internship program. We are looking for relentless builders and strategists ready to scale enterprise technology.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPPORTUNITIES.map((job) => (
               <div 
                 key={job.id} 
                 onClick={() => setSelectedJob(job)}
                 className="group p-8 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500/40 transition-all cursor-pointer shadow-lg hover:-translate-y-2 flex flex-col justify-between"
               >
                  <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-[#FF9500] mb-4 bg-[#FF9500]/10 inline-block px-3 py-1 rounded-sm">{job.id}</div>
                      <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors leading-tight">{job.title}</h4>
                      <div className="flex items-center gap-3 text-xs font-light text-zinc-500 mb-6">
                         <span className="px-2 py-1 bg-white/[0.03] rounded">{job.department}</span>
                         <span className="px-2 py-1 bg-white/[0.03] rounded">{job.location}</span>
                      </div>
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                     Apply Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
               </div>
            ))}
         </div>
      </section>

      <Footer />

      {/* APPLICATION MODAL */}
      {selectedJob && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedJob(null)} />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-200">
               <button 
                 onClick={() => setSelectedJob(null)}
                 className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
               >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>

               <div className="mb-8">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-blue-400 mb-2">{selectedJob.id}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Apply for<br/>{selectedJob.title}</h3>
                  <p className="text-sm text-zinc-400 font-light">Fill out your details to forward your application to our hiring team.</p>
               </div>

               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                     <label className="text-[10px] text-zinc-500 font-medium mb-1.5 block uppercase tracking-wider">Full Name *</label>
                     <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                     <label className="text-[10px] text-zinc-500 font-medium mb-1.5 block uppercase tracking-wider">Contact Number *</label>
                     <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                     <label className="text-[10px] text-zinc-500 font-medium mb-1.5 block uppercase tracking-wider">Email Address *</label>
                     <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="user@example.com" />
                  </div>

                  <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition-colors">
                    Forward Application via Email
                  </button>
               </form>
            </div>
         </div>
      )}
    </main>
  );
}

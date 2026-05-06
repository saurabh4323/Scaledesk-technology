"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleBooking = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Booking: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nTopic: ${formData.topic}`
    );
    window.location.href = `mailto:contact@leadforgrow.com?subject=${subject}&body=${body}`;
    setIsModalOpen(false); // Close the modal
    setFormData({ name: "", email: "", date: "", time: "", topic: "" }); // Reset
  };

  const navLinks = [
    { name: "What We Do", href: "/#services" },
    { name: "What We Are", href: "/#about" },
    { name: "What We Did", href: "/#case-studies" },
    { name: "Career", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black border-b border-[#1f1f1f]">
        <div className="max-w-[1440px] w-full mx-auto px-6 xl:px-12 h-[80px] flex items-center justify-between">
          {/* Brand */}
          <Link 
            href="/" 
            className="text-white text-[20px] font-bold tracking-tight"
          >
            ScaleDesk Technology
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative text-[#cccccc] hover:text-[#ffffff] text-[14px] font-medium tracking-[0.08em] uppercase py-2 transition-colors duration-300"
              >
                {link.name}
                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="ml-6 px-7 py-3 border-[1.5px] border-blue-500 text-blue-500 text-[14px] font-medium tracking-tight uppercase hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Book a Consultation
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-black border-b border-[#1f1f1f]">
            <div className="px-6 py-5 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-[#cccccc] text-[14px] font-medium tracking-[0.08em] uppercase hover:text-[#ffffff] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full flex justify-center px-7 py-3 border-[1.5px] border-blue-500 text-blue-500 text-[14px] font-medium tracking-tight uppercase hover:bg-blue-500 hover:text-white transition-colors"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* BOOKING MODAL */}
      {isModalOpen && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-200">
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
               >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>

               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Book a Consultation</h3>
                  <p className="text-sm text-zinc-400 font-light">Schedule time with our experts to discuss your business scale and architecture.</p>
               </div>

               <form onSubmit={handleBooking} className="flex flex-col gap-4 text-white">
                  <div>
                     <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">Full Name *</label>
                     <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors pointer-events-auto" placeholder="John Doe" />
                  </div>
                  <div>
                     <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">Email Address *</label>
                     <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="johndoe@company.com" />
                  </div>
                  <div className="flex gap-4">
                     <div className="flex-1">
                        <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">Date *</label>
                        <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors [color-scheme:dark]" />
                     </div>
                     <div className="flex-1">
                        <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">Time *</label>
                        <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors [color-scheme:dark]" />
                     </div>
                  </div>
                  <div>
                     <label className="text-[10px] text-zinc-500 font-medium mb-1 block uppercase tracking-wider">Topic of Discussion *</label>
                     <select required name="topic" value={formData.topic} onChange={handleChange} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors">
                        <option value="" disabled>Select a topic</option>
                        <option value="Enterprise AI Solutions">Enterprise AI Solutions</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Cloud Architecture">Cloud Architecture</option>
                        <option value="General Consulting">General Consulting</option>
                     </select>
                  </div>

                  <button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors shadow-lg">
                    Schedule via Email
                  </button>
               </form>
            </div>
         </div>
      )}
    </>
  );
}

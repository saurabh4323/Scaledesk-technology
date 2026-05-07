"use client";

import React, { useState, useEffect, useRef } from 'react';

const LeadForGrowWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const timerRef = useRef(null);

  const config = {
    token: "lfg_form_8b712db1748e0a41c73c0d5a1a0d7bf18edbf781489be5cd66a109b83657509e",
    baseUrl: "https://www.leadforgrow.com"
  };

  // Listen for external trigger (from Navbar or Hero)
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openLeadForm', handleOpen);
    return () => window.removeEventListener('openLeadForm', handleOpen);
  }, []);

  const startTimer = (delay) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isSubmitted && !isOpen) setIsOpen(true);
    }, delay);
  };

  useEffect(() => {
    // Auto-open after 30s
    startTimer(30000);
    return () => clearTimeout(timerRef.current);
  }, [isSubmitted]);

  const handleClose = () => {
    setIsOpen(false);
    if (!isSubmitted) startTimer(45000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const data = { token: config.token };
    new FormData(e.target).forEach((v, k) => data[k] = v);

    try {
      const resp = await fetch(`${config.baseUrl}/api/forms/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const res = await resp.json();
      if (res.success) {
        setIsSubmitted(true);
        setSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          // Wait for exit animation then reset success for future use if needed
          setTimeout(() => setSuccess(false), 500);
        }, 3000);
      } else {
        alert(res.error || 'Failed to send');
      }
    } catch (err) {
      alert('Error connecting to server');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Floating Badge */}
      <div 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[9999] group cursor-pointer transition-all duration-500 hover:scale-110 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <div className="absolute inset-0 bg-blue-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
        <div className="relative w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          
          {/* Pulsing Dot */}
          <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-blue-500 rounded-full">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          onClick={handleClose}
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Modal Card */}
        <div 
          className={`relative w-full max-w-[440px] bg-[#0d0d0d] border border-white/10 rounded-[32px] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}
        >
          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          {success ? (
            <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-zinc-400 font-light max-w-[240px] mx-auto">Thank you for reaching out. Our team will contact you shortly.</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-wider mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Contact Support
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Let's Connect</h3>
                <p className="text-sm text-zinc-400 font-light">Share your details and our experts will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="name@company.com" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest ml-1">Phone</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+1 (555) 000-0000" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest ml-1">How can we help?</label>
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your project..." 
                    rows="3" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSending} 
                  className="w-full group relative overflow-hidden bg-blue-600 hover:bg-blue-500 text-white border-none rounded-xl py-4 font-bold transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {isSending ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
};

export default LeadForGrowWidget;

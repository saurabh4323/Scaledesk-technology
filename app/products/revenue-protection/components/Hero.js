"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-line-1", 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      );
      tl.fromTo(".hero-line-2", 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.15
      );
      tl.fromTo(".hero-line-3", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
        0.3
      );
      tl.fromTo(".hero-subline", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        0.5
      );
      tl.fromTo(".hero-cta", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        0.7
      );
      
      // Shield animation
      gsap.to(".radar-ring", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });
      
      gsap.to(".pulse-ring", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        stagger: 0.6,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-12 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left: Text Stack */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/[0.06] shadow-[0_0_25px_rgba(37,99,235,0.15)] backdrop-blur-sm group mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></span>
            <span className="text-[13px] uppercase tracking-[0.15em] font-bold text-zinc-300">Revenue Protection · by ScaleDesk</span>
          </div>
          
          <h1 className="text-[52px] sm:text-[68px] leading-[1.05] tracking-tight font-black">
            <span className="hero-line-1 text-white block">Your Revenue Has</span>
            <span className="hero-line-2 text-white block">Enemies. We Hunt</span>
            <span className="hero-line-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic pr-4 block">All of Them.</span>
          </h1>
          
          <p className="hero-subline text-[#888888] text-[18px] leading-[1.7] max-w-[480px] font-medium">
            LeadForGrow Revenue Protection is a multi-layer defense system 
            that detects fraud, prevents churn, and closes revenue leaks 
            in real time — before they cost you.
          </p>
          
          <div className="hero-cta flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300">
              Activate Protection
            </button>
            <button className="group px-10 py-5 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[11px] rounded hover:bg-white/5 transition-all flex items-center gap-2">
              See It In Action <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          <div className="hero-cta mt-6 text-[#555555] text-[10px] flex items-center gap-2 font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span> Active Protection · $2.4B+ Revenue Secured
          </div>
        </div>

        {/* Right: Shield Visual */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
          <div className="relative w-[300px] h-[340px] flex items-center justify-center">
            <svg className="absolute w-full h-full text-white/10" viewBox="0 0 100 115" fill="none" stroke="currentColor" strokeWidth="1">
              <polygon points="50,0 100,25 100,85 50,115 0,85 0,25" />
            </svg>
            <svg className="absolute w-full h-full text-blue-500/20" viewBox="0 0 100 115" fill="currentColor">
               <clipPath id="fill-clip">
                  <rect x="0" y="115" width="100" height="115">
                    <animate attributeName="y" values="115;0" dur="2s" fill="freeze" ease="ease-in-out" />
                  </rect>
               </clipPath>
               <polygon points="50,0 100,25 100,85 50,115 0,85 0,25" clipPath="url(#fill-clip)" />
            </svg>

            <div className="radar-ring absolute w-[140%] h-[140%] rounded-full border border-dashed border-indigo-400/30"></div>
            <div className="pulse-ring absolute w-full h-full rounded-full border border-blue-500/40"></div>
            <div className="pulse-ring absolute w-full h-full rounded-full border border-blue-500/40 delay-300"></div>

            <div className="absolute inset-0">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]" style={{
                   top: `${20 + Math.random() * 60}%`,
                   left: i % 2 === 0 ? '-30%' : '120%',
                   animation: `flyIn ${3 + Math.random()*2}s infinite ${Math.random()*2}s linear`
                 }} />
               ))}
            </div>
            
            <div className="relative z-10 w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
               <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
               </svg>
            </div>
          </div>

          <div className="absolute top-10 -left-10 bg-black/60 backdrop-blur-md border border-blue-500/50 px-4 py-2 rounded shadow-[0_0_15px_rgba(37,99,235,0.1)] text-blue-400 text-[10px] uppercase tracking-widest font-bold animate-pulse z-20">
            SHIELD STATUS: ACTIVE
          </div>
          
          <div className="absolute -right-4 top-1/3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-3 rounded text-white text-[10px] uppercase tracking-widest font-bold z-20">
            Threats Blocked: <span className="text-indigo-400 ml-2">1,247</span>
          </div>
          
          <div className="absolute bottom-10 -right-10 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-3 rounded text-white text-[10px] uppercase tracking-widest font-bold z-20">
            <span className="text-blue-400 mr-2">$840K</span> Protected
          </div>
          
          <div className="absolute -left-10 bottom-1/3 bg-black/60 backdrop-blur-md border border-red-500/50 px-4 py-2 rounded flex items-center gap-2 text-red-500 text-[10px] uppercase tracking-widest font-bold z-20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> 3 Alerts
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flyIn {
          0% { transform: translateX(0) scale(1); background: #ef4444; box-shadow: 0 0 10px #ef4444; opacity: 0; }
          20% { opacity: 1; }
          80% { transform: translateX(calc(150px - 50%)) scale(1); background: #ef4444; box-shadow: 0 0 10px #ef4444; }
          90% { transform: translateX(calc(150px - 50%)) scale(1.5); background: #3b82f6; box-shadow: 0 0 15px #3b82f6; }
          100% { transform: translateX(calc(150px - 50%)) scale(0); opacity: 0; }
        }
      `}} />
    </section>
  );
}

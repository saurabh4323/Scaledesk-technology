export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-neutral-800 selection:text-white font-sans overflow-hidden">
      {/* Abstract Spotlight Effect for Premium Feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[600px] h-[500px] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-400 via-transparent to-transparent blur-[80px]"></div>
      </div>

      {/* Navigation has been moved to a global layout component */}


      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
        
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/30 text-neutral-300 text-xs md:text-sm tracking-wide mb-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9500]/80 animate-pulse"></span>
          <span className="font-light opacity-90">ScaleDesk Technology</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] tracking-tight text-neutral-100 mb-8 leading-[1.1]">
          <span className="font-light text-neutral-400">Stop Managing Tech.</span><br />
          <span className="font-normal text-white">Start Growing Your Business.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-base md:text-xl text-neutral-400 font-light leading-relaxed mb-14">
          ScaleDesk works as your extended tech team — helping you build, scale, and manage products without hiring an in-house team.
        </p>

        {/* Points */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-14 mb-16 text-left justify-center w-full">
          {[
            "MVPs in weeks, not months",
            "Scalable, production-ready",
            "AI-powered automation"
          ].map((point, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-neutral-800 bg-neutral-900/50">
                <svg className="w-3 h-3 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-neutral-400 text-sm md:text-base font-light tracking-wide">{point}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <button className="px-8 py-3.5 bg-neutral-100 hover:bg-white text-black rounded text-sm tracking-wide transition-all duration-300 font-normal">
            Book a Free Consultation
          </button>
          <button className="px-8 py-3.5 bg-transparent border border-neutral-700 hover:border-neutral-400 text-neutral-200 rounded text-sm tracking-wide transition-all duration-300 font-light">
            View Our Work
          </button>
        </div>

      </main>

      {/* Subtle fade at the bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none"></div>
    </div>
  );
}

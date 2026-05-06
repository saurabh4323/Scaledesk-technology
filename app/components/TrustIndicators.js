import Image from "next/image";

export default function TrustIndicators() {
  return (
    <section className="w-full py-20 border-t border-b border-white/5 bg-[#030303] overflow-hidden relative">
      {/* Gradients to hide edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 mb-12 flex justify-center text-center">
        <p className="text-[#666666] mono-text text-[11px] uppercase tracking-[0.2em] font-medium">
          Trusted by Engineering Teams & Built on World-Class Infrastructure
        </p>
      </div>
      
      <div className="flex gap-16 items-center w-max animate-marquee">
        {/* Duplicated list to make it seamless */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center px-8">
            <div className="text-[#444] font-bold text-2xl tracking-tighter flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              SOC 2 Type II
            </div>
            <div className="text-[#444] font-bold text-2xl tracking-tighter">AWS Advanced Partner</div>
            <div className="text-[#444] font-bold text-2xl tracking-tighter">Google Cloud</div>
            <div className="text-[#444] font-bold text-2xl tracking-tighter">Kubernetes Certified</div>
            <div className="text-[#444] font-bold text-2xl tracking-tighter flex items-center gap-2">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V8.09l7-3.89v8.79z"/></svg>
               ISO 27001
            </div>
            <div className="text-[#444] font-bold text-2xl tracking-tighter">Datadog</div>
            <div className="text-[#444] font-bold text-2xl tracking-tighter">Cloudflare Enterprise</div>
            <div className="text-[#444] font-bold text-2xl tracking-tighter">Terraform</div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  )
}

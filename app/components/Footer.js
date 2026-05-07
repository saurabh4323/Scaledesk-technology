import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10">
         <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 mb-24">
            
            {/* Brand & Status Column */}
            <div className="col-span-2 lg:col-span-4 flex flex-col items-start pr-8">
               <Link href="/" className="flex items-center gap-2 text-white text-[18px] font-semibold tracking-tight mb-8">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                     <div className="w-3 h-3 bg-black rounded-sm" />
                  </div>
                  ScaleDesk
               </Link>
               <p className="text-[#888888] font-light text-[14px] leading-relaxed mb-10 max-w-[320px]">
                 We architect, deploy, and scale enterprise infrastructure. A dedicated engineering partner for companies building the future.
               </p>
               
               {/* System Status & Compliance */}
               <div className="flex flex-col gap-4 w-full">
                 <div className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 rounded-md px-4 py-3 w-max">
                   <span className="relative flex h-2.5 w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                   </span>
                   <span className="text-[#a1a1aa] text-[12px] font-medium tracking-wide">All Systems Operational</span>
                 </div>
                 
                 <div className="flex gap-3">
                   <div className="px-3 py-1.5 border border-white/5 bg-[#0a0a0a] rounded text-[#666] text-[10px] font-bold tracking-wider mono-text uppercase">SOC 2 Type II</div>
                   <div className="px-3 py-1.5 border border-white/5 bg-[#0a0a0a] rounded text-[#666] text-[10px] font-bold tracking-wider mono-text uppercase">ISO 27001</div>
                   <div className="px-3 py-1.5 border border-white/5 bg-[#0a0a0a] rounded text-[#666] text-[10px] font-bold tracking-wider mono-text uppercase">99.99% SLA</div>
                 </div>
               </div>
            </div>
            
            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="flex flex-col gap-5">
                  <h4 className="text-white text-[13px] font-semibold tracking-wide mb-2">Platform</h4>
                  <Link href="/services/software-engineering" className="text-[#888888] hover:text-white text-[13px] transition-colors">Software Engineering</Link>
                  <Link href="/services/data-pipelines" className="text-[#888888] hover:text-white text-[13px] transition-colors">Data Pipelines</Link>
                  <Link href="/services/ai-automation" className="text-[#888888] hover:text-white text-[13px] transition-colors">AI & Automation</Link>
                  <Link href="/services/cloud-infrastructure" className="text-[#888888] hover:text-white text-[13px] transition-colors">Cloud Infrastructure</Link>
               </div>
               
               <div className="flex flex-col gap-5">
                  <h4 className="text-white text-[13px] font-semibold tracking-wide mb-2">Products</h4>
                  <Link href="/products/leadforgrow-crm" className="text-[#888888] hover:text-white text-[13px] transition-colors">LeadForGrow CRM</Link>
                  <Link href="/products/revenue-protection" className="text-[#888888] hover:text-white text-[13px] transition-colors">Revenue Protection</Link>
                  <Link href="/products/ai-analytics" className="text-[#888888] hover:text-white text-[13px] transition-colors">AI Analytics</Link>
               </div>
               
               <div className="flex flex-col gap-5">
                  <h4 className="text-white text-[13px] font-semibold tracking-wide mb-2">Company</h4>
                  <Link href="/about" className="text-[#888888] hover:text-white text-[13px] transition-colors">About Us</Link>
                  <Link href="/careers" className="text-[#888888] hover:text-white text-[13px] transition-colors flex items-center gap-2">Careers <span className="bg-blue-500/10 text-blue-400 text-[9px] px-1.5 py-0.5 rounded mono-text">HIRING</span></Link>
                  <Link href="/case-studies" className="text-[#888888] hover:text-white text-[13px] transition-colors">Case Studies</Link>
                  <Link href="/insights" className="text-[#888888] hover:text-white text-[13px] transition-colors">Insights & Blog</Link>
                  <Link href="/contact" className="text-[#888888] hover:text-white text-[13px] transition-colors">Contact Sales</Link>
               </div>
               
               <div className="flex flex-col gap-5">
                  <h4 className="text-white text-[13px] font-semibold tracking-wide mb-2">Legal</h4>
                  <Link href="/legal/privacy-policy" className="text-[#888888] hover:text-white text-[13px] transition-colors">Privacy Policy</Link>
                  <Link href="/legal/terms-of-service" className="text-[#888888] hover:text-white text-[13px] transition-colors">Terms of Service</Link>
                  <Link href="/legal/security" className="text-[#888888] hover:text-white text-[13px] transition-colors">Security</Link>
                  <Link href="/legal/cookie-policy" className="text-[#888888] hover:text-white text-[13px] transition-colors">Cookie Policy</Link>
               </div>
            </div>
         </div>
         
         {/* Bottom Bar */}
         <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-[#666666] font-light">
            <div className="flex items-center gap-4">
               <p>Copyright {new Date().getFullYear()} ScaleDesk Technology. All rights reserved.</p>
               <span className="hidden md:inline-block w-1 h-1 bg-[#333] rounded-full"></span>
               <p className="hidden md:block">Engineered in India. Deployed Globally.</p>
            </div>
            <div className="flex gap-6">
               <a href="#" className="hover:text-white transition-colors">GitHub</a>
               <a href="https://www.linkedin.com/company/scaledesk-technology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
         </div>
      </div>
    </footer>
  )
}

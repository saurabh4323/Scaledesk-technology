import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-24 pb-12">
      <div className="max-w-[1240px] mx-auto px-6">
         <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-16 mb-20 text-sm">
            <div className="col-span-2 lg:col-span-2 items-start flex flex-col">
               <h3 className="text-2xl font-bold text-white tracking-tight mb-6">ScaleDesk<span className="text-zinc-500">.Technology</span></h3>
               <p className="text-zinc-500 font-light max-w-xs mb-8">
                 We build, scale, and protect enterprise infrastructure. Your dedicated long-term engineering partner.
               </p>
               <Link href="/contact" className="inline-block">
                 <button className="px-6 py-2.5 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-colors font-medium text-xs cursor-pointer">
                    Contact Us
                 </button>
               </Link>
            </div>
            
            <div className="flex flex-col gap-5 text-zinc-400 font-light">
               <h4 className="text-white font-medium mb-1">Services</h4>
               <Link href="/services/software-engineering" className="hover:text-white transition-colors">Software Engineering</Link>
               <Link href="/services/data-pipelines" className="hover:text-white transition-colors">Data Pipelines</Link>
               <Link href="/services/ai-automation" className="hover:text-white transition-colors">AI & Automation</Link>
               <Link href="/services/cloud-infrastructure" className="hover:text-white transition-colors">Cloud Infrastructure</Link>
            </div>
            
            <div className="flex flex-col gap-5 text-zinc-400 font-light">
               <h4 className="text-white font-medium mb-1">Products</h4>
               <Link href="/products/leadforgrow-crm" className="hover:text-white transition-colors">LeadForGrow CRM</Link>
               <Link href="/products/revenue-protection" className="hover:text-white transition-colors">Revenue Protection</Link>
               <Link href="/products/ai-analytics" className="hover:text-white transition-colors">AI Analytics</Link>
            </div>
            
            <div className="flex flex-col gap-5 text-zinc-400 font-light">
               <h4 className="text-white font-medium mb-1">Company</h4>
               <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
               <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
               <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
               <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
            </div>
            
            <div className="flex flex-col gap-5 text-zinc-400 font-light">
               <h4 className="text-white font-medium mb-1">Legal</h4>
               <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
               <Link href="/legal/security" className="hover:text-white transition-colors">Security</Link>
               <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
         </div>
         
         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-zinc-500 font-light">
            <p>© {new Date().getFullYear()} ScaleDesk Technology. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="https://www.linkedin.com/company/scaledesk-technology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
         </div>
      </div>
    </footer>
  )
}

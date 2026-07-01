import Link from "next/link";
import FooterNewsletter from "./FooterNewsletter";

const BLUE = "#2F80FF";

// const LINKS_SERVICES = [
//   { label: "Product Engineering", href: "/services/product-engineering" },
//   { label: "AI Development", href: "/services/ai-development" },
//   { label: "Enterprise Software", href: "/services/enterprise-software-development" },
//   { label: "SaaS Development", href: "/services/saas-development" },
//   { label: "MVP Development", href: "/services/mvp-development" },
//   { label: "All Services", href: "/services" },
// ];

const LINKS_COMPANY = [
  { label: "About Us", href: "/about" },
  // { label: "Saurabh Singh — CTO", href: "/team/saurabh-singh" },
  { label: "Careers", href: "/careers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Resources", href: "/resources" },
  { label: "Glossary", href: "/glossary" },
  { label: "Contact Us", href: "/contact" },
];

const LINKS_PRODUCTS = [
  { label: "LeadForGrow™ AI CRM", href: "/products/leadforgrow-crm" },
  { label: "ScaleDesk HRM™", href: "/products/scaledesk-hrm" },
  { label: "AI Analytics", href: "/products/ai-analytics" },
  { label: "All Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
];

const LINKS_LEGAL = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Security", href: "/legal/security" },
  { label: "LinkedIn", href: "/legal/linkedin" },
];

const WORDS = [
  { text: "ENGINEER", accent: false, offset: "pt-0" },
  { text: "BUILD", accent: true, offset: "pt-16 xl:pt-24" },
  { text: "SCALE", accent: false, offset: "pt-8 xl:pt-12" },
];

function FooterWordWall() {
  return (
    <div
      className="pointer-events-none hidden lg:flex items-start justify-end gap-4 xl:gap-6"
      aria-hidden="true"
    >
      {WORDS.map((word) => (
        <div
          key={word.text}
          className={`flex flex-col ${word.offset}`}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          <span
            className={`whitespace-nowrap text-[clamp(2.75rem,4.2vw,4.5rem)] font-black leading-[0.88] tracking-[-0.03em] ${
              word.accent ? "" : "text-white"
            }`}
            style={
              word.accent
                ? { color: BLUE }
                : { color: "rgba(255,255,255,0.92)", WebkitTextStroke: "1px rgba(255,255,255,0.08)" }
            }
          >
            {word.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-normal text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className="text-[14px] font-normal text-white/80 transition-colors hover:text-white">
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-16 xl:px-12 xl:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="flex flex-col lg:col-span-7">
            <h2 className="mb-10 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight md:text-[2.35rem]">
              Product Engineering, AI Solutions & Enterprise Software — ScaleDesk Technology
            </h2>

            <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 xl:mb-16">
              {/* <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4">Services</p>
                <FooterLinkList links={LINKS_SERVICES} />
              </div> */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4">Company</p>
                <FooterLinkList links={LINKS_COMPANY} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4">Products</p>
                <FooterLinkList links={LINKS_PRODUCTS} />
              </div>
            </div>

            <div className="mb-10">
              <FooterLinkList links={LINKS_LEGAL} />
            </div>

            <p className="mt-auto text-[13px] font-normal text-white/55">
              © {new Date().getFullYear()} ScaleDesk Technology. All Rights Reserved.
              {/* ·{" "}
              <Link href="/team/saurabh-singh" className="hover:text-white/80 transition-colors">
                Saurabh Singh, Co-Founder & CTO
              </Link> */}
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-5 lg:pt-2">
            <FooterNewsletter />
            <FooterWordWall />
          </div>
        </div>
      </div>
    </footer>
  );
}

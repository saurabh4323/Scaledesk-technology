import Link from "next/link";
import FooterNewsletter from "./FooterNewsletter";

const BLUE = "#2F80FF";

const LINKS_LEFT = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
  { label: "Services", href: "/#services" },
];

const LINKS_RIGHT = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Security", href: "/legal/security" },
  { label: "LeadForGrow™", href: "/products/leadforgrow-crm" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/scaledesk-technology", external: true },
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
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          <span
            className={`whitespace-nowrap text-[clamp(2.75rem,4.2vw,4.5rem)] font-black leading-[0.88] tracking-[-0.03em] ${
              word.accent ? "" : "text-white"
            }`}
            style={
              word.accent
                ? { color: BLUE }
                : {
                    color: "rgba(255,255,255,0.92)",
                    WebkitTextStroke: "1px rgba(255,255,255,0.08)",
                  }
            }
          >
            {word.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 py-16 xl:px-12 xl:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Left — headline, links, copyright */}
          <div className="flex flex-col lg:col-span-6 xl:col-span-7">
            <h2 className="mb-12 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight md:text-[2.35rem] xl:mb-14 xl:text-[2.6rem]">
              Engineering Digital Products That Move Businesses Forward.
            </h2>

            <div className="mb-16 grid grid-cols-2 gap-x-10 gap-y-3 sm:gap-x-16 xl:mb-20">
              <ul className="flex flex-col gap-3">
                {LINKS_LEFT.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-normal text-white/90 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {LINKS_RIGHT.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-normal text-white/90 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[15px] font-normal text-white/90 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-auto text-[13px] font-normal text-white/55">
              © {new Date().getFullYear()} ScaleDesk Technology. All Rights Reserved.
            </p>
          </div>

          {/* Right — newsletter + word wall */}
          <div className="flex flex-col gap-10 lg:col-span-6 xl:col-span-5 lg:pt-2">
            <FooterNewsletter />
            <FooterWordWall />
          </div>
        </div>
      </div>
    </footer>
  );
}

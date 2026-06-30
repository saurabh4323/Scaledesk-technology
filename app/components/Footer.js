import Link from "next/link";

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

function FooterWordWall() {
  const columns = ["ENGINEER", "BUILD", "SCALE", "ENGINEER", "BUILD"];

  return (
    <div
      className="pointer-events-none absolute right-0 top-0 bottom-0 hidden w-[48%] overflow-hidden lg:flex justify-end gap-5 xl:gap-7 pr-2 xl:pr-6"
      aria-hidden="true"
    >
      {columns.map((word, col) => (
        <div
          key={`${word}-${col}`}
          className="flex flex-col justify-start pt-2"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          <span
            className="text-[clamp(3.5rem,5.5vw,5.5rem)] font-black leading-[0.82] tracking-[-0.04em] text-white whitespace-nowrap"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
            }}
          >
            {word}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative mx-auto min-h-[520px] max-w-[1440px] px-6 py-16 xl:px-12 xl:py-20">
        <FooterWordWall />

        <div className="relative z-10 flex max-w-[58%] flex-col lg:max-w-[52%]">
          <h2 className="mb-14 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight md:text-[2.35rem] xl:text-[2.6rem]">
            Engineering Digital Products That Move Businesses Forward.
          </h2>

          <div className="mb-20 grid grid-cols-2 gap-x-10 gap-y-3 sm:gap-x-16">
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
      </div>
    </footer>
  );
}

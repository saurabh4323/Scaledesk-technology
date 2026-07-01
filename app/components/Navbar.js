"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";

const BLUE = "#2F80FF";

const NAV_LINKS = [
  // { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Company", href: "/about" },
];

function isLinkActive(pathname, href) {
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleBooking = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Booking: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nTopic: ${formData.topic}`
    );
    window.location.href = `mailto:contact@leadforgrow.com?subject=${subject}&body=${body}`;
    setIsModalOpen(false);
    setFormData({ name: "", email: "", date: "", time: "", topic: "" });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.08] bg-black/90 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "border-b border-white/[0.04] bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 xl:px-12">
          <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <BrandLogo variant="navbar" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    active ? "text-white" : "text-white/50 hover:text-white/90"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span
                      className="absolute bottom-1 left-1/2 h-px w-5 -translate-x-1/2"
                      style={{ backgroundColor: BLUE }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="px-4 py-2 text-[13px] font-medium text-white/55 transition-colors hover:text-white"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Talk to Engineers
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-[6px]">
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  isOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[55] bg-black transition-all duration-500 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-28">
          <nav className="flex flex-1 flex-col justify-center gap-2">
            {NAV_LINKS.map((link, i) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-white/[0.06] py-5 text-2xl font-semibold tracking-tight transition-colors ${
                    active ? "text-white" : "text-white/40 hover:text-white/80"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${i * 40}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-8">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-3 text-center text-sm font-medium text-white/60"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full py-3.5 text-sm font-semibold text-white"
              style={{ backgroundColor: BLUE }}
            >
              Talk to Engineers
            </button>
          </div>
        </div>
      </div>

      {/* Booking modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md border border-white/10 bg-[#0a0a0a] p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 text-zinc-500 transition-colors hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: BLUE }}>
              Consultation
            </p>
            <h3 className="mb-2 text-2xl font-semibold leading-tight text-white">
              Talk to Our Engineers
            </h3>
            <p className="mb-6 text-sm font-light text-zinc-400">
              Book time with our product engineering team.
            </p>

            <form onSubmit={handleBooking} className="flex flex-col gap-4 text-left text-white">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white placeholder-zinc-600 focus:border-[#2F80FF]/50 focus:outline-none"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white placeholder-zinc-600 focus:border-[#2F80FF]/50 focus:outline-none"
              />
              <div className="flex gap-3">
                <input
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="flex-1 rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white [color-scheme:dark] focus:border-[#2F80FF]/50 focus:outline-none"
                />
                <input
                  required
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="flex-1 rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white [color-scheme:dark] focus:border-[#2F80FF]/50 focus:outline-none"
                />
              </div>
              <select
                required
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white focus:border-[#2F80FF]/50 focus:outline-none"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="Product Engineering">Product Engineering</option>
                <option value="Enterprise Software">Enterprise Software</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Cloud Architecture">Cloud Architecture</option>
              </select>
              <button
                type="submit"
                className="mt-2 w-full rounded-lg py-3 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                Schedule via Email
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

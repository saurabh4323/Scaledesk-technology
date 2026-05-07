"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  });

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

  // Scroll depth detection for navbar appearance change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "/#services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Company", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      <style>{`
        @keyframes navReveal {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .navbar-enter {
          animation: navReveal 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }
        .nav-indicator {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 1px;
          background: #3b82f6;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-link-active .nav-indicator {
          width: 24px;
        }
        .mobile-menu-enter {
          animation: mobileMenuIn 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .modal-backdrop-enter {
          animation: backdropIn 0.25s ease both;
        }
        .modal-content-enter {
          animation: modalIn 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1) opacity(0.4);
        }
      `}</style>

      <header
        className={`navbar-enter sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#030303]/90 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_1px_0_rgba(0,0,0,0.8),0_4px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top edge light — appears on scroll */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px transition-all duration-500"
          style={{
            width: scrolled ? "60%" : "0%",
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
          }}
        />

        <div className="max-w-[1440px] w-full mx-auto px-6 xl:px-12 h-[72px] flex items-center justify-between">
          {/* ── Brand ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white text-[15px] font-semibold tracking-tight group"
          >
            <div
              className="w-6 h-6 rounded-[5px] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              style={{ background: "linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%)" }}
            >
              <div className="w-3 h-3 bg-[#030303] rounded-[3px]" />
            </div>
            <span className="tracking-[-0.01em]">ScaleDesk</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[#71717a] hover:text-white text-[13px] font-medium tracking-[0.01em] py-2 transition-colors duration-300 nav-link-hover group"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                {link.name}
                {/* Underline accent */}
                <span
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(99,102,241,0.7), transparent)",
                  }}
                />
              </Link>
            ))}

            {/* CTA */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-4 px-5 py-2.5 text-[13px] font-semibold tracking-tight rounded-[7px] transition-all duration-300 relative overflow-hidden group"
              style={{
                background: "#0e0e0e",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <span className="relative z-10">Contact Sales</span>
              {/* Hover glow sweep */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(59,130,246,0.04) 100%)",
                }}
              />
              <span
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
                }}
              />
            </button>
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {isOpen && (
          <div
            className="lg:hidden mobile-menu-enter"
            style={{
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="px-6 py-6 space-y-1 flex flex-col">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#a1a1aa] text-[14px] font-medium py-3 border-b border-white/[0.04] hover:text-white transition-colors flex items-center justify-between group"
                  style={{ animationDelay: `${0.05 * i}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <span className="text-[#333] group-hover:text-[#666] transition-colors">-&gt;</span>
                </Link>
              ))}
              <div className="pt-5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full flex justify-center items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ══════════ BOOKING MODAL ══════════ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 modal-backdrop-enter"
            style={{
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Card */}
          <div
            className="relative w-full max-w-md modal-content-enter"
            style={{
              background: "rgba(8,8,8,0.98)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "36px",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.9), 0 0 60px rgba(99,102,241,0.04)",
            }}
          >
            {/* Top edge glow */}
            <div
              className="absolute top-0 left-1/4 right-1/4 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
              }}
            />

            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/5"
              style={{ color: "#52525b" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-[#52525b] uppercase tracking-widest font-mono">
                  Available Now
                </span>
              </div>
              <h3 className="text-[22px] font-semibold text-white mb-2 leading-tight tracking-tight">
                Book a Consultation
              </h3>
              <p className="text-[13px] text-[#71717a] font-light leading-relaxed">
                Schedule time with our engineering team to discuss your
                architecture, AI infrastructure, or scale challenges.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleBooking} className="flex flex-col gap-4">
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Jane Smith" },
                { label: "Work Email", name: "email", type: "email", placeholder: "jane@company.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-[10px] uppercase tracking-widest font-semibold mb-1.5"
                    style={{ color: "#3f3f46" }}
                  >
                    {field.label} *
                  </label>
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full text-white text-[13px] font-light placeholder-[#3f3f46] focus:outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(99,102,241,0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.06)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.07)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3">
                {["date", "time"].map((field) => (
                  <div key={field}>
                    <label
                      className="block text-[10px] uppercase tracking-widest font-semibold mb-1.5"
                      style={{ color: "#3f3f46" }}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)} *
                    </label>
                    <input
                      required
                      type={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full text-white text-[13px] font-light focus:outline-none transition-all duration-200 [color-scheme:dark]"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "8px",
                        padding: "10px 14px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(99,102,241,0.4)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.06)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.07)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  className="block text-[10px] uppercase tracking-widest font-semibold mb-1.5"
                  style={{ color: "#3f3f46" }}
                >
                  Topic *
                </label>
                <select
                  required
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full text-white text-[13px] focus:outline-none transition-all duration-200"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    color: formData.topic ? "#fff" : "#3f3f46",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(99,102,241,0.4)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.06)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.07)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <option value="" disabled style={{ color: "#3f3f46" }}>Select a topic</option>
                  <option value="Enterprise AI Solutions">Enterprise AI Solutions</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Cloud Architecture">Cloud Architecture</option>
                  <option value="Data Infrastructure">Data Infrastructure</option>
                  <option value="General Consulting">General Consulting</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-1 w-full py-3 text-[13px] font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 24px rgba(79,70,229,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <span className="relative z-10">Schedule via Email -&gt;</span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

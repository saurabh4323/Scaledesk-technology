"use client";

import { useState } from "react";
import Image from "next/image";
import { ParallaxImage, ParallaxContent } from "./Parallax";

const BLUE = "#2F80FF";

function HandshakeIcon() {
  return (
    <svg
      className="inline-block w-10 h-10 md:w-14 md:h-14 ml-2 -mt-1 align-middle"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 34 L18 24 L28 34 L38 24 L48 34"
        stroke={BLUE}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 34 L14 44 C14 48 18 50 22 48 L32 42 L42 48 C46 50 50 48 50 44 L50 34"
        stroke={BLUE}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 28 L32 36 L42 28"
        stroke={BLUE}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <>
      <section id="story-hero" className="relative bg-black overflow-hidden">
        <ParallaxContent
          className="relative z-10 flex flex-col items-center text-center px-6 pt-20 md:pt-28 pb-14 md:pb-20"
          yRange={[20, -20]}
        >
          <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.28em] text-white/90 mb-10 md:mb-12">
            Product Engineering &amp; AI Solutions
          </p>

          <h1
            className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-white leading-[1.08] tracking-tight max-w-4xl"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Engineering Products.
            <br />
            <span className="inline-flex flex-wrap items-center justify-center gap-1">
              Accelerating Businesses.
              <HandshakeIcon />
            </span>
          </h1>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-12 md:mt-14 px-8 py-3.5 rounded-xl text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] hover:brightness-110"
            style={{ backgroundColor: BLUE }}
          >
            Talk to Our Engineers
          </button>
        </ParallaxContent>

        <div className="relative z-10 w-full px-3 sm:px-8 md:px-12 lg:px-16">
          <ParallaxImage
            className="relative w-full max-w-6xl mx-auto aspect-[4/3] min-h-[220px] sm:aspect-[16/9] sm:min-h-0 sm:h-[48vh] md:h-[56vh] lg:h-[62vh] rounded-t-2xl md:rounded-t-[2.5rem]"
            speed={14}
            scale={1.18}
            mobileScale={1.02}
            mobileSpeed={4}
          >
            <Image
              src="/heroimage.png"
              alt="ScaleDesk Technology office and engineering workspace"
              fill
              priority
              className="object-cover object-[68%_center] sm:object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1152px"
            />
          </ParallaxImage>
        </div>

        <ParallaxContent
          className="relative z-10 bg-black px-6 py-14 md:py-20"
          yRange={[28, -28]}
        >
          <p
            className="max-w-3xl mx-auto text-center text-[17px] md:text-xl text-white/75 leading-relaxed font-light"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            We are a proud, engineering-first team of problem solvers. Aside from
            building world-class digital products, we partner with startups and
            enterprises to deliver measurable business outcomes through modern
            engineering, AI, and cloud-native architecture.
          </p>
        </ParallaxContent>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#0a0a0a] p-8 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="mb-6 text-left">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                Talk to Our Engineers
              </h3>
              <p className="text-sm text-zinc-400 font-light">
                Book time with our product engineering team.
              </p>
            </div>
            <form onSubmit={handleBooking} className="flex flex-col gap-4 text-white text-left">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30"
              />
              <div className="flex gap-3">
                <input
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="flex-1 bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white [color-scheme:dark] focus:outline-none"
                />
                <input
                  required
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="flex-1 bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white [color-scheme:dark] focus:outline-none"
                />
              </div>
              <select
                required
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none"
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
                className="mt-2 w-full font-semibold py-3 rounded-lg text-white transition-opacity hover:opacity-90"
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

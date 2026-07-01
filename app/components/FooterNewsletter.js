"use client";

import { useState } from "react";

const BLUE = "#2F80FF";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  }

  return (
    <div
      className="relative overflow-hidden border border-[#2F80FF]/30 p-6 md:p-8"
      style={{
        background: `linear-gradient(145deg, ${BLUE}18 0%, rgba(0,0,0,0.6) 55%, ${BLUE}0d 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl"
        style={{ backgroundColor: `${BLUE}30` }}
      />

      <div className="relative">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2F80FF]">
          Newsletter
        </p>
        <h3 className="mb-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
          Engineering insights, monthly
        </h3>
        <p className="mb-6 text-sm font-light leading-relaxed text-white/55">
          Product engineering perspectives, case study highlights, and platform thinking from
          ScaleDesk Technology.
        </p>

        {status === "success" ? (
          <p className="text-sm font-medium text-[#2F80FF]">
            Thanks for subscribing — we&apos;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setStatus("idle");
                setEmail(e.target.value);
              }}
              placeholder="you@company.com"
              aria-label="Email address"
              className="min-w-0 flex-1 border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#2F80FF]/60"
            />
            <button
              type="submit"
              className="shrink-0 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

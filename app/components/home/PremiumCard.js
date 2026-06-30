"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../Parallax";

export function ImageOverlayCard({ label, title, image, href = "#" }) {
  return (
    <Link
      href={href}
      className="group relative block h-[420px] overflow-hidden bg-[#111]"
    >
      <ParallaxImage className="absolute inset-0" speed={10} scale={1.1}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </ParallaxImage>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15" />
      <div className="absolute inset-0 p-8 flex flex-col justify-start">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70 mb-4">
          {label}
        </span>
        <h3 className="text-2xl md:text-[1.65rem] font-semibold text-white leading-snug tracking-tight max-w-[95%]">
          {title}
        </h3>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          Learn more
          <span className="inline-flex w-7 h-7 items-center justify-center bg-[#4f46e5] text-white text-xs">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function SplitCard({ label, title, image, href = "#" }) {
  return (
    <Link href={href} className="group flex flex-col h-[420px] bg-white overflow-hidden">
      <div className="flex-1 p-8 flex flex-col bg-white">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1e3a5f] mb-4">
          {label}
        </span>
        <h3 className="text-2xl font-semibold text-black leading-snug tracking-tight group-hover:text-[#1e40af] transition-colors">
          {title}
        </h3>
      </div>
      <ParallaxImage className="relative h-[52%]" speed={10} scale={1.1}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </ParallaxImage>
    </Link>
  );
}

export function DarkServiceCard({ title, description, image, href }) {
  return (
    <Link href={href} className="group relative block h-[380px] overflow-hidden">
      <ParallaxImage className="absolute inset-0" speed={12} scale={1.12}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </ParallaxImage>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
      <div className="absolute inset-0 p-7 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
          Explore
          <span className="w-7 h-7 bg-[#4f46e5] flex items-center justify-center text-xs">→</span>
        </span>
      </div>
    </Link>
  );
}

export function AccentureLink({ href, children, onClick }) {
  const inner = (
    <>
      {children}
      <span className="inline-flex w-8 h-8 items-center justify-center bg-[#4f46e5] text-white group-hover:bg-[#4338ca] transition-colors">
        →
      </span>
    </>
  );

  const cls = "group inline-flex items-center gap-3 text-sm font-semibold text-white";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

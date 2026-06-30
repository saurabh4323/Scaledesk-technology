"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage, ParallaxContent } from "../Parallax";

export default function FinalCTA() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        <ParallaxImage
          className="relative hidden lg:block min-h-[520px]"
          speed={16}
          scale={1.15}
        >
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
            alt="Engineering collaboration"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 z-10 pointer-events-none" />
        </ParallaxImage>

        <ParallaxContent
          className="px-6 xl:px-16 py-20 lg:py-28 flex flex-col justify-center"
          yRange={[32, -32]}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 mb-6 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-[1.08]">
            Ready to Engineer Your Next Product?
          </h2>
          <p className="text-[17px] text-white/65 leading-relaxed font-light mb-10 max-w-xl">
            Whether you&apos;re validating an MVP, modernizing enterprise software, or building the
            next generation of AI-powered products, our engineering team is ready to help.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1e40af] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Talk to Our Engineers
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
              Explore Our Work
              <span className="inline-flex w-8 h-8 items-center justify-center border border-white/25">→</span>
            </Link>
          </div>
        </ParallaxContent>
      </div>
    </section>
  );
}

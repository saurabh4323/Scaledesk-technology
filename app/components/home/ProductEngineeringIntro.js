"use client";

import Image from "next/image";
import { AccentureLink } from "./PremiumCard";
import { ParallaxImage, ParallaxContent } from "../Parallax";

export default function ProductEngineeringIntro() {
  return (
    <section id="scene-1" className="bg-black text-white">
      <div className="grid lg:grid-cols-2 min-h-[640px]">
        <ParallaxImage
          className="relative min-h-[400px] lg:min-h-full order-2 lg:order-1"
          speed={16}
          scale={1.15}
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Engineering team collaboration"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </ParallaxImage>

        <ParallaxContent
          className="flex flex-col justify-center px-6 xl:px-16 py-20 lg:py-28 order-1 lg:order-2"
          yRange={[36, -36]}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 mb-6 block">
            Perspective
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight mb-8">
            We Engineer Products—Not Just IT Deliverables.
          </h2>
          <div className="space-y-6 text-[17px] text-white/60 leading-relaxed font-light">
            <p className="text-xl text-white font-normal">
              Most software vendors deliver projects.
              <br />
              We engineer products.
            </p>
            <p>
              At ScaleDesk Technology, we become an extension of your product and engineering
              team—helping you transform ideas into scalable digital products through strategy,
              architecture, engineering, AI, cloud infrastructure, and continuous product evolution.
            </p>
            <p>
              Our focus isn&apos;t simply shipping software. It&apos;s engineering products that users
              love, businesses depend on, and teams can confidently scale.
            </p>
          </div>
          <div className="mt-10">
            <AccentureLink href="/about">About our approach</AccentureLink>
          </div>
        </ParallaxContent>
      </div>
    </section>
  );
}

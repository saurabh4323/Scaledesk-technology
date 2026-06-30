"use client";

import Image from "next/image";
import { ParallaxImage, ParallaxContent } from "../Parallax";

const PRINCIPLES = [
  {
    title: "Product-First Thinking",
    description: "Technology should solve business problems—not create technical debt.",
  },
  {
    title: "Built for Scale",
    description: "Every system is engineered with future growth in mind.",
  },
  {
    title: "AI-Driven Innovation",
    description: "Intelligent automation is embedded where it creates real value.",
  },
  {
    title: "Engineering Excellence",
    description: "Clean architecture, modern technologies, and uncompromising quality.",
  },
];

export default function WhyScaleDesk() {
  return (
    <section className="bg-black text-white">
      <div className="grid lg:grid-cols-2">
        <ParallaxImage
          className="relative min-h-[480px] lg:min-h-[720px]"
          speed={18}
          scale={1.16}
        >
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
            alt="Engineering team at work"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </ParallaxImage>

        <ParallaxContent
          className="px-6 xl:px-16 py-20 lg:py-28 flex flex-col justify-center"
          yRange={[40, -40]}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50 mb-6 block">
            Why ScaleDesk
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-[1.08]">
            Why Businesses Choose ScaleDesk
          </h2>

          <div className="space-y-6 text-[17px] text-white/70 leading-relaxed font-light mb-14">
            <p>
              We don&apos;t measure success by the amount of code we write. We measure success by
              the business outcomes our engineering creates.
            </p>
            <p>
              Every engagement is guided by scalability, performance, security, maintainability,
              and long-term product thinking.
            </p>
            <p>
              Whether building an MVP or engineering an enterprise platform, we deliver technology
              designed to grow with your business.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/50 mb-6">
              Engineering Principles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {PRINCIPLES.map((item) => (
                <div
                  key={item.title}
                  className="p-5 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                >
                  <h4 className="text-[15px] font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxContent>
      </div>
    </section>
  );
}

"use client";

import { DarkServiceCard } from "./PremiumCard";
import { ParallaxContent } from "../Parallax";

const SERVICES = [
  {
    title: "Product Engineering",
    description: "Transforming ideas into scalable digital products.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    href: "/services/software-engineering",
  },
  {
    title: "Enterprise Software",
    description: "Mission-critical applications built for performance, security, and long-term growth.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    href: "/services/software-engineering",
  },
  {
    title: "AI Solutions",
    description: "Intelligent automation, AI agents, and workflow optimization.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    href: "/services/ai-automation",
  },
  {
    title: "Custom Software",
    description: "Tailored platforms designed around your business.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    href: "/services/software-engineering",
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud-native infrastructure built for reliability and scale.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
    href: "/services/cloud-infrastructure",
  },
  {
    title: "Technology Consulting",
    description: "Helping organizations make better technology decisions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    href: "/contact",
  },
];

export default function EngineeringCapabilities() {
  return (
    <section id="services" className="bg-[#3b3187] py-20 lg:py-28 border-t border-[#4f4599]">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
        <ParallaxContent className="max-w-2xl mb-14" yRange={[30, -30]}>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/55 mb-4 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
            Our Engineering Capabilities
          </h2>
          <p className="text-[17px] text-white/70 leading-relaxed font-light">
            End-to-end product engineering—from strategy and architecture to AI, cloud, and
            continuous evolution.
          </p>
        </ParallaxContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {SERVICES.map((service) => (
            <DarkServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

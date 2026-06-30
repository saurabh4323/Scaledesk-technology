"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage, ParallaxContent } from "../Parallax";

const PRODUCTS = [
  {
    name: "LeadForGrow™",
    description:
      "An AI-powered CRM and business automation platform that helps businesses capture, engage, and convert customers faster.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    href: "/products/leadforgrow-crm",
    color: "bg-[#1e3a8a]",
  },
  {
    name: "ScaleDesk HRM™",
    description:
      "A modern workforce management platform designed to simplify HR operations and employee experiences.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    href: "/careers",
    color: "bg-[#312e81]",
  },
];

export default function PlatformsSection() {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
        <ParallaxContent className="mb-14" yRange={[24, -24]}>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45 mb-4 block">
            Products
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Platforms Built by ScaleDesk
          </h2>
        </ParallaxContent>

        <div className="grid lg:grid-cols-2 gap-1">
          {PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group grid md:grid-cols-2 min-h-[300px] overflow-hidden"
            >
              <div className={`${product.color} p-10 flex flex-col justify-between`}>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50 mb-4 block">
                    Platform
                  </span>
                  <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">
                    {product.name}
                  </h3>
                  <p className="text-[15px] text-white/70 leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white">
                  View platform
                  <span className="w-8 h-8 bg-[#4f46e5] flex items-center justify-center group-hover:bg-[#4338ca] transition-colors">
                    →
                  </span>
                </span>
              </div>
              <ParallaxImage className="relative min-h-[260px]" speed={14} scale={1.14}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </ParallaxImage>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

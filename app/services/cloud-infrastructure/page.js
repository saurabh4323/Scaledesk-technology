"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/Footer";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CLOUD_CAPABILITIES = [
  {
    title: "High Availability",
    desc: "Multi-region, multi-zone architectures designed for 99.999% uptime and automatic failover for mission-critical applications.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12l4-4m-4 4l4 4m5 0l4-4m-4 4l-4-4" /></svg>
    )
  },
  {
    title: "Infrastructure as Code",
    desc: "Fully automated provisioning using Terraform and Pulumi to ensure environment parity and rapid, repeatable deployments.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    )
  },
  {
    title: "Serverless & Edge",
    desc: "Harnessing the power of Lambda and Cloudflare Workers to reduce operational overhead and move logic closer to your users.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "Security & Hardening",
    desc: "Zero-trust network architectures with integrated IAM, encryption-at-rest, and real-time threat detection and mitigation.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  }
];

const CLOUD_TECH_STACK = [
  { name: "AWS", role: "Primary Cloud Provider", group: "Provider", color: "orange" },
  { name: "Terraform", role: "Infrastructure Provisioning", group: "Automation", color: "blue" },
  { name: "Kubernetes", role: "Container Orchestration", group: "Compute", color: "blue" },
  { name: "Google Cloud", role: "Multi-cloud Strategy", group: "Provider", color: "blue" },
  { name: "Docker", role: "Containerization Engine", group: "Compute", color: "blue" },
  { name: "Cloudflare", role: "Edge Computing & DNS", group: "Network", color: "orange" },
  { name: "Datadog", role: "Full-stack Observability", group: "Operations", color: "purple" },
  { name: "GitHub Actions", role: "Automated CI/CD", group: "Automation", color: "white" }
];

export default function CloudInfrastructurePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
      });

      // Card Staggers
      gsap.from(".cloud-card", {
        scrollTrigger: {
          trigger: ".cloud-grid",
          start: "top bottom-=100px",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all"
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Cloud Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-orange-600/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <h5 className="hero-reveal text-[11px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-6">Services / Cloud Scale</h5>
              <h1 className="hero-reveal text-6xl md:text-8xl font-semibold tracking-tight leading-[1.05] mb-8">
                Elastic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 font-bold italic">Foundations.</span>
              </h1>
              <p className="hero-reveal text-xl text-zinc-400 font-light leading-relaxed max-w-xl mb-12">
                We design and manage global-scale cloud environments that are secure, cost-optimized, and fully automated. Built for the modern enterprise that never sleeps.
              </p>
              <div className="hero-reveal flex items-center gap-6">
                <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all">Audit My Cloud</button>
                <div className="flex items-center gap-3 text-sm text-zinc-500 font-medium cursor-default">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  SOC2 compliant engineering
                </div>
              </div>
            </div>

            <div className="hero-reveal relative">
               <div className="relative bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-3 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-orange-500/10 opacity-30" />
                  <Image 
                    src="/enterprise_focus_visual_1776455668915.png" 
                    alt="Cloud Infrastructure" 
                    width={800} 
                    height={800} 
                    className="rounded-[2.8rem] transition-all duration-1000 shadow-2xl"
                  />
                  {/* Decorative Mesh Grid */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id="cloudGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#cloudGridPattern)" />
                    </svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6 bg-zinc-900/10 relative z-10 border-t border-white/5">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Infrasctructure Pillars</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500" />
          </div>

          <div className="cloud-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLOUD_CAPABILITIES.map((item, idx) => (
              <div key={idx} className="cloud-card group relative bg-white/[0.03] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Tech Engine (Cloud Focused) */}
      <section className="py-32 relative bg-[#050505] overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="infraPattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 100 50 M 50 0 L 50 100" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#infraPattern)" />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <h5 className="text-[11px] uppercase tracking-[0.4em] text-blue-500 font-bold mb-4">Platform Stack</h5>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">The Global <br />Architecture</h2>
            <p className="text-zinc-500 text-lg font-light tracking-wide">Enterprise tools for distributed systems orchestration</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {CLOUD_TECH_STACK.map((tech, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 blur-2xl rounded-3xl transition-all duration-500" />
                <div className="relative h-full bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/10 rounded-bl-[2rem] translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold group-hover:text-blue-400/60 transition-colors">{tech.group}</span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors">{tech.name}</h3>
                  </div>

                  <div className="mt-8">
                    <div className="h-[2px] w-8 bg-blue-500/30 mb-4 group-hover:w-full transition-all duration-500" />
                    <p className="text-xs text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors leading-relaxed">
                      {tech.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
                <Image 
                  src="/rapid_delivery_visual_1776455698790.png" 
                  alt="Cloud Delivery" 
                  width={800} 
                  height={800} 
                  className="rounded-[3rem] transition-all duration-700 shadow-2xl"
                />
            </div>
            <div className="order-1 lg:order-2">
              <h5 className="text-[11px] uppercase tracking-[0.3em] text-blue-500 font-bold mb-6">Our Operations</h5>
              <h2 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight">Automated Control <br />Planes</h2>
              <p className="text-xl text-zinc-400 font-light mb-10">
                We believe that infrastructure should be invisible. Our control planes manage complexity silently, so your developers can focus on features.
              </p>
              
              <div className="grid gap-6">
                {[
                  { t: "Immutable Deployments", d: "Zero-configuration updates with automated canary rollouts." },
                  { t: "Cost Optimization", d: "AI-driven rightsizing to eliminate cloud waste and over-provisioning." },
                  { t: "Unified Logging", d: "Centralized observability across hybrid and multi-cloud regions." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group">
                    <h4 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">{item.t}</h4>
                    <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud CTA Section */}
      <section className="py-40 relative px-6 text-center">
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-semibold mb-10 leading-tight">Scale without <br />the overhead.</h2>
          <p className="text-xl text-zinc-500 mb-12">Upgrade your digital foundation to a world-class cloud infrastructure.</p>
          <button className="px-12 py-6 bg-blue-600 text-white font-bold rounded-2xl hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1">Migrate My Infrastructure</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

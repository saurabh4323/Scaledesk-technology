"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

function SoftwareEngineeringDiagram() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
       <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Client -> Load Balancer -> Microservices */}
          <rect x="50" y="120" width="40" height="60" rx="4" fill="#111" stroke="#3b82f6" strokeWidth="2" />
          <text x="70" y="155" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Web</text>

          <path d="M 90 150 L 150 150" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="150" cy="150" r="4" fill="#3b82f6" className="animate-pulse" />

          <rect x="170" y="110" width="60" height="80" rx="8" fill="#111" stroke="#6366f1" strokeWidth="2" />
          <text x="200" y="145" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">API</text>
          <text x="200" y="160" fill="#666" fontSize="8" textAnchor="middle" className="mono-text">Gateway</text>

          <path d="M 230 150 L 290 100" stroke="#333" strokeWidth="2" />
          <path d="M 230 150 L 290 150" stroke="#333" strokeWidth="2" />
          <path d="M 230 150 L 290 200" stroke="#333" strokeWidth="2" />

          <rect x="290" y="80" width="60" height="40" rx="4" fill="#111" stroke="#22c55e" strokeWidth="2" />
          <text x="320" y="105" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Auth</text>

          <rect x="290" y="130" width="60" height="40" rx="4" fill="#111" stroke="#22c55e" strokeWidth="2" />
          <text x="320" y="155" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Core</text>

          <rect x="290" y="180" width="60" height="40" rx="4" fill="#111" stroke="#22c55e" strokeWidth="2" />
          <text x="320" y="205" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Billing</text>
       </svg>
    </div>
  );
}

function CloudInfrastructureDiagram() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
       <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Kubernetes Cluster */}
          <rect x="40" y="40" width="320" height="220" rx="12" fill="transparent" stroke="#3b82f6" strokeWidth="1" strokeDasharray="6 6" />
          <text x="200" y="60" fill="#3b82f6" fontSize="12" textAnchor="middle" className="mono-text font-bold tracking-widest">KUBERNETES CLUSTER (us-east-1)</text>

          <rect x="60" y="80" width="120" height="150" rx="6" fill="#111" stroke="#444" strokeWidth="1" />
          <text x="120" y="100" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Node Pool A</text>
          <rect x="75" y="115" width="90" height="30" rx="4" fill="#222" stroke="#22c55e" strokeWidth="1" />
          <rect x="75" y="155" width="90" height="30" rx="4" fill="#222" stroke="#22c55e" strokeWidth="1" />
          <rect x="75" y="195" width="90" height="30" rx="4" fill="#222" stroke="#22c55e" strokeWidth="1" />

          <rect x="220" y="80" width="120" height="150" rx="6" fill="#111" stroke="#444" strokeWidth="1" />
          <text x="280" y="100" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Node Pool B</text>
          <rect x="235" y="115" width="90" height="30" rx="4" fill="#222" stroke="#22c55e" strokeWidth="1" />
          <rect x="235" y="155" width="90" height="30" rx="4" fill="#222" stroke="#22c55e" strokeWidth="1" />
          <rect x="235" y="195" width="90" height="30" rx="4" fill="#222" stroke="#fbbf24" strokeWidth="1" />
          <text x="280" y="215" fill="#fbbf24" fontSize="8" textAnchor="middle" className="mono-text animate-pulse">SCALING...</text>
       </svg>
    </div>
  );
}

function DataPipelinesDiagram() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
       <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Events -> Kafka -> Spark -> Snowflake */}
          <circle cx="50" cy="150" r="20" fill="#111" stroke="#3b82f6" strokeWidth="2" />
          <text x="50" y="153" fill="#fff" fontSize="8" textAnchor="middle" className="mono-text">Events</text>

          <path d="M 70 150 L 130 150" stroke="#333" strokeWidth="2" />
          <circle cx="100" cy="150" r="3" fill="#3b82f6" className="animate-ping" />

          <rect x="130" y="110" width="60" height="80" rx="6" fill="#111" stroke="#a855f7" strokeWidth="2" />
          <text x="160" y="145" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Kafka</text>
          <text x="160" y="160" fill="#666" fontSize="8" textAnchor="middle" className="mono-text">Stream</text>

          <path d="M 190 150 L 250 150" stroke="#333" strokeWidth="2" />

          <rect x="250" y="120" width="50" height="60" rx="6" fill="#111" stroke="#f97316" strokeWidth="2" />
          <text x="275" y="145" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Spark</text>
          <text x="275" y="160" fill="#666" fontSize="8" textAnchor="middle" className="mono-text">Process</text>

          <path d="M 300 150 L 340 150" stroke="#333" strokeWidth="2" />

          <path d="M 340 130 Q 360 120 380 130 L 380 170 Q 360 180 340 170 Z" fill="#111" stroke="#06b6d4" strokeWidth="2" />
          <text x="360" y="153" fill="#fff" fontSize="8" textAnchor="middle" className="mono-text">DW</text>
       </svg>
    </div>
  );
}

function AIDiagram() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
       <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* User -> LLM Router -> Vector DB / Models */}
          <rect x="30" y="130" width="50" height="40" rx="4" fill="#111" stroke="#64748b" strokeWidth="2" />
          <text x="55" y="153" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Input</text>

          <path d="M 80 150 L 140 150" stroke="#333" strokeWidth="2" />

          <rect x="140" y="110" width="80" height="80" rx="40" fill="#111" stroke="#ec4899" strokeWidth="2" />
          <text x="180" y="145" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Agent</text>
          <text x="180" y="160" fill="#ec4899" fontSize="8" textAnchor="middle" className="mono-text font-bold">ROUTER</text>

          <path d="M 220 130 L 270 90" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 220 150 L 280 150" stroke="#333" strokeWidth="2" />
          <path d="M 220 170 L 270 210" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />

          <rect x="270" y="60" width="80" height="50" rx="6" fill="#111" stroke="#14b8a6" strokeWidth="2" />
          <text x="310" y="85" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Vector DB</text>
          <text x="310" y="100" fill="#666" fontSize="8" textAnchor="middle" className="mono-text">Context</text>

          <rect x="280" y="130" width="80" height="40" rx="6" fill="#111" stroke="#f43f5e" strokeWidth="2" />
          <text x="320" y="155" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">GPT-4</text>

          <rect x="270" y="190" width="80" height="50" rx="6" fill="#111" stroke="#eab308" strokeWidth="2" />
          <text x="310" y="215" fill="#fff" fontSize="10" textAnchor="middle" className="mono-text">Internal API</text>
          <text x="310" y="230" fill="#666" fontSize="8" textAnchor="middle" className="mono-text">Action</text>
       </svg>
    </div>
  );
}

const SERVICES = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    desc: "Build scalable, high-performance applications using modern frameworks and robust distributed architectures.",
    tags: ["React/Next.js", "Node.js", "Go", "Rust"],
    href: "/services/software-engineering",
    diagram: <SoftwareEngineeringDiagram />
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    desc: "Deploy highly available, fault-tolerant infrastructure on AWS or GCP with infrastructure-as-code.",
    tags: ["Kubernetes", "Terraform", "Docker", "AWS"],
    href: "/services/cloud-infrastructure",
    diagram: <CloudInfrastructureDiagram />
  },
  {
    id: "data-pipelines",
    title: "Data Pipelines",
    desc: "Process billions of events in real-time with reliable, scalable data streaming and warehousing solutions.",
    tags: ["Kafka", "Spark", "Snowflake", "dbt"],
    href: "/services/data-pipelines",
    diagram: <DataPipelinesDiagram />
  },
  {
    id: "ai-automation",
    title: "AI Orchestration",
    desc: "Integrate large language models and autonomous agents securely into your enterprise workflows.",
    tags: ["OpenAI", "LangChain", "Vector DBs", "PyTorch"],
    href: "/services/ai-automation",
    diagram: <AIDiagram />
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeTab);

  return (
    <section id="services" className="relative w-full py-32 overflow-hidden bg-[#030303] border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
         <div className="w-[1000px] h-[500px] bg-blue-600/5 blur-[120px] rounded-[100%] mt-32" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Enterprise Capabilities
          </h2>
          <p className="text-lg text-[#888888] font-light max-w-2xl">
            From architecture to deployment, we engineer mission-critical systems that scale securely.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
           {/* Left: Service List */}
           <div className="w-full lg:w-5/12 flex flex-col gap-2">
              {SERVICES.map((service) => {
                 const isActive = activeTab === service.id;
                 return (
                    <div 
                       key={service.id}
                       onClick={() => setActiveTab(service.id)}
                       className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${isActive ? 'bg-white/[0.03] border-white/10 shadow-lg' : 'border-transparent hover:bg-white/[0.01]'}`}
                    >
                       <h3 className={`text-xl font-semibold mb-3 tracking-tight ${isActive ? 'text-white' : 'text-[#888888]'}`}>
                          {service.title}
                       </h3>
                       <p className={`text-[15px] font-light leading-relaxed mb-6 ${isActive ? 'text-[#a1a1aa]' : 'text-[#666666]'}`}>
                          {service.desc}
                       </p>
                       <div className={`flex flex-wrap gap-2 mb-6 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                          {service.tags.map(tag => (
                             <span key={tag} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#a1a1aa] text-[10px] mono-text uppercase tracking-wider">
                                {tag}
                             </span>
                          ))}
                       </div>
                       {isActive && (
                          <Link href={service.href} className="inline-flex items-center gap-2 text-blue-400 text-[13px] font-medium hover:text-blue-300 transition-colors">
                             Explore Architecture <span className="text-[16px]">-&gt;</span>
                          </Link>
                       )}
                    </div>
                 )
              })}
           </div>

           {/* Right: Architecture Diagram Panel */}
           <div className="w-full lg:w-7/12 relative">
              <div className="sticky top-32 w-full aspect-square md:aspect-[4/3] glass-panel rounded-3xl overflow-hidden flex flex-col">
                 <div className="w-full h-12 bg-white/[0.02] border-b border-white/5 flex items-center px-6 gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-4 text-[#666] text-[10px] mono-text tracking-widest uppercase">System_Architecture.viz</div>
                 </div>
                 
                 <div className="flex-1 bg-[#050505] relative w-full h-full">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-grid-white opacity-20" />
                    
                    {/* Key corresponding diagram */}
                    <div key={activeTab} className="absolute inset-0 animate-in fade-in zoom-in-95 duration-500 ease-out">
                       {activeService.diagram}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

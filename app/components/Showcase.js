"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleNetwork() {
  const ref = useRef();
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const numPoints = 8000;
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * 2.2; // radius 2.2
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color="#3b82f6" 
          size={0.007} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Showcase() {
  return (
    <section className="relative w-full h-[900px] bg-[#030303] overflow-hidden flex items-center justify-center border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3.5] }}>
          <ambientLight intensity={0.5} />
          <ParticleNetwork />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[1440px] w-full px-6 flex flex-col items-center text-center pointer-events-none">
         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mono-text">Enterprise Orchestration</span>
         </div>
         
         <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Global Infrastructure.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Locally Orchestrated.</span>
         </h2>
         <p className="text-[#a1a1aa] font-light max-w-2xl text-[16px] md:text-[18px] leading-relaxed mb-16">
            We deploy AI orchestration and complex pipelines across multi-cloud environments.
            Our systems process billions of events with sub-millisecond latency.
         </p>
         
         <div className="flex flex-wrap gap-6 justify-center pointer-events-auto">
            <div className="flex flex-col items-center p-8 glass-panel rounded-2xl min-w-[200px] border-t border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="text-4xl font-bold text-white mb-2 tracking-tighter">99.999%</div>
               <div className="text-[#666] text-[11px] uppercase tracking-widest font-bold mono-text">Uptime SLA</div>
            </div>
            <div className="flex flex-col items-center p-8 glass-panel rounded-2xl min-w-[200px] border-t border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="text-4xl font-bold text-white mb-2 tracking-tighter">&lt;12ms</div>
               <div className="text-[#666] text-[11px] uppercase tracking-widest font-bold mono-text">Global Latency</div>
            </div>
            <div className="flex flex-col items-center p-8 glass-panel rounded-2xl min-w-[200px] border-t border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="text-4xl font-bold text-white mb-2 tracking-tighter">10B+</div>
               <div className="text-[#666] text-[11px] uppercase tracking-widest font-bold mono-text">Events/Day</div>
            </div>
         </div>
      </div>
      
      {/* Gradients */}
      <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#030303] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#030303] to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}

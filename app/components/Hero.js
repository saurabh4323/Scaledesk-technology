"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/* ─── data ─── */
const FEATURES = [
  "MVPs in weeks, not months",
  "Scalable, production-ready",
  "AI-powered automation",
];

export default function Hero() {
  /* laptop / scene refs */
  const sectionRef       = useRef(null);
  const laptopGroupRef   = useRef(null);
  const lidRef           = useRef(null);
  const screenGlowRef    = useRef(null);
  const logoCenterRef    = useRef(null);

  /* left-side element refs */
  const line1Ref  = useRef(null);
  const line2Ref  = useRef(null);
  const subRef    = useRef(null);
  const featsRef  = useRef(null);
  const btnsRef   = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      /* ── mobile: skip intro ── */
      if (isMobile) {
        gsap.set(
          [line1Ref.current, line2Ref.current,
           subRef.current, featsRef.current, btnsRef.current],
          { x: 0, opacity: 1 }
        );
        return;
      }

      /* ══ INITIAL STATES ══ */
      gsap.set(laptopGroupRef.current, {
        y: "100vh", scale: 0.65, rotateX: 60, opacity: 0,
      });
      // Lid closed flat onto keyboard deck!
      gsap.set(lidRef.current, { rotateX: 90 }); 
      gsap.set(screenGlowRef.current, { opacity: 0 });
      gsap.set(".logo-sub", { opacity: 0, y: 15 });
      gsap.set(".dashboard-ui", { opacity: 0, y: 20 });
      
      // Ensure logo is perfectly centered initially
      gsap.set(logoCenterRef.current, { top: "50%", xPercent: -50, yPercent: -50, left: "50%", scale: 1 });

      gsap.set(
        [line1Ref.current, line2Ref.current,
         subRef.current, featsRef.current, btnsRef.current],
        { x: -60, opacity: 0 }
      );

      const tl = gsap.timeline();

      /* ══ PHASE 1 — Laptop flies in ══ */
      tl.to(laptopGroupRef.current, {
        y: 0, scale: 1.25, rotateX: 0, opacity: 1, // Face head on perfectly flat
        duration: 1.2,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      })

      /* ══ PHASE 2 — Lid opens & screen glows ══ */
      .to(lidRef.current, {
        rotateX: -15, // open slightly beyond vertical
        duration: 1.6,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      }, "+=0.2")
      .to(screenGlowRef.current, {
        opacity: 0.16, duration: 1.3, ease: "power2.out",
      }, "<")

      /* ══ PHASE 3 — Type Logo & Fade Subtitle ══ */
      .to(".logo-char", {
        opacity: 1, duration: 0.01, stagger: 0.05
      })
      .to(".logo-sub", {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out"
      }, "+=0.2")

      /* Pause */
      .to({}, { duration: 0.7 })

      /* ══ PHASE 4 — Laptop slides right & Logo Moves UP ══ */
      .to(laptopGroupRef.current, {
        x: "24vw", scale: 0.98, rotateY: -14, rotateX: 0,
        duration: 1.2,
        ease: "power3.inOut",
      })
      .to(logoCenterRef.current, {
        top: "46px", scale: 0.65, // moves the whole branding block up
        duration: 1.2,
        ease: "power3.inOut"
      }, "<")

      /* ══ PHASE 5 — Reveal Left Content AND Laptop Dashboard ══ */
      .to(".dashboard-ui", { 
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out" 
      }, "-=0.6")
      .to(
        [line1Ref.current, line2Ref.current,
         subRef.current, featsRef.current, btnsRef.current],
        {
          x: 0, opacity: 1,
          duration: 0.7, stagger: 0.13,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "<" // run concurrently with dashboard reveal
      );

      /* ══ PHASE 6 — Idle loops ══ */
      gsap.to(laptopGroupRef.current, {
        y: -15, duration: 2.2, repeat: -1, yoyo: true,
        ease: "sine.inOut", delay: 5.8,
      });
      gsap.to(screenGlowRef.current, {
        opacity: 0.22, duration: 1.5, repeat: -1, yoyo: true,
        ease: "sine.inOut", delay: 5.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const word1 = "ScaleDesk";
  const word2 = "Technology";

  return (
    <>
      <style>{`
        @keyframes blink       { 0%,100%{opacity:1} 50%{opacity:0.15} }
        @keyframes ambientPulse{
          from{opacity:.4;transform:scale(1)}
          to  {opacity:.8;transform:scale(1.15)}
        }
        
        /* ─── Buttons & UI elements ─── */
        .btn-primary {
          background: linear-gradient(135deg, #2563EB 0%, #3B82F6 100%);
          color: #FFFFFF; font-size: 14px; font-weight: 600;
          padding: 13px 28px; border: none; border-radius: 6px;
          cursor: pointer; font-family: inherit; letter-spacing: 0.01em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(37,99,235,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.45), inset 0 1px 0 rgba(255,255,255,0.25);
        }

        .btn-ghost {
          background:none; border:none; color:#e2e8f0; font-size:14px;
          font-weight:500; cursor:pointer; padding:0; font-family:inherit;
          display:inline-flex; align-items:center; gap:6px; position:relative;
          transition: color 0.3s ease;
        }
        .btn-ghost::after {
          content:''; position:absolute; bottom:-3px; left:0; width:0; height:1.5px; 
          background:linear-gradient(90deg, #2563EB, #60A5FA); transition:width .3s ease;
        }
        .btn-ghost:hover{ color:#60A5FA; }
        .btn-ghost:hover::after{ width:100%; }

        .glass-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px; padding: 8px 16px;
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }
        .glass-tag:hover {
          background: rgba(255,255,255,0.04);
          transform: translateY(-1px);
        }

        /* ─── 3-D laptop Main Engine ─── */
        .laptop-group { transform-style: preserve-3d; will-change: transform; pointer-events: none; }
        .laptop-body { position: relative; width: 490px; height: 310px; transform-style: preserve-3d; }

        /* ── LID (Screen) ── */
        .laptop-lid {
          position: absolute; bottom: 0; left: 0; width: 490px; height: 308px;
          transform-origin: center bottom; transform-style: preserve-3d; will-change: transform;
        }
        .lid-shell {
          width:100%; height:100%;
          background: linear-gradient(135deg, #3d3e42 0%, #2b2c30 46%, #1a1b1d 100%);
          border-radius: 12px 12px 3px 3px; border: 1.5px solid #4a4b4e; border-bottom: 2px solid #111;
          position: relative; overflow: hidden;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.2), inset 0 40px 80px rgba(255,255,255,0.03), 0 -5px 24px rgba(0,0,0,0.6);
        }
        .lid-shell::after {
          content:''; position:absolute; top:8px; left:50%; transform:translateX(-50%);
          width:6px; height:6px; border-radius:50%; background:#050505; border:1px solid #1e1e1e;
        }
        .screen-bezel {
          position:absolute; top:20px; left:20px; right:20px; bottom:20px;
          border-radius:4px; background:#040404; overflow:hidden; border:1px solid #141414;
        }
        .screen-glow {
          position:absolute; inset:0;
          background:radial-gradient(ellipse at 50% 80%,rgba(59,130,246,.25) 0%,rgba(59,130,246,.08) 38%,transparent 68%);
          pointer-events:none; z-index:1; opacity:0; will-change:opacity;
        }
        .screen-content {
          position:absolute; inset:0; z-index:2;
          display:flex; flex-direction:column;
        }

        /* ── BASE (Simple Lip) ── */
        .laptop-base {
          position: relative; width: 490px; height: 30px; 
          background: linear-gradient(180deg, #262626 0%, #1c1c1c 55%, #161616 100%);
          border-radius: 3px 3px 10px 10px; border: 1.5px solid #2c2c2c; border-top: none;
          box-shadow: 0 40px 80px rgba(0,0,0,0.65), 0 12px 32px rgba(0,0,0,0.75);
        }
        .laptop-base::before {
          content:''; position:absolute; bottom:5px; left:50%; transform:translateX(-50%);
          width:84px; height:13px; background:#191919; border-radius:3px; border:1px solid #222;
        }
        .laptop-base::after {
          content:''; position:absolute; bottom:0; left:30px; right:30px; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent);
        }

        /* ── Ambient Backgrounds ── */
        .scene-grid {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size:48px 48px;
          mask-image:radial-gradient(ellipse 90% 90% at 50% 50%, black 10%, transparent 100%);
          -webkit-mask-image:radial-gradient(ellipse 90% 90% at 50% 50%, black 10%, transparent 100%);
        }
        .scene-ambient-left {
          position:absolute; width:1000px; height:1000px; border-radius:50%; z-index:0;
          background:radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 60%);
          left:-300px; top:50%; transform:translateY(-50%); pointer-events:none;
          animation:ambientPulse 10s ease-in-out infinite alternate;
        }
        .scene-ambient-right {
          position:absolute; width:800px; height:800px; border-radius:50%; z-index:0;
          background:radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%);
          right:-200px; top:50%; transform:translateY(-50%); pointer-events:none;
          animation:ambientPulse 8s ease-in-out infinite alternate-reverse;
        }

        @media (max-width:767px) {
          .laptop-scene { display:none!important; }
          .hero-left {
            position:relative!important; left:unset!important; top:unset!important;
            transform:none!important; opacity:1!important; max-width:100%!important;
            width:100%!important; padding:60px 24px 64px!important;
          }
          .hero-left > * { opacity:1!important; transform:none!important; }
          .hero-section  { min-height:auto!important; height: auto!important; }
        }
      `}</style>

      {/* ══════════ SECTION ══════════ */}
      <section
        ref={sectionRef}
        className="hero-section"
        style={{
          width:"100%", height:"calc(100vh - 84px)", minHeight:"600px",
          backgroundColor:"#0a0a0a", // deep black
          position:"relative", overflow:"hidden",
          display:"flex", alignItems:"center",
        }}
      >
        {/* Full-width depth grid & glowing orbs */}
        <div className="scene-grid"/>
        <div className="scene-ambient-left"/>
        <div className="scene-ambient-right"/>

        {/* ════ LEFT — hero text (z:5) ════ */}
        <div
          className="hero-left"
          style={{
            position:"absolute", left:"6vw", top:"48%",
            transform:"translateY(-50%)", width:"55%", maxWidth:"800px", zIndex:5,
          }}
        >
          <div ref={line1Ref} style={{ fontSize:"40px", fontWeight:500, color:"#ddd", lineHeight:1.1, letterSpacing:"-0.01em", margin:"0 0 8px" }}>
            Stop Managing Tech.
          </div>
          <div ref={line2Ref} style={{ fontSize:"56px", fontWeight:600, lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:"28px" }}>
            <span style={{color:"#fff"}}>Start </span>
            <span style={{
              background: "linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              textShadow: "0 4px 24px rgba(59,130,246,0.35)", paddingRight: "4px"
            }}>Growing</span>
            <span style={{color:"#fff"}}> Your Business.</span>
          </div>
          <p ref={subRef} style={{ fontSize:"16px", color:"#A1A1AA", lineHeight:1.8, maxWidth:"620px", fontWeight:300, margin:"0 0 36px" }}>
            ScaleDesk operates as your dedicated engineering partner—allowing you to build, deploy, and scale enterprise products without the overhead of hiring an in-house team. We seamlessly integrate world-class software development, AI automation, and robust scalable infrastructure directly into your operational workflow. Shift your focus back to vision and strategy, while we engineer the foundation for your growth.
          </p>
          <div ref={featsRef} style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"36px" }}>
            {FEATURES.map(f => (
              <div key={f} className="glass-tag">
                <svg width="12" height="12" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize:"13px", color:"#e2e8f0", fontWeight:400 }}>{f}</span>
              </div>
            ))}
          </div>
          <div ref={btnsRef} style={{ display:"flex", alignItems:"center", gap:"24px" }}>
            <button className="btn-primary">Book a Free Consultation</button>
            <button className="btn-ghost" style={{ paddingLeft: "8px" }}>View Our Work <span style={{fontSize:"16px", fontWeight:400}}>→</span></button>
          </div>
        </div>

        {/* ════ RIGHT — 3D laptop scene (z:10) ════ */}
        <div className="laptop-scene" style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", perspective:"1600px", zIndex:10 }}>
          <div ref={laptopGroupRef} className="laptop-group">
            <div className="laptop-body">

              {/* ── LID ── */}
              <div ref={lidRef} className="laptop-lid">
                <div className="lid-shell">
                  <div className="screen-bezel">
                    <div ref={screenGlowRef} className="screen-glow"/>

                    <div className="screen-content">
                      
                      {/* Logo (Centered initially, moves up seamlessly) */}
                      <div ref={logoCenterRef} style={{ position:"absolute", zIndex:10, width:"100%", textAlign:"center" }}>
                        <div style={{ display:"flex", gap:"8px", justifyContent:"center", fontSize:"28px", fontWeight:600, letterSpacing:"-0.01em" }}>
                          <div style={{ color: "#fff" }}>
                            {word1.split("").map((c, i) => <span key={`w1-${i}`} className="logo-char" style={{ opacity: 0 }}>{c}</span>)}
                          </div>
                          <div style={{ color: "#3B82F6" }}>
                            {word2.split("").map((c, i) => <span key={`w2-${i}`} className="logo-char" style={{ opacity: 0 }}>{c}</span>)}
                          </div>
                        </div>
                        <div className="logo-sub" style={{ fontSize: "11px", color: "#A1A1AA", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "8px" }}>
                          Your Extended Tech Partner
                        </div>
                      </div>
                      
                      {/* Dashboard UI (Reveals at Phase 5) */}
                      <div className="dashboard-ui" style={{ position: "absolute", top: "100px", left: 0, right: 0, padding: "0 24px" }}>
                        {/* Data Grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                           <div style={{ background: "rgba(30,30,30,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "10px", textAlign: "left", backdropFilter: "blur(4px)" }}>
                             <div style={{ fontSize: "8px", color: "#888", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Active Instances</div>
                             <div style={{ fontSize: "16px", color: "#fff", fontWeight: 600 }}>124 <span style={{fontSize:"9px", color:"#3B82F6", marginLeft: "4px", fontWeight: 500}}>+12%</span></div>
                           </div>
                           <div style={{ background: "rgba(30,30,30,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "10px", textAlign: "left", backdropFilter: "blur(4px)" }}>
                             <div style={{ fontSize: "8px", color: "#888", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Code Coverage</div>
                             <div style={{ fontSize: "16px", color: "#fff", fontWeight: 600 }}>96% <span style={{fontSize:"9px", color:"#3B82F6", marginLeft: "4px", fontWeight: 500}}>+2%</span></div>
                           </div>
                           <div style={{ background: "rgba(30,30,30,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "10px", textAlign: "left", backdropFilter: "blur(4px)" }}>
                             <div style={{ fontSize: "8px", color: "#888", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Uptime SLA</div>
                             <div style={{ fontSize: "16px", color: "#22c55e", fontWeight: 600 }}>99.99%</div>
                           </div>
                        </div>
                        
                        {/* Chart Area */}
                        <div style={{ background: "rgba(30,30,30,0.35)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "12px", height: "86px", textAlign: "left", backdropFilter: "blur(4px)", display: "flex", flexDirection: "column" }}>
                           <div style={{ fontSize: "8.5px", color: "#888", marginBottom: "auto", textTransform: "uppercase", letterSpacing: "0.05em" }}>Weekly Deployment Velocity</div>
                           <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "46px", padding: "0 2px" }}>
                              {[30, 45, 25, 60, 40, 75, 55, 90, 65, 80, 50, 95].map((val, i) => (
                                 <div key={i} style={{ flex: 1, backgroundColor: i > 8 ? "#3B82F6" : "#444", height: `${val}%`, borderRadius: "1.5px 1.5px 0 0", opacity: 0.9, transition: "height 1s ease", transitionDelay: `${i * 0.05}s` }} />
                              ))}
                           </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              
              {/* ── SIMPLE FRONT LIP BASE ── */}
              <div className="laptop-base" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

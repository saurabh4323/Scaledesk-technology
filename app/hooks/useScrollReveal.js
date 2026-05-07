"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches IntersectionObserver to a container ref.
 * Any child with class "reveal", "reveal-left", "reveal-right", or "reveal-scale"
 * will gain "is-visible" when it enters the viewport.
 *
 * Usage:
 *   const containerRef = useScrollReveal();
 *   <section ref={containerRef}>
 *     <div className="reveal stagger-1">...</div>
 *   </section>
 */
export function useScrollReveal(threshold = 0.15) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealClasses = ["reveal", "reveal-left", "reveal-right", "reveal-scale"];
    const targets = container.querySelectorAll(
      revealClasses.map((c) => `.${c}`).join(",")
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}

/**
 * useGlowFollow — makes an orb follow the mouse within an element
 * 
 * Usage:
 *   const ref = useGlowFollow();
 *   <div ref={ref} className="relative overflow-hidden">
 *     <div className="glow-follow" />  ← position absolute, pointer-events-none
 *   </div>
 */
export function useGlowFollow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const glow = el.querySelector(".glow-follow");
    if (!glow) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    };

    const handleLeave = () => {
      glow.style.opacity = "0";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return ref;
}

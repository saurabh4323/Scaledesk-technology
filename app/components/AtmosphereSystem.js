"use client";

import { useEffect, useRef } from "react";

export default function AtmosphereSystem() {
  const progressRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const root = document.documentElement;

    const updateScroll = () => {
      const scrollable = Math.max(1, root.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / scrollable));
      root.style.setProperty("--scroll-ratio", ratio.toFixed(4));
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    const updatePointer = (event) => {
      targetRef.current.x = (event.clientX / window.innerWidth) * 100;
      targetRef.current.y = (event.clientY / window.innerHeight) * 100;
      root.style.setProperty("--pointer-active", "1");
    };

    const dimPointer = () => {
      root.style.setProperty("--pointer-active", "0");
    };

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      root.style.setProperty("--pointer-x", `${current.x.toFixed(2)}%`);
      root.style.setProperty("--pointer-y", `${current.y.toFixed(2)}%`);

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.x}vw, ${current.y}vh, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    updateScroll();
    animate();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    window.addEventListener("mousemove", updatePointer, { passive: true });
    window.addEventListener("mouseleave", dimPointer);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("mousemove", updatePointer);
      window.removeEventListener("mouseleave", dimPointer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="atmosphere-field" aria-hidden="true">
        <div className="atmosphere-vignette" />
        <div className="atmosphere-depth atmosphere-depth-a" />
        <div className="atmosphere-depth atmosphere-depth-b" />
        <div className="atmosphere-grid" />
        <div className="atmosphere-cursor-glow" ref={glowRef} />
      </div>
    </>
  );
}

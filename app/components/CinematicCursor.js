"use client";

import { useEffect, useRef } from "react";

export default function CinematicCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const dotPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!cursor || !dot || !trail) return;

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const setInteractiveState = (active) => {
      if (active === isHoveringRef.current) return;
      isHoveringRef.current = active;
      if (!trail) return;
      trail.style.opacity = active ? "0.55" : "0";
      trail.style.transform = active
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0.72)";
    };

    const onEnterInteractive = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(2.2)`;
      cursor.style.borderColor = "rgba(99,102,241,0.6)";
      cursor.style.background = "rgba(99,102,241,0.06)";
      setInteractiveState(true);
    };

    const onLeaveInteractive = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      cursor.style.borderColor = "rgba(255,255,255,0.18)";
      cursor.style.background = "transparent";
      setInteractiveState(false);
    };

    const onPointerOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, select, textarea, .cursor-magnetic")) {
        onEnterInteractive();
      }
    };

    const onPointerOut = (e) => {
      if (
        e.target.closest("a, button, [role='button'], input, select, textarea, .cursor-magnetic") &&
        !e.relatedTarget?.closest?.("a, button, [role='button'], input, select, textarea, .cursor-magnetic")
      ) {
        onLeaveInteractive();
      }
    };

    const animate = () => {
      // Smooth cursor ring follows with lag
      dotPosRef.current.x += (posRef.current.x - dotPosRef.current.x) * 0.12;
      dotPosRef.current.y += (posRef.current.y - dotPosRef.current.y) * 0.12;

      if (cursor) {
        cursor.style.left = `${dotPosRef.current.x}px`;
        cursor.style.top = `${dotPosRef.current.y}px`;
      }

      // Dot snaps directly
      if (dot) {
        dot.style.left = `${posRef.current.x}px`;
        dot.style.top = `${posRef.current.y}px`;
      }

      if (trail) {
        trail.style.left = `${dotPosRef.current.x}px`;
        trail.style.top = `${dotPosRef.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring - follows with lag */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 99999,
          left: "-100px",
          top: "-100px",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, background 0.3s ease",
          mixBlendMode: "difference",
          willChange: "left, top",
        }}
      />
      {/* Center dot - snaps to cursor */}
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          width: "86px",
          height: "86px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.16), transparent 68%)",
          pointerEvents: "none",
          zIndex: 99998,
          left: "-100px",
          top: "-100px",
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.72)",
          transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          mixBlendMode: "screen",
          willChange: "left, top, opacity, transform",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          pointerEvents: "none",
          zIndex: 99999,
          left: "-100px",
          top: "-100px",
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
        }}
      />
    </>
  );
}

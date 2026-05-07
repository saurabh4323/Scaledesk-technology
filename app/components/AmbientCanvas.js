"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient particle canvas — extremely subtle, cinematic
 * Renders soft floating particles on a dark canvas
 */
export default function AmbientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    // Particle system
    const COUNT = 36;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -(Math.random() * 0.15 + 0.04),
      opacity: Math.random() * 0.25 + 0.04,
      life: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        // Age / fade cycle
        p.life += p.speed;
        if (p.life > 1) {
          p.life = 0;
          p.x = Math.random() * W;
          p.y = H + 20;
          p.opacity = Math.random() * 0.2 + 0.04;
        }

        const fade = p.life < 0.1
          ? p.life / 0.1
          : p.life > 0.8
            ? (1 - p.life) / 0.2
            : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,190,255,${p.opacity * fade})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6,
      }}
      aria-hidden="true"
    />
  );
}

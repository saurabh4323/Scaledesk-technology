"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useIsMobile(breakpoint = 639) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export function ParallaxImage({
  children,
  className = "",
  speed = 12,
  scale = 1.12,
  mobileSpeed,
  mobileScale,
}) {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const activeSpeed = isMobile ? (mobileSpeed ?? speed * 0.45) : speed;
  const activeScale = isMobile ? (mobileScale ?? 1) : scale;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${activeSpeed}%`, `${activeSpeed}%`]
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [activeScale, activeScale * 0.98, activeScale * 0.95]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full sm:h-[125%] sm:-top-[12%] will-change-transform"
        style={{ y, scale: imageScale }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxContent({
  children,
  className = "",
  yRange = [32, -32],
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

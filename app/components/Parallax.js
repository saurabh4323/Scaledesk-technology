"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxImage({
  children,
  className = "",
  speed = 12,
  scale = 1.12,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [scale, scale * 0.98, scale * 0.95]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-[125%] -top-[12%] will-change-transform"
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

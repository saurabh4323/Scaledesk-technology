"use client";

import { useEffect, useState } from "react";

const BEATS = [
  { id: "story-hero", label: "Signal" },
  { id: "story-trust", label: "Trust" },
  { id: "story-orchestration", label: "Orchestrate" },
  { id: "story-capabilities", label: "Scale" },
  { id: "about", label: "Transform" },
  { id: "services", label: "Build" },
  { id: "story-product", label: "Protect" },
  { id: "story-proof", label: "Proof" },
];

export default function NarrativeRail() {
  const [active, setActive] = useState(BEATS[0].id);

  useEffect(() => {
    const sections = BEATS.map((beat) => document.getElementById(beat.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: [0.18, 0.34, 0.5, 0.66],
        rootMargin: "-18% 0px -42% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="narrative-rail" aria-label="Page story progress">
      <div className="narrative-rail-line" />
      {BEATS.map((beat, index) => {
        const isActive = beat.id === active;
        return (
          <a
            key={beat.id}
            href={`#${beat.id}`}
            className={`narrative-beat ${isActive ? "is-active" : ""}`}
            style={{ "--beat-index": index }}
          >
            <span className="narrative-dot" />
            <span className="narrative-label">{beat.label}</span>
          </a>
        );
      })}
    </aside>
  );
}

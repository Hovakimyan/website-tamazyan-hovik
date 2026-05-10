"use client";

import { useEffect, useRef } from "react";

/**
 * Thin gold scroll progress bar pinned to the top of the viewport. Pure
 * width animation driven by rAF — no layout thrash. Hidden during
 * reduced-motion to avoid the constantly-moving bar that the brand kit
 * warns against ("Avoid constant decorative animation").
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let ticking = false;
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;
      bar.style.width = `${ratio * 100}%`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="ht-progress" aria-hidden="true">
      <div ref={barRef} className="ht-progress-bar" />
    </div>
  );
}

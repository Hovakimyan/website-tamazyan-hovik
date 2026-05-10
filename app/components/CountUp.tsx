"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animated counter that starts from 0 and rolls to its target value when
 * the element scrolls into view. The component renders the FINAL value as
 * its initial DOM state — so SSR/no-JS/Playwright fullPage screenshots all
 * see the right number. JS only briefly resets to 0 on mount and then
 * animates back, gated by an IntersectionObserver. Honors reduced motion.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1200,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<number>(value);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const el = ref.current;
    if (!el) return;

    let started = false;
    let rafId = 0;
    const animate = () => {
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3); // ease-out cubic
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(value * ease(t)));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    // Detect whether the element is already in view at mount. If so, skip
    // the count-up animation — the user landed directly on this section
    // and the final value is the right thing to show. Animation only fires
    // for elements that ENTER the viewport via scroll later. This also
    // makes screenshots deterministic.
    const initialRect = el.getBoundingClientRect();
    const initiallyInView =
      initialRect.top < window.innerHeight && initialRect.bottom > 0;
    if (initiallyInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            setDisplay(0);
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

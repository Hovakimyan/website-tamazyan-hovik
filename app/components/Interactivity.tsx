"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Cross-page client island. Wires up IntersectionObserver triggers on
 * elements marked `data-observe`: when they enter the viewport, the
 * `is-in-view` class is added (one-time). Used by the roadmap SVG to
 * trigger its line-draw animation. Honors prefers-reduced-motion (in
 * which case the class is added immediately).
 *
 * Re-runs on pathname change because App Router does not unmount the
 * layout — the previous page's observer would still be holding stale
 * DOM references otherwise.
 */
export default function Interactivity() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-observe]"),
    );
    if (targets.length === 0) return;

    targets.forEach((el) => el.classList.remove("is-in-view"));

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in-view"));
      return;
    }

    // Mark targets already in the viewport on mount as in-view immediately
    // so above-the-fold sections don't briefly flash from hidden → visible.
    const viewportH = window.innerHeight;
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.85 && rect.bottom > 0) {
        el.classList.add("is-in-view");
      }
    });

    // Flip the body class so CSS knows JS is online and can use the
    // hide-then-animate path. Above-the-fold targets are already revealed
    // (line above) so they won't flicker.
    document.body.classList.add("ht-js-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    targets.forEach((el) => {
      if (!el.classList.contains("is-in-view")) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      document.body.classList.remove("ht-js-ready");
    };
  }, [pathname]);

  return null;
}

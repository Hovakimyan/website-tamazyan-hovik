"use client";

/**
 * Cross-page client island. Currently a no-op — kept as the integration
 * point for any future client-side enhancements (analytics, scroll
 * effects, etc). Mounting the component is harmless and keeps the
 * layout shape stable.
 */
export default function Interactivity() {
  return null;
}

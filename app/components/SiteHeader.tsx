"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/content";

const CTA_HREF = "/contact";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  // Close the mobile menu on navigation. Derive-during-render pattern
  // avoids react-hooks/set-state-in-effect by responding to the path
  // change synchronously during the next render rather than via effect.
  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header className={`ht-topbar${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="ht-mark" aria-label="Hovik Tamazyan home">
          Hovik&nbsp;Tamazyan
        </Link>

        <nav className="ht-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={isActive(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={CTA_HREF} className="ht-cta-pill">
          Let&rsquo;s talk
        </Link>

        <button
          type="button"
          className="ht-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="ht-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`bars${menuOpen ? " is-open" : ""}`}>
            <span></span>
          </span>
        </button>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={NAV_ITEMS}
        ctaHref={CTA_HREF}
        currentPath={pathname}
      />
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { InlineWidget } from "react-calendly";
import Icon from "./Icon";
import { CALENDLY_CONFIG } from "@/lib/content";

interface Props {
  /**
   * Optional override for the button label. Defaults to "Book the call".
   */
  label?: string;
  /**
   * Optional className for the button — lets the contact page apply
   * `ht-btn-primary` while the modal logic stays in this component.
   */
  className?: string;
}

/**
 * Triggers a Calendly booking modal. The button itself is server-render-
 * compatible (just an onClick handler); the modal portal mounts only when
 * open, so the Calendly iframe is never created until the user asks for
 * it. Implements:
 *   • backdrop click / X / Escape to close
 *   • body scroll lock while open
 *   • focus moves into the panel on open, restored to the trigger on close
 *   • inert <main> while open is handled implicitly by focus trap
 */
export default function BookCallButton({
  label = "Book the call",
  className = "ht-btn-primary",
}: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Body scroll-lock while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape to close + focus trap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // On open: focus the close button. On close: restore focus to the trigger.
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        panelRef.current
          ?.querySelector<HTMLElement>(".ht-modal-close")
          ?.focus();
      });
    } else {
      buttonRef.current?.focus();
    }
  }, [open]);

  // The modal is rendered via createPortal directly at <body>. This sidesteps
  // any inherited styles from contextual ancestors (e.g. the dark contact
  // card) and any z-index / stacking context surprises.
  const modal = open ? (
    <div
      className="ht-modal-backdrop is-open"
      onClick={() => setOpen(false)}
      aria-hidden="true"
    >
      <div
        ref={panelRef}
        className="ht-modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Schedule a meeting with Hovik Tamazyan"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="ht-modal-close"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          <svg
            viewBox="0 0 24 24"
            width={18}
            height={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
        <div className="ht-modal-header">
          <p className="ht-eyebrow ht-eyebrow--ink">Schedule</p>
          <h3>A 30-minute strategic conversation</h3>
          <p className="ht-modal-meta">
            Pick a slot that works for both of us. Bring the question
            worth answering — we&rsquo;ll figure out the rest.
          </p>
        </div>
        <div className="ht-modal-widget">
          <InlineWidget
            url={CALENDLY_CONFIG.url}
            styles={CALENDLY_CONFIG.styles}
            pageSettings={CALENDLY_CONFIG.pageSettings}
            prefill={CALENDLY_CONFIG.prefill}
            utm={CALENDLY_CONFIG.utm}
            iframeTitle={CALENDLY_CONFIG.iframeTitle}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {label} <Icon name="arrow-right" size={14} />
      </button>
      {modal && typeof document !== "undefined"
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}

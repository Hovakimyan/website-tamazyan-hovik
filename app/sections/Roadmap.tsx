import { PROCESS_STEPS } from "@/lib/content";

/**
 * Operating-cadence roadmap. Pure HTML/CSS so it scales gracefully:
 * desktop renders a horizontal 4-column track with a hairline connector
 * and gold node fills; mobile flips to a vertical timeline with a left
 * gutter line. Animations live entirely in CSS @keyframes (sequential
 * gold fills + connector draw) and auto-play on first paint with
 * forwards fill-mode, so SSR / no-JS / fullPage screenshots all show
 * the final state. Honors prefers-reduced-motion.
 */
export default function Roadmap() {
  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="ht-section-head">
          <p className="ht-eyebrow">Operating Cadence</p>
          <h2>
            From idea to scale, <em>without the noise.</em>
          </h2>
          <p className="ht-lead">
            Four stages. Clear handoffs. Each one earns the right to the
            next — no ceremony for its own sake.
          </p>
        </div>

        <div className="ht-roadmap">
          <ol className="ht-roadmap-track">
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={step.label}
                className="ht-roadmap-step"
                style={{ "--idx": i } as React.CSSProperties}
              >
                <span className="ht-roadmap-node" aria-hidden="true">
                  <span className="ht-roadmap-num">0{i + 1}</span>
                </span>
                <h4 className="ht-roadmap-label">{step.label}</h4>
                <p className="ht-roadmap-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

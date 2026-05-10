import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/app/components/Icon";
import { EXPERTISE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Product strategy, market intelligence, launch excellence, and user-centric design — the four capabilities Hovik Tamazyan brings to every team.",
};

export default function ExpertisePage() {
  return (
    <>
      <section className="ht-page-header">
        <div className="ht-container">
          <p className="ht-eyebrow" data-reveal>
            Expertise
          </p>
          <h1 data-reveal>What I bring to the table</h1>
          <p className="lead" data-reveal>
            Great products don&rsquo;t happen by accident. They&rsquo;re born
            from strategic thinking, user empathy, and relentless execution.
            Here&rsquo;s how I turn complexity into clarity — and ideas into
            impact.
          </p>
        </div>
      </section>

      <section className="ht-section ht-section--tight">
        <div className="ht-container">
          <div className="ht-expertise-list">
            {EXPERTISE.map((cap) => (
              <article key={cap.slug} className="ht-capability" data-reveal>
                <span className="ht-capability-icon">
                  <Icon name={cap.icon as IconName} size={28} />
                </span>
                <div>
                  <h2>{cap.title}</h2>
                  <p
                    className="ht-eyebrow"
                    style={{ color: "var(--color-ink-2)", margin: "0 0 16px" }}
                  >
                    {cap.pitch}
                  </p>
                  <p className="body">{cap.body}</p>
                  <div className="ht-capability-tags">
                    {cap.tags.map((t, i) => (
                      <span
                        key={t}
                        className={`ht-tag ${
                          i % 2 === 0 ? "ht-tag--coral" : "ht-tag--green"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section ht-section--tight">
        <div className="ht-container">
          <div className="ht-cta-banner" data-reveal>
            <div>
              <h2>
                Discuss your <em>product</em>
              </h2>
              <p>
                Have a roadmap to sharpen, a launch to plan, or a team to
                level up? I&rsquo;d love to hear about it.
              </p>
            </div>
            <Link href="/contact" className="ht-btn-primary">
              Start a conversation <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

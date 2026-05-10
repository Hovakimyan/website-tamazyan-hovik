import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/app/components/Icon";
import { EXPERTISE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Four practices Hovik Tamazyan brings to every team: product strategy & development, market intelligence, launch excellence, user-centric design.",
};

export default function ExpertisePage() {
  return (
    <>
      <section className="ht-page-header">
        <div className="ht-container">
          <p className="ht-eyebrow">Expertise</p>
          <h1>
            What I bring <em>to the table.</em>
          </h1>
          <p className="lead">
            Great products don&rsquo;t happen by accident. They&rsquo;re
            born from strategic thinking, customer empathy, and disciplined
            execution. Each practice on this page plugs into the same
            operating system — strategy that makes decisions easier and
            execution that ships on time.
          </p>
        </div>
      </section>

      <section className="ht-section ht-section--tight">
        <div className="ht-container">
          <div className="ht-monographs">
            {EXPERTISE.map((cap) => (
              <article key={cap.slug} className="ht-monograph">
                <div className="ht-monograph-meta">
                  <div className="ht-monograph-num">
                    <span className="num">
                      <em>{cap.number}</em>
                    </span>
                  </div>
                  <span className="ht-monograph-kicker">{cap.kicker}</span>
                  <span className="ht-monograph-icon">
                    <Icon name={cap.icon as IconName} size={36} />
                  </span>
                  <div className="anchors">
                    {cap.anchors.map((a) => (
                      <div key={a.label} className="anchor">
                        <span className="label">{a.label}</span>
                        <span className="value">{a.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ht-monograph-body">
                  <h2>{cap.title}</h2>
                  <p className="pitch">{cap.pitch}</p>
                  <p className="body">{cap.body}</p>
                  <div className="tags">
                    {cap.tags.map((t, i) => (
                      <span
                        key={t}
                        className={`ht-tag ${
                          i % 3 === 0 ? "ht-tag--gold" : ""
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
          <div className="ht-cta-banner">
            <div>
              <h2>
                Discuss your <em>product.</em>
              </h2>
              <p>
                A roadmap to sharpen, a launch to plan, a team to level up?
                I&rsquo;d like to hear about it.
              </p>
            </div>
            <Link href="/contact" className="ht-btn-primary">
              Start a conversation <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

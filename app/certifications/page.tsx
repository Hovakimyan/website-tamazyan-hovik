import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { CERTIFICATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional Scrum Product Owner II & I, AI in Product Management, and other certifications that keep Hovik Tamazyan sharp and ahead of the curve.",
};

export default function CertificationsPage() {
  return (
    <>
      <section className="ht-page-header">
        <div className="ht-container">
          <p className="ht-eyebrow" data-reveal>
            Certifications
          </p>
          <h1 data-reveal>Always learning, always growing</h1>
          <p className="lead" data-reveal>
            The best product leaders never stop learning. From advanced Scrum
            mastery to AI integration, these certifications keep me sharp
            and ahead of the curve.
          </p>
        </div>
      </section>

      <section className="ht-section ht-section--tight">
        <div className="ht-container">
          <div className="ht-timeline">
            {CERTIFICATIONS.map((c) => (
              <article
                key={`${c.year}-${c.title}`}
                className="ht-cert"
                data-reveal
              >
                <p className="ht-cert-year">{c.year}</p>
                <h3>{c.title}</h3>
                <p className="issuer">{c.issuer}</p>
                <p>{c.body}</p>
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
                Want to discuss how my experience can help your{" "}
                <em>product succeed?</em>
              </h2>
              <p>
                Let&rsquo;s have a conversation about where you are, where
                you want to go, and how I can help you get there.
              </p>
            </div>
            <Link href="/contact" className="ht-btn-primary">
              Let&rsquo;s connect <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { CERTIFICATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Professional Scrum Product Owner II & I, AI in Product Management, and other credentials behind Hovik Tamazyan's product leadership practice.",
};

export default function CertificationsPage() {
  return (
    <>
      <section className="ht-page-header">
        <div className="ht-container">
          <p className="ht-eyebrow">Credentials</p>
          <h1>
            Always learning. <em>Always sharpening.</em>
          </h1>
          <p className="lead">
            The practice of product leadership compounds. From advanced
            Scrum mastery to AI integration, these credentials mark the
            ongoing investment in better decisions and faster execution.
          </p>
        </div>
      </section>

      <section className="ht-section ht-section--tight">
        <div className="ht-container">
          <div className="ht-credentials">
            {CERTIFICATIONS.map((c) => (
              <article
                key={`${c.year}-${c.title}`}
                className="ht-credential"
              >
                <p className="ht-credential-year">{c.year}</p>
                <div>
                  <h3>{c.title}</h3>
                  <p className="issuer">{c.issuer}</p>
                </div>
                <p className="body">{c.body}</p>
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
                Curious how this <em>applies to your team?</em>
              </h2>
              <p>
                Where you are, where you want to go, and how the right
                practice can compound the difference.
              </p>
            </div>
            <Link href="/contact" className="ht-btn-primary">
              Schedule conversation <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

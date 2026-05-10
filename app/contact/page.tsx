import type { Metadata } from "next";
import BookCallButton from "@/app/components/BookCallButton";
import { SITE, CONTACT_TOPICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a 30-minute strategic conversation or email Hovik Tamazyan directly. Engagement areas: strategy, GTM, leadership, architecture, research.",
};

export default function ContactPage() {
  return (
    <>
      <section className="ht-page-header">
        <div className="ht-container">
          <p className="ht-eyebrow">Get in touch</p>
          <h1>
            A short conversation <em>worth having.</em>
          </h1>
          <p className="lead">
            Got a product vision, a thorny challenge, or a moment of
            inflection? Bring a question worth answering. Thirty minutes is
            usually enough to see whether we can help each other.
          </p>
        </div>
      </section>

      <section className="ht-section ht-section--tight">
        <div className="ht-container">
          <div className="ht-contact-grid">
            <article id="book" className="ht-contact-card ht-contact-card--dark">
              <h3>Schedule a conversation</h3>
              <p className="description">
                Thirty minutes, focused. Bring the question. We&rsquo;ll
                figure out the shape of the engagement together.
              </p>
              <BookCallButton />
            </article>

            <article className="ht-contact-card">
              <h3>Email directly</h3>
              <p className="description">
                Prefer writing first? Send a note. I reply within 24 hours
                on weekdays.
              </p>
              <a href={`mailto:${SITE.email}`} className="email-link">
                {SITE.email}
              </a>
            </article>
          </div>

          <div className="ht-engagement">
            <p className="ht-eyebrow">Engagement areas</p>
            <h3 style={{ margin: "8px 0 0" }}>
              Where this is <em>most useful</em>
            </h3>
            <ul className="ht-engagement-list">
              {CONTACT_TOPICS.map((t, i) => (
                <li key={t.title}>
                  <span className="num">0{i + 1}</span>
                  <div className="body">
                    <h4>{t.title}</h4>
                    <p>{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <span className="ht-contact-meta">
              <span className="dot" />
              {SITE.location} · Open to remote
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

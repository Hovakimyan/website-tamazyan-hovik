import type { Metadata } from "next";
import Icon from "@/app/components/Icon";
import { SITE, BOOKING_URL, CONTACT_TOPICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got a product vision? Facing a complex challenge? Book a 30-minute call or email Hovik Tamazyan directly.",
};

export default function ContactPage() {
  const isBookingExternal = BOOKING_URL.startsWith("http");
  return (
    <>
      <section className="ht-page-header">
        <div className="ht-container">
          <p className="ht-eyebrow" data-reveal>
            Get in touch
          </p>
          <h1 data-reveal>Let&rsquo;s build something amazing</h1>
          <p className="lead" data-reveal>
            Got a product vision? Facing a complex challenge? Ready to turn
            ideas into reality? Let&rsquo;s talk. I&rsquo;m here to help you
            build products that matter.
          </p>
        </div>
      </section>

      <section className="ht-section ht-section--tight">
        <div className="ht-container">
          <div className="ht-contact-grid">
            <article id="book" className="ht-contact-card" data-reveal>
              <div className="ht-card-icon">
                <Icon name="calendar" size={22} />
              </div>
              <h3>Schedule a meeting</h3>
              <p>
                Book a 30-minute call to discuss your project, challenges,
                and how we can work together to build something exceptional.
              </p>
              <a
                href={BOOKING_URL}
                className="ht-btn-primary"
                {...(isBookingExternal
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                style={{ alignSelf: "flex-start" }}
              >
                Book a call <Icon name="arrow-right" size={16} />
              </a>
            </article>

            <article className="ht-contact-card" data-reveal>
              <div className="ht-card-icon ht-card-icon--green">
                <Icon name="mail" size={22} />
              </div>
              <h3>Email me</h3>
              <p>
                Prefer email? Drop me a message and I&rsquo;ll get back to
                you within 24 hours.
              </p>
              <a href={`mailto:${SITE.email}`} className="email">
                {SITE.email}
              </a>
            </article>
          </div>

          <div className="ht-card" data-reveal style={{ marginTop: 28 }}>
            <p className="ht-eyebrow">What we can discuss</p>
            <ul className="ht-contact-list">
              {CONTACT_TOPICS.map((t) => (
                <li key={t}>
                  <span className="check">
                    <Icon name="check" size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <span className="ht-contact-meta">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: "var(--color-success)",
                }}
              />
              {SITE.location} · Open to remote
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

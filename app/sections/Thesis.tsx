import { SITE } from "@/lib/content";

export default function Thesis() {
  // Split the brand essence at the period to surface the second half as
  // the gold-underlined keyword phrase. Falls back gracefully if the
  // sentence shape ever changes.
  const parts = SITE.essence.split(". ");
  const head = parts[0];
  const tail = parts[1] ? parts[1].replace(/\.$/, "") : "";

  return (
    <section className="ht-section ht-section--tight">
      <div className="ht-container">
        <article className="ht-thesis">
          <p className="ht-thesis-eyebrow">Operating Thesis</p>
          <h2 className="ht-thesis-quote">
            {head}.<br />
            <em>{tail}.</em>
          </h2>
          <p className="ht-thesis-meta">
            Brand essence · Hovik Tamazyan · 2026
          </p>
        </article>
      </div>
    </section>
  );
}

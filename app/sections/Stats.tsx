import { STATS } from "@/lib/content";

export default function Stats() {
  return (
    <section className="ht-section ht-section--tight">
      <div className="ht-container">
        <div className="ht-section-head ht-section-head--left" data-reveal>
          <p className="ht-eyebrow">Outcomes</p>
          <h2>
            Numbers that <em>matter</em>
          </h2>
          <p className="ht-muted" style={{ marginTop: 14, maxWidth: "60ch" }}>
            Receipts from real teams and real launches. Each came from a
            specific decision, a specific experiment, and shipped to real
            users.
          </p>
        </div>
        <div className="ht-stats">
          {STATS.map((s) => (
            <article key={s.label} className="ht-stat" data-reveal>
              <span className="ht-stat-figure">
                {s.figure.startsWith("+") ? (
                  <em>{s.figure}</em>
                ) : (
                  s.figure
                )}
              </span>
              <span className="ht-stat-label">{s.label}</span>
              <p className="ht-stat-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

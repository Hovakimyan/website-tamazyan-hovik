import Link from "next/link";
import Icon, { type IconName } from "@/app/components/Icon";
import { EXPERTISE } from "@/lib/content";

export default function ExpertiseTiles() {
  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="ht-section-head" data-reveal>
          <p className="ht-eyebrow">What I do</p>
          <h2>
            Turning complex challenges into <em>elegant solutions</em>
          </h2>
          <p className="ht-lead ht-muted" style={{ margin: "20px auto 0" }}>
            Four capabilities I bring to every team. Strategy that makes
            decisions easier. Execution that ships on time. Outcomes that
            move the business.
          </p>
        </div>
        <div className="ht-tiles">
          {EXPERTISE.map((cap) => (
            <article key={cap.slug} className="ht-card ht-tile" data-reveal>
              <div className="ht-card-icon">
                <Icon name={cap.icon as IconName} size={22} />
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.pitch}</p>
              <Link href="/expertise" className="ht-link" style={{ marginTop: "auto" }}>
                Learn more <Icon name="arrow-right" size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Icon from "@/app/components/Icon";
import { EXPERTISE } from "@/lib/content";

export default function Capabilities() {
  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="ht-section-head">
          <p className="ht-eyebrow">Capabilities</p>
          <h2>
            Four practices, <em>one operating system.</em>
          </h2>
          <p className="ht-lead">
            Strategy that makes decisions easier. Execution that ships on
            time. Outcomes that move the business. Each practice plugs into
            the same disciplined cadence.
          </p>
        </div>

        <Link href="/expertise" aria-label="Open full expertise page">
          <div className="ht-capabilities">
            {EXPERTISE.map((cap) => (
              <article key={cap.slug} className="ht-capability-tile">
                <div className="ht-capability-num">
                  <span className="num">{cap.number}</span>
                  <span className="div" />
                  <span>{cap.kicker}</span>
                </div>
                <h3>{cap.title}</h3>
                <p className="pitch">{cap.pitch}</p>
                <div className="anchors">
                  {cap.anchors.map((a) => (
                    <div key={a.label} className="anchor">
                      <span className="label">{a.label}</span>
                      <span className="value">{a.value}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Link>

        <div style={{ marginTop: 32, textAlign: "right" }}>
          <Link href="/expertise" className="ht-link">
            Read the full expertise <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

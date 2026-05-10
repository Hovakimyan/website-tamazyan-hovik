import Icon, { type IconName } from "@/app/components/Icon";
import { VALUES } from "@/lib/content";

export default function Principles() {
  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="ht-section-head">
          <p className="ht-eyebrow">Operating principles</p>
          <h2>
            How the work gets <em>made.</em>
          </h2>
        </div>
        <div className="ht-principles">
          {VALUES.map((v, i) => (
            <article key={v.name} className="ht-principle">
              <span className="ht-principle-num">0{i + 1}</span>
              <span className="ht-principle-icon">
                <Icon name={v.icon as IconName} size={28} />
              </span>
              <h4>{v.name}</h4>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

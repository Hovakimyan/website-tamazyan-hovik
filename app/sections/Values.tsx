import Icon, { type IconName } from "@/app/components/Icon";
import { VALUES } from "@/lib/content";

export default function Values() {
  return (
    <section className="ht-section ht-section--tight">
      <div className="ht-container">
        <div className="ht-section-head ht-section-head--left" data-reveal>
          <p className="ht-eyebrow">What I stand for</p>
          <h2>Brand values</h2>
        </div>
        <div className="ht-values" data-reveal>
          {VALUES.map((v) => (
            <article key={v.name} className="ht-value">
              <span className="ht-value-icon">
                <Icon name={v.icon as IconName} size={18} />
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

import CountUp from "@/app/components/CountUp";

const OUTCOMES = [
  {
    label: "Partners served",
    prefix: "",
    value: 100,
    suffix: "+",
    caption:
      "Multi-module platforms shipped on time and on quality across teams.",
  },
  {
    label: "Conversion lift",
    prefix: "+",
    value: 17,
    suffix: "%",
    caption:
      "Research-led iterations on critical conversion flows.",
  },
  {
    label: "Satisfaction lift",
    prefix: "+",
    value: 15,
    suffix: "%",
    caption:
      "Continuous discovery and customer development at the cadence.",
  },
] as const;

export default function Outcomes() {
  return (
    <section className="ht-section ht-section--tight">
      <div className="ht-container">
        <article className="ht-outcomes">
          <header className="ht-outcomes-head">
            <h2>
              Outcomes <em>that scale.</em>
            </h2>
            <span className="ht-outcomes-meta">Selected impact ledger</span>
          </header>
          <div className="ht-outcomes-grid">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="ht-outcome">
                <span className="ht-outcome-label">{o.label}</span>
                <span className="ht-outcome-figure">
                  <CountUp
                    value={o.value}
                    prefix={o.prefix}
                    suffix={o.suffix}
                  />
                </span>
                <p className="ht-outcome-caption">{o.caption}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

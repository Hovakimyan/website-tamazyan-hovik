import { PROCESS_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section className="ht-section ht-section--tight">
      <div className="ht-container">
        <div className="ht-section-head" data-reveal>
          <p className="ht-eyebrow">How I work</p>
          <h2>From idea to scale, in four steps</h2>
        </div>
        <div className="ht-process" data-reveal>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.label} className="ht-process-step">
              <span className="ht-process-num">{i + 1}</span>
              <p className="ht-process-label">{step.label}</p>
              <p className="ht-process-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

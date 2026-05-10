import { PROCESS_STEPS } from "@/lib/content";

/**
 * Horizontal roadmap as a single inline SVG. A faint ink path traces the
 * full route; a gold path is overlaid and animated via stroke-dashoffset
 * once the section enters the viewport (handled by Interactivity, which
 * adds the `is-in-view` class to the root). Each milestone node fills
 * gold sequentially via staggered transition delays defined in CSS.
 */
export default function Roadmap() {
  // Geometry — 4 evenly-spaced nodes along a horizontal line. Mild
  // wave makes it feel like a topographic ridge rather than a strict ruler.
  const W = 1100;
  const H = 200;
  const padX = 60;
  const baseY = 80;
  const nodeYs = [baseY, baseY - 12, baseY + 8, baseY - 4];
  const nodeXs = PROCESS_STEPS.map(
    (_, i) =>
      padX + (i * (W - padX * 2)) / (PROCESS_STEPS.length - 1),
  );
  // Smooth curve through the nodes using cubic bezier handles offset
  // halfway between each pair.
  const pathD = nodeXs
    .map((x, i) => {
      const y = nodeYs[i];
      if (i === 0) return `M ${x} ${y}`;
      const px = nodeXs[i - 1];
      const py = nodeYs[i - 1];
      const cx1 = px + (x - px) * 0.4;
      const cy1 = py;
      const cx2 = px + (x - px) * 0.6;
      const cy2 = y;
      return `C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y}`;
    })
    .join(" ");

  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="ht-section-head">
          <p className="ht-eyebrow">Operating Cadence</p>
          <h2>
            From idea to scale, <em>without the noise.</em>
          </h2>
          <p className="ht-lead">
            Four stages. Clear handoffs. Each one earns the right to the
            next — no ceremony for its own sake.
          </p>
        </div>

        <div className="ht-roadmap" data-observe>
          <svg
            className="ht-roadmap-svg"
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label="Operating cadence: Discover, Align, Build, Scale"
          >
            <path className="ink-path" d={pathD} />
            <path className="gold-path" d={pathD} />
            {PROCESS_STEPS.map((step, i) => {
              const x = nodeXs[i];
              const y = nodeYs[i];
              return (
                <g key={step.label}>
                  <circle
                    className={`node node-${i + 1}`}
                    cx={x}
                    cy={y}
                    r={9}
                  />
                  <text
                    className="num"
                    x={x}
                    y={y - 24}
                    textAnchor="middle"
                  >
                    0{i + 1}
                  </text>
                  <text
                    className="label"
                    x={x}
                    y={y + 36}
                    textAnchor="middle"
                  >
                    {step.label}
                  </text>
                </g>
              );
            })}
          </svg>
          <div className="ht-roadmap-bodies">
            {PROCESS_STEPS.map((step) => (
              <p key={step.label} className="ht-roadmap-body">
                {step.body}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/components/Icon";
import CountUp from "@/app/components/CountUp";
import { SITE, METRICS } from "@/lib/content";

export default function Hero() {
  // Split the headline name into words so each can animate in
  // independently with a CSS-only staggered keyframe.
  const words = SITE.name.split(" ");

  return (
    <section className="ht-hero">
      <div className="ht-container ht-hero-grid">
        <div>
          <p className="ht-hero-pretitle">{SITE.pretitle.toUpperCase()}</p>
          <h1 aria-label={SITE.name}>
            {words.map((w, i) => (
              <span key={i}>
                <span className="word">{w}</span>
                {i < words.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className="ht-hero-role">
            {SITE.role} · Yerevan, Armenia
          </p>
          <p className="ht-hero-tagline">{SITE.tagline}</p>
          <p className="ht-hero-lead">{SITE.lead}</p>
          <div className="ht-hero-ctas">
            <Link href="/contact" className="ht-btn-primary">
              Schedule conversation <Icon name="arrow-right" size={14} />
            </Link>
            <Link href="/expertise" className="ht-btn-secondary">
              View expertise
            </Link>
          </div>
        </div>

        <div className="ht-hero-portrait">
          <Image
            src="/images/hovik-portrait.jpg"
            alt="Portrait of Hovik Tamazyan"
            width={853}
            height={1066}
            priority
            sizes="(max-width: 920px) 80vw, 420px"
          />
          <span className="ht-hero-status">
            <span className="dot" /> Available for engagements
          </span>
        </div>
      </div>

      <div className="ht-container">
        <div className="ht-hero-ledger">
          {METRICS.map((m) => (
            <div key={m.label} className="ht-ledger-item">
              <span className="ht-ledger-label">{m.label}</span>
              <span className="ht-ledger-figure">
                <CountUp
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              </span>
              <span className="ht-ledger-caption">{m.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

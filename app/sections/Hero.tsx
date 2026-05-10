import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/components/Icon";
import { SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section className="ht-hero">
      <div className="ht-container ht-hero-grid">
        <div data-reveal>
          <p className="ht-eyebrow">Hello, I&rsquo;m</p>
          <h1>
            <span>Hovik</span>
            <br />
            Tamazyan
          </h1>
          <p className="ht-hero-role">{SITE.role}</p>
          <p className="ht-hero-lead">{SITE.tagline}</p>
          <div className="ht-hero-ctas">
            <Link href="/contact" className="ht-btn-primary">
              Let&rsquo;s talk <Icon name="arrow-right" size={16} />
            </Link>
            <Link href="/expertise" className="ht-btn-outline">
              See expertise
            </Link>
          </div>
        </div>
        <div className="ht-hero-portrait" data-reveal>
          <span className="ht-hero-portrait-tag">Strategy · Clarity · Impact</span>
          <Image
            src="/images/hovik-portrait.jpg"
            alt="Portrait of Hovik Tamazyan"
            width={853}
            height={1066}
            priority
            sizes="(max-width: 880px) 80vw, 460px"
          />
          <div className="ht-hero-meta">
            <span className="dot" />
            Available for new collaborations
          </div>
        </div>
      </div>
    </section>
  );
}

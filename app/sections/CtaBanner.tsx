import Link from "next/link";
import Icon from "@/app/components/Icon";

export default function CtaBanner() {
  return (
    <section className="ht-section ht-section--tight">
      <div className="ht-container">
        <div className="ht-cta-banner" data-reveal>
          <div>
            <h2>
              Got a product vision? Let&rsquo;s <em>build</em> it.
            </h2>
            <p>
              Whether you&rsquo;re shaping a roadmap, planning a launch, or
              rethinking how your team ships — I&rsquo;d love to talk.
            </p>
          </div>
          <Link href="/contact" className="ht-btn-primary">
            Start a conversation <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

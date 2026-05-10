import Link from "next/link";
import Icon from "@/app/components/Icon";

export default function CtaBanner() {
  return (
    <section className="ht-section ht-section--tight">
      <div className="ht-container">
        <div className="ht-cta-banner">
          <div>
            <h2>
              Ready to align <em>strategy with execution?</em>
            </h2>
            <p>
              A 30-minute conversation is enough to see whether we can help
              each other. Bring a question worth answering.
            </p>
          </div>
          <Link href="/contact" className="ht-btn-primary">
            Schedule conversation <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

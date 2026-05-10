import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="ht-not-found">
      <div className="ht-container ht-not-found-inner">
        <p className="num">
          4<em>0</em>4
        </p>
        <h1>
          This page <em>wandered off</em>.
        </h1>
        <p>
          The link you followed may be outdated or the page may have moved.
          Let&rsquo;s get you back on track.
        </p>
        <div className="actions">
          <Link href="/" className="ht-btn-primary">
            Go home <Icon name="arrow-right" size={16} />
          </Link>
          <Link href="/expertise" className="ht-btn-outline">
            Browse expertise
          </Link>
        </div>
      </div>
    </section>
  );
}

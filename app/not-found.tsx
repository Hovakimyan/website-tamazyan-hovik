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
        <h1>This page is off the map.</h1>
        <p>
          The link you followed may be outdated or the page may have moved.
          Let&rsquo;s get you back on a known route.
        </p>
        <div className="actions">
          <Link href="/" className="ht-btn-primary">
            Return home <Icon name="arrow-right" size={14} />
          </Link>
          <Link href="/expertise" className="ht-btn-secondary">
            Browse expertise
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Icon from "./Icon";
import { NAV_ITEMS, SITE, LINKEDIN_URL } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ht-footer">
      <div className="ht-footer-inner">
        <div>
          <p className="mark">{SITE.name}</p>
          <p className="tagline">Empathy. Collaboration. Impact.</p>
          <p className="blurb">
            Product leader who turns complex challenges into clear strategies
            and scalable products — built with the people they serve.
          </p>
        </div>
        <div>
          <h5>Connect</h5>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>
                <Icon name="mail" size={14} /> {SITE.email}
              </a>
            </li>
            {LINKEDIN_URL ? (
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener">
                  <Icon name="linkedin" size={14} /> LinkedIn &rarr;
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/contact">Book a call &rarr;</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            {NAV_ITEMS.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ht-footer-meta">
        <span>© {year} {SITE.name}</span>
        <span>
          Built by{" "}
          <a href="https://ashoon.online" target="_blank" rel="noopener">
            Ashoon
          </a>
        </span>
        <span>{SITE.location}</span>
      </div>
    </footer>
  );
}

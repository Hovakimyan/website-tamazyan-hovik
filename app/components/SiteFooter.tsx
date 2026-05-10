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
          <p className="role">{SITE.role}</p>
          <p className="blurb">{SITE.essence}</p>
        </div>
        <div>
          <h5>Connect</h5>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>
                <Icon name="mail" size={14} /> Email
              </a>
            </li>
            {LINKEDIN_URL ? (
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener">
                  <Icon name="linkedin" size={14} /> LinkedIn
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/contact">
                <Icon name="calendar" size={14} /> Schedule
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Site</h5>
          <ul>
            {NAV_ITEMS.filter((n) => n.href !== "/").map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Based in</h5>
          <ul>
            <li>{SITE.location}</li>
            <li>Open to remote</li>
          </ul>
        </div>
      </div>
      <div className="ht-footer-meta">
        <span>© {year} {SITE.name}. All rights reserved.</span>
        <span>
          Built by{" "}
          <a href="https://ashoon.online" target="_blank" rel="noopener">
            Ashoon
          </a>
        </span>
        <span>tamazyanhovik.pm · tamazyanhovik.com</span>
      </div>
    </footer>
  );
}

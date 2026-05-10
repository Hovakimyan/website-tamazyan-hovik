import type { MetadataRoute } from "next";
import { headers } from "next/headers";

// Build the sitemap from request headers so the same code serves any of
// the site's domains (tamazyanhovik.pm, tamazyanhovik.com, the agency
// subdomain). No hardcoded host.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = await headers();
  const host = h.get("host") ?? "tamazyanhovik.pm";
  const proto = h.get("x-forwarded-proto") ?? "https";
  const base = `${proto}://${host}`;
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/expertise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/certifications`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}

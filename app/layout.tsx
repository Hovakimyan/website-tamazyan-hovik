import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import Interactivity from "@/app/components/Interactivity";
import { SITE } from "@/lib/content";
import "./globals.css";

// Brand-locked typography from the brand kit.
// Playfair Display anchors editorial gravity (display headings, accent
// italics). Manrope keeps body and UI clean and modern.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// No metadataBase — the same app serves tamazyanhovik.pm,
// tamazyanhovik.com, and the agency subdomain. Keeping URLs relative makes
// the build host-agnostic.
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.tagline,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
    type: "profile",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F7F4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable}`}
    >
      <body>
        <a href="#main" className="ht-skip">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Interactivity />
      </body>
    </html>
  );
}

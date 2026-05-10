import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import Interactivity from "@/app/components/Interactivity";
import ScrollProgress from "@/app/components/ScrollProgress";
import { SITE } from "@/lib/content";
import "./globals.css";

// Brand-locked typography from the Executive Precision brand kit.
// Cormorant Garamond carries the editorial gravity (display headings,
// pull-quotes, large numerals); Inter handles all UI, body copy, labels,
// navigation, and dense reading.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// No metadataBase — same app serves tamazyanhovik.pm, tamazyanhovik.com,
// and the agency subdomain. Keeping URLs relative makes the build
// host-agnostic.
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.lead,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.lead,
    type: "profile",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.lead,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="ht-skip">
          Skip to main content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Interactivity />
      </body>
    </html>
  );
}

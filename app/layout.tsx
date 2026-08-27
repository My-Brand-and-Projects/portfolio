import type { Metadata } from "next";
import {
  Space_Grotesk,
  Manrope,
  DM_Sans,
  Plus_Jakarta_Sans,
  Sora,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { seo, profile } from "@/lib/content";
import { BrandProvider } from "@/components/BrandProvider";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });
const plus = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plusjakarta", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const fontVars = [
  space.variable,
  manrope.variable,
  dmsans.variable,
  plus.variable,
  sora.variable,
  instrument.variable,
  mono.variable,
].join(" ");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL(seo.canonical),
  alternates: { canonical: seo.canonical },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical,
    siteName: profile.name,
    type: "website",
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: seo.canonical,
  sameAs: [profile.socials.github, profile.socials.linkedin],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${profile.name} — Portfolio`,
  url: seo.canonical,
};

const brandBoot = `(function(){try{document.documentElement.dataset.brand="apricot";}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: brandBoot }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </head>
      <body>
        <BrandProvider>{children}</BrandProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/site.config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Premium Nagelstudio`,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords.join(", "),
  openGraph: {
    title: `${siteConfig.name} | Premium Nagelstudio`,
    description: siteConfig.description,
    type: "website",
    locale: "de_DE",
    url: siteConfig.url
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.contact.address.street,
    "addressLocality": siteConfig.contact.address.city,
    "postalCode": siteConfig.contact.address.zip,
    "addressCountry": siteConfig.contact.address.country
  },
  "telephone": siteConfig.contact.phone,
  "priceRange": "€€€",
  "aggregateRating": { 
    "@type": "AggregateRating", 
    "ratingValue": "5.0", 
    "reviewCount": "87" 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[var(--bg)] text-[var(--ink)]">
        {children}
        <CookieBanner />
        <Analytics />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

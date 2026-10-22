import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://dikachi-portfolio.vercel.app";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Onyedikachi Emmanuel Nnadi | Full-Stack Developer",
    template: "%s | Onyedikachi Emmanuel Nnadi",
  },
  description: "Onyedikachi Emmanuel Nnadi is a full-stack developer in Nigeria who builds performant web applications with Next.js, React, Node.js, Laravel, and AI integrations.",
  keywords: ["full-stack developer Nigeria", "Next.js developer", "React developer", "Node.js developer", "Laravel developer", "AI integration developer", "Onyedikachi Emmanuel Nnadi", "Dikachi"],
  authors: [{ name: "Onyedikachi Emmanuel Nnadi", url: siteUrl }],
  creator: "Onyedikachi Emmanuel Nnadi",
  publisher: "Onyedikachi Emmanuel Nnadi",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    title: "Onyedikachi Emmanuel Nnadi | Full-Stack Developer",
    description: "Full-stack developer building performant web applications, AI integrations, and digital products.",
    siteName: "Dika.Dev Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Onyedikachi Emmanuel Nnadi, Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onyedikachi Emmanuel Nnadi | Full-Stack Developer",
    description: "Full-stack developer building performant web applications, AI integrations, and digital products.",
    images: ["/opengraph-image"],
    creator: "@iamdikachukwu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: siteUrl },
  verification: { google: "e2R97YTE80Mm2jm2p_SUey4cEiNJ5R61PVlI_IAf7lo" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Onyedikachi Emmanuel Nnadi",
      alternateName: "Dikachi",
      url: siteUrl,
      image: `${siteUrl}/images/my-photo.png`,
      jobTitle: "Full-Stack Developer",
      email: "mailto:emmanuelnnadi097@gmail.com",
      address: { "@type": "PostalAddress", addressCountry: "NG" },
      knowsAbout: ["Next.js", "React", "Node.js", "Laravel", "TypeScript", "AI integrations", "Web application development"],
      sameAs: [
        "https://github.com/iamdikachi",
        "https://www.linkedin.com/in/iamdikachukwu/",
        "https://x.com/iamdikachukwu",
        "https://www.facebook.com/iamdikachukwu",
        "https://www.instagram.com/iamdikachukwu?igsh=Zzh0d2VndGRtdGJo",
        "https://www.tiktok.com/@iamdikachukwu"
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dika.Dev Portfolio",
      description: "Portfolio of Onyedikachi Emmanuel Nnadi, a full-stack developer.",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-bg text-gray-300`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}

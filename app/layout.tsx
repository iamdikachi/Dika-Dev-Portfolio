import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlurredBackground from "@/components/BlurredBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dikachi-portfolio.vercel.app"),
  title: {
    default: "Onyedikachi Emmanuel Nnadi | FullStack Developer",
    template: "%s | Onyedikachi Emmanuel Nnadi",
  },
  description:
    "Professional portfolio of Onyedikachi Emmanuel Nnadi, a Full Stack Developer specializing in building scalable web applications with Next.js, React, and Node.js.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Onyedikachi Emmanuel Nnadi",
    "Dikachi",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Onyedikachi Emmanuel Nnadi", url: "https://dikachi-portfolio.vercel.app" }],
  creator: "Onyedikachi Emmanuel Nnadi",
  publisher: "Onyedikachi Emmanuel Nnadi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dikachi-portfolio.vercel.app",
    title: "Onyedikachi Emmanuel Nnadi | FullStack Developer",
    description:
      "Explore the portfolio of Onyedikachi Emmanuel Nnadi. View projects, skills, and professional experience in web development.",
    siteName: "Onyedikachi Emmanuel Nnadi Portfolio",
    images: [
      {
        url: "/icon.png", // Using the favicon as the main image for now
        width: 1200,
        height: 630,
        alt: "Onyedikachi Emmanuel Nnadi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onyedikachi Emmanuel Nnadi | FullStack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies. Check out my latest projects and skills.",
    images: ["/icon.png"],
    creator: "@iamdikachukwu", // Updated based on social links in code
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dikachi-portfolio.vercel.app",
  },
  verification: {
    google: "e2R97YTE80Mm2jm2p_SUey4cEiNJ5R61PVlI_IAf7lo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-bg text-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}

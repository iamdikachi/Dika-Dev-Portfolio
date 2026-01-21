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
  title: "Onyedikachi Emmanuel Nnadi | FullStack Developer",
  description: "Professional portfolio showcasing my work and experience",
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

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://jobdork.tech'),
  title: "JobDork | Find Hidden Jobs",
  description: "Generate advanced search queries to discover hidden tech jobs on ATS platforms before they appear on major job boards. Search jobs from Lever, Greenhouse, Workable, Ashby, and more.",
  keywords: "Google dorks for jobs, find hidden jobs, ATS search, Greenhouse jobs, Lever jobs, tech job search, boolean search jobs",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "JobDork | Find Hidden Jobs",
    description: "Generate advanced search queries to discover hidden tech jobs on ATS platforms before they appear on major job boards. Search jobs from Lever, Greenhouse, Workable, Ashby, and more.",
    url: '/',
    siteName: 'JobDork',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JobDork | Find Hidden Jobs",
    description: "Generate advanced search queries to discover hidden tech jobs on ATS platforms before they appear on major job boards.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-[100dvh]`} suppressHydrationWarning>
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

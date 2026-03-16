import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactWidget } from "@/components/layout/ContactWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mtgplan.com"),
  title: {
    default: "MTGPlan - Mortgage Protection Insurance",
    template: "%s | MTGPlan",
  },
  description:
    "Protect your family and your home with affordable mortgage protection insurance. Get a free quote in 30 seconds.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mtgplan.com",
    siteName: "MTGPlan",
    title: "MTGPlan - Mortgage Protection Insurance",
    description:
      "Protect your family and your home with affordable mortgage protection insurance. Get a free quote in 30 seconds.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactWidget />
      </body>
    </html>
  );
}

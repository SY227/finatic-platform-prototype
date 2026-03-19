import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finatic.app"),
  title: {
    default: "Finatic | Financial Planning Tools and Guides",
    template: "%s | Finatic",
  },
  description:
    "Free debt payoff and budget planning tools, practical guides, and weekly money systems to help you reach financial goals.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Finatic | Financial Planning Tools and Guides",
    description:
      "Practical debt payoff, budgeting, emergency fund, and goal planning resources.",
    type: "website",
    url: "https://finatic.app",
    siteName: "Finatic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finatic | Financial Planning Tools and Guides",
    description:
      "Practical debt payoff, budgeting, emergency fund, and goal planning resources.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

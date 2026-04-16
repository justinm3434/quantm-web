import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://quantm.ai"
  ),
  title: "QuanTM.ai — The Race for Space",
  description:
    "The Blundin Space RIFT competition. Training happens once. Inference happens forever. Build the most efficient transformer for deployment in space.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/quantm-logo.jpg", type: "image/jpeg" },
    ],
    apple: "/apple-icon.jpg",
    shortcut: "/images/quantm-logo.jpg",
  },
  openGraph: {
    title: "QuanTM.ai — The Race for Space",
    description:
      "The Blundin Space RIFT competition measures inference efficiency in Transistor Flip Equivalents. Build for space. Win everywhere.",
    type: "website",
    siteName: "QuanTM.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 2048,
        height: 1536,
        alt: "QuanTM.ai — Reduced Inference Fast Transformer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuanTM.ai — The Race for Space",
    description:
      "The Blundin Space RIFT competition. Build for space. Win everywhere.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

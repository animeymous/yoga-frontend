import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/footer/Footer";
import ChatBot from "@/components/chat/ChatBot";
import { Cormorant_Garamond, Mulish } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-mulish',
});

export const metadata: Metadata = {
  title: "Ashu Yoga - Yoga Teacher Training in India & Bali",
  description: "Transform your life with our comprehensive yoga teacher training courses in Rishikesh, Goa, and Bali. Join our authentic yoga school for 100hr, 200hr, 300hr & 500hr YTT courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${mulish.variable} antialiased flex flex-col min-h-screen`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional extra sizes for better device support */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </head>
      <body className={mulish.className}>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}

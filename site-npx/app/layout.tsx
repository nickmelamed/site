import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Systems That Think Before They Act",
  description: "Custom AI systems for real-world decisions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-main relative overflow-x-hidden">

        <div className="absolute inset-0 bg-[rgb(var(--bg-main))]" />
        <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}
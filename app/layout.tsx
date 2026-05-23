import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400","500","600"], style: ["normal","italic"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linden Pain Relief — Chiropractic + recovery, Orange NJ",
  description: "Chiropractic care, posture work, and quiet recovery on Linden Ave, Orange NJ. By appointment.",
  openGraph: { title: "Linden Pain Relief · Orange NJ", description: "Chiropractic + recovery.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
      <body className="bg-paper text-ink min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

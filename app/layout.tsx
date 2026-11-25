import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";
import { rootMetadata } from "@/lib/seo";
import { siteJsonLd } from "@/lib/structured-data";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap", style: ["italic", "normal"], weight: ["400", "500", "600"] });

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-ivory text-charcoal antialiased">
        <JsonLd data={siteJsonLd()} />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

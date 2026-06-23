import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kensingtondesignhouse.com"),
  title: {
    default: "Kensington Design House — Architecture & Interior Design Studio",
    template: "%s · Kensington Design House",
  },
  description:
    "Kensington Design House is a luxury architecture and interior design studio crafting timeless residential and commercial spaces with precision, purpose, and elegance.",
  keywords: [
    "architecture firm",
    "interior design",
    "luxury villa design",
    "residential architecture",
    "commercial architecture",
    "3D visualization",
    "renovation",
  ],
  openGraph: {
    title: "Kensington Design House — Architecture & Interior Design Studio",
    description:
      "Designing timeless spaces with precision, purpose & elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-ivory text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

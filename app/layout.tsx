import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Serif used for the "Lissom" wordmark to match the brand identity.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lissom.co.uk"),
  title: {
    default: "Lissom Architects — Architecture, Interiors & Branding | UK & UAE",
    template: "%s · Lissom Architects",
  },
  description:
    "Lissom Architects is a multidisciplinary architecture practice across the UK and UAE, uniting architecture, interiors, and branding to create cohesive, considered environments.",
  keywords: [
    "architecture firm",
    "residential architect",
    "commercial interiors",
    "hospitality design",
    "retail design",
    "brand design",
    "London architect",
    "Dubai architect",
  ],
  openGraph: {
    title: "Lissom Architects — Architecture, Interiors & Branding | UK & UAE",
    description:
      "Architecture, interiors, and branding under one roof. Studios in London and Dubai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ivory text-charcoal antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

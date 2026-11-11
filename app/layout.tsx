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

// Serif used by the Studio Lissom identity.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lissomarchitects.com"),
  title: {
    default: "Studio Lissom LTD - Shaping Spaces. Defining Experiences.",
    template: "%s · Studio Lissom LTD",
  },
  description:
    "Studio Lissom LTD is a multidisciplinary practice across the UK and UAE, shaping architecture, interiors, hospitality and branding as cohesive experiences.",
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
    title: "Studio Lissom LTD - Shaping Spaces. Defining Experiences.",
    description:
      "Shaping architecture, interiors, hospitality and branding across the UK and UAE.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Studio Lissom",
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
      className={`${jakarta.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
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

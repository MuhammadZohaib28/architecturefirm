import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap", style: ["italic", "normal"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://studiolissom.com"),
  title: { default: "Studio Lissom | Architecture, Interiors & Brand Design", template: "%s | Studio Lissom" },
  description: "Studio Lissom LTD is a multidisciplinary practice across the UK and UAE, shaping architecture, interiors, hospitality and branding as cohesive experiences.",
  alternates: { canonical: "/" },
  robots: process.env.VERCEL_ENV === "preview" ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: "Studio Lissom | Architecture, Interiors & Brand Design",
    description: "Shaping architecture, interiors, hospitality and branding across the UK and UAE.",
    type: "website",
    url: "/",
    siteName: "Studio Lissom",
    images: [{ url: "/images/projects/the-gables/front-oblique.png", width: 1200, height: 630, alt: "The Gables residential project by Studio Lissom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Lissom | Architecture, Interiors & Brand Design",
    description: "Shaping architecture, interiors, hospitality and branding across the UK and UAE.",
    images: ["/images/projects/the-gables/front-oblique.png"],
  },
  icons: {
    icon: [{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }, { url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Studio Lissom" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://studiolissom.com/#organization", name: "Studio Lissom LTD", url: "https://studiolissom.com", logo: "https://studiolissom.com/images/studio-lissom-logo.png", email: "hello@studiolissom.com" },
      { "@type": "WebSite", "@id": "https://studiolissom.com/#website", name: "Studio Lissom", url: "https://studiolissom.com", publisher: { "@id": "https://studiolissom.com/#organization" } },
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-ivory text-charcoal antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

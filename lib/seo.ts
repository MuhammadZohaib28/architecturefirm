import type { Metadata } from "next";

export const siteConfig = {
  name: "Studio Lissom",
  legalName: "Studio Lissom LTD",
  url: "https://studiolissom.com",
  locale: "en_GB",
  language: "en-GB",
  email: "hello@studiolissom.com",
  instagram: "https://www.instagram.com/studio_lissom/",
  logo: "/images/studio-lissom-logo.png",
  defaultSocialImage: "/images/projects/the-gables/front-oblique.png",
  description:
    "Studio Lissom LTD is a multidisciplinary practice across the UK and UAE, shaping architecture, interiors, hospitality and branding as cohesive experiences.",
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return new URL(path, siteConfig.url).toString().replace(/\/$/, path === "/" ? "" : "/");
}

export function isIndexableEnvironment(): boolean {
  const deploymentEnvironment =
    process.env.VERCEL_ENV ??
    process.env.DEPLOYMENT_ENV ??
    process.env.NODE_ENV;

  return (
    deploymentEnvironment === "production" &&
    process.env.DISABLE_INDEXING !== "true"
  );
}

function robotsDirectives(): Metadata["robots"] {
  const indexable = isIndexableEnvironment();

  return {
    index: indexable,
    follow: indexable,
    googleBot: {
      index: indexable,
      follow: indexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultSocialImage,
  imageAlt = `${siteConfig.name} architecture and design work`,
  type = "website",
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: robotsDirectives(),
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Studio Lissom | Architecture & Interior Design UK & UAE",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  robots: robotsDirectives(),
  openGraph: {
    title: "Studio Lissom | Architecture & Interior Design UK & UAE",
    description:
      "Considered architecture, interiors, hospitality and brand design across the UK and UAE.",
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultSocialImage,
        alt: "The Gables residential project by Studio Lissom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Lissom | Architecture & Interior Design UK & UAE",
    description:
      "Considered architecture, interiors, hospitality and brand design across the UK and UAE.",
    images: [
      {
        url: siteConfig.defaultSocialImage,
        alt: "The Gables residential project by Studio Lissom",
      },
    ],
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
  appleWebApp: { title: siteConfig.name },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

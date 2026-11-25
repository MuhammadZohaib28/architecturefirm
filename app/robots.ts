import type { MetadataRoute } from "next";
import { isIndexableEnvironment, siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableEnvironment()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

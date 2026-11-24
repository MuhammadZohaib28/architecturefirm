import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const siteUrl = "https://studiolissom.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];
  return [
    ...staticPages,
    ...services.map((service) => ({ url: `${siteUrl}/services/${service.slug}`, changeFrequency: "yearly" as const, priority: 0.8 })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: new Date(`${project.year}-01-01T00:00:00.000Z`), changeFrequency: "yearly" as const, priority: 0.8 })),
  ];
}

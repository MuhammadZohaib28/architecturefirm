import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export type JsonLdPrimitive = string | number | boolean | null;
export type JsonLdValue =
  | JsonLdPrimitive
  | JsonLdNode
  | JsonLdValue[];
export type JsonLdNode = { [key: string]: JsonLdValue };

export type BreadcrumbItem = {
  name: string;
  path: string;
};

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

export function siteJsonLd(): JsonLdNode {
  const logoUrl = absoluteUrl(siteConfig.logo);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#logo`,
          url: logoUrl,
          contentUrl: logoUrl,
          caption: siteConfig.legalName,
        },
        email: siteConfig.email,
        sameAs: [siteConfig.instagram],
        areaServed: ["United Kingdom", "United Arab Emirates"],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteConfig.url,
        inLanguage: siteConfig.language,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items.at(-1)?.path ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectJsonLd(project: Project): JsonLdNode {
  const path = `/projects/${project.slug}`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(project.coverImage);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path },
  ]);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.title} | ${siteConfig.name}`,
        description: project.excerpt,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        mainEntity: { "@id": `${url}#project` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.title,
        description: project.excerpt,
        url,
        creator: { "@id": organizationId },
        contentLocation: project.location,
        image: project.gallery.map(absoluteUrl),
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: imageUrl,
        contentUrl: imageUrl,
        caption: project.title,
      },
      breadcrumb,
    ],
  };
}

export function serviceJsonLd(service: Service): JsonLdNode {
  const path = `/services/${service.slug}`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(service.heroImage);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path },
  ]);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${service.seoTitle} | ${siteConfig.name}`,
        description: service.metaDescription,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.seoTitle,
        description: service.description,
        url,
        provider: { "@id": organizationId },
        areaServed: ["United Kingdom", "United Arab Emirates"],
        image: imageUrl,
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: imageUrl,
        contentUrl: imageUrl,
        caption: `${service.title} services by ${siteConfig.name}`,
      },
      breadcrumb,
    ],
  };
}

export function collectionPageJsonLd(
  name: string,
  description: string,
  path: string,
  items: Array<{ name: string; path: string }>,
): JsonLdNode {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  };
}

export function webPageJsonLd(
  type: "AboutPage" | "ContactPage",
  name: string,
  description: string,
  path: string,
): JsonLdNode {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}

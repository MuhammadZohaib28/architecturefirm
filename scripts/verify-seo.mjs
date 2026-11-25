const baseUrl = process.env.SEO_BASE_URL ?? "http://127.0.0.1:3000";
const productionOrigin = "https://studiolissom.com";
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function getAttribute(tag, name) {
  return tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1];
}

function getMeta(html, key, value) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const tag = tags.find((candidate) => getAttribute(candidate, key) === value);
  return tag ? getAttribute(tag, "content") : undefined;
}

function getLink(html, rel) {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  return tags.find((candidate) =>
    (getAttribute(candidate, "rel") ?? "").split(/\s+/).includes(rel),
  );
}

function normalizeUrl(value) {
  return value?.replace(/\/$/, "") || productionOrigin;
}

function parseJsonLd(html, path) {
  const payloads = [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ].map((match) => match[1]);

  check(payloads.length > 0, `${path}: missing JSON-LD`);
  return payloads.flatMap((payload, index) => {
    try {
      return [JSON.parse(payload)];
    } catch (error) {
      failures.push(`${path}: JSON-LD ${index + 1} is invalid (${error.message})`);
      return [];
    }
  });
}

function collectTypes(value, types = new Set()) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectTypes(item, types));
  } else if (value && typeof value === "object") {
    const type = value["@type"];
    if (typeof type === "string") types.add(type);
    Object.values(value).forEach((item) => collectTypes(item, types));
  }
  return types;
}

async function get(path) {
  return fetch(new URL(path, baseUrl), { redirect: "manual" });
}

const sitemapResponse = await get("/sitemap.xml");
check(sitemapResponse.status === 200, `/sitemap.xml: expected 200, got ${sitemapResponse.status}`);
check(
  sitemapResponse.headers.get("content-type")?.includes("application/xml"),
  "/sitemap.xml: invalid content type",
);
const sitemap = await sitemapResponse.text();
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1],
);
const imageUrls = [...sitemap.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(
  (match) => match[1],
);
check(sitemapUrls.length === 10, `sitemap: expected 10 page URLs, got ${sitemapUrls.length}`);
check(!sitemap.includes("<lastmod>"), "sitemap: contains an unverified lastModified value");
check(new Set(sitemapUrls).size === sitemapUrls.length, "sitemap: contains duplicate URLs");

const titles = new Map();
const descriptions = new Map();
const linkedPaths = new Set();

for (const sitemapUrl of sitemapUrls) {
  const productionUrl = new URL(sitemapUrl);
  const path = productionUrl.pathname;
  const response = await get(path);
  const html = await response.text();

  check(response.status === 200, `${path}: expected 200, got ${response.status}`);
  check(
    response.headers.get("content-type")?.includes("text/html"),
    `${path}: invalid content type`,
  );

  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
  const description = getMeta(html, "name", "description");
  const robots = getMeta(html, "name", "robots");
  const canonicalTag = getLink(html, "canonical");
  const canonical = canonicalTag && getAttribute(canonicalTag, "href");
  const expectedCanonical = `${productionOrigin}${path === "/" ? "" : path}`;
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;

  check(Boolean(title), `${path}: missing title`);
  check(Boolean(description), `${path}: missing meta description`);
  check(h1Count === 1, `${path}: expected one h1, got ${h1Count}`);
  check(normalizeUrl(canonical) === expectedCanonical, `${path}: incorrect canonical ${canonical}`);
  check(robots?.includes("index") && robots?.includes("follow"), `${path}: not indexable`);
  check(getMeta(html, "property", "og:title"), `${path}: missing og:title`);
  check(getMeta(html, "property", "og:description"), `${path}: missing og:description`);
  check(getMeta(html, "property", "og:image"), `${path}: missing og:image`);
  check(
    normalizeUrl(getMeta(html, "property", "og:url")) === expectedCanonical,
    `${path}: incorrect og:url`,
  );
  check(getMeta(html, "name", "twitter:card"), `${path}: missing twitter card`);

  if (title) {
    check(!titles.has(title), `${path}: duplicate title also used by ${titles.get(title)}`);
    titles.set(title, path);
  }
  if (description) {
    check(
      !descriptions.has(description),
      `${path}: duplicate description also used by ${descriptions.get(description)}`,
    );
    descriptions.set(description, path);
  }

  const jsonLd = parseJsonLd(html, path);
  const types = collectTypes(jsonLd);
  check(types.has("Organization"), `${path}: missing shared Organization schema`);
  check(types.has("WebSite"), `${path}: missing shared WebSite schema`);
  if (path.startsWith("/services/")) {
    check(types.has("Service"), `${path}: missing Service schema`);
    check(types.has("BreadcrumbList"), `${path}: missing BreadcrumbList schema`);
  } else if (path.startsWith("/projects/")) {
    check(types.has("CreativeWork"), `${path}: missing CreativeWork schema`);
    check(types.has("BreadcrumbList"), `${path}: missing BreadcrumbList schema`);
  } else if (path === "/services" || path === "/projects") {
    check(types.has("CollectionPage"), `${path}: missing CollectionPage schema`);
    check(types.has("ItemList"), `${path}: missing ItemList schema`);
  } else if (path === "/about") {
    check(types.has("AboutPage"), `${path}: missing AboutPage schema`);
  } else if (path === "/contact") {
    check(types.has("ContactPage"), `${path}: missing ContactPage schema`);
  }

  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/gi)) {
    const href = match[1];
    if (href === "#") failures.push(`${path}: contains an empty fragment link`);
    if (!href.startsWith("/")) continue;
    linkedPaths.add(new URL(href, productionOrigin).pathname);
  }
}

for (const sitemapUrl of sitemapUrls) {
  const path = new URL(sitemapUrl).pathname;
  if (path !== "/") check(linkedPaths.has(path), `${path}: orphaned from crawlable links`);
}

for (const path of linkedPaths) {
  const response = await get(path);
  check(
    response.status >= 200 && response.status < 400,
    `${path}: internal link returned ${response.status}`,
  );
}

for (const imageUrl of new Set(imageUrls)) {
  const path = new URL(imageUrl).pathname;
  const response = await get(path);
  check(response.status === 200, `${path}: sitemap image returned ${response.status}`);
  check(
    response.headers.get("content-type")?.startsWith("image/"),
    `${path}: sitemap image has invalid content type`,
  );
}

const robotsResponse = await get("/robots.txt");
const robots = await robotsResponse.text();
check(robotsResponse.status === 200, `/robots.txt: expected 200, got ${robotsResponse.status}`);
check(robots.includes("Allow: /"), "/robots.txt: production crawl is not allowed");
check(robots.includes(`${productionOrigin}/sitemap.xml`), "/robots.txt: sitemap is missing");
check(!robots.includes("Disallow: /\n"), "/robots.txt: production site is globally blocked");

for (const asset of [
  "/favicon.ico",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/site.webmanifest",
]) {
  const response = await get(asset);
  check(response.status === 200, `${asset}: expected 200, got ${response.status}`);
}

if (failures.length > 0) {
  console.error(`SEO verification failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `SEO verification passed: ${sitemapUrls.length} routes, ${linkedPaths.size} internal paths, ${new Set(imageUrls).size} sitemap images.`,
);

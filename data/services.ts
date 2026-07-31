export type ProcessStep = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  excerpt: string;
  description: string;
  heroImage: string;
  cardImage: string;
  included: string[];
  approach: string;
  benefits: string[];
  process: ProcessStep[];
  faqs: Faq[];
  relatedProjects: string[]; // project slugs
};

export const services: Service[] = [
  {
    slug: "residential-architect-services",
    number: "01",
    title: "Residential Architect Services",
    tagline: "Homes shaped by timeless architecture and exceptional craft.",
    excerpt:
      "Extensions, renovations, conversions, interiors, and new builds — designed and delivered with precision and care.",
    description:
      "Enhancing homes with timeless architecture, intelligent design, and exceptional craftsmanship, we deliver projects that add lasting value. As designers and builders, we transform your vision into a reality with precision and care.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    included: [
      "Extensions",
      "Renovations",
      "Conversions",
      "Interiors",
      "New builds",
      "Planning permission",
    ],
    approach:
      "At Lissom Architects, we believe that every home should be thoughtfully crafted to enrich lives while respecting the environment. We champion low-energy construction methods, responsibly sourced materials, and local craftsmanship wherever possible — embracing the character of each site and the resources of its surrounding community. Every project is a journey of transformation: we listen carefully, design thoughtfully, and deliver architecture that balances performance, comfort, and timeless quality.",
    benefits: [
      "Tailored design excellence",
      "Uncompromising quality",
      "Complete cost confidence",
      "A home deeply connected to its place",
    ],
    process: [
      { title: "Discovery", description: "We listen, study the site, and define the brief." },
      { title: "Concept", description: "Massing, plan, and the central design idea take form." },
      { title: "Design & Planning", description: "Detail resolved and planning permission secured." },
      { title: "Documentation", description: "Drawings prepared for construction." },
      { title: "Build Support", description: "As designer-builders, we deliver with precision and care." },
    ],
    faqs: [
      {
        question: "Do you handle planning permission?",
        answer:
          "Yes. We manage the planning process end to end — from feasibility and design through to submission and approvals.",
      },
      {
        question: "Do you work on extensions and renovations as well as new builds?",
        answer:
          "Absolutely. Extensions, renovations, and conversions are a core part of our residential work, alongside complete new builds.",
      },
      {
        question: "Are you designers or builders?",
        answer:
          "Both. As designer-builders we carry your project from first sketch through to a finished, carefully delivered home.",
      },
    ],
    relatedProjects: ["maison-lumiere", "ridgeline-residence", "atrium-house"],
  },
  {
    slug: "commercial-hospitality-retail-interiors",
    number: "02",
    title: "Commercial, Hospitality & Retail Interiors",
    tagline: "Spaces that balance form and function — and leave a lasting impression.",
    excerpt:
      "Productive workplaces, engaging retail spaces, and welcoming hospitality settings, designed around your brand.",
    description:
      "We craft commercial environments that balance form and function — productive workplaces, engaging retail spaces, and welcoming hospitality settings designed to leave a lasting impression.",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    included: [
      "Office & Workplace Interiors",
      "Retail & Showroom Spaces",
      "Hospitality Design",
      "Brand-Aligned Environments",
      "Technical Services — CGI models & animation",
      "Presentation, marketing & record drawings",
    ],
    approach:
      "Our technical services bring each scheme to life before it is built — creating CGI models and animation of the project, and preparing special presentations, marketing, and record drawings, models, and photography. Every environment is designed to express and elevate your brand while working seamlessly day to day.",
    benefits: [
      "Environments that express and elevate your brand",
      "Purposeful layouts designed for productivity and seamless flow",
      "Distinctive spaces that engage, inspire, and attract",
    ],
    process: [
      { title: "Brief", description: "We align on brand, function, and goals." },
      { title: "Concept", description: "The spatial identity is established." },
      { title: "Visualization", description: "CGI models and animation preview the result." },
      { title: "Documentation", description: "Fit-out and record drawings are prepared." },
      { title: "Delivery", description: "We support the fit-out through to completion." },
    ],
    faqs: [
      {
        question: "Do you provide CGI and visualization?",
        answer:
          "Yes. Our technical services include CGI models and animation, plus presentation, marketing, and record drawings, models, and photography.",
      },
      {
        question: "Can you align the interior with our brand?",
        answer:
          "Brand-aligned environments are central to our commercial work — we design every space to express and elevate your brand.",
      },
    ],
    relatedProjects: ["skyline-offices", "harbor-retail", "the-gallery-loft"],
  },
  {
    slug: "integrated-spatial-brand-design",
    number: "03",
    title: "Integrated Spatial & Brand Design",
    tagline: "Complete brand experiences that extend beyond the built environment.",
    excerpt:
      "Interior design, brand identity, packaging, signage, and visual communications — every touchpoint, one story.",
    description:
      "We create complete brand experiences that extend beyond the built environment. By combining interior design, brand identity, packaging, signage, and visual communications, we ensure every customer touchpoint reflects a cohesive and memorable brand story.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80",
    included: [
      "Brand Identity & Logo Design",
      "Packaging Design (Food, Beverage & Retail Products)",
      "Signage & Environmental Graphics",
      "Interior Design",
      "Technical Services — CGI models & animation",
      "Presentation, marketing & record drawings",
    ],
    approach:
      "We bring spatial design and visual identity together so that the building, the interior, and the brand within it all speak with one voice. Our technical services create CGI models and animation of the project, alongside special presentations, marketing, and record drawings, models, and photography — ensuring a clear and consistent brand experience across every touchpoint.",
    benefits: [
      "Architecture, interiors, and branding under one roof",
      "Seamless brand experiences across every touchpoint",
      "Designs that add long-term value",
    ],
    process: [
      { title: "Discovery", description: "We define the brand story and spatial goals." },
      { title: "Identity", description: "Brand identity, logo, and visual language are designed." },
      { title: "Space & Graphics", description: "Interiors, signage, and packaging are developed together." },
      { title: "Visualization", description: "CGI and presentations preview the full experience." },
      { title: "Delivery", description: "Every touchpoint is delivered to a single standard." },
    ],
    faqs: [
      {
        question: "Do you design brand identity and logos?",
        answer:
          "Yes — brand identity and logo design sit alongside packaging, signage, and environmental graphics in our integrated offer.",
      },
      {
        question: "Can you do packaging and signage as well as interiors?",
        answer:
          "We design across packaging (food, beverage, and retail products), signage, environmental graphics, and the interiors they live in — as one cohesive experience.",
      },
    ],
    relatedProjects: ["harbor-retail", "the-gallery-loft", "skyline-offices"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

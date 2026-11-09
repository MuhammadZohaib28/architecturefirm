export type ProjectCategory = "Residential";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  area: string;
  client: string;
  scope: string[];
  excerpt: string;
  story: string;
  heroImage: string;
  coverImage: string;
  gallery: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "the-gables",
    title: "The Gables by Lissom",
    category: "Residential",
    location: "Essex, England",
    year: "2026",
    area: "6,854 m²",
    client: "Private Residence",
    scope: ["Architecture", "Interior Design", "Landscape"],
    excerpt:
      "A contemporary family residence defined by a rhythm of pitched roofs, textured brickwork and expansive glazing.",
    story:
      "The Gables explores the relationship between traditional residential forms and contemporary living. Its distinctive series of gabled volumes creates a strong architectural identity, while warm brickwork, dark metal detailing and floor-to-ceiling glazing establish a balance between solidity and transparency. Generous openings connect the interior to the surrounding landscape, allowing natural light to shape the atmosphere of the home throughout the day. The result is a modern residence that draws on the familiar character of the English domestic landscape while embracing a refined, contemporary material palette.",
    heroImage: "/images/projects/the-gables/front-day.jpg",
    coverImage: "/images/projects/the-gables/front-oblique.png",
    gallery: [
      "/images/projects/the-gables/front-oblique.png",
      "/images/projects/the-gables/front-entry.jpg",
      "/images/projects/the-gables/front-night.jpg",
      "/images/projects/the-gables/winter-elevation.jpg",
      "/images/projects/the-gables/rear-elevation.jpg",
      "/images/projects/the-gables/rear-detail.jpg",
      "/images/projects/the-gables/rear-night.jpg",
      "/images/projects/the-gables/dining-room.png",
      "/images/projects/the-gables/kitchen-dining.png",
      "/images/projects/the-gables/ground-floor-plan.png",
      "/images/projects/the-gables/first-floor-plan.png",
    ],
    featured: true,
  },
  {
    slug: "the-willow-house",
    title: "The Willow House by Lissom",
    category: "Residential",
    location: "Chelmsford, Essex, England",
    year: "2026",
    area: "3,526 m²",
    client: "Private Residence",
    scope: ["Architecture", "Interior Design", "Landscape"],
    excerpt:
      "A contemporary residential extension centred around full-height glazing, natural materials and a stronger connection between indoor and outdoor living.",
    story:
      "The extension transforms the existing home by creating an open-plan kitchen, dining and living space, with expansive glazing that extends from floor level to the underside of the roof. The full-height glass façade floods the interior with natural light, frames views of the garden and establishes a seamless visual connection between the home and its landscape. Warm timber detailing, textured brickwork and slim dark-framed glazing bring material warmth and architectural clarity to the addition. The result is a brighter, more sociable layout designed around everyday family life, bringing cooking, dining and relaxation together in one generous, interconnected space.",
    heroImage: "/images/projects/the-willow-house/rear-extension.png",
    coverImage: "/images/projects/the-willow-house/front-day.png",
    gallery: [
      "/images/projects/the-willow-house/front-day.png",
      "/images/projects/the-willow-house/front-detail.png",
      "/images/projects/the-willow-house/front-night.jpg",
      "/images/projects/the-willow-house/winter-front.jpg",
      "/images/projects/the-willow-house/rear-elevation.png",
      "/images/projects/the-willow-house/winter-rear.jpg",
      "/images/projects/the-willow-house/ground-floor-plan.png",
      "/images/projects/the-willow-house/first-floor-plan.png",
      "/images/projects/the-willow-house/kitchen.jpg",
      "/images/projects/the-willow-house/living-space.jpg",
      "/images/projects/the-willow-house/island-kitchen.jpg",
    ],
    featured: true,
  },
];

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Residential",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsBySlugs(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProject(slug))
    .filter((project): project is Project => Boolean(project));
}

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Renovation"
  | "Visualization";

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
  challenge: string;
  solution: string;
  materials: string[];
  highlights: string[];
  heroImage: string;
  coverImage: string;
  gallery: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "maison-lumiere",
    title: "Maison Lumière",
    category: "Residential",
    location: "Provence, France",
    year: "2024",
    area: "640 m²",
    client: "Private residence",
    scope: ["Architecture", "Interior Design", "Landscape"],
    excerpt:
      "A limestone villa organised around a sequence of courtyards and shifting daylight.",
    story:
      "Maison Lumière sits low against a Provençal hillside, its volumes pulled apart to admit gardens and frame distant views. The house is conceived as a journey through light — from the cool, shaded entry court to the sun-filled living spaces that open entirely to the landscape.",
    challenge:
      "A steeply sloping site with intense southern sun demanded a home that felt open and luminous without ever overheating or losing its sense of shelter.",
    solution:
      "We split the programme into stone volumes linked by glazed connectors, using deep reveals, courtyards, and a continuous roof plane to filter light and draw cross-ventilation through every room.",
    materials: ["Local limestone", "Lime plaster", "Oak", "Bronze", "Travertine"],
    highlights: [
      "Three landscaped courtyards",
      "12-metre retracting glass wall",
      "Passive cross-ventilation throughout",
      "Hand-laid local stone façade",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "ridgeline-residence",
    title: "Ridgeline Residence",
    category: "Residential",
    location: "Aspen, Colorado",
    year: "2023",
    area: "510 m²",
    client: "Private residence",
    scope: ["Architecture", "3D Visualization"],
    excerpt:
      "A timber-and-glass home cantilevered toward the mountains, all warmth and view.",
    story:
      "Perched on a ridge, this home frames an uninterrupted panorama of the range. Warm timber, blackened steel, and floor-to-ceiling glass create a refuge that feels both grounded and weightless against the alpine sky.",
    challenge:
      "Extreme climate and a narrow buildable ridge required a compact footprint that still captured the full sweep of the view.",
    solution:
      "A cantilevered living volume reaches toward the valley while a grounded stone base anchors the bedrooms, balancing drama with shelter and thermal performance.",
    materials: ["Cedar", "Blackened steel", "Granite", "Triple glazing"],
    highlights: [
      "9-metre cantilever",
      "Full-height mountain glazing",
      "Heated stone terraces",
      "Net-positive energy design",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "atrium-house",
    title: "Atrium House",
    category: "Residential",
    location: "Lisbon, Portugal",
    year: "2024",
    area: "380 m²",
    client: "Private residence",
    scope: ["Architecture", "Interior Design"],
    excerpt:
      "An urban home built around a planted atrium that pulls light deep into the plan.",
    story:
      "On a tight Lisbon plot, Atrium House turns inward. A full-height planted atrium becomes the heart of the home, washing every level with daylight and greenery while keeping the street life at arm's length.",
    challenge:
      "A deep, narrow urban site risked dark central rooms with little connection to the outdoors.",
    solution:
      "We carved a top-lit atrium through the centre of the plan, wrapping stairs and circulation around it so that light and planting reach every room.",
    materials: ["White plaster", "Travertine", "Oak", "Bronze mesh"],
    highlights: [
      "Full-height planted atrium",
      "Rooftop terrace & pool",
      "Hidden street façade",
      "Cross-level daylight",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "the-gallery-loft",
    title: "The Gallery Loft",
    category: "Interior",
    location: "New York, USA",
    year: "2023",
    area: "240 m²",
    client: "Private collector",
    scope: ["Interior Design", "Space Planning"],
    excerpt:
      "A collector's loft re-imagined as a serene, gallery-like backdrop for art and life.",
    story:
      "This warehouse loft was reconceived as a living gallery. A restrained palette of plaster, oak, and stone steps back to let the owner's art and the city light take centre stage.",
    challenge:
      "An open shell with beautiful proportions but no sense of intimacy or zoning for daily life.",
    solution:
      "Freestanding plaster volumes define rooms without touching the perimeter, preserving the loft's openness while creating calm, art-ready walls.",
    materials: ["Venetian plaster", "White oak", "Honed marble", "Patinated brass"],
    highlights: [
      "Freestanding room volumes",
      "Concealed gallery lighting",
      "Bespoke oak joinery",
      "Restored steel windows",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80",
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=1200&q=80",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "stone-court",
    title: "Stone Court",
    category: "Renovation",
    location: "Cotswolds, UK",
    year: "2022",
    area: "420 m²",
    client: "Private residence",
    scope: ["Renovation", "Architecture", "Interior Design"],
    excerpt:
      "A centuries-old farmhouse reawakened with a quiet contemporary extension.",
    story:
      "Stone Court pairs a restored period farmhouse with a calm contemporary wing. The new addition speaks softly to the old — same stone, simpler lines — letting both eras breathe.",
    challenge:
      "Adding modern space and light to a heritage building without overwhelming its character.",
    solution:
      "A low glass-and-stone extension extends the house into the garden, its restraint allowing the original farmhouse to remain the protagonist.",
    materials: ["Reclaimed stone", "Lime mortar", "Oak", "Steel glazing"],
    highlights: [
      "Heritage-sensitive extension",
      "Restored original stonework",
      "Garden-facing glass wing",
      "Underfloor heating retrofit",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80",
    ],
  },
  {
    slug: "skyline-offices",
    title: "Skyline Offices",
    category: "Commercial",
    location: "Singapore",
    year: "2023",
    area: "2,400 m²",
    client: "Technology company",
    scope: ["Commercial", "Interior Design", "Space Planning"],
    excerpt:
      "A headquarters that trades corporate gloss for daylight, timber, and calm focus.",
    story:
      "This workplace rejects the glass-and-grey office in favour of warmth. Timber, planting, and a generous central stair create a place people genuinely want to gather in and return to.",
    challenge:
      "A large, deep floorplate that risked feeling impersonal and poorly lit.",
    solution:
      "A sculptural timber stair connects floors and draws light to the core, while a varied palette of settings supports focus, collaboration, and rest.",
    materials: ["Oak", "Felt acoustic panels", "Terrazzo", "Powder-coated steel"],
    highlights: [
      "Sculptural connecting stair",
      "Biophilic planting strategy",
      "Acoustic zoning",
      "Flexible team neighbourhoods",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "azure-pavilion",
    title: "Azure Pavilion",
    category: "Visualization",
    location: "Concept · Aegean coast",
    year: "2024",
    area: "300 m²",
    client: "Speculative",
    scope: ["3D Visualization", "Architecture"],
    excerpt:
      "A conceptual cliffside pavilion explored entirely through photoreal visualization.",
    story:
      "Azure Pavilion is a speculative study: a single-storey retreat dissolving into an infinity edge above the sea. Rendered photorealistically, it let us test light, reflection, and material long before any site existed.",
    challenge:
      "Communicating the experience of an unbuilt, view-defined space convincingly enough to evaluate it.",
    solution:
      "A full photoreal visualization suite — stills, animation, and panoramas — captured the pavilion across the full arc of a day, from dawn calm to dusk fire.",
    materials: ["Concrete", "Glass", "Stone", "Water"],
    highlights: [
      "Photoreal day-to-night study",
      "Infinity-edge reflecting pool",
      "360° panoramic walkthrough",
      "Material light testing",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    ],
  },
  {
    slug: "harbor-retail",
    title: "Harbor Flagship",
    category: "Commercial",
    location: "Copenhagen, Denmark",
    year: "2022",
    area: "320 m²",
    client: "Fashion house",
    scope: ["Commercial", "Interior Design"],
    excerpt:
      "A flagship store staged like a quiet gallery for a Scandinavian fashion house.",
    story:
      "Harbor Flagship presents clothing the way a museum presents objects. A pale, tactile palette and considered lighting turn shopping into an unhurried, gallery-like experience.",
    challenge:
      "Creating a memorable retail identity without resorting to loud, disposable fit-out.",
    solution:
      "Monolithic plaster forms, warm oak, and a single brass thread give the store a calm permanence that lets the product speak.",
    materials: ["Microcement", "Oak", "Brass", "Linen"],
    highlights: [
      "Monolithic display plinths",
      "Layered architectural lighting",
      "Bespoke brass rails",
      "Flexible plinth system",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1200&q=80",
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=1200&q=80",
    ],
  },
];

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Renovation",
  "Visualization",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsBySlugs(slugs: string[]): Project[] {
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
}

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
    slug: "architectural-design",
    number: "01",
    title: "Architectural Design",
    tagline: "Buildings that hold their composure for decades.",
    excerpt:
      "Ground-up architecture for homes, buildings, and civic spaces — resolved in proportion, light, and material.",
    description:
      "Our architectural design practice begins with the site and the people who will inhabit it. We translate ambition into buildable, beautiful form — balancing structure, daylight, circulation, and material honesty so that every project feels inevitable rather than imposed.",
    heroImage:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    included: [
      "Site analysis & feasibility",
      "Concept & schematic design",
      "Design development drawings",
      "Material & façade strategy",
      "Permit & construction documentation",
      "Coordination with engineers",
    ],
    approach:
      "We design from the inside out and the outside in at once — testing every move against light, proportion, and lived experience until the plan, section, and elevation speak the same language.",
    benefits: [
      "A coherent design language across the whole project",
      "Spaces tuned to natural light and orientation",
      "Documentation that protects quality on site",
      "Long-term value through timeless detailing",
    ],
    process: [
      { title: "Discovery", description: "We listen, study the site, and define the brief." },
      { title: "Concept", description: "Massing, plan, and the central design idea take form." },
      { title: "Development", description: "Detail, material, and structure are resolved together." },
      { title: "Documentation", description: "Drawings prepared for permit and construction." },
      { title: "Support", description: "We stay involved through construction to protect intent." },
    ],
    faqs: [
      {
        question: "Do you work on both new builds and additions?",
        answer:
          "Yes. We take on ground-up architecture as well as significant extensions and reconfigurations where the architectural ambition warrants a full design process.",
      },
      {
        question: "How long does the design phase take?",
        answer:
          "Concept through documentation typically runs three to six months depending on scale and complexity. We give a tailored timeline after the discovery phase.",
      },
      {
        question: "Can you work with our chosen contractor?",
        answer:
          "Absolutely. We collaborate with your builder or recommend trusted partners, and remain available through construction to safeguard the design.",
      },
    ],
    relatedProjects: ["maison-lumiere", "ridgeline-residence", "atrium-house"],
  },
  {
    slug: "interior-design",
    number: "02",
    title: "Interior Design",
    tagline: "Interiors composed like still rooms of light.",
    excerpt:
      "Considered interiors where materiality, furniture, and atmosphere are designed as one continuous gesture.",
    description:
      "We treat interiors as architecture at the scale of touch. Every surface, joint, and fixture is selected to age gracefully and to support the way a space is actually lived in — calm, tactile, and quietly luxurious.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    included: [
      "Spatial & joinery design",
      "Material & finish palettes",
      "Custom furniture design",
      "Lighting design",
      "FF&E specification",
      "Styling & handover",
    ],
    approach:
      "Restraint over decoration. We build interiors from a tight palette of honest materials, then let proportion and light do the work.",
    benefits: [
      "A cohesive, collected-over-time atmosphere",
      "Bespoke joinery tailored to your life",
      "Lighting that flatters every hour of the day",
      "Durable, tactile materials that improve with age",
    ],
    process: [
      { title: "Brief", description: "We map how you live and what the space must hold." },
      { title: "Concept", description: "Mood, materials, and spatial moves are defined." },
      { title: "Detailing", description: "Joinery, lighting, and finishes are drawn precisely." },
      { title: "Procurement", description: "Furniture and fittings are sourced and managed." },
      { title: "Styling", description: "We install, style, and hand over a finished room." },
    ],
    faqs: [
      {
        question: "Do you design custom furniture?",
        answer:
          "Yes — bespoke joinery and select furniture pieces are central to our interiors, drawn and made specifically for the space.",
      },
      {
        question: "Can you work alongside our architect?",
        answer:
          "We frequently collaborate with external architects, integrating our interior strategy early so the result reads as a single design.",
      },
    ],
    relatedProjects: ["maison-lumiere", "the-gallery-loft", "stone-court"],
  },
  {
    slug: "3d-visualization",
    number: "03",
    title: "3D Visualization",
    tagline: "See the space before a single wall is built.",
    excerpt:
      "Photoreal renders and walkthroughs that let you experience and refine a design with total confidence.",
    description:
      "Our visualization studio produces architectural imagery indistinguishable from photography. We use it not as decoration but as a design tool — testing light, material, and atmosphere so decisions are made with clarity, not guesswork.",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    included: [
      "Exterior & interior stills",
      "Day & night lighting studies",
      "Animated walkthroughs",
      "Material & finish previews",
      "360° panoramas",
      "Marketing-ready imagery",
    ],
    approach:
      "We model accurately and light cinematically, treating each frame as a photograph waiting to be taken.",
    benefits: [
      "Confident decisions before construction",
      "Fewer costly changes on site",
      "Compelling imagery for approvals and sales",
      "A shared, vivid vision for every stakeholder",
    ],
    process: [
      { title: "Inputs", description: "We gather drawings, materials, and references." },
      { title: "Modeling", description: "An accurate 3D model is built to scale." },
      { title: "Lighting", description: "Natural and artificial light are studied." },
      { title: "Rendering", description: "High-resolution frames are produced." },
      { title: "Refinement", description: "We grade and adjust to a final image." },
    ],
    faqs: [
      {
        question: "What do you need to start?",
        answer:
          "Plans, elevations or sketches, and any known materials. The more detail you provide, the more accurate the result.",
      },
      {
        question: "Can renders be used for marketing?",
        answer:
          "Yes. We deliver high-resolution, print- and web-ready imagery suited to brochures, listings, and approvals.",
      },
    ],
    relatedProjects: ["ridgeline-residence", "skyline-offices", "atrium-house"],
  },
  {
    slug: "space-planning",
    number: "04",
    title: "Space Planning",
    tagline: "The quiet logic beneath a great space.",
    excerpt:
      "Plans that resolve flow, daylight, and function so a building simply works the moment you step in.",
    description:
      "Space planning is the discipline that makes the difference between a room and the right room. We study circulation, adjacency, and daylight to draw plans that feel effortless — generous where it matters, efficient everywhere else.",
    heroImage:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    included: [
      "Functional brief & adjacencies",
      "Circulation studies",
      "Daylight & orientation analysis",
      "Furniture layout planning",
      "Zoning & flow diagrams",
      "Optimized floor plans",
    ],
    approach:
      "We plan around movement and light first, then let the architecture follow the way people will actually move through it.",
    benefits: [
      "Spaces that feel larger and calmer",
      "Efficient, intuitive circulation",
      "Better daylight in everyday rooms",
      "Layouts that flex as needs change",
    ],
    process: [
      { title: "Brief", description: "We define functions, adjacencies, and priorities." },
      { title: "Analysis", description: "Circulation and daylight are mapped." },
      { title: "Options", description: "Alternative layouts are tested and compared." },
      { title: "Resolution", description: "The strongest plan is refined in detail." },
    ],
    faqs: [
      {
        question: "Is space planning a standalone service?",
        answer:
          "It can be. Some clients engage us purely to resolve a difficult plan; for others it is the first phase of a full architectural commission.",
      },
    ],
    relatedProjects: ["skyline-offices", "stone-court", "the-gallery-loft"],
  },
  {
    slug: "residential-projects",
    number: "05",
    title: "Residential Projects",
    tagline: "Homes designed around a life, not a layout.",
    excerpt:
      "From luxury villas to apartments — private homes shaped by light, landscape, and the people within them.",
    description:
      "Residential work is the heart of our studio. We design houses, villas, and apartments that feel deeply personal: rooted in their site, generous with daylight, and detailed for a lifetime of use.",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    included: [
      "Custom villa & house design",
      "Apartment & duplex design",
      "Interior architecture",
      "Landscape integration",
      "Material & finish curation",
      "Construction support",
    ],
    approach:
      "We design homes that hold both grandeur and intimacy — places that feel impressive at the threshold and restful by the window.",
    benefits: [
      "A home tailored precisely to how you live",
      "Seamless connection between inside and garden",
      "Timeless materials that age beautifully",
      "Considered detail in every room",
    ],
    process: [
      { title: "Discovery", description: "We learn how you want to live, day to day." },
      { title: "Concept", description: "The house takes shape around site and light." },
      { title: "Design", description: "Interiors and architecture are resolved together." },
      { title: "Documentation", description: "Drawings prepared for build." },
      { title: "Support", description: "We guide the project through construction." },
    ],
    faqs: [
      {
        question: "Do you take on renovations as well as new homes?",
        answer:
          "Yes — many of our residential commissions are transformative renovations of existing houses and apartments.",
      },
      {
        question: "Do you design the interiors too?",
        answer:
          "Almost always. We believe a home is strongest when its architecture and interiors are designed as one.",
      },
    ],
    relatedProjects: ["maison-lumiere", "ridgeline-residence", "stone-court"],
  },
  {
    slug: "commercial-projects",
    number: "06",
    title: "Commercial Projects",
    tagline: "Workplaces and retail with a sense of arrival.",
    excerpt:
      "Offices, retail, and hospitality spaces that perform commercially and feel unmistakably considered.",
    description:
      "We design commercial environments that work as hard as they look — offices that support focus and collaboration, retail that frames product beautifully, and hospitality spaces that hold an atmosphere from the first step inside.",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    included: [
      "Office & workplace design",
      "Retail & showroom design",
      "Hospitality interiors",
      "Brand-aligned spatial identity",
      "Wayfinding & flow",
      "Fit-out documentation",
    ],
    approach:
      "We balance brand, function, and atmosphere — designing spaces that express who a business is while quietly making it work better.",
    benefits: [
      "Environments that strengthen your brand",
      "Layouts tuned for productivity and flow",
      "Memorable spaces that draw people in",
      "Durable specifications for high-traffic use",
    ],
    process: [
      { title: "Brief", description: "We align on brand, function, and goals." },
      { title: "Concept", description: "The spatial identity is established." },
      { title: "Design", description: "Layout, materials, and detail are resolved." },
      { title: "Documentation", description: "Fit-out drawings are prepared." },
      { title: "Delivery", description: "We support the fit-out to completion." },
    ],
    faqs: [
      {
        question: "Do you handle fit-out as well as design?",
        answer:
          "We design and document the fit-out and coordinate closely with contractors through delivery to protect the result.",
      },
    ],
    relatedProjects: ["skyline-offices", "the-gallery-loft", "atrium-house"],
  },
  {
    slug: "renovation-remodeling",
    number: "07",
    title: "Renovation & Remodeling",
    tagline: "Giving good bones a second, better life.",
    excerpt:
      "Transformative renovation that respects what's worth keeping and reimagines everything else.",
    description:
      "Renovation is part archaeology, part invention. We read the existing structure carefully, preserve its best qualities, and introduce light, space, and contemporary detail to bring it confidently into the present.",
    heroImage:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80",
    included: [
      "Existing-condition survey",
      "Structural reconfiguration",
      "Extension design",
      "Material & finish renewal",
      "Services upgrade coordination",
      "Heritage-sensitive detailing",
    ],
    approach:
      "We keep what gives a building character and rework the rest — letting old and new sit together with intent.",
    benefits: [
      "More light and space without losing character",
      "Modern performance within an older shell",
      "A confident dialogue between old and new",
      "Increased long-term property value",
    ],
    process: [
      { title: "Survey", description: "We document the existing building precisely." },
      { title: "Strategy", description: "We decide what to keep, remove, and add." },
      { title: "Design", description: "New interventions are designed in detail." },
      { title: "Documentation", description: "Drawings prepared for construction." },
      { title: "Support", description: "We guide the build through to completion." },
    ],
    faqs: [
      {
        question: "Can you work with heritage or listed buildings?",
        answer:
          "Yes. We have experience designing sensitively within heritage constraints and coordinating the necessary approvals.",
      },
    ],
    relatedProjects: ["stone-court", "the-gallery-loft", "maison-lumiere"],
  },
  {
    slug: "project-consultation",
    number: "08",
    title: "Project Consultation",
    tagline: "Clarity before commitment.",
    excerpt:
      "Strategic advice, feasibility, and design direction to set your project on the right footing from day one.",
    description:
      "Sometimes you need direction before a full commission. Our consultation service gives you expert feasibility, design strategy, and a clear-eyed view of cost, programme, and possibility — so you can move forward with confidence.",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=1200&q=80",
    included: [
      "Feasibility studies",
      "Site & opportunity assessment",
      "Design direction & briefing",
      "Budget & programme guidance",
      "Planning strategy advice",
      "Second-opinion design reviews",
    ],
    approach:
      "We give honest, experienced counsel — the same judgment we bring to our own projects, focused entirely on yours.",
    benefits: [
      "Confidence before you commit capital",
      "A realistic view of cost and timeline",
      "A clear brief to brief others against",
      "Risks identified early, not late",
    ],
    process: [
      { title: "Intake", description: "We understand your goals and constraints." },
      { title: "Assessment", description: "We study the site and opportunity." },
      { title: "Direction", description: "We deliver findings and recommendations." },
    ],
    faqs: [
      {
        question: "Can a consultation lead into a full project?",
        answer:
          "Often it does. The consultation stands alone, but it also makes an ideal first step into a full design commission with us.",
      },
    ],
    relatedProjects: ["atrium-house", "skyline-offices", "ridgeline-residence"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export type ProcessStep = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ServicePackage = {
  title: string;
  price: string;
  description: string;
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
  startingPrice: string;
  packages: ServicePackage[];
  included: string[];
  approach: string;
  benefits: string[];
  process: ProcessStep[];
  faqs: Faq[];
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: "concept",
    number: "01",
    title: "Concept",
    tagline: "See the potential before you commit.",
    excerpt:
      "Unsure of your property's potential? Let us help you visualise it from just £250.",
    description:
      "Start with a free initial on-site meeting, then explore the property's potential through clear, proportionate design work.",
    heroImage: "/images/projects/the-gables/dining-room.png",
    cardImage: "/images/projects/the-gables/kitchen-dining.png",
    startingPrice: "From £250",
    packages: [
      {
        title: "Initial On-Site Meeting",
        price: "Free of charge",
        description:
          "A visit to understand the property, brief and opportunities before design work begins.",
      },
      {
        title: "2D Design Proposals",
        price: "From £250",
        description:
          "Localised plans, elevations and sections of the proposal, with design variations and follow-up on-site discussion. A measured survey may be required.",
      },
      {
        title: "CGI Models & Animation",
        price: "From £300",
        description:
          "Visual material that helps you understand the proposal before work begins.",
      },
      {
        title: "Full House Renovation & New Builds",
        price: "From £1,400",
        description:
          "A more comprehensive concept package for whole-home renovation and new-build projects.",
      },
    ],
    included: [
      "Initial on-site meeting",
      "Localised plans, elevations and sections",
      "Design variations to explore options",
      "Follow-up on-site discussion",
      "Optional CGI models and animation",
    ],
    approach:
      "If you need a cost estimate before committing to your project, we can prepare a basic conceptual design proposal that allows contractors to provide more accurate ballpark figures before the process moves forward.",
    benefits: [
      "Understand the property's potential early",
      "Compare design options before committing",
      "Seek more informed early cost estimates",
    ],
    process: [
      { title: "Meet", description: "We visit the property and discuss your aims." },
      { title: "Explore", description: "We prepare and compare initial design directions." },
      { title: "Visualise", description: "Plans and optional CGI make the preferred direction clear." },
    ],
    faqs: [
      {
        question: "Is the first meeting charged?",
        answer: "No. The initial on-site meeting is free of charge.",
      },
      {
        question: "Will I need a measured survey?",
        answer:
          "A measured survey may be required depending on the property and the scope of the proposal.",
      },
    ],
    relatedProjects: ["the-gables", "the-willow-house"],
  },
  {
    slug: "planning",
    number: "02",
    title: "Planning",
    tagline: "From survey to submission, in one clear process.",
    excerpt:
      "All your planning needs, from survey to approval, with planning drawings from £1,000.",
    description:
      "We prepare the measured information, planning drawings and submission documents needed to take a proposal through the planning process.",
    heroImage: "/images/projects/the-gables/ground-floor-plan.png",
    cardImage: "/images/projects/the-gables/first-floor-plan.png",
    startingPrice: "From £1,000",
    packages: [
      {
        title: "Measured Site Survey",
        price: "From £200",
        description:
          "Floor plans, elevations, roof information and the localised area of the existing property required for the bespoke proposal.",
      },
      {
        title: "Porches, Single-Storey Extensions, Annexes & Outbuildings",
        price: "From £1,000",
        description:
          "Existing and proposed plans suitable for a planning submission.",
      },
      {
        title: "Two-Storey Extensions & Loft Conversions",
        price: "From £1,250",
        description:
          "Existing and proposed plans suitable for a planning submission.",
      },
      {
        title: "Submission Package",
        price: "£300",
        description:
          "Preparation and submission of the planning application, associated documents, support through to the decision date and minor changes requested by the council.",
      },
    ],
    included: [
      "Measured floor plans and elevations",
      "Roof and localised site information",
      "Existing and proposed planning drawings",
      "Planning application preparation",
      "Associated submission documents",
      "Application support through to decision",
      "Minor changes requested by the council",
    ],
    approach:
      "A multi-service discount is available for integrated developments that combine more than one extension, such as a loft conversion with a rear extension.",
    benefits: [
      "One route from measured survey to submission",
      "Drawings tailored to the proposal",
      "Support through the council decision process",
    ],
    process: [
      { title: "Survey", description: "We record the existing property and site." },
      { title: "Draw", description: "Existing and proposed planning drawings are prepared." },
      { title: "Submit", description: "The application and associated documents are lodged." },
      { title: "Follow Through", description: "We support the application through to its decision." },
    ],
    faqs: [
      {
        question: "Can you submit the planning application for me?",
        answer:
          "Yes. The submission package covers preparation and submission of the application and associated documents.",
      },
      {
        question: "Do you offer a discount for combined works?",
        answer:
          "A multi-service discount is available for integrated developments involving more than one extension.",
      },
    ],
    relatedProjects: ["the-gables", "the-willow-house"],
  },
  {
    slug: "building-control",
    number: "03",
    title: "Building Control",
    tagline: "Technical drawings that carry the design into construction.",
    excerpt:
      "Detailed technical plans for Structural Engineer coordination, Building Control sign-off and construction on site.",
    description:
      "We produce detailed technical plans and construction drawings suitable for coordination with your Structural Engineer, Building Control approval and use by your builders on site.",
    heroImage: "/images/projects/the-willow-house/ground-floor-plan.png",
    cardImage: "/images/projects/the-willow-house/first-floor-plan.png",
    startingPrice: "From £1,250",
    packages: [
      {
        title: "Complete Package",
        price: "From £1,250",
        description:
          "The technical drawing information required to progress a project from design through to Building Control and construction. Free quotations are available.",
      },
    ],
    included: [
      "Existing and proposed architectural drawings",
      "Detailed floor plans, elevations and sections",
      "Technical construction drawings",
      "Building Regulation details",
      "Wall, floor and roof construction details",
      "Window and door details",
      "Structural Engineer coordination",
      "Building Control submission drawings",
      "Construction and setting-out layouts for builders",
      "Technical revisions following Building Control comments",
    ],
    approach:
      "Contact us with your existing drawings, planning approval or project details and we can provide a tailored quotation.",
    benefits: [
      "Coordinated technical information",
      "Drawings suitable for Building Control",
      "Clear construction information for builders",
    ],
    process: [
      { title: "Review", description: "We assess the design information and planning position." },
      { title: "Detail", description: "The technical drawing package is developed." },
      { title: "Coordinate", description: "We coordinate the package with the Structural Engineer." },
      { title: "Support", description: "Comments and revisions are addressed as the project progresses." },
    ],
    faqs: [
      {
        question: "Can you coordinate with my Structural Engineer?",
        answer:
          "Yes. Structural Engineer coordination is included within the technical drawing service.",
      },
      {
        question: "Can builders use these drawings on site?",
        answer:
          "The package includes construction and setting-out layouts prepared for use by builders on site.",
      },
    ],
    relatedProjects: ["the-gables", "the-willow-house"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

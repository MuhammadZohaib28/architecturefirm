import type { Faq } from "./services";

/** General studio FAQs used on the contact and about pages. */
export const generalFaqs: Faq[] = [
  {
    question: "Where are you based, and where do you work?",
    answer:
      "We are an architecture practice based in the UK and UAE, with studios in London and Dubai. We work across both regions and beyond, running commissions with periodic site visits.",
  },
  {
    question: "What kind of projects do you take on?",
    answer:
      "Residential and commercial work alike — new builds, extensions, renovations and conversions, alongside commercial, hospitality, and retail interiors and complete brand development.",
  },
  {
    question: "Do you really combine architecture, interiors, and branding?",
    answer:
      "Yes. Architecture, interiors, and branding sit under one roof, so every spatial and visual touchpoint works together to express a clear, consistent brand experience.",
  },
  {
    question: "How do your fees work?",
    answer:
      "Most commissions are charged as a percentage of construction cost or a fixed fee agreed after the initial brief. We offer clear communication and cost certainty from the first conversation.",
  },
  {
    question: "How early should we engage you?",
    answer:
      "As early as possible — ideally before a site is purchased. Early involvement is where we add the most value, shaping feasibility, budget, and ambition from the start.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We listen closely — to you, the site, and the brief — and define what success looks like.",
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "The central design idea emerges through sketches, massing studies, and material thinking.",
  },
  {
    number: "03",
    title: "Design & Visualization",
    description:
      "We resolve the design in three dimensions, testing light and material with photoreal imagery.",
  },
  {
    number: "04",
    title: "Planning & Documentation",
    description:
      "Drawings are prepared for approvals and construction, protecting design intent in detail.",
  },
  {
    number: "05",
    title: "Execution Support",
    description:
      "We stay involved on site, working with your builder to safeguard quality and resolve detail.",
  },
  {
    number: "06",
    title: "Final Review",
    description:
      "We walk the finished space with you, refine the last details, and hand over with care.",
  },
];

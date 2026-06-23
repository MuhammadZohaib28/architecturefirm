import type { Faq } from "./services";

/** General studio FAQs used on the contact and about pages. */
export const generalFaqs: Faq[] = [
  {
    question: "Where is the studio based, and where do you work?",
    answer:
      "Our studio is based in London, and we work internationally. Roughly half of our projects are abroad, and we are set up to run commissions remotely with periodic site visits.",
  },
  {
    question: "What size of project do you take on?",
    answer:
      "From single apartments and interiors through to large homes and commercial fit-outs. If a project excites us and we can do it justice, scale is rarely the deciding factor.",
  },
  {
    question: "How do your fees work?",
    answer:
      "Most commissions are charged as a percentage of construction cost or a fixed fee agreed after the initial brief. We are transparent about fees from the very first conversation.",
  },
  {
    question: "How early should we engage you?",
    answer:
      "As early as possible — ideally before a site is purchased. Early involvement is where we add the most value, shaping feasibility, budget, and ambition from the start.",
  },
  {
    question: "Do you offer both architecture and interior design?",
    answer:
      "Yes. We believe spaces are strongest when architecture and interiors are designed together, and most of our projects span both disciplines.",
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

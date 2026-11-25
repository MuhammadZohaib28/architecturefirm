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
    title: "RIBA Stage 01 - Strategic Definition, Preparation & Brief",
    description:
      "We listen to your priorities, budget and programme, then assess the brief and available options to establish a clear direction.",
  },
  {
    number: "02",
    title: "RIBA Stage 02 - Concept Design",
    description:
      "We develop design options through drawings and 3D models, presenting the evolving concept for review and refinement.",
  },
  {
    number: "03",
    title: "RIBA Stage 03 - Spatial Coordination & Developed Design",
    description:
      "We coordinate the design, structure and building services, develop key details, and prepare the planning application.",
  },
  {
    number: "04",
    title: "RIBA Stage 04 - Technical Design",
    description:
      "We prepare detailed drawings and specifications for Building Control and contractor pricing.",
  },
  {
    number: "05",
    title: "RIBA Stage 05 - Construction",
    description:
      "We tailor our site support to suit the project, with visits and guidance to help delivery stay aligned with the agreed design.",
  },
  {
    number: "06",
    title: "RIBA Stage 06 - Handover & Close Out",
    description:
      "At completion, we complete final inspections, address outstanding items and support handover.",
  },
];

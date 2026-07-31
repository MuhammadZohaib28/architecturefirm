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
      "We start by listening, listening to your initial thoughts and Ideas, budget, timescales, and any other onsiderations for the project such as space requirements: ultimately, these combined begin to define your overarching project aspirations. From here we begin to carry out feasibility studies to assess various options with you, considering the pros and",
  },
  {
    number: "02",
    title: "RIBA Stage 02 - Concept Design",
    description:
      "In Stage 2 we begin to visualise your project through 3D models and drawings. We present the evolving design concepts and options to you via fortnightly meetings based on the project programme. As we develop the design, each concept iteration becomes more detailed in both its realisation and through our method of representation. We like to present our projects through rendered animations which allows you to get a more immersed understanding of the eventual spaces. Depending on the project specifics, complexity or site-sensitivity, me often involve planning consultants or look to submit an informal pre-application to seek advice from the council.",
  },
  {
    number: "03",
    title: "RIBA Stage 03 - Spatial Coordination & Developed Design",
    description:
      "Developing on from the previous stage we narrowdown the design to a singular option where we coordinate the architecture with structural elements and building services to allow for their integration whilst developing the general detailing of the proposal. This stage ultimately allows us to correctly space- proof the primary architectural elements and build- ups to ensure they comply with Building Regulation standards. We will then compile your planning application pack/drawings in preparation for submission to the local authority, liaising with the council until its determination.",
  },
  {
    number: "04",
    title: "RIBA Stage 04 - Technical Design",
    description:
      "Upon obtaining planning permission we will move into the Technical detailing phase of the project, where we produce a pack of detailed drawings and specifications which are submitted to Building Control. In addition, the drawings are developed to a level of detail where they can be sent to building contractors for pricing. This allows you to undertake a competitive tender with a minimum of 3 contractors. This offers you the chance to compare quotes accurately. Depending on the level of our scope, we can manage this phase, helping to identify, vet and shortlist suitable contractors on your behalf.",
  },
  {
    number: "05",
    title: "RIBA Stage 05 - Construction",
    description:
      "We will tailor our level of input at Stage 5 to your project requirements and can provide contract administration services. In addition, we can attend regular site visits to check that work is proceeding smoothly and in line with the construction drawings and specifications.",
  },
  {
    number: "06",
    title: "RIBA Stage 06 - Handover & Close Out",
    description:
      "Once construction is complete we can undertake final site inspections and snagging lists for the project whilst resolving any outstanding works with the contractor that are required by Building Control for your completion certificate.",
  },
];

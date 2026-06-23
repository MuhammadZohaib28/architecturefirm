export type Testimonial = {
  name: string;
  role: string;
  projectType: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Élodie & Marc Devereux",
    role: "Homeowners",
    projectType: "Luxury Villa",
    rating: 5,
    quote:
      "They understood our home before we could describe it. Every room is filled with light at exactly the moment we want it. The result feels effortless, which I now know is the hardest thing to achieve.",
  },
  {
    name: "James Holloway",
    role: "Managing Director",
    projectType: "Workplace",
    rating: 5,
    quote:
      "Our new headquarters changed how the company feels. The studio balanced our brand, our budget, and our people with a calm authority. Staff actually want to be in the office now.",
  },
  {
    name: "Sofia Marchetti",
    role: "Art Collector",
    projectType: "Interior Design",
    rating: 5,
    quote:
      "A truly rare sensibility. They created a backdrop quiet enough for the art yet beautiful enough to live in. The detailing is impeccable and the process was a genuine pleasure.",
  },
  {
    name: "The Lindqvist Family",
    role: "Homeowners",
    projectType: "Renovation",
    rating: 5,
    quote:
      "They reawakened a tired old farmhouse without erasing its soul. Old and new now sit together as if they were always meant to. We could not be happier with our home.",
  },
  {
    name: "Daniel Okonkwo",
    role: "Founder",
    projectType: "Retail Flagship",
    rating: 5,
    quote:
      "The flagship feels like a gallery and sells like a dream. Customers slow down the moment they step inside. The studio delivered an identity that is unmistakably ours.",
  },
  {
    name: "Priya & Arjun Mehta",
    role: "Homeowners",
    projectType: "Apartment Design",
    rating: 5,
    quote:
      "Precision, patience, and real artistry. Every meeting moved the design forward, and the finished apartment is more considered than we ever imagined possible.",
  },
];

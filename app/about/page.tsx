import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import ParallaxImage from "@/components/common/ParallaxImage";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/common/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lissom Architects is a multidisciplinary practice across the UK and UAE, uniting architecture, interiors, and branding. Meet the practice and our values.",
};

const values = [
  { title: "Architecture, Interiors & Branding Under One Roof", text: "A single team carries the building, its interior, and its brand from start to finish." },
  { title: "Seamless Brand Experiences Across Every Touchpoint", text: "From the structure to the signage, every detail expresses one consistent story." },
  { title: "Tailored Design Solutions for Every Client", text: "We design around your aspirations, your context, and the way you'll really use the space." },
  { title: "Expert Project Delivery from Concept to Completion", text: "We guide you through every stage, translating ideas into refined, purposeful spaces." },
  { title: "Clear Communication & Cost Certainty", text: "Honest counsel and transparent costs, so you always know where your project stands." },
  { title: "Designs That Add Long-Term Value", text: "Sustainable methods and refined detailing create work that is enduring, not disposable." },
];

const team = [
  { name: "Residential Studio", role: "Extensions, renovations & new builds", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { name: "Commercial & Interiors", role: "Workplace, retail & hospitality", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80" },
  { name: "Brand & Spatial Design", role: "Identity, packaging & signage", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80" },
  { name: "Technical & CGI", role: "Visualization & documentation", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
];

const studioGallery = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Practice · UK | UAE"
        titleLines={["Architecture, interiors", "and branding, under", "one roof."]}
        description="We are a multidisciplinary architecture practice based in the UK and UAE, integrating architecture, interiors, and branding into a single, cohesive vision."
      />

      {/* Story */}
      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-5">
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              Our Story
            </p>
            <h2 className="display text-3xl text-charcoal lg:text-4xl">
              One cohesive vision, from structure to brand.
            </h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            <Reveal as="span" className="block">
              We are an architecture practice based in the UK and UAE,
              specialising in residential and commercial projects that integrate
              architecture, interiors, and branding into a single, cohesive
              vision.
            </Reveal>
            <Reveal as="span" className="block" delay={0.1}>
              Our work includes new builds, extensions, interior design, and
              complete brand development for the hospitality industries — from
              visual identity and logo design to signage, packaging, and
              environmental graphics. This holistic approach ensures every
              spatial and visual touchpoint works together to express a clear and
              consistent brand experience.
            </Reveal>
            <Reveal as="span" className="block" delay={0.2}>
              With a strong focus on sustainability, material quality, and refined
              detailing, we create spaces and identities that are purposeful,
              enduring, and carefully tailored to their context.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Large parallax studio image */}
      <section className="bg-ivory">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="A signature Lissom Architects residence"
          className="h-[60vh] min-h-[420px] w-full"
          sizes="100vw"
          amount={70}
        />
      </section>

      {/* Values */}
      <section className="border-b border-stone bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              Why Work With Us
            </p>
            <h2 className="display mb-8 max-w-4xl text-3xl text-charcoal lg:text-[2.6rem] lg:leading-tight">
              “We combine architecture, interiors, and branding to create
              cohesive experiences that strengthen businesses, elevate customer
              engagement, and deliver lasting value.”
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.08} className="bg-paper p-7 lg:p-8">
                <span className="display text-2xl text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium leading-snug text-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Team */}
      <section className="border-b border-stone bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              Our Disciplines
            </p>
            <h2 className="display mb-12 text-3xl text-charcoal lg:text-4xl">
              Four disciplines, one team.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.08}>
                <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-soft">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-charcoal">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio gallery */}
      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {studioGallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 0.1}>
                <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-soft">
                  <Image
                    src={src}
                    alt="Inside the Lissom Architects studio"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        titleLines={["Let's create something", "lasting together."]}
        description="We'd love to hear about your project and explore how we can help."
      />
    </>
  );
}

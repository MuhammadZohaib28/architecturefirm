import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import ParallaxImage from "@/components/common/ParallaxImage";
import CtaSection from "@/components/common/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lissom Architects is a multidisciplinary practice across the UK and UAE, shaping architecture, interiors, hospitality and branding as cohesive experiences.",
};

const disciplines = [
  {
    name: "Residential Studio",
    role: "Extensions, renovations & new builds",
    image: "/images/projects/the-gables/front-oblique.png",
  },
  {
    name: "Interiors",
    role: "Residential, workplace & hospitality",
    image: "/images/projects/the-gables/dining-room.png",
  },
  {
    name: "Hospitality & Branding",
    role: "Identity, packaging & signage",
    image: "/images/projects/the-willow-house/living-space.jpg",
  },
  {
    name: "Technical & CGI",
    role: "Visualisation & documentation",
    image: "/images/projects/the-willow-house/ground-floor-plan.png",
  },
];

const studioGallery = [
  "/images/projects/the-gables/kitchen-dining.png",
  "/images/projects/the-willow-house/kitchen.jpg",
  "/images/projects/the-willow-house/island-kitchen.jpg",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Practice · UK | UAE"
        titleLines={["Shaping spaces.", "Defining experiences."]}
        description="We are a multidisciplinary architecture practice based in the UK and UAE, integrating architecture, interiors, hospitality, and branding into a single, cohesive vision."
      />

      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="ml-auto max-w-4xl space-y-6 text-lg leading-relaxed text-muted">
            <Reveal as="span" className="block">
              We are an architecture practice based in the UK and UAE,
              specialising in residential and commercial projects that integrate
              architecture, interiors, hospitality, and branding into a single,
              cohesive vision.
            </Reveal>
            <Reveal as="span" className="block" delay={0.1}>
              Our work includes new builds, extensions, interior design, and
              brand development for hospitality - from visual identity and logo
              design to signage, packaging, and environmental graphics. This
              holistic approach helps spatial and visual touchpoints work
              together as one consistent experience.
            </Reveal>
            <Reveal as="span" className="block" delay={0.2}>
              With a focus on sustainability, material quality, and refined
              detailing, we create spaces and identities that are purposeful,
              enduring, and carefully tailored to their context.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <ParallaxImage
          src="/images/projects/the-gables/front-day.jpg"
          alt="The Gables by Lissom in Essex"
          className="h-[60vh] min-h-[420px] w-full"
          sizes="100vw"
          amount={70}
        />
      </section>

      <section className="border-b border-stone bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              Our Disciplines
            </p>
            <h2 className="display mb-12 text-3xl text-charcoal lg:text-4xl">
              Four disciplines, one practice.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {disciplines.map((discipline, index) => (
              <Reveal
                key={discipline.name}
                delay={(index % 4) * 0.08}
              >
                <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-soft">
                  <Image
                    src={discipline.image}
                    alt={discipline.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={
                      discipline.image.includes("plan")
                        ? "object-contain p-3"
                        : "object-cover"
                    }
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-charcoal">
                  {discipline.name}
                </h3>
                <p className="text-sm text-muted">{discipline.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {studioGallery.map((src, index) => (
              <Reveal key={src} delay={(index % 3) * 0.1}>
                <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-soft">
                  <Image
                    src={src}
                    alt="Selected Lissom Architects interior work"
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
        description="Tell us about your project and explore how Lissom can help."
      />
    </>
  );
}

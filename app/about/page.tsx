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
    "Kensington Design House is a luxury architecture and interior design studio. Meet the practice, our philosophy, and the values that guide our work.",
};

const values = [
  { title: "Integrity", text: "We give honest counsel and design for your interests, not our portfolio." },
  { title: "Craft", text: "Detail is not a finishing touch — it is the substance of good architecture." },
  { title: "Restraint", text: "We add only what a space needs, and remove everything it doesn't." },
  { title: "Partnership", text: "The best work happens when client and studio think as one team." },
];

const team = [
  { name: "Clara Nordström", role: "Founder & Principal Architect", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
  { name: "Mateo Rivera", role: "Design Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Yuki Tanaka", role: "Head of Interiors", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { name: "Lena Hoffmann", role: "Studio Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" },
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
        eyebrow="The Studio"
        titleLines={["We are Kensington", "Design House, a studio", "built on detail."]}
        description="Founded in 2014, we are a close-knit practice of architects and interior designers crafting spaces that feel inevitable — calm, considered, and made to last."
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
              A decade of designing with intention.
            </h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            <Reveal as="span" className="block">
              Kensington Design House began with a simple conviction: that the spaces we
              inhabit shape how we live, work, and feel — and that they deserve
              to be designed with real care.
            </Reveal>
            <Reveal as="span" className="block" delay={0.1}>
              From a single residential commission, the studio has grown into an
              international practice spanning homes, workplaces, and interiors
              across five cities — yet we remain deliberately small, so that
              every project receives the attention of our principals.
            </Reveal>
            <Reveal as="span" className="block" delay={0.2}>
              We believe luxury is not ornament. It is light handled well,
              proportion judged carefully, and materials chosen to age into
              something even more beautiful than the day they were laid.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Large parallax studio image */}
      <section className="bg-ivory">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="A signature Kensington Design House residence"
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
              What We Value
            </p>
            <h2 className="display mb-12 text-3xl text-charcoal lg:text-4xl">
              The principles behind the practice.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.08} className="bg-paper p-7 lg:p-8">
                <span className="display text-2xl text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-medium text-charcoal">{v.title}</h3>
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
              The People
            </p>
            <h2 className="display mb-12 text-3xl text-charcoal lg:text-4xl">
              A small studio, by design.
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
                    alt="Inside the Kensington Design House studio"
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

import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ServiceCard from "@/components/services/ServiceCard";
import CtaSection from "@/components/common/CtaSection";
import Reveal from "@/components/common/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior design, 3D visualization, space planning, and more — the full range of services offered by Kensington Design House.",
};

const offerings = [
  "Architecture & building design",
  "Interior architecture & styling",
  "Photoreal 3D visualization",
  "Space planning & feasibility",
  "Luxury villa & apartment design",
  "Office, retail & hospitality fit-out",
  "Renovation & heritage extensions",
  "Project consultation & strategy",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        titleLines={["Services for every", "stage of a space."]}
        description="From the first feasibility sketch to the final styled room, we offer an integrated set of services that can be engaged together or on their own."
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="border-y border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-4">
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              Capabilities
            </p>
            <h2 className="display text-3xl text-charcoal lg:text-4xl">
              One studio, end to end.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Because architecture and interiors live under one roof here, your
              project stays coherent from concept to completion.
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 border-t border-stone sm:grid-cols-2">
              {offerings.map((o, i) => (
                <Reveal
                  key={o}
                  as="li"
                  delay={(i % 2) * 0.06}
                  className="flex items-center gap-4 border-b border-stone py-5 text-charcoal-soft sm:odd:pr-8 sm:even:pl-8"
                >
                  <span className="inline-block h-1.5 w-1.5 rotate-45 bg-bronze" />
                  {o}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection
        titleLines={["Not sure where", "to begin?"]}
        description="Book a consultation and we'll help you find the right starting point for your project."
        primary={{ href: "/contact", label: "Book Consultation" }}
      />
    </>
  );
}

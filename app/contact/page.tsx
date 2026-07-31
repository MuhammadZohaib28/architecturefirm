import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/common/Accordion";
import { generalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lissom Architects to discuss your project across the UK and UAE. Architecture, interiors, and branding under one roof.",
};

const details = [
  { label: "London Studio", lines: ["United Kingdom", "hello@lissom.co.uk", "+44 20 7123 4567"] },
  { label: "Dubai Studio", lines: ["United Arab Emirates", "hello@lissom.co.uk", "+971 4 123 4567"] },
  { label: "Email", lines: ["hello@lissom.co.uk", "Mon–Fri, 9am–6pm"] },
];

const accreditations = ["RIBA Chartered", "ARB Registered", "Member · Dubai Municipality", "ISO 9001"];

const socials = ["Instagram", "LinkedIn", "Behance"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        titleLines={["Let's start a", "conversation."]}
        description="Tell us about your project and we'll be in touch within two working days to arrange your consultation."
      />

      {/* Intro copy */}
      <section className="border-b border-stone bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal className="max-w-3xl">
            <h2 className="display text-2xl text-charcoal lg:text-3xl">
              Looking for an architecture and design studio in the UK or UAE?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                We are a multidisciplinary architecture practice working across
                residential and commercial projects, combining architecture,
                interiors, and branding to deliver cohesive and considered
                environments.
              </p>
              <p>
                From new builds and extensions to commercial interiors and
                brand-led spaces, we create work that balances creativity,
                functionality, and long-term value. Our team guides you through
                every stage of the process, translating ideas into refined,
                purposeful spaces that are both practical and visually
                distinctive.
              </p>
              <p className="text-charcoal">
                Get in touch to start your project — we&apos;re here to help shape
                spaces and brands that are thoughtfully designed, enduring, and
                built around your vision.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          {/* Details */}
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <div className="space-y-10">
              {details.map((d) => (
                <div key={d.label} className="border-t border-stone pt-5">
                  <h3 className="overline mb-3 text-muted">{d.label}</h3>
                  <div className="space-y-1">
                    {d.lines.map((line) => (
                      <p key={line} className="text-charcoal">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-stone pt-5">
                <h3 className="overline mb-3 text-muted">Follow</h3>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s}
                      href={
                        s === "Instagram"
                          ? "https://instagram.com/Lissom_Architects"
                          : "#"
                      }
                      className="rounded-full border border-stone px-4 py-2 text-sm text-charcoal-soft transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                    >
                      {s === "Instagram" ? "@Lissom_Architects" : s}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-stone pt-5">
                <h3 className="overline mb-3 text-muted">Accreditation</h3>
                <ul className="flex flex-wrap gap-2">
                  {accreditations.map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-stone-soft px-3 py-1.5 text-sm text-charcoal-soft"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-b border-stone bg-ivory">
        <div className="blueprint-grid-fine relative flex h-[420px] items-center justify-center overflow-hidden bg-stone-soft/50">
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 to-transparent" />
          <div className="relative text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bronze">
              <span className="h-2.5 w-2.5 rounded-full bg-bronze" />
            </span>
            <p className="overline mt-4">Lissom Architects · London &amp; Dubai</p>
            <p className="mt-1 text-sm text-muted">UK | UAE</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-4">
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              FAQ
            </p>
            <h2 className="display text-3xl text-charcoal lg:text-4xl">
              Before you reach out.
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            <Accordion items={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}

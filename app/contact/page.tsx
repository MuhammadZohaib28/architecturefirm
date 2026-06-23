import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/common/Accordion";
import { generalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kensington Design House to discuss your architecture or interior design project. Book a consultation today.",
};

const details = [
  { label: "Studio", lines: ["14 Albion Mews", "London, W2 2EG", "United Kingdom"] },
  { label: "Email", lines: ["hello@kensingtondesignhouse.com", "new.business@kensingtondesignhouse.com"] },
  { label: "Phone", lines: ["+44 20 7123 4567", "Mon–Fri, 9am–6pm GMT"] },
];

const socials = ["Instagram", "LinkedIn", "Pinterest", "Behance"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        titleLines={["Let's start a", "conversation."]}
        description="Tell us about your project and we'll be in touch within two working days to arrange your consultation."
      />

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
                      href="#"
                      className="rounded-full border border-stone px-4 py-2 text-sm text-charcoal-soft transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                    >
                      {s}
                    </a>
                  ))}
                </div>
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
            <p className="overline mt-4">Kensington Design House · London</p>
            <p className="mt-1 text-sm text-muted">14 Albion Mews, W2 2EG</p>
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

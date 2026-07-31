import type { Service } from "@/data/services";
import Reveal from "@/components/common/Reveal";
import Accordion from "@/components/common/Accordion";

export default function ServiceDetailContent({ service }: { service: Service }) {
  return (
    <>
      {/* Overview */}
      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="overline mb-5 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-bronze" />
                Overview
              </p>
              <h2 className="display text-3xl text-[#FFBD59] lg:text-4xl">{service.tagline}</h2>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={0.1}>
              <p className="text-xl leading-relaxed text-charcoal-soft">{service.description}</p>
              <p className="mt-6 leading-relaxed text-muted">{service.approach}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included + Benefits */}
      <section className="border-b border-stone bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h3 className="display mb-8 text-2xl text-charcoal lg:text-3xl">What&apos;s included</h3>
              <ul className="border-t border-stone">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-stone py-4 text-charcoal-soft"
                  >
                    <span className="inline-block h-1.5 w-1.5 rotate-45 bg-bronze" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="display mb-8 text-2xl text-charcoal lg:text-3xl">The benefits</h3>
              <ul className="space-y-5">
                {service.benefits.map((b, i) => (
                  <li key={b} className="flex gap-5">
                    <span className="overline shrink-0 pt-1 text-bronze">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg leading-relaxed text-charcoal-soft">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              Our Approach
            </p>
            <h3 className="display mb-12 text-3xl text-charcoal lg:text-4xl">
              How a {service.title.toLowerCase()} project unfolds.
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, i) => (
              <Reveal
                key={step.title}
                delay={(i % 3) * 0.08}
                className="bg-paper p-7 lg:p-8"
              >
                <span className="display text-2xl text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-4 text-lg font-medium text-charcoal">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="border-b border-stone bg-ivory py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <p className="overline mb-5 flex items-center gap-3">
                  <span className="inline-block h-px w-8 bg-bronze" />
                  FAQ
                </p>
                <h3 className="display text-3xl text-charcoal lg:text-4xl">
                  Questions, answered.
                </h3>
              </Reveal>
              <div className="lg:col-span-8">
                <Accordion items={service.faqs} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

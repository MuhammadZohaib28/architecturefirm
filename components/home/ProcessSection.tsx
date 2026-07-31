"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/common/SectionHeader";
import { processSteps } from "@/data/faqs";

/**
 * Studio process. A GSAP ScrollTrigger draws the progress line as the
 * section scrolls; steps fade in along it. Horizontal on desktop,
 * vertical timeline on mobile.
 */
export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineH = useRef<HTMLDivElement>(null);
  const lineV = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const line = isDesktop ? lineH.current : lineV.current;
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: isDesktop ? 0 : 1, scaleY: isDesktop ? 1 : 0 },
          {
            scaleX: 1,
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              end: "bottom 75%",
              scrub: 0.6,
            },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 85%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="border-b border-stone bg-ivory py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeader
          eyebrow="How We Work"
          titleLines={[]}
        />

        <div className="mt-14 max-w-2xl">
          <h3 className="display text-3xl text-charcoal lg:text-4xl">
            Our Design Process
          </h3>
          <p className="mt-5 leading-relaxed text-muted">
            As Architects, we follow the RIBA Plan of Works within our design
            process, which spans from our initial meeting and site visits to
            building completion and handover. The below suite of stages is based
            on a &apos;Full Architects Service&apos; in which we can tailor our scope
            and role to your project requirements and programme.
          </p>
        </div>

        <div ref={sectionRef} className="mt-10 lg:mt-12">
          {/* Desktop horizontal timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-[27px] h-px bg-stone" />
            <div
              ref={lineH}
              className="absolute left-0 right-0 top-[27px] h-px origin-left bg-bronze"
            />
            <div className="grid grid-cols-6 gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="process-step">
                  <div className="relative mb-8 flex h-14 items-center">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-bronze bg-ivory">
                      <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                    </span>
                  </div>
                  <div className="display mb-3 text-3xl text-bronze">{step.number}</div>
                  <h3 className="mb-2 text-lg font-medium leading-snug text-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="relative lg:hidden">
            <div className="absolute bottom-0 left-[7px] top-2 w-px bg-stone" />
            <div
              ref={lineV}
              className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-bronze"
            />
            <div className="space-y-10">
              {processSteps.map((step) => (
                <div key={step.number} className="process-step relative pl-10">
                  <span className="absolute left-0 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-bronze bg-ivory">
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  </span>
                  <div className="overline mb-1 text-bronze">{step.number}</div>
                  <h3 className="mb-1.5 text-xl font-medium text-charcoal">{step.title}</h3>
                  <p className="leading-relaxed text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

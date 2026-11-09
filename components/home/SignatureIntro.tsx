"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/services";

const strip = [
  "/images/projects/the-gables/front-oblique.png",
  "/images/projects/the-gables/dining-room.png",
  "/images/projects/the-gables/rear-elevation.jpg",
  "/images/projects/the-willow-house/front-detail.png",
  "/images/projects/the-willow-house/kitchen.jpg",
];

/**
 * Signature statement section. The horizontal image strip drifts
 * laterally on scroll via GSAP ScrollTrigger for an editorial reveal.
 */
export default function SignatureIntro() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = stripRef.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { xPercent: 6 },
        {
          xPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    }, stripRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-paper pt-24 pb-8 lg:pt-36 lg:pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="overline mb-8 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-bronze" />
          The Studio
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-[330px] flex-col border border-stone bg-ivory p-7 shadow-[0_18px_50px_rgba(18,18,18,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-bronze hover:shadow-[0_24px_60px_rgba(18,18,18,0.12)] lg:p-9"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7d8a70] text-sm font-semibold text-white">
                {service.number}
              </span>
              <h2 className="display mt-8 text-3xl text-charcoal">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {service.excerpt}
              </p>
              <div className="mt-auto pt-8">
                <p className="text-sm font-semibold text-charcoal">
                  {service.startingPrice}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#7d8a70] px-4 py-2 text-xs font-semibold text-[#65705b] transition-colors group-hover:bg-[#7d8a70] group-hover:text-white">
                  Discover more <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          For over a decade, our practice has shaped homes, workplaces, and
          interiors where every decision serves a purpose — and beauty is the
          natural result.
        </p>
      </div>

      {/* Drifting image strip */}
      <div className="mt-20 lg:mt-28">
        <div ref={stripRef} className="flex w-[120%] gap-5 will-change-transform">
          {strip.map((src, i) => (
            <div
              key={i}
              className="img-zoom relative aspect-[3/4] flex-1 overflow-hidden rounded-sm bg-stone-soft"
            >
              <Image
                src={src}
                alt="Selected architectural work"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "@/components/common/AnimatedText";

const strip = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
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
    <section className="overflow-hidden border-b border-stone bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="overline mb-8 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-bronze" />
          The Studio
        </p>
        <div className="display max-w-5xl text-3xl leading-[1.12] sm:text-4xl lg:text-[3.2rem]">
          <AnimatedText
            lines={[
              "We design spaces that speak through",
              "proportion, light, material, and",
              "human experience.",
            ]}
            className="text-charcoal"
          />
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

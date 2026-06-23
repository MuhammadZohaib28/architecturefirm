"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { services } from "@/data/services";
import { viewportOnce } from "@/lib/animations";

/**
 * Editorial services list with a floating image preview that tracks
 * the cursor — a refined alternative to a generic card grid.
 */
export default function ServicesPreview() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 200, damping: 24 });
  const py = useSpring(y, { stiffness: 200, damping: 24 });

  function handleMove(e: React.MouseEvent) {
    x.set(e.clientX);
    y.set(e.clientY);
  }

  return (
    <section className="relative bg-ivory py-24 lg:py-36" onMouseMove={handleMove}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="What We Do"
            titleLines={["Services shaped around", "the whole of a space."]}
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-charcoal"
          >
            All services
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-14 border-t border-stone">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex items-center gap-6 border-b border-stone py-7 transition-colors duration-500 hover:bg-stone-soft/60 md:gap-10 md:py-9"
              >
                <span className="overline w-10 shrink-0 text-bronze md:w-16">
                  {service.number}
                </span>
                <div className="flex-1 transition-transform duration-500 group-hover:translate-x-2 md:group-hover:translate-x-4">
                  <h3 className="display text-2xl text-charcoal sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-muted md:text-base">
                    {service.excerpt}
                  </p>
                </div>
                <span className="hidden shrink-0 items-center justify-center text-charcoal transition-all duration-500 group-hover:text-bronze md:flex">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                    <path
                      d="M10 24L24 10M24 10H12M24 10V22"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cursor-following preview (desktop only) */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="pointer-events-none fixed z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            style={{ left: px, top: py }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="img-zoom relative h-64 w-80 overflow-hidden rounded-sm shadow-2xl shadow-charcoal/20">
              <Image
                src={services[active].cardImage}
                alt={services[active].title}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

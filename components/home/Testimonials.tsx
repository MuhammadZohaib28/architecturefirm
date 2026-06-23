"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { viewportOnce } from "@/lib/animations";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.2 3.4 12.1l.7-4L1.2 5.3l4-.6L7 1z"
            fill="currentColor"
            className="text-bronze"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="border-b border-stone bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeader
          eyebrow="Client Voices"
          titleLines={["Trusted by those who", "value the difference."]}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-sm border border-stone bg-paper p-7 shadow-sm shadow-charcoal/[0.03] transition-shadow duration-500 hover:shadow-xl hover:shadow-charcoal/[0.06]"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-charcoal-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-stone pt-5">
                <div className="font-medium text-charcoal">{t.name}</div>
                <div className="mt-0.5 text-sm text-muted">
                  {t.role} · {t.projectType}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

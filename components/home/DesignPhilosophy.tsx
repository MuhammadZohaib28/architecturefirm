"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";
import { viewportOnce } from "@/lib/animations";

const principles = [
  {
    title: "Timeless Design",
    text: "We design beyond trend, for spaces that feel as considered in twenty years as on the day they open.",
  },
  {
    title: "Functional Spaces",
    text: "Beauty follows function. Every plan is resolved around how a space is genuinely lived and used.",
  },
  {
    title: "Sustainable Thinking",
    text: "We build responsibly — orientation, material, and longevity considered from the first sketch.",
  },
  {
    title: "Detail-Oriented Execution",
    text: "The joint, the reveal, the shadow line. The details are where a project earns its quiet confidence.",
  },
  {
    title: "Client-Focused Planning",
    text: "Your brief is the brief. We listen first and design in true partnership, start to finish.",
  },
];

export default function DesignPhilosophy() {
  return (
    <section className="relative overflow-hidden border-b border-stone bg-ivory py-24 lg:py-36">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <p className="overline mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-bronze" />
            Philosophy
          </p>
          <div className="display text-4xl sm:text-5xl lg:sticky lg:top-32 lg:text-[3.4rem]">
            <AnimatedText lines={["Our", "design", "principles."]} />
          </div>
        </div>

        <div className="lg:col-span-7">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-2 border-b border-stone py-7 sm:grid-cols-12 sm:gap-6"
            >
              <h3 className="display text-xl text-charcoal sm:col-span-5 sm:text-2xl">
                {p.title}
              </h3>
              <p className="leading-relaxed text-muted sm:col-span-7">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

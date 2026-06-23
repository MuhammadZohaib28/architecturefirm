"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Button from "./Button";
import { fadeUp, viewportOnce } from "@/lib/animations";

type CtaSectionProps = {
  titleLines: string[];
  description?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function CtaSection({
  titleLines,
  description,
  primary = { href: "/contact", label: "Start Your Project" },
  secondary = { href: "/projects", label: "View Our Work" },
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-ivory lg:py-32">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-12">
        <div className="display mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
          <AnimatedText lines={titleLines} className="text-ivory" />
        </div>
        {description && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/65"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={primary.href} magnetic>
            {primary.label}
          </Button>
          <Button
            href={secondary.href}
            variant="outline"
            className="border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal"
          >
            {secondary.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

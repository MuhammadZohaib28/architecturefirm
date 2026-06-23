"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  titleLines: string[];
  description?: string;
  align?: "left" | "center";
};

/**
 * Shared interior-page hero — generous whitespace, blueprint whisper,
 * masked line-reveal heading. Used on listing/about/contact pages.
 */
export default function PageHero({
  eyebrow,
  titleLines,
  description,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-stone bg-ivory pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-stone-soft blur-3xl" />

      <div
        className={cn(
          "relative mx-auto max-w-[1400px] px-6 lg:px-12",
          align === "center" && "text-center",
        )}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className={cn(
            "overline mb-6 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="inline-block h-px w-8 bg-bronze" />
          {eyebrow}
        </motion.div>

        <AnimatedText
          lines={titleLines}
          animateOnMount
          className="display max-w-4xl text-5xl sm:text-6xl lg:text-7xl"
        />

        {description && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className={cn(
              "mt-7 max-w-2xl text-lg leading-relaxed text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

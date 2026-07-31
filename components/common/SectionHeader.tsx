"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";

type SectionHeaderProps = {
  eyebrow?: string;
  /** Heading split into lines for the masked reveal. */
  titleLines: string[];
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  titleLines,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className={cn(
            "overline mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="inline-block h-px w-8 bg-bronze" />
          {eyebrow}
        </motion.div>
      )}

      {titleLines.length > 0 && (
        <AnimatedText
          lines={titleLines}
          className={cn(
            "display text-4xl sm:text-5xl lg:text-[3.4rem]",
            light ? "text-ivory" : "text-charcoal",
          )}
        />
      )}

      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
          className={cn(
            "mt-6 text-lg leading-relaxed",
            light ? "text-ivory/70" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

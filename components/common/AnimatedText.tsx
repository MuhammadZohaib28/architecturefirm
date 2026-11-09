"use client";

import { motion } from "framer-motion";
import { lineReveal, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  /** Each string is rendered on its own masked line. */
  lines: string[];
  className?: string;
  lineClassNames?: string[];
  /** Render immediately (hero) instead of on scroll. */
  animateOnMount?: boolean;
  stagger?: number;
  delay?: number;
};

/**
 * Editorial heading that reveals line-by-line from behind a mask.
 * Each track includes a small bleed area so glyph ascenders, descenders,
 * and side bearings are never clipped by the reveal mask.
 */
export default function AnimatedText({
  lines,
  className,
  lineClassNames,
  animateOnMount = false,
  stagger = 0.1,
  delay = 0,
}: AnimatedTextProps) {
  const animateProps = animateOnMount
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: viewportOnce };

  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="-mx-[0.06em] -mt-[0.04em] -mb-[0.18em] block overflow-hidden px-[0.06em] pt-[0.04em] pb-[0.18em]"
        >
          <motion.span
            className={cn("block", lineClassNames?.[i])}
            variants={lineReveal}
            initial="hidden"
            {...animateProps}
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

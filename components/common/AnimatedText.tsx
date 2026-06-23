"use client";

import { motion } from "framer-motion";
import { lineReveal, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  /** Each string is rendered on its own masked line. */
  lines: string[];
  className?: string;
  /** Render immediately (hero) instead of on scroll. */
  animateOnMount?: boolean;
  stagger?: number;
  delay?: number;
};

/**
 * Editorial heading that reveals line-by-line from behind a mask.
 * Each line sits in an overflow-hidden track and slides up into place.
 */
export default function AnimatedText({
  lines,
  className,
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
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
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

"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Enable the magnetic hover pull — reserved for primary CTAs. */
  magnetic?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  solid: "bg-charcoal text-ivory hover:bg-bronze",
  outline:
    "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "text-charcoal hover:text-bronze px-0",
};

export default function Button({
  href,
  children,
  variant = "solid",
  className,
  magnetic = false,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });
  // Inner content trails slightly less than the button for depth.
  const innerX = useTransform(springX, (v) => v * 0.35);
  const innerY = useTransform(springY, (v) => v * 0.35);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.4);
    y.set(relY * 0.4);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={magnetic ? { x: springX, y: springY } : undefined} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={cn(base, variants[variant], className)}
      >
        <motion.span
          style={magnetic ? { x: innerX, y: innerY } : undefined}
          className="inline-flex items-center gap-2"
        >
          {children}
          {variant !== "ghost" && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.span>
      </Link>
    </motion.div>
  );
}

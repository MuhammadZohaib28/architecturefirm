import type { Variants, Transition } from "framer-motion";

/** Signature easing — calm, expensive deceleration. */
export const ease: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease } },
};

/** Parent container that staggers its children. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Per-line / per-word text reveal child. */
export const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.95, ease },
  },
};

/** Standard viewport config so reveals fire once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: "-80px" } as const;

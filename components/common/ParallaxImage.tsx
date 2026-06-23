"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** How far the image drifts within its frame, in px. */
  amount?: number;
  priority?: boolean;
  sizes?: string;
  rounded?: boolean;
};

/**
 * Image that drifts vertically as it passes through the viewport.
 * The frame clips the overscaled image so edges never reveal gaps.
 */
export default function ParallaxImage({
  src,
  alt,
  className,
  amount = 60,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-stone-soft",
        rounded && "rounded-sm",
        className,
      )}
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { viewportOnce } from "@/lib/animations";

/**
 * Asymmetric service card — number, title, description, line-art arrow,
 * and a hover image preview that fades in over a stone-tinted background.
 */
export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-sm border border-stone bg-paper p-7 transition-colors duration-500 hover:bg-stone-soft lg:p-9"
      >
        {/* Hover image preview */}
        <div className="img-zoom pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <Image
            src={service.cardImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/55" />
        </div>

        <div className="relative flex items-start justify-between">
          <span className="display text-4xl text-stone transition-colors duration-500 group-hover:text-ivory/70">
            {service.number}
          </span>
          <span className="text-charcoal transition-all duration-500 group-hover:text-ivory">
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <path
                d="M10 24L24 10M24 10H12M24 10V22"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </svg>
          </span>
        </div>

        <div className="relative mt-10">
          <h3 className="display text-2xl text-charcoal transition-colors duration-500 group-hover:text-ivory lg:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-ivory/80">
            {service.excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

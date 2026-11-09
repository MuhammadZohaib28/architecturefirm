"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { viewportOnce } from "@/lib/animations";

const details = [
  {
    label: "Light",
    image: "/images/projects/the-gables/dining-room.png",
    span: "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto",
  },
  {
    label: "Space",
    image: "/images/projects/the-gables/rear-detail.jpg",
    span: "aspect-[4/3]",
  },
  {
    label: "Texture",
    image: "/images/projects/the-willow-house/kitchen.jpg",
    span: "aspect-[4/3]",
  },
  {
    label: "Proportion",
    image: "/images/projects/the-willow-house/living-space.jpg",
    span: "aspect-[4/3]",
  },
  {
    label: "Materials",
    image: "/images/projects/the-willow-house/island-kitchen.jpg",
    span: "aspect-[4/3]",
  },
];

export default function MaterialDetails() {
  return (
    <section className="border-b border-stone bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeader
          eyebrow="In The Detail"
          titleLines={["An architecture of", "light, texture & touch."]}
          description="Architecture is experienced up close — in the grain of a surface, the fall of a shadow, the weight of a handle. These are the things we obsess over."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`img-zoom group relative overflow-hidden rounded-sm bg-stone-soft ${d.span}`}
            >
              <Image
                src={d.image}
                alt={`${d.label} — architectural detail`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-medium tracking-[0.18em] text-ivory uppercase">
                {d.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

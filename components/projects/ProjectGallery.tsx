"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { viewportOnce } from "@/lib/animations";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        {images.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`img-zoom relative overflow-hidden rounded-sm bg-stone-soft ${
              i % 3 === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={`${title} — gallery image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-6 backdrop-blur-sm"
          >
            <button
              type="button"
              className="absolute right-6 top-6 text-sm tracking-wide text-ivory/70 hover:text-ivory"
              aria-label="Close gallery"
            >
              Close ✕
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[80vh] w-full max-w-5xl"
            >
              <Image
                src={images[open]}
                alt={`${title} — enlarged image`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

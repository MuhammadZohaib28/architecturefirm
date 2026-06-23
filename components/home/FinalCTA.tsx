"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";
import Button from "@/components/common/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-sm">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80"
              alt="Interior of a contemporary luxury home"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/55" />
            <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-20" />
          </div>

          <div className="relative px-7 py-20 text-center sm:px-12 lg:py-32">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="overline mb-6 text-bronze-soft"
            >
              Let&apos;s Begin
            </motion.p>

            <div className="display mx-auto max-w-4xl text-4xl text-ivory sm:text-5xl lg:text-6xl">
              <AnimatedText
                lines={["Have a space in mind?", "Let's shape it into", "something exceptional."]}
              />
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button href="/contact" magnetic>
                Start Your Project
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal"
              >
                Contact Studio
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

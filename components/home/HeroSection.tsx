"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import Button from "@/components/common/Button";
import { fadeUp, stagger } from "@/lib/animations";

const heroStats = [
  { value: "50+", label: "Projects delivered" },
  { value: "10+", label: "Years of practice" },
  { value: "UK & UAE", label: "London & Dubai" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ivory pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <motion.div style={{ opacity }} className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-stone bg-paper/60 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-bronze" />
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] text-charcoal-soft uppercase">
              Architecture | Interiors | Branding
            </span>
          </motion.div>

          <h1 className="display text-[2.6rem] font-black leading-[1.02] text-charcoal sm:text-6xl lg:text-[4.5rem] ">
            <AnimatedText
              animateOnMount
              lines={[
                "Architecture, Interiors",
                "& Branding - Designed",
                "as One Vision",
              ]}
              lineClassNames={[
                "text-charcoal font-extrabold text-[1.1em]",
                "pb-1 leading-[1.09] text-[0.79em] font-medium text-[#FFBD59]",
                "pb-1 leading-[1.09] text-[0.79em] font-medium text-[#FFBD59]",
              ]}
              stagger={0.12}
            />
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="mt-7 max-w-md text-xs font-semibold leading-relaxed text-black/45 sm:text-sm"
          >
            A multidisciplinary architecture practice across the UK and UAE,
            uniting architecture, interiors, and branding to deliver cohesive,
            considered environments with lasting value.
          </motion.p>

          <motion.div
            variants={stagger(0.12, 0.8)}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.div variants={fadeUp}>
              <Button href="/projects" magnetic>
                Explore Projects
              </Button>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button href="/contact" variant="outline">
                Book Consultation
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger(0.1, 1)}
            initial="hidden"
            animate="show"
            className="mt-14 flex divide-x divide-stone border-t border-stone pt-8"
          >
            {heroStats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="px-6 first:pl-0"
              >
                <div className="display text-3xl text-charcoal">{s.value}</div>
                <div className="mt-1 text-xs tracking-wide text-muted">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative h-[440px] sm:h-[560px] lg:h-[640px]">
          <motion.div
            style={{ y: yMain }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="img-zoom absolute right-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-sm bg-stone-soft"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Contemporary luxury residence with warm stone facade"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yCard }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="img-zoom absolute bottom-0 left-0 h-[46%] w-[52%] overflow-hidden rounded-sm border-[6px] border-ivory bg-stone-soft shadow-2xl shadow-charcoal/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80"
              alt="Minimal interior bathed in natural light"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="absolute bottom-[8%] right-[4%] rounded-sm border border-stone bg-paper/80 px-5 py-4 backdrop-blur-md"
          >
            <div className="overline mb-1">Est. 2014</div>
            <div className="text-sm font-medium leading-tight text-charcoal">
              Award-winning
              <br />
              design studio
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

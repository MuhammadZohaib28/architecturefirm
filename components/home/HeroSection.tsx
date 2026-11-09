"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import Button from "@/components/common/Button";
import { fadeUp } from "@/lib/animations";

const SLIDE_DURATION = 7000;
const DESKTOP_BREAKPOINT = 768;

const heroSlides = [
  {
    src: "/images/projects/the-gables/front-night.jpg",
    alt: "The illuminated gabled facade of The Gables at dusk",
    project: "The Gables",
    location: "Essex, UK",
    href: "/projects/the-gables",
    discipline: "Architecture · Interiors",
    objectPosition: "center 54%",
    callouts: [
      { label: "Gabled form", x: "30%", y: "25%", side: "right" },
      { label: "Recessed entrance", x: "66%", y: "57%", side: "left" },
      { label: "Warm brickwork", x: "82%", y: "35%", side: "left" },
    ],
  },
  {
    src: "/images/projects/the-gables/kitchen-dining.png",
    alt: "Open-plan kitchen and dining room at The Gables",
    project: "The Gables",
    location: "Interior study",
    href: "/projects/the-gables",
    discipline: "Interior Architecture",
    objectPosition: "center 50%",
    callouts: [
      { label: "Stone island", x: "43%", y: "62%", side: "right" },
      { label: "Layered lighting", x: "63%", y: "25%", side: "left" },
      { label: "Garden connection", x: "82%", y: "51%", side: "left" },
    ],
  },
  {
    src: "/images/projects/the-willow-house/vfdvdvd.png",
    alt: "Rear elevation and garden extension at The Willow House",
    project: "The Willow House",
    location: "London, UK",
    href: "/projects/the-willow-house",
    discipline: "Architecture · Renovation",
    objectPosition: "center 53%",
    callouts: [
      { label: "Retained character", x: "25%", y: "27%", side: "right" },
      { label: "Framed garden view", x: "61%", y: "55%", side: "left" },
      { label: "Contemporary addition", x: "80%", y: "33%", side: "left" },
    ],
  },
] as const;

function getInitialFrameClip() {
  return window.innerWidth < 1024 || window.innerHeight < 1100
    ? "polygon(4% 58%, 96% 58%, 96% 96%, 4% 96%)"
    : "polygon(4.75% 52%, 95.25% 52%, 95.25% 96%, 4.75% 96%)";
}

function getFrameTopOffset() {
  const topInset =
    window.innerWidth < 1024 || window.innerHeight < 1100 ? 0.58 : 0.52;
  return window.innerHeight * topInset + 20;
}

function getFrameSideInset() {
  return window.innerWidth < 1024 || window.innerHeight < 1100
    ? "4%"
    : "4.75%";
}

export default function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageMotionRef = useRef<HTMLDivElement>(null);
  const frameTopRef = useRef<HTMLDivElement>(null);
  const frameBottomRef = useRef<HTMLDivElement>(null);
  const frameOverlayRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [activeSlide, shouldReduceMotion]);

  useLayoutEffect(() => {
    if (shouldReduceMotion || !stageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(`(min-width: ${DESKTOP_BREAKPOINT}px)`, () => {
        const stage = stageRef.current;
        const intro = introRef.current;
        const frame = frameRef.current;
        const image = imageMotionRef.current;
        const frameTop = frameTopRef.current;
        const frameBottom = frameBottomRef.current;
        const overlay = frameOverlayRef.current;

        if (
          !stage ||
          !intro ||
          !frame ||
          !image ||
          !frameTop ||
          !frameBottom ||
          !overlay
        ) {
          return;
        }

        gsap.set(frame, {
          clipPath: getInitialFrameClip,
          willChange: "clip-path",
        });
        gsap.set(image, {
          scale: 1.08,
          yPercent: 3,
          transformOrigin: "50% 50%",
          willChange: "transform",
        });
        gsap.set(frameTop, {
          y: getFrameTopOffset,
          left: getFrameSideInset,
          right: getFrameSideInset,
          willChange: "transform, opacity",
        });
        gsap.set(frameBottom, {
          left: getFrameSideInset,
          right: getFrameSideInset,
          willChange: "left, right",
        });
        gsap.set(intro, { willChange: "transform, opacity" });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${Math.max(window.innerHeight * 1.15, 780)}`,
            scrub: 0.65,
            pin: stage,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(
            frame,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
            },
            0,
          )
          .to(
            image,
            {
              scale: 1,
              yPercent: -2.5,
              duration: 1,
            },
            0,
          )
          .to(
            intro,
            {
              yPercent: -16,
              opacity: 0,
              duration: 0.56,
            },
            0.08,
          )
          .to(
            frameTop,
            {
              y: 0,
              left: "0%",
              right: "0%",
              opacity: 1,
              duration: 0.82,
            },
            0.06,
          )
          .to(
            frameBottom,
            {
              left: "0%",
              right: "0%",
              duration: 0.82,
            },
            0.06,
          )
          .to(
            overlay,
            {
              opacity: 0.74,
              duration: 1,
            },
            0,
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
          gsap.set([frame, image, frameTop, frameBottom, intro, overlay], {
            clearProps: "all",
          });
        };
      });
    }, stageRef);

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      media.revert();
      context.revert();
    };
  }, [shouldReduceMotion]);

  return (
    <section className="relative bg-ivory">
      <div
        ref={stageRef}
        data-hero-stage
        className="relative min-h-[100svh] overflow-hidden bg-ivory md:h-[100svh]"
      >
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-35" />

        <div
          ref={introRef}
          data-hero-intro
          className="relative z-20 mx-auto max-w-[1400px] px-6 pt-32 sm:pt-36 lg:px-12 lg:pt-40"
        >
          <motion.div
            variants={fadeUp}
            initial={false}
            animate="show"
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-bronze" />
            <span className="overline whitespace-nowrap">
              Architecture · Interiors
              <span className="hidden sm:inline"> · Experience</span>
            </span>
          </motion.div>

          <div className="grid min-w-0 items-end gap-7 lg:grid-cols-12 lg:gap-10">
            <h1 className="display min-w-0 text-[2.45rem] font-semibold tracking-[-0.055em] text-charcoal min-[390px]:text-[2.6rem] sm:text-[4.7rem] lg:col-span-8 lg:text-[6rem] xl:text-[6.6rem]">
              <AnimatedText
                animateOnMount
                lines={["Shaping spaces.", "Defining experiences."]}
                lineClassNames={[
                  "font-semibold leading-[1.01]",
                  "pb-[0.04em] font-normal leading-[1.04] text-charcoal/38",
                ]}
                stagger={0.13}
              />
            </h1>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-4 lg:pb-3"
            >
              <p className="max-w-md text-sm leading-7 text-charcoal/55">
                Considered architecture across the UK and UAE, bringing form,
                material, interiors, and identity together as one complete
                experience.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href="/projects" magnetic>
                  Explore our work
                </Button>
                <Button href="/contact" variant="ghost">
                  Start a project
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          ref={frameRef}
          data-hero-frame
          className="relative z-10 mx-6 mt-10 h-[470px] overflow-hidden bg-charcoal sm:h-[540px] md:absolute md:inset-y-0 md:left-1/2 md:mt-0 md:ml-0 md:h-[100svh] md:w-[100vw] md:-translate-x-1/2 md:[clip-path:polygon(4%_58%,96%_58%,96%_96%,4%_96%)]"
        >
          <div
            ref={imageMotionRef}
            data-hero-image
            className="absolute -inset-y-16 inset-x-0"
          >
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={slide.src}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { clipPath: "inset(0 0 0 100%)" }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { clipPath: "inset(0 0 0 0%)" }
                }
                exit={{ opacity: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 1.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={activeSlide === 0}
                  sizes="100vw"
                  style={{ objectPosition: slide.objectPosition }}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            ref={frameOverlayRef}
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/65 opacity-90"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />

          <div
            ref={frameTopRef}
            className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-6 p-5 text-white sm:p-7 lg:p-9"
          >
            <div>
              <div className="text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-white/65">
                Featured project
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${slide.project}-${slide.location}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-2 text-sm font-medium sm:text-base"
                >
                  {slide.project}{" "}
                  <span className="text-white/55">· {slide.location}</span>
                </motion.div>
              </AnimatePresence>
            </div>
            <Link
              href={slide.href}
              className="group pointer-events-auto hidden items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold text-charcoal transition-colors hover:bg-bronze hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:inline-flex"
            >
              View project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <motion.div
            key={slide.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-10"
          >
            {slide.callouts.map((callout, index) => (
              <motion.div
                key={callout.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.75 + index * 0.18,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ left: callout.x, top: callout.y }}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/80 bg-black/20 backdrop-blur-sm sm:h-9 sm:w-9">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="absolute inset-1 animate-ping rounded-full border border-white/35 [animation-duration:2.4s] motion-reduce:animate-none" />
                </span>
                <span
                  className={`absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap border-y border-white/35 bg-black/30 px-3 py-2 text-[0.6rem] font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-md sm:block ${
                    callout.side === "left" ? "right-12" : "left-12"
                  }`}
                >
                  {callout.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div
            ref={frameBottomRef}
            className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-5 p-5 text-white sm:p-7 lg:p-9"
          >
            <div className="min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={slide.discipline}
                  initial={{ opacity: 0, y: 7 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -7 }}
                  className="truncate text-xs tracking-[0.16em] uppercase text-white/75"
                >
                  {slide.discipline}
                </motion.p>
              </AnimatePresence>
              <p className="mt-2 hidden text-[0.62rem] tracking-[0.2em] text-white/50 uppercase md:block">
                Scroll to expand
              </p>
              <Link
                href={slide.href}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white hover:!text-black sm:hidden"
              >
                View project <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              className="flex items-center gap-2 sm:gap-3"
              aria-label="Featured project slides"
            >
              {heroSlides.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${item.project}, slide ${index + 1}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  className="group relative h-8 w-10 rounded-full border border-white/30 transition-colors hover:border-white/70 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-14"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px bg-white/35" />
                  {index === activeSlide && (
                    <motion.span
                      key={`${activeSlide}-progress`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: shouldReduceMotion
                          ? 0
                          : SLIDE_DURATION / 1000,
                        ease: "linear",
                      }}
                      className="absolute inset-x-0 top-1/2 h-px origin-left bg-white"
                    />
                  )}
                </button>
              ))}
              <span className="ml-1 text-[0.65rem] tabular-nums text-white/70">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

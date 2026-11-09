"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CinematicInterlude() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPausedRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldReduceMotion) {
      video?.pause();
      setIsPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !manuallyPausedRef.current) {
          void video.play().catch(() => setIsPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      manuallyPausedRef.current = true;
      video.pause();
    } else {
      manuallyPausedRef.current = false;
      void video.play().catch(() => setIsPlaying(false));
    }
  }

  return (
    <section className="overflow-hidden bg-paper pb-8 sm:pb-10 lg:pb-12">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 36, clipPath: "inset(5% 0 5% 0)" }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0% 0)",
          }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] overflow-hidden rounded-sm bg-charcoal shadow-[0_28px_80px_rgba(18,18,18,0.14)] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(360px,34vw,560px)]"
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/lissom-animation-poster.jpg"
            aria-label="Lissom architectural animation"
            onLoadedMetadata={(event) => {
              if (event.currentTarget.currentTime < 0.1) {
                event.currentTarget.currentTime = 2.4;
              }
            }}
            onCanPlay={() => setIsReady(true)}
            onPlaying={() => {
              setIsReady(true);
              setIsPlaying(true);
            }}
            onPause={() => setIsPlaying(false)}
            className={`h-full w-full object-cover object-center transition-[opacity,transform] duration-1000 ease-out ${
              isReady ? "scale-100 opacity-100" : "scale-[1.015] opacity-0"
            }`}
          >
            <source
              src="/media/lissom-animation-mobile.mp4"
              type="video/mp4"
              media="(max-width: 767px)"
            />
            <source
              src="/media/lissom-animation-desktop.mp4"
              type="video/mp4"
            />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-white sm:p-7 lg:p-9">
            <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.2em] text-white/80 uppercase sm:text-xs">
              <span className="h-px w-8 bg-bronze" />
              Architectural animation
            </div>

            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause architectural animation" : "Play architectural animation"}
              className="group inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/55 bg-black/25 text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal sm:size-12"
            >
              {isPlaying ? (
                <span className="flex gap-1" aria-hidden="true">
                  <span className="h-3.5 w-0.5 bg-current" />
                  <span className="h-3.5 w-0.5 bg-current" />
                </span>
              ) : (
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="ml-0.5 size-4 fill-current"
                >
                  <path d="M3.5 2.5a1 1 0 0 1 1.52-.85l8.2 5.5a1 1 0 0 1 0 1.7l-8.2 5.5a1 1 0 0 1-1.52-.85v-11Z" />
                </svg>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

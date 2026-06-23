"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { getFeaturedProjects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { viewportOnce } from "@/lib/animations";

function ProjectTile({
  project,
  large = false,
  index,
}: {
  project: Project;
  large?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div
          className={`img-zoom relative overflow-hidden rounded-sm bg-stone-soft ${
            large ? "aspect-[4/5] lg:aspect-[4/4.4]" : "aspect-[16/11]"
          }`}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes={large ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 40vw"}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-ivory/90 px-3 py-1.5 text-xs font-medium text-charcoal backdrop-blur-sm">
              View project →
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="display text-xl text-charcoal sm:text-2xl">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.location}</p>
          </div>
          <span className="overline shrink-0 pt-1">{project.category}</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const [lead, ...rest] = featured;
  const stacked = rest.slice(0, 2);

  return (
    <section className="border-b border-stone bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Selected Work"
            titleLines={["Projects that define", "our point of view."]}
          />
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-charcoal"
          >
            All projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {lead && <ProjectTile project={lead} large index={0} />}
          </div>
          <div className="flex flex-col gap-12 lg:col-span-5 lg:pt-16">
            {stacked.map((p, i) => (
              <ProjectTile key={p.slug} project={p} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

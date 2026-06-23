"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm bg-stone-soft">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 rounded-full border border-ivory/30 bg-charcoal/30 px-3 py-1 text-xs font-medium text-ivory backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="display text-xl text-charcoal transition-colors duration-300 group-hover:text-bronze sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.location}</p>
          </div>
          <span className="overline shrink-0 pt-1">{project.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}

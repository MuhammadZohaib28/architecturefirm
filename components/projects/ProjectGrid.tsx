"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "All";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* Filters */}
      <div className="sticky top-20 z-20 -mx-6 mb-12 border-b border-stone bg-ivory/85 px-6 py-4 backdrop-blur-md lg:-mx-12 lg:px-12">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                filter === cat
                  ? "text-ivory"
                  : "text-muted hover:text-charcoal",
              )}
            >
              {filter === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-charcoal"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
          <span className="ml-auto hidden shrink-0 pl-4 text-sm text-muted sm:block">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

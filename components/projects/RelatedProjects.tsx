import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

export default function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <section className="border-t border-stone bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="display text-3xl text-charcoal sm:text-4xl">Related Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

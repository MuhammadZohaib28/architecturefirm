import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProject,
  getProjectsBySlugs,
  projects,
} from "@/data/projects";
import Reveal from "@/components/common/Reveal";
import ProjectGallery from "@/components/projects/ProjectGallery";
import RelatedProjects from "@/components/projects/RelatedProjects";
import CtaSection from "@/components/common/CtaSection";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.excerpt,
    openGraph: { images: [project.coverImage] },
  };
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-stone pt-4">
      <dt className="overline mb-1.5 text-muted">{label}</dt>
      <dd className="text-charcoal">{value}</dd>
    </div>
  );
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getProjectsBySlugs(
    projects
      .filter((p) => p.slug !== project.slug && p.category === project.category)
      .map((p) => p.slug),
  ).slice(0, 3);
  const fallback = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const relatedProjects = related.length >= 3 ? related : fallback;

  return (
    <>
      {/* Cinematic hero */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-12 lg:pb-16">
            <Link
              href="/projects"
              className="overline mb-4 inline-flex items-center gap-2 text-ivory/70 transition-colors hover:text-ivory"
            >
              ← All Projects
            </Link>
            <p className="overline mb-3 text-bronze-soft">{project.category}</p>
            <h1 className="display max-w-4xl text-5xl text-ivory sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-ivory/75">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Overview + meta */}
      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-7">
            <p className="overline mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-bronze" />
              The Project
            </p>
            <p className="text-2xl leading-relaxed text-charcoal lg:text-[1.75rem]">
              {project.excerpt}
            </p>
            <p className="mt-6 leading-relaxed text-muted">{project.story}</p>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
              <Meta label="Location" value={project.location} />
              <Meta label="Year" value={project.year} />
              <Meta label="Area" value={project.area} />
              <Meta label="Client" value={project.client} />
              <div className="col-span-2 border-t border-stone pt-4">
                <dt className="overline mb-1.5 text-muted">Scope of Work</dt>
                <dd className="flex flex-wrap gap-2 pt-1">
                  {project.scope.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-stone px-3 py-1 text-sm text-charcoal-soft"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="border-b border-stone bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <Reveal>
            <h2 className="display mb-5 text-3xl text-charcoal">The Design Challenge</h2>
            <p className="leading-relaxed text-muted">{project.challenge}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mb-5 text-3xl text-charcoal">The Design Solution</h2>
            <p className="leading-relaxed text-muted">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-stone bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="display mb-12 text-3xl text-charcoal sm:text-4xl">Gallery</h2>
          </Reveal>
          <ProjectGallery images={project.gallery} title={project.title} />
        </div>
      </section>

      {/* Materials + Highlights + Floor plan */}
      <section className="border-b border-stone bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-5">
            <h2 className="display mb-6 text-2xl text-charcoal lg:text-3xl">Materials Used</h2>
            <ul className="border-t border-stone">
              {project.materials.map((m) => (
                <li
                  key={m}
                  className="flex items-center gap-4 border-b border-stone py-3.5 text-charcoal-soft"
                >
                  <span className="inline-block h-1.5 w-1.5 rotate-45 bg-bronze" />
                  {m}
                </li>
              ))}
            </ul>

            <h2 className="display mb-6 mt-12 text-2xl text-charcoal lg:text-3xl">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={h} className="flex gap-4 text-charcoal-soft">
                  <span className="overline shrink-0 pt-1 text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Floor plan / blueprint placeholder */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <h2 className="display mb-6 text-2xl text-charcoal lg:text-3xl">Floor Plan</h2>
            <div className="blueprint-grid-fine relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm border border-stone bg-stone-soft/60">
              <div className="absolute inset-6 border border-charcoal/15" />
              <div className="absolute inset-x-6 top-1/2 h-px bg-charcoal/10" />
              <div className="absolute inset-y-6 left-1/2 w-px bg-charcoal/10" />
              <div className="relative text-center">
                <span className="inline-block h-3 w-3 rotate-45 border border-bronze" />
                <p className="overline mt-3">Floor Plan</p>
                <p className="mt-1 text-sm text-muted">Detailed plans available on request</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedProjects projects={relatedProjects} />

      <CtaSection
        titleLines={["Inspired by this project?", "Let's design yours."]}
        description="Every great space starts with a conversation. Tell us what you're imagining."
        secondary={{ href: "/projects", label: "More Projects" }}
      />
    </>
  );
}

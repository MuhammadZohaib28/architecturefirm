import PageHero from "@/components/common/PageHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import CtaSection from "@/components/common/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";
import { collectionPageJsonLd } from "@/lib/structured-data";

const description =
  "Explore residential architecture and interior design projects by Studio Lissom LTD in Essex, England.";

export const metadata = createPageMetadata({
  title: "Residential Architecture & Interior Design Projects",
  description,
  path: "/projects",
  image: "/images/projects/the-gables/front-oblique.png",
  imageAlt: "The Gables residential architecture project in Essex",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={collectionPageJsonLd(
          "Studio Lissom Architecture Projects",
          description,
          "/projects",
          projects.map((project) => ({
            name: project.title,
            path: `/projects/${project.slug}`,
          })),
        )}
      />
      <PageHero
        eyebrow="Selected Work"
        titleLines={["A portfolio of", "considered spaces."]}
        description="Two contemporary Essex homes shaped by light, material, and a close relationship with their landscapes."
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ProjectGrid />
        </div>
      </section>

      <CtaSection
        titleLines={["Your project could be", "the next one here."]}
        description="Tell us about the space you have in mind, and let's explore what's possible together."
      />
    </>
  );
}

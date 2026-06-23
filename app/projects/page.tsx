import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import CtaSection from "@/components/common/CtaSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected residential, commercial, interior, renovation, and visualization projects by Kensington Design House.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        titleLines={["A portfolio of", "considered spaces."]}
        description="A selection of homes, workplaces, and interiors shaped by light, material, and a relentless attention to detail."
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getService, services } from "@/data/services";
import { getProjectsBySlugs } from "@/data/projects";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import RelatedProjects from "@/components/projects/RelatedProjects";
import CtaSection from "@/components/common/CtaSection";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.excerpt,
    openGraph: { images: [service.heroImage] },
  };
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getProjectsBySlugs(service.relatedProjects).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/35" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-12 lg:pb-16">
            <Link
              href="/services"
              className="overline mb-4 inline-flex items-center gap-2 text-ivory/70 transition-colors hover:text-ivory"
            >
              ← All Services
            </Link>
            <div className="flex items-end gap-5">
              <span className="display text-5xl text-bronze-soft sm:text-6xl">
                {service.number}
              </span>
              <h1 className="display max-w-3xl text-5xl text-ivory sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailContent service={service} />

      {related.length > 0 && <RelatedProjects projects={related} />}

      <CtaSection
        titleLines={["Ready to start your", `${service.title.toLowerCase()} project?`]}
        description="Let's talk through your goals and how this service can bring them to life."
        primary={{ href: "/contact", label: "Book Consultation" }}
        secondary={{ href: "/services", label: "Other Services" }}
      />
    </>
  );
}

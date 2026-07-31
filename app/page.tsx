import HeroSection from "@/components/home/HeroSection";
import SignatureIntro from "@/components/home/SignatureIntro";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignPhilosophy from "@/components/home/DesignPhilosophy";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import MaterialDetails from "@/components/home/MaterialDetails";
// import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SignatureIntro />
      <ServicesPreview />
      <FeaturedProjects />
      <DesignPhilosophy />
      {/* <StatsSection /> */}
      <ProcessSection />
      <MaterialDetails />
      {/* <Testimonials /> */}
      <FinalCTA />
    </>
  );
}

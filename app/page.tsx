import HeroSection from "@/components/home/HeroSection";
import SignatureIntro from "@/components/home/SignatureIntro";
import CinematicInterlude from "@/components/home/CinematicInterlude";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProcessSection from "@/components/home/ProcessSection";
import MaterialDetails from "@/components/home/MaterialDetails";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SignatureIntro />
      <CinematicInterlude />
      <FeaturedProjects />
      <ProcessSection />
      <MaterialDetails />
      <FinalCTA />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EducationSection } from "@/components/home/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <FeaturedProjects />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

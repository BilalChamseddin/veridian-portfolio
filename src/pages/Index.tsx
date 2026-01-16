import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { EducationSection } from "@/components/home/EducationSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
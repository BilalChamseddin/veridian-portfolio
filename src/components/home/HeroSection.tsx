import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/config/portfolio";

export function HeroSection() {
  const { personal, social } = portfolioConfig;

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero section-padding section-bg min-h-[90vh] flex items-center justify-center relative">
      <div className="section-container relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-in">
            Hi, I'm{" "}
            <span className="text-primary">
              {personal.name}
            </span>
            {" "}—{" "}
            <span className="text-primary">
              {personal.title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in animate-delay-100">
            {personal.tagline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in animate-delay-200">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 justify-center fade-in animate-delay-300">
          <span className="text-sm text-muted-foreground">Find me on:</span>
          <div className="flex items-center gap-3">
            <a
              href={social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity fade-in animate-delay-400"
        onClick={scrollToSkills}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
        <ChevronDown className="h-5 w-5 text-muted-foreground animate-scroll-bounce" />
      </div>
    </section>
  );
}

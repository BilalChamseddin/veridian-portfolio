import { useEffect, useState } from "react";
import { ExternalLink, Github, Clock, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig, Project } from "@/config/portfolio";
import { ProjectModal } from "@/components/ProjectModal";
import { Link } from "react-router-dom";

export function ProjectsSection() {
  const { projects } = portfolioConfig;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  // ESC key closes demo modal
  useEffect(() => {
    if (!activeDemo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDemo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDemo]);

  // Show only first 3 featured projects
  const featuredProjects = projects.filter(p => !p.comingSoon).slice(0, 3);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of engineering projects showcasing problem-solving and technical skills.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 100}
              onOpenProject={() => setSelectedProject(project)}
              onOpenDemo={(url) => setActiveDemo(url)}
            />
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Demo Video Modal */}
      {activeDemo && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActiveDemo(null)}
        >
          <div
            className="relative bg-background rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 rounded-full bg-muted p-2 hover:bg-muted/70"
              onClick={() => setActiveDemo(null)}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lazy-loaded Video */}
            <video
              src={activeDemo}
              controls
              preload="metadata"
              className="w-full max-h-[80vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  delay: number;
  onOpenProject: () => void;
  onOpenDemo: (url: string) => void;
}

function ProjectCard({
  project,
  delay,
  onOpenProject,
  onOpenDemo,
}: ProjectCardProps) {
  return (
    <div
      className="bg-card rounded-2xl shadow-soft overflow-hidden fade-in border border-border card-hover cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onOpenProject}
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {project.comingSoon && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="flex items-center gap-1 bg-accent text-accent-foreground">
              <Clock className="h-3 w-3" />
              Coming Soon
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.summary}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tech.length - 3}
            </Badge>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 pt-2">
          {project.github && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {project.demo && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDemo(project.demo!);
              }}
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

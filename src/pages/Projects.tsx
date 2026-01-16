import { useState } from "react";
import { ExternalLink, Github, Clock, Filter } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig, Project } from "@/config/portfolio";
import { ProjectModal } from "@/components/ProjectModal";

const Projects = () => {
  const { projects, projectCategories } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding pt-24">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of engineering projects across robotics, software, and mechanical design.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid - 3 Column */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                delay={index * 100}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay: number;
}

function ProjectCard({ project, onClick, delay }: ProjectCardProps) {
  return (
    <div
      className="bg-card rounded-2xl shadow-soft overflow-hidden fade-in border border-border card-hover cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
        {project.comingSoon && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="flex items-center gap-1 bg-accent text-accent-foreground">
              <Clock className="h-3 w-3" />
              Coming Soon
            </Badge>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.summary}
        </p>

        {/* Tech Stack */}
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

        {/* Action Links */}
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
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
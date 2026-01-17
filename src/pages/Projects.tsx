<<<<<<< HEAD
import { useState, useEffect } from "react";
import { ExternalLink, Github, Clock, Filter, X } from "lucide-react";
=======
import { useState } from "react";
import { ExternalLink, Github, Clock, Filter, Play, ZoomIn } from "lucide-react";
>>>>>>> c15aae5fae67bba09d1e635532f44ef9c151dc43
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig, Project } from "@/config/portfolio";
import { ProjectModal } from "@/components/ProjectModal";
import { VideoModal } from "@/components/VideoModal";
import { ImageLightbox } from "@/components/ImageLightbox";

const Projects = () => {
  const { projects, projectCategories } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
<<<<<<< HEAD
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
=======
  const [videoProject, setVideoProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; alt: string } | null>(null);
>>>>>>> c15aae5fae67bba09d1e635532f44ef9c151dc43

  // ESC key closes demo modal
  useEffect(() => {
    if (!activeDemo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDemo(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDemo]);

  const filteredProjects =
    selectedCategory === "All"
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
<<<<<<< HEAD
                onOpenDemo={(url) => setActiveDemo(url)}
=======
                onDemoClick={() => setVideoProject(project)}
                onImageClick={() => setLightboxImage({ url: project.image, alt: project.title })}
>>>>>>> c15aae5fae67bba09d1e635532f44ef9c151dc43
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

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

<<<<<<< HEAD
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
=======
      {/* Video Modal */}
      {videoProject?.demoVideo && (
        <VideoModal
          videoUrl={videoProject.demoVideo}
          title={videoProject.title}
          isOpen={!!videoProject}
          onClose={() => setVideoProject(null)}
        />
      )}

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          imageUrl={lightboxImage.url}
          alt={lightboxImage.alt}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
>>>>>>> c15aae5fae67bba09d1e635532f44ef9c151dc43
      )}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
<<<<<<< HEAD
  onOpenDemo: (url: string) => void;
  delay: number;
}

function ProjectCard({ project, onClick, onOpenDemo, delay }: ProjectCardProps) {
=======
  onDemoClick: () => void;
  onImageClick: () => void;
  delay: number;
}

function ProjectCard({ project, onClick, onDemoClick, onImageClick, delay }: ProjectCardProps) {
>>>>>>> c15aae5fae67bba09d1e635532f44ef9c151dc43
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
        {/* View Full Image Button */}
        <Button
          variant="secondary"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onImageClick();
          }}
          className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ZoomIn className="h-4 w-4 mr-1" />
          View Full
        </Button>
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
              onClick={(e) => {
                e.stopPropagation();
                onOpenDemo(project.demo);
              }}
            >
<<<<<<< HEAD
              <ExternalLink className="mr-1 h-4 w-4" />
              Demo
=======
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
>>>>>>> c15aae5fae67bba09d1e635532f44ef9c151dc43
            </Button>
          )}
          {project.demoVideo && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDemoClick();
              }}
            >
              <Play className="mr-1 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;

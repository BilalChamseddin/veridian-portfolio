import { useState } from "react";
import { ExternalLink, Github, Clock, ArrowRight, Play, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig, Project } from "@/config/portfolio";
import { ProjectModal } from "@/components/ProjectModal";
import { VideoModal } from "@/components/VideoModal";
import { ImageLightbox } from "@/components/ImageLightbox";
import { Link } from "react-router-dom";

export function ProjectsSection() {
  const { projects } = portfolioConfig;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [videoProject, setVideoProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; alt: string } | null>(null);

  // Show only first 3 featured projects on main page
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
              onClick={() => setSelectedProject(project)}
              onDemoClick={() => setVideoProject(project)}
              onImageClick={() => setLightboxImage({ url: project.image, alt: project.title })}
              delay={index * 100}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

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
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  onDemoClick: () => void;
  onImageClick: () => void;
  delay: number;
}

function ProjectCard({ project, onClick, onDemoClick, onImageClick, delay }: ProjectCardProps) {
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
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
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
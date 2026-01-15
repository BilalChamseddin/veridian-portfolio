import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig, Project } from "@/config/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioConfig;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of engineering projects showcasing problem-solving and technical skills.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => toggleExpand(project.id)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  delay: number;
}

function ProjectCard({ project, isExpanded, onToggle, delay }: ProjectCardProps) {
  return (
    <div
      className="bg-card rounded-2xl shadow-soft overflow-hidden fade-in border border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card Header */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Project Image */}
          <div className="w-full md:w-48 h-32 md:h-32 rounded-xl overflow-hidden bg-muted shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  {project.comingSoon && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{project.summary}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-primary hover:text-primary"
              >
                {isExpanded ? (
                  <>
                    Hide Details
                    <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    View Details
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
              
              {project.github && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              
              {project.demo && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border bg-muted/30 p-6 space-y-6 animate-fade-in">
          {/* Project Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">Project Summary</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Overview</p>
                  <p className="text-sm">{project.description}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Key Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Details */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">Engineering Details</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem Statement</p>
                  <p className="text-sm">{project.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Engineering Decisions</p>
                  <p className="text-sm">{project.decisions}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Outcome & Learnings</p>
                  <p className="text-sm">{project.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

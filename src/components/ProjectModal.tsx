import { useState } from "react";
import { X, Minimize2, Maximize2, ExternalLink, Github, Clock, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/config/portfolio";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isImageMinimized, setIsImageMinimized] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  if (!project) return null;

  return (
    <>
      {/* Main Project Modal */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {/* Project Image */}
          <div className={`relative w-full overflow-hidden bg-muted transition-all duration-300 ${isImageMinimized ? 'h-20' : 'h-56 md:h-72'}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => !isImageMinimized && setIsImageExpanded(true)}
            />
            
            {/* Image Controls */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              {!isImageMinimized && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsImageExpanded(true)}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <ZoomIn className="h-4 w-4 mr-1" />
                  Expand
                </Button>
              )}
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsImageMinimized(!isImageMinimized)}
                className="bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                {isImageMinimized ? (
                  <>
                    <Maximize2 className="h-4 w-4 mr-1" />
                    Show
                  </>
                ) : (
                  <>
                    <Minimize2 className="h-4 w-4 mr-1" />
                    Hide
                  </>
                )}
              </Button>
            </div>

            {/* Coming Soon Badge */}
            {project.comingSoon && (
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="flex items-center gap-1 bg-accent text-accent-foreground">
                  <Clock className="h-3 w-3" />
                  Coming Soon
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            {/* Project Summary Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Project Summary</h3>
              <p className="text-muted-foreground">{project.description}</p>
              
              {/* Key Technologies */}
              <div>
                <p className="text-sm font-medium mb-2">Key Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Engineering Details Section */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-primary">Engineering Details</h3>
              
              <div className="grid gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm">{project.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Progress</p>
                  <p className="text-sm">{project.decisions}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Outcome & Learnings</p>
                  <p className="text-sm">{project.outcome}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              {project.github && (
                <Button asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="outline" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              <Button variant="ghost" onClick={onClose} className="ml-auto">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen Image Overlay */}
      {isImageExpanded && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsImageExpanded(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsImageExpanded(false)}
              className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm hover:bg-background"
            >
              <X className="h-4 w-4 mr-1" />
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
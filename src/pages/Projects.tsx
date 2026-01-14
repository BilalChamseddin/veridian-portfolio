import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, Github, X, GitBranch, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolioConfig, Project } from "@/config/portfolio";

export default function Projects() {
  const { projects, projectCategories, openSourceContributions } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding pb-12">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl fade-in animate-delay-100">
              A collection of engineering projects demonstrating problem-solving, 
              system design, and technical implementation skills.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="section-container mb-12">
          <div className="flex flex-wrap gap-2 fade-in animate-delay-200">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-container mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group cursor-pointer fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-36 bg-gradient-to-br from-primary/10 to-secondary/30 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-primary">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-card/90 text-muted-foreground rounded-md">
                    {project.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium bg-secondary/30 text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="flex items-center gap-2 mb-8">
              <GitBranch className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Open Source Contributions</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {openSourceContributions.map((contrib, index) => (
                <div
                  key={contrib.name}
                  className="bg-card rounded-xl p-5 shadow-soft card-hover fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono text-primary">{contrib.name}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3" />
                      {contrib.stars}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{contrib.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-2xl shadow-hover max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">{selectedProject.title}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Problem Statement</h3>
                <p className="text-muted-foreground">{selectedProject.problem}</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Engineering Decisions</h3>
                <p className="text-muted-foreground">{selectedProject.decisions}</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Outcome & Learnings</h3>
                <p className="text-muted-foreground">{selectedProject.outcome}</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-secondary/30 text-secondary-foreground rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                {selectedProject.demo && (
                  <Button asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

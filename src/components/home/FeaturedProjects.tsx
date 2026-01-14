import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "CloudScale Analytics",
    problem: "Real-time analytics for distributed systems",
    solution: "Built a scalable data pipeline processing millions of events",
    tech: ["Go", "Kafka", "PostgreSQL", "Grafana"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "SecureAuth Platform",
    problem: "Enterprise-grade authentication system",
    solution: "Zero-trust architecture with MFA and SSO integration",
    tech: ["TypeScript", "Node.js", "Redis", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "DevOps Toolkit",
    problem: "Streamlined deployment workflows",
    solution: "Infrastructure-as-code templates and CI/CD pipelines",
    tech: ["Python", "Terraform", "Docker", "GitHub Actions"],
    github: "https://github.com",
    demo: null,
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Highlighted work showcasing problem-solving and technical expertise.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project visual */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/30 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Problem:</strong> {project.problem}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Solution:</strong> {project.solution}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-secondary/30 text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
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
      </div>
    </section>
  );
}

import { Code2, Database, Cloud, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["TypeScript", "Python", "Go", "Rust", "Java", "C++"],
  },
  {
    icon: Database,
    title: "Frameworks & Tools",
    skills: ["React", "Node.js", "Next.js", "Django", "PostgreSQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    icon: Cpu,
    title: "Engineering Concepts",
    skills: ["System Design", "Microservices", "API Design", "Testing", "Agile", "Security"],
  },
];

export function SkillsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable software systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 shadow-soft card-hover fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

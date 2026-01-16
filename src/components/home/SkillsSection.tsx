import { Code2, Wrench, Cpu, Cog, Settings } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Programming Languages": Code2,
  "Mechanical & Design": Wrench,
  "Electronics & Robotics": Cpu,
  "Software & Tools": Settings,
  "Engineering Concepts": Cog,
};

export function SkillsSection() {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.title] || Cog;
            return (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover fade-in border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-base mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
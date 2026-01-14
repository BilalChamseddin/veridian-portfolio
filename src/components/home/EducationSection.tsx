import { GraduationCap, Award } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export function EducationSection() {
  const { education, certifications } = portfolioConfig;

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and industry-recognized credentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="bg-card rounded-xl p-5 shadow-soft fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.focus}</p>
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Certifications</h3>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-soft">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={cert}
                    className="flex items-center gap-3 text-sm fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

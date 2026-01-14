import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    highlights: [
      "Led migration of monolith to microservices, reducing deployment time by 70%",
      "Architected real-time data pipeline processing 1M+ events/day",
      "Mentored team of 5 junior developers",
    ],
  },
  {
    role: "Software Engineer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    highlights: [
      "Built core authentication system serving 100K+ users",
      "Optimized database queries, improving response times by 40%",
      "Implemented CI/CD pipeline reducing release cycles by 50%",
    ],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency Co.",
    period: "2019 - 2020",
    highlights: [
      "Developed responsive web applications for 20+ clients",
      "Integrated third-party APIs and payment systems",
      "Contributed to open-source projects",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of building impactful solutions at innovative companies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className="bg-card rounded-2xl p-6 shadow-soft card-hover fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
              
              <div className="pl-4">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

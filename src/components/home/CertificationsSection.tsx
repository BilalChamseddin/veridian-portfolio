import { Award, BadgeCheck } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export function CertificationsSection() {
  const { certificationsAndAwards } = portfolioConfig;

  const certificationsWidth = "90vw"; // wider grid

  if (!certificationsAndAwards || certificationsAndAwards.length === 0) {
    return null;
  }

  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and credentials earned through dedication and achievement.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto"
          style={{ maxWidth: certificationsWidth }}
        >
          {certificationsAndAwards.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 shadow-soft fade-in border border-border card-hover min-h-[180px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`p-3 rounded-xl shrink-0 ${
                    item.type === "award"
                      ? "bg-secondary/20 text-primary" // award icon purple
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {item.type === "award" ? (
                    <Award className="h-5 w-5" />
                  ) : (
                    <BadgeCheck className="h-5 w-5" />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.description}
                  </p>
                  {item.year && (
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.year}
                    </p>
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

import { Award, BadgeCheck } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export function CertificationsSection() {
  const { certificationsAndAwards } = portfolioConfig;

  // Width variable (can be reused elsewhere if needed)
  const certificationsWidth = "75vw"; // 60% of viewport width

  if (!certificationsAndAwards || certificationsAndAwards.length === 0) {
    return null;
  }

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Awards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and credentials earned through dedication and achievement.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
          style={{ maxWidth: certificationsWidth }} // apply the width variable
        >
          {certificationsAndAwards.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 shadow-soft fade-in border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl shrink-0 ${
                  item.type === "award" 
                    ? "bg-secondary/20 text-secondary-foreground" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {item.type === "award" ? (
                    <Award className="h-5 w-5" />
                  ) : (
                    <BadgeCheck className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  {item.year && (
                    <p className="text-xs text-muted-foreground mt-2">{item.year}</p>
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


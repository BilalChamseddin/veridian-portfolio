import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-forest-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium fade-in">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight fade-in animate-delay-100">
                <span className="text-foreground">Alex Chen</span>
                <br />
                <span className="gradient-text">Software Engineer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg fade-in animate-delay-200">
                I design, build, and optimize scalable engineering solutions. 
                Passionate about clean code, system architecture, and creating 
                impactful technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 fade-in animate-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#resume" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4 fade-in animate-delay-400">
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:block fade-in animate-delay-200">
            <div className="relative">
              {/* Decorative geometric shapes */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-secondary rounded-2xl rotate-12 animate-float" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4">
                  {/* Code blocks representation */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-16 rounded-lg bg-primary/10 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-3 w-3/4 rounded bg-accent/30" />
                  <div className="h-3 w-1/2 rounded bg-secondary/50" />
                  <div className="h-3 w-2/3 rounded bg-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

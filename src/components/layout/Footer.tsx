import { Github, Linkedin, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { portfolioConfig } from "@/config/portfolio";

export function Footer() {
  const { social, footer } = portfolioConfig;
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Github, href: social.github.url, label: "GitHub" },
    { icon: Linkedin, href: social.linkedin.url, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${social.email}`, label: "Email" },
  ];

  // Smooth scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigation + scroll wrapper
  const handleNavClick = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {footer.copyright}. Built with passion.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={socialLink.label}
              >
                <socialLink.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => handleNavClick("/")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/projects")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

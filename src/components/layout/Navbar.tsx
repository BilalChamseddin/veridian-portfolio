import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Resume / Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    scrollToTop();
    setIsMobileMenuOpen(false); // close mobile menu if open
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — purple idle, darker purple hover */}
          <Link
            to="/"
            className="text-xl font-bold text-primary hover:text-[#8a4dbb] transition-colors"
            onClick={() => scrollToTop()}
          >
            {portfolioConfig.navbar.logo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    location.pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-primary hover:text-[#8a4dbb] transition-colors"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

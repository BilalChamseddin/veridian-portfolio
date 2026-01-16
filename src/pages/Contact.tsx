import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
  Phone,
  GraduationCap,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { portfolioConfig } from "@/config/portfolio";

export default function Contact() {
  const { personal, social } = portfolioConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">
                Resume & Contact
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in animate-delay-100">
                Let's discuss how I can contribute to your team. Open to
                opportunities worldwide, remote-friendly.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Resume & Contact Info */}
              <div className="space-y-8 fade-in animate-delay-200">
                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold mb-4">View Resume</h2>
                  <p className="text-muted-foreground mb-6">
                    Get a comprehensive overview of my experience, skills, and
                    projects in a recruiter-friendly format.
                  </p>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a
                      href={personal.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      View PDF Resume
                    </a>
                  </Button>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

                  <div className="space-y-4">
                    {/* Personal Email */}
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Personal</p>
                        <p className="text-sm text-muted-foreground">
                          {personal.email}
                        </p>
                      </div>
                    </a>

                    {/* University Email */}
                    <a
                      href={`mailto:${personal.universityEmail}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">University</p>
                        <p className="text-sm text-muted-foreground">
                          {personal.universityEmail}
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={social.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">
                          linkedin.com/in/{social.linkedin.username}
                        </p>
                      </div>
                    </a>

                    {/* GitHub */}
                    <a
                      href={social.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Github className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">
                          github.com/{social.github.username}
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${personal.phone}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          {personal.phone}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="fade-in animate-delay-300">
                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/30 text-primary mb-4">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        Your message has been sent. I'll get back to you within
                        24–48 hours.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="bg-muted/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="bg-muted/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Tell me about your project or opportunity..."
                          required
                          className="bg-muted/50 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

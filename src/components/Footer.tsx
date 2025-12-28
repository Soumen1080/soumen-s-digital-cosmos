import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card/20 backdrop-blur-lg border-t border-white/5 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/thisisouvik/Arcedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/30 backdrop-blur-md border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/soumen-mandal-3976a7318"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/30 backdrop-blur-md border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/soumenmandal1080"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/30 backdrop-blur-md border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Soumen Mandal. All Rights Reserved.
          </p>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

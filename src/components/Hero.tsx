import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";
import { useMouseParallax } from "@/hooks/useParallax";

const Hero = () => {
  const techStack = ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "TypeScript"];
  const mousePosition = useMouseParallax();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-12">
      {/* 3D Background Effects with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow"
        />
        <motion.div
          style={{
            x: mousePosition.x * -40,
            y: mousePosition.y * -40,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow"
        />
        <motion.div
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-accent/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1]"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Soumen Mandal
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-muted-foreground leading-tight"
            >
              Full-Stack Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 text-lg sm:text-xl lg:text-2xl text-muted-foreground pt-2"
            >
              {techStack.map((tech, index) => (
                <span key={index} className="flex items-center font-medium">
                  {tech}
                  {index < techStack.length - 1 && <span className="ml-3 sm:ml-4 text-primary text-2xl">•</span>}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-2xl leading-relaxed pt-2"
            >
              I build fast, secure, and beautiful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 sm:gap-5 pt-4"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 h-14 sm:h-16 lg:h-[70px] px-8 sm:px-10 lg:px-12 text-lg sm:text-xl lg:text-2xl font-semibold"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 h-14 sm:h-16 lg:h-[70px] px-8 sm:px-10 lg:px-12 text-lg sm:text-xl lg:text-2xl font-semibold"
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-5 sm:gap-6 pt-3"
            >
              <a
                href="https://github.com/thisisouvik/Arcedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={28} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
              </a>
              <a
                href="https://www.linkedin.com/in/soumen-mandal-3976a7318"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={28} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
              </a>
              <a
                href="https://www.instagram.com/soumenmandal1080"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={28} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
            }}
            className="flex justify-center items-center mt-6 md:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] rounded-full overflow-hidden border-4 sm:border-[6px] lg:border-[8px] border-primary shadow-2xl shadow-primary/50 backdrop-blur-sm bg-card/30 p-1">
                  <img
                    src={profileImage}
                    alt="Soumen Mandal"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 sm:w-[72px] sm:h-[72px] lg:w-20 lg:h-20 rounded-lg bg-card/80 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20"
                    style={{
                      top: `${50 + 45 * Math.cos((i * Math.PI * 2) / 6)}%`,
                      left: `${50 + 45 * Math.sin((i * Math.PI * 2) / 6)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-primary">
                      {techStack[i]?.substring(0, 2)}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

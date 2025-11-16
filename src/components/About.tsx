import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src={profileImage}
                  alt="Soumen Mandal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Full-Stack Developer & Tech Enthusiast
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, I create seamless 
                digital experiences that are both functional and beautiful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in web development has led me to work with cutting-edge technologies like 
                React, Node.js, and MongoDB. I'm constantly learning and adapting to new technologies 
                to deliver the best solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <h4 className="text-primary font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">India</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <h4 className="text-primary font-semibold mb-1">Experience</h4>
                <p className="text-muted-foreground text-sm">2+ Years</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <h4 className="text-primary font-semibold mb-1">Projects</h4>
                <p className="text-muted-foreground text-sm">15+ Completed</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <h4 className="text-primary font-semibold mb-1">Interests</h4>
                <p className="text-muted-foreground text-sm">AI, Web3</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <div className="flex gap-3 items-center">
                <a
                  href="https://github.com/thisisouvik/Arcedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/soumen-mandal-3976a7318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/soumenmandal1080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const projects = [
    {
      title: "Acredia",
      description: "A comprehensive platform for digital solutions with modern UI/UX design and seamless user experience.",
      tech: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://acredia.vercel.app/",
      githubUrl: "https://github.com/thisisouvik/Arcedia",
      gradient: "from-blue-500 to-purple-600",
      image: "https://res.cloudinary.com/dfkcf0jpd/image/upload/v1763397639/WhatsApp_Image_2025-11-16_at_12.09.34_f1a0416d_gp3gmr.jpg",
    },
    {
      title: "Herbal Supply Chain",
      description: "Blockchain-based supply chain management system for herbal products ensuring transparency and traceability.",
      tech: ["React", "Blockchain", "Web3"],
      liveUrl: "https://herbal-supply-chain.vercel.app/",
      githubUrl: "#",
      gradient: "from-green-500 to-emerald-600",
      image: "",
    },
    {
      title: "Sportify Bets",
      description: "Sports betting platform with real-time odds, secure transactions, and engaging user interface.",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://sportify-bets-qvjkaggdl-soumen1080s-projects.vercel.app/",
      githubUrl: "#",
      gradient: "from-orange-500 to-red-600",
      image: "https://res.cloudinary.com/dfkcf0jpd/image/upload/v1763397638/WhatsApp_Image_2025-11-16_at_12.08.22_1687f02c_ppfkpo.jpg",
    },
    {
      title: "Techverse Community",
      description: "A vibrant tech community platform connecting developers, sharing knowledge, and fostering collaboration.",
      tech: ["React", "Firebase", "Tailwind"],
      liveUrl: "https://techverse-community.vercel.app/",
      githubUrl: "#",
      gradient: "from-cyan-500 to-blue-600",
      image: "https://res.cloudinary.com/dfkcf0jpd/image/upload/v1763397639/WhatsApp_Image_2025-11-16_at_12.08.50_137ac4a3_xivcm7.jpg",
    },
    {
      title: "Credichain Verify",
      description: "Blockchain-based credential verification system ensuring authenticity and preventing fraud.",
      tech: ["React", "Blockchain", "TypeScript"],
      liveUrl: "https://credichain-verify-git-main-soumen1080s-projects.vercel.app/",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-600",
      image: "https://res.cloudinary.com/dfkcf0jpd/image/upload/v1763397638/WhatsApp_Image_2025-11-16_at_12.09.06_c115a571_rdrol3.jpg",
    },
  ];

  return (
    <section ref={ref} id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my best work and innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />

                {/* Project Image or Gradient Placeholder */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-48 overflow-hidden cursor-pointer"
                >
                  {project.image ? (
                    /* Actual Project Screenshot */
                    <>
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </>
                  ) : (
                    /* Gradient Placeholder when no image */
                    <>
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110 flex items-center justify-center`}>
                        <div className="text-white/20 text-8xl font-bold">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </>
                  )}
                </a>

                <div className="relative p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

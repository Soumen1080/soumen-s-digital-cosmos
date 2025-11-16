import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "TypeScript", icon: "📘" },
    { name: "Supabase", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section ref={ref} id="skills" className="py-20 relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 rounded-2xl transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

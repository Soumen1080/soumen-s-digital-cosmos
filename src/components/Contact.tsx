import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_ewq9y0f",
        "template_4nimev4",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Soumen Mandal",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          style={{ rotate, scale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-primary/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Let's Talk</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">Email</h4>
                  <p className="text-sm sm:text-base text-muted-foreground truncate">soumenmandal@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">Location</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">Phone</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Available on request</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all duration-300 h-14 sm:h-16 text-base sm:text-lg px-5"
                />
              </div>

              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all duration-300 h-14 sm:h-16 text-base sm:text-lg px-5"
                />
              </div>

              <div className="relative">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all duration-300 resize-none text-base sm:text-lg p-5 min-h-[160px] sm:min-h-[180px]"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 h-14 sm:h-16 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

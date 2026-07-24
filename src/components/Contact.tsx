import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, FileText } from "lucide-react";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 7.2h-6.2V5.6H22v1.6zM7.5 12.1c1.1-.5 1.7-1.4 1.7-2.7 0-2.3-1.7-3.4-4.3-3.4H0v13h5.2c2.8 0 4.6-1.3 4.6-3.7 0-1.6-.8-2.7-2.3-3.2zM2.6 8h2.1c1.1 0 1.9.4 1.9 1.5s-.7 1.6-1.9 1.6H2.6V8zm2.4 8.9H2.6v-3.5h2.5c1.3 0 2.1.6 2.1 1.7 0 1.2-.9 1.8-2.2 1.8zM16.7 9.4c-3 0-4.9 2.1-4.9 5.1 0 3.1 1.8 5 5 5 2.4 0 4-1.1 4.5-3h-2.3c-.3.7-1.1 1.1-2.1 1.1-1.5 0-2.4-.9-2.5-2.4h7.1v-.7c0-3.1-1.8-5.1-4.8-5.1zm-2.3 4c.2-1.3 1-2.1 2.3-2.1 1.2 0 2 .8 2.1 2.1h-4.4z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8"
          >
            Let's create
            <br />
            something <span className="italic text-accent">amazing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's connect!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="mailto:kaustubhhraut89@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-foreground text-primary-foreground font-medium rounded-full hover:bg-accent transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              kaustubhhraut89@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/kaustubh-raut-0b73a6288/", label: "LinkedIn",target: "_blank" },
               { icon: BehanceIcon, href: "https://www.behance.net/kaustubhrautkr", label: "Behance", target: "_blank" },
              { icon: FileText, href: "https://drive.google.com/file/d/1mCtpuz8JEJewBddKmoIG3xrboxt7yrC-/view?usp=sharing", label: "Resume", target: "_blank" },
            ].map(({ icon: Icon, href, label, target }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={target}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

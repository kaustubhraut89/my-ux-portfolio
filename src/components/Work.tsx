import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Case Studies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/work/${project.slug}`}>
                <div className="relative overflow-hidden rounded-2xl bg-card mb-6">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                <p className="text-accent text-sm font-medium tracking-wide uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

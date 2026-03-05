import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CaseStudy = () => {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) return <Navigate to="/" replace />;

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <Helmet>
        <title>{project.title} | Sarah Chen</title>
        <meta name="description" content={project.overview.slice(0, 155)} />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Work
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent font-medium text-sm tracking-widest uppercase mb-4"
            >
              {project.category}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-8"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-12"
            >
              {[
                { label: "Year", value: project.year },
                { label: "Role", value: project.role },
                { label: "Duration", value: project.duration },
                { label: "Team", value: project.team },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                  <p className="text-foreground font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="container mx-auto px-6 lg:px-12"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={project.hero}
                alt={project.title}
                className="w-full h-[40vh] md:h-[60vh] object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </section>

        {/* Overview & Challenge */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl font-medium text-foreground mb-6">
                  Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.overview}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-heading text-3xl font-medium text-foreground mb-6">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                Process
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
                How I Got There
              </h2>
            </motion.div>

            <div className="space-y-24">
              {project.process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <span className="text-accent font-heading text-6xl font-medium opacity-30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mt-2 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-72 md:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                Results
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
                Impact & Outcomes
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <p className="font-heading text-4xl md:text-5xl font-medium text-accent mb-2">
                    {outcome.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{outcome.metric}</p>
                </motion.div>
              ))}
            </div>

            {project.testimonial && (
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-24 max-w-3xl mx-auto text-center"
              >
                <p className="font-heading text-2xl md:text-3xl font-medium text-foreground italic leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </p>
                <footer>
                  <p className="text-foreground font-medium">
                    {project.testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {project.testimonial.role}
                  </p>
                </footer>
              </motion.blockquote>
            )}
          </div>
        </section>

        {/* Next Project */}
        <section className="py-24 bg-card border-t border-border">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">Next Case Study</p>
            <Link
              to={`/work/${nextProject.slug}`}
              className="group inline-flex flex-col items-center"
            >
              <h3 className="font-heading text-3xl md:text-5xl font-medium text-foreground group-hover:text-accent transition-colors mb-4">
                {nextProject.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-accent font-medium">
                View Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudy;

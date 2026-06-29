import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
        <title>{project.title} | Kaustubh Raut</title>
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
            <div className={`grid md:grid-cols-${project.problemStatement ? '3' : '2'} gap-12 lg:gap-16 max-w-6xl`}>
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

              {project.problemStatement && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  <h2 className="font-heading text-3xl font-medium text-foreground mb-6">
                    The Problem
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.problemStatement}
                  </p>
                </motion.div>
              )}

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

        {/* Target Users */}
        {project.targetUsers && project.targetUsers.length > 0 && (
          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <h2 className="font-heading text-3xl font-medium text-foreground">
                    Target Users
                  </h2>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.targetUsers.map((user, idx) => (
                    <motion.div
                      key={user.type}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-card border border-border"
                    >
                      <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                        {user.type}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {user.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Personas */}
        {project.personas && project.personas.length > 0 && (
          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <h2 className="font-heading text-3xl font-medium text-foreground">
                    User Personas
                  </h2>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.personas.map((persona, idx) => (
                    <motion.div
                      key={persona.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                          {persona.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {persona.description}
                        </p>
                        {persona.needs && persona.needs.length > 0 && (
                          <div className="border-t border-border pt-4">
                            <p className="text-foreground font-semibold text-xs uppercase tracking-wider mb-2">
                              Needs
                            </p>
                            <ul className="space-y-2">
                              {persona.needs.map((need, nIdx) => (
                                <li key={nIdx} className="text-muted-foreground text-sm flex items-start gap-2">
                                  <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                  <span>{need}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Competitive Analysis */}
        {project.competitiveAnalysis && project.competitiveAnalysis.length > 0 && (
          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                    Market Research
                  </p>
                  <h2 className="font-heading text-3xl font-medium text-foreground">
                    Competitive Analysis
                  </h2>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {project.competitiveAnalysis.map((competitor, idx) => (
                    <motion.div
                      key={competitor.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-heading text-lg font-medium text-foreground">
                            {competitor.name}
                          </h3>
                          <span className="text-accent font-semibold text-xs bg-accent/10 px-2.5 py-0.5 rounded-full">
                            {competitor.rating}
                          </span>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-foreground font-semibold text-[10px] uppercase tracking-wider mb-1">
                              Strengths
                            </p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              {competitor.strengths}
                            </p>
                          </div>
                          <div className="border-t border-border pt-3">
                            <p className="text-destructive font-semibold text-[10px] uppercase tracking-wider mb-1">
                              Weaknesses
                            </p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              {competitor.weaknesses}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Research Insights */}
        {project.researchInsights && project.researchInsights.length > 0 && (
          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                    User Insights
                  </p>
                  <h2 className="font-heading text-3xl font-medium text-foreground">
                    Research Insights
                  </h2>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.researchInsights.map((insight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-4 p-6 rounded-2xl bg-card border border-border"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-heading text-accent text-sm font-semibold">
                        {idx + 1}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed pt-1">
                        {insight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

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
                    <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                      {step.description}
                    </p>
                    {step.deliverable && (
                      <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                        <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                          Deliverable
                        </p>
                        <p className="text-foreground text-sm font-medium">
                          {step.deliverable}
                        </p>
                      </div>
                    )}
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

        {/* Key Design Decisions */}
        {project.keyDesignDecisions && project.keyDesignDecisions.length > 0 && (
          <section className="py-24 bg-background border-b border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                  Strategy
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
                  Key Design Decisions
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                {project.keyDesignDecisions.map((item, idx) => (
                  <motion.div
                    key={item.decision}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex flex-col justify-between p-8 rounded-2xl bg-card border border-border"
                  >
                    <div>
                      <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                        Decision {idx + 1}
                      </span>
                      <h3 className="font-heading text-2xl font-medium text-foreground mt-4 mb-3">
                        {item.decision}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.rationale}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Screens Showcase */}
        {project.screens && project.screens.length > 0 && (
          <section className="py-24 bg-card/20 border-b border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                  Interface Showcase
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
                  Key Interface Screens
                </h2>
              </motion.div>

              <div className="space-y-20">
                {project.screens.map((screen, sIdx) => (
                  <div key={screen.section} className="border-b border-border/50 pb-16 last:border-0 last:pb-0">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                      <div className="lg:col-span-1">
                        <span className="text-accent font-heading text-xs font-semibold uppercase tracking-widest bg-accent/10 px-3.5 py-1.5 rounded-full">
                          {screen.section}
                        </span>
                        <p className="text-muted-foreground leading-relaxed mt-6 text-base">
                          {screen.description}
                        </p>
                      </div>
                      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {screen.images.map((img, imgIdx) => (
                          <motion.div
                            key={imgIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: imgIdx * 0.1 }}
                            className="rounded-2xl overflow-hidden border border-border shadow-md bg-card/50 aspect-[9/19]"
                          >
                            <img
                              src={img}
                              alt={`${screen.section} screen ${imgIdx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Color Palette */}
        {project.colorPalette && project.colorPalette.length > 0 && (
          <section className="py-24 border-b border-border bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                  Visual Systems
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
                  Design Token Color Palette
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl">
                {project.colorPalette.map((color, idx) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="flex flex-col rounded-2xl overflow-hidden border border-border bg-card shadow-sm"
                  >
                    <div
                      className="w-full h-24 border-b border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="p-4 bg-card">
                      <p className="text-foreground font-semibold text-xs truncate">
                        {color.name}
                      </p>
                      <p className="text-muted-foreground text-[10px] font-mono uppercase mt-1">
                        {color.hex}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

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

        {/* Figma Prototype */}
        {project.figmaLink && (
          <section className="py-24 border-t border-border bg-card/30">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
              >
                <div>
                  <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                    Interactive Flow
                  </p>
                  <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
                    Figma Prototype
                  </h2>
                </div>
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-primary-foreground font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 self-start md:self-auto"
                >
                  Open Prototype
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full aspect-[16/9] min-h-[450px] max-h-[800px] rounded-2xl overflow-hidden border border-border bg-background shadow-2xl"
              >
                <iframe
                  src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
                    project.figmaLink
                  )}`}
                  title={`${project.title} Figma Prototype`}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* Behance Link */}
        {project.behanceUrl && (
          <section className="py-24 border-t border-border bg-card/30">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                Full Case Study
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
                Detailed Presentation
              </h2>
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-primary-foreground font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg"
              >
                View on Behance
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </section>
        )}

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

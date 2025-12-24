import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Spotify Playlist Discovery",
    category: "Mobile App Design",
    description:
      "Reimagining how users discover and curate playlists through AI-powered recommendations and social features.",
    image:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&h=600&fit=crop",
  },
  {
    title: "Fintech Dashboard Redesign",
    category: "Web Application",
    description:
      "A comprehensive redesign of a financial analytics platform, improving data visualization and user workflow.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Healthcare Booking System",
    category: "End-to-End UX",
    description:
      "Streamlining the patient experience with an intuitive appointment scheduling and telehealth platform.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    title: "E-commerce Mobile Experience",
    category: "UX Research & Design",
    description:
      "Creating a seamless shopping journey with personalized recommendations and frictionless checkout.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
];

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
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

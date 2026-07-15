import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  description?: string;
  skills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Cluematrix Technologies Private Limited",
    role: "UI/UX Designer",
    type: "Full-time",
    duration: "Aug 2025 - Present",
    location: "Nagpur, Maharashtra, India · On-site",
    description: "I played a pivotal role in enhancing user experiences at Cluematrix Technologies through innovative design practices.",
  },
  {
    company: "Sapphire",
    role: "UI/UX Designer",
    type: "Full-time",
    duration: "Sep 2024 - Aug 2025",
    location: "Nagpur, Maharashtra, India · Hybrid",
    skills: ["User Experience Design (UED)", "Rapid Prototyping"],
  },
  {
    company: "AtumCode",
    role: "UI/UX Designer",
    type: "Internship",
    duration: "May 2024 - Aug 2024",
    location: "Pune District, Maharashtra, India",
  },
  {
    company: "Evallo - Tutoring Business Automation",
    role: "UI/UX Design Intern",
    type: "Internship",
    duration: "May 2024 - Jun 2024",
    location: "Bengaluru, Karnataka, India · Remote",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left sticky column */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                My Journey
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
                Professional
                <br />
                Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Crafting interfaces, conducting research, and collaborating with cross-functional teams to build high-impact products across mobile, web, and SaaS ecosystems.
              </p>
            </motion.div>
          </div>

          {/* Right timeline column */}
          <div className="lg:col-span-2 space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-8 top-4 bottom-4 w-[2px] bg-border/60" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 lg:pl-20 group"
              >
                {/* Timeline node */}
                <div className="absolute left-3 lg:left-7 top-1.5 w-3 h-3 rounded-full bg-border group-hover:bg-accent group-hover:scale-125 transition-all duration-300 ring-4 ring-background" />

                <div className="bg-card/40 hover:bg-card/75 border border-border/60 hover:border-accent/40 rounded-2xl p-6 lg:p-8 transition-all duration-300 shadow-soft">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground font-medium text-sm mt-1 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-muted-foreground/70" />
                        {exp.company}
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-border/80" />
                        <span className="text-xs px-2.5 py-0.5 bg-muted rounded-full text-muted-foreground font-normal">
                          {exp.type}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-sm text-muted-foreground gap-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-4 h-4 text-muted-foreground/70" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground/80">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 mt-2">
                      {exp.description}
                    </p>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 bg-background rounded-full border border-border/80 text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

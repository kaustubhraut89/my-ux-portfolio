import { motion } from "framer-motion";
import Kaustubh_profile from "../assets/Kaustubh_profile.png";

const skills = [
  "UI/UX Design",
  "User Research",
  "Product Thinking",
   "User Flows",
  "Developer Handoff",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Interaction Design",
  "Figma",
  "Product Design",
  "Python",
  "FastAPI",
  "LLMs",
  "RAG",
  "LangChain",
  "Prompt Engineering",
  "AI/ML",
  "REST APIs",
  "Scikit-learn",
  "Hugging Face",
  "Jupyter Notebook",
  "Google Colab",
  "Anthropic",
  "OpenAI",
  "Vector Databases",
  "AI Agents"
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/50" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
              Designing with
              <br />
              purpose & empathy
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
              I'm a UI/UX Designer with 2 years of experience creating digital products across web, mobile, ERP, and B2B SaaS platforms. What I enjoy most about design is taking complex problems and turning them into experiences that feel simple and intuitive for users.
              </p>
              <p>
               Over the years, I've worked closely with stakeholders and developers, handling everything from understanding requirements and user flows to wireframes, prototypes, and final UI designs. I enjoy thinking beyond screens and understanding how products work from both the user and business perspective.
              </p>
              <p>
             Outside of design, I'm passionate about technology and constantly exploring AI, backend development, and new product ideas. I'm always looking for opportunities to learn, improve, and build products that make a real impact.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-foreground font-medium mb-6">
                Tools & Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="px-4 py-2 bg-background rounded-full text-xs text-muted-foreground border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src= {Kaustubh_profile}
                alt="Kaustubh Raut - UX Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

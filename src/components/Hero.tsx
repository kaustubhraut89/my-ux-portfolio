import { useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowDown } from "lucide-react";

import figmaImg from "../assets/figma.png";
import heroSectionImg from "../assets/Hero_section_Img.png";
import kingImg from "../assets/king.png";
import shahrukhImg from "../assets/shahrukhkhan.png";

// Each image has stable x/y motion values created at module scope so they
// are never recreated on re-render — this is what keeps drag position intact.
const useDraggableImage = () => ({
  x: useMotionValue(0),
  y: useMotionValue(0),
});

const Hero = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<string[]>(["figma", "king", "hero", "shahrukh"]);

  // Stable motion values per image — survive re-renders caused by setOrder
  const figma = useDraggableImage();
  const king = useDraggableImage();
  const hero = useDraggableImage();
  const shahrukh = useDraggableImage();

  const bringToFront = (id: string) => {
    setOrder((prev) => [...prev.filter((item) => item !== id), id]);
  };

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  // One-time entrance variants — strings, so object ref never changes
  const entrance = {
    figma:    { hidden: { opacity: 0, scale: 0.8, rotate: -10 }, visible: { opacity: 1, scale: 1, rotate: -6 } },
    king:     { hidden: { opacity: 0, scale: 0.8, rotate: 8 },   visible: { opacity: 1, scale: 1, rotate: 5  } },
    hero:     { hidden: { opacity: 0, scale: 0.8, rotate: -3 },  visible: { opacity: 1, scale: 1, rotate: -1 } },
    shahrukh: { hidden: { opacity: 0, scale: 0.8, rotate: -6 },  visible: { opacity: 1, scale: 1, rotate: -4 } },
  };

  return (
    <section
      id="hero"
      ref={constraintsRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-12"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent font-medium text-sm tracking-widest uppercase mb-6"
            >
              UX Designer & Product Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-5xl md:text-7xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
            >
              Crafting digital experiences
              <br />
              <span className="italic text-accent">that resonate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-12"
            >
              UI/UX Designer with 2 years of experience creating user-friendly web, mobile, ERP, and B2B SaaS products. Passionate about solving complex problems through research, thoughtful design, and product thinking. I also bring knowledge of backend systems and AI, helping bridge the gap between design and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToWork}
                className="group flex items-center gap-3 px-8 py-4 bg-foreground text-primary-foreground font-medium rounded-full hover:bg-accent transition-all duration-300"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-all duration-300"
              >
                About Me
              </button>
            </motion.div>
          </div>

          {/* Spacer for right column layout */}
          <div className="lg:col-span-5 relative h-[450px] lg:h-[600px] w-full pointer-events-none" />
        </div>
      </div>

      {/* ── Draggable Figma Badge — top-right ── */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        style={{
          x: figma.x,
          y: figma.y,
          zIndex: order.indexOf("figma") + 20,
          position: "absolute",
          top: "23%",
          right: "14%",
        }}
        variants={entrance.figma}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", stiffness: 120, delay: 0.8 }}
        whileDrag={{ scale: 1.1 }}
        whileHover={{ scale: 1.06, y: -4 }}
        onDragStart={() => bringToFront("figma")}
        onPointerDown={() => bringToFront("figma")}
        className="cursor-grab active:cursor-grabbing w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center select-none"
      >
        <img
          src={figmaImg}
          alt="Figma Logo"
          className="w-full h-full object-contain pointer-events-none"
          draggable="false"
        />
      </motion.div>

      {/* ── Draggable Shahrukh Khan — left of main photo, vertically centered ── */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        style={{
          x: shahrukh.x,
          y: shahrukh.y,
          zIndex: order.indexOf("shahrukh") + 20,
          position: "absolute",
          top: "32%",
          right: "38%",
        }}
        variants={entrance.shahrukh}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", stiffness: 120, delay: 1.1 }}
        whileDrag={{ scale: 1.06 }}
        whileHover={{ scale: 1.04, y: -4 }}
        onDragStart={() => bringToFront("shahrukh")}
        onPointerDown={() => bringToFront("shahrukh")}
        className="cursor-grab active:cursor-grabbing w-32 sm:w-36 lg:w-40 rounded-2xl overflow-hidden select-none"
      >
        <img
          src={shahrukhImg}
          alt="Shahrukh Khan"
          className="w-full h-auto pointer-events-none"
          draggable="false"
        />
      </motion.div>

      {/* ── Draggable Hero Photo — polaroid card, center-right ── */}
   <motion.div
  drag
  dragConstraints={constraintsRef}
  dragMomentum={false}
  dragElastic={0}
  style={{
    x: hero.x,
    y: hero.y,
    zIndex: order.indexOf("hero") + 20,
    position: "absolute",
    top: "30%",
    right: "18%",
    transform: "translateY(-50%)",
  }}
  variants={entrance.hero}
  initial="hidden"
  animate="visible"
  transition={{ type: "spring", stiffness: 120, delay: 1.0 }}
  whileDrag={{ scale: 1.03 }}
  whileHover={{ scale: 1.02, y: -4 }}
  onDragStart={() => bringToFront("hero")}
  onPointerDown={() => bringToFront("hero")}
  className="cursor-grab active:cursor-grabbing select-none"
>
  <img
    src={heroSectionImg}
    alt="Hey, it's me"
    style={{ width: "290px" }}
    className="rounded-sm pointer-events-none block"
    draggable="false"
  />
</motion.div>

      {/* ── Draggable King Card — right of main photo, mid-height ── */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        style={{
          x: king.x,
          y: king.y,
          zIndex: order.indexOf("king") + 20,
          position: "absolute",
          top: "42%",
          right: "6%",
        }}
        variants={entrance.king}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", stiffness: 120, delay: 0.95 }}
        whileDrag={{ scale: 1.06 }}
        whileHover={{ scale: 1.04, y: -4 }}
        onDragStart={() => bringToFront("king")}
        onPointerDown={() => bringToFront("king")}
        className="cursor-grab active:cursor-grabbing w-40 sm:w-48 lg:w-48 rounded-2xl overflow-hidden select-none"
      >
        <img
          src={kingImg}
          alt="King Card Illustration"
          className="w-full h-auto pointer-events-none"
          draggable="false"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

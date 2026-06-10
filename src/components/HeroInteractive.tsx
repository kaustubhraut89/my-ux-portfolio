import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import avatar from "@/assets/designer-avatar.png";

const HeroInteractive = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 150, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative w-full"
      style={{ perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-square w-full"
      >
        {/* Decorative stars */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-6 left-6 text-accent text-xl"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute top-20 left-2 text-accent/60 text-xs"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 right-4 text-accent/70 text-sm"
        >
          ✦
        </motion.div>

        {/* Big white blob with avatar */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 bg-background rounded-[45%_55%_50%_50%/55%_50%_55%_45%] shadow-elevated overflow-hidden flex items-end justify-center"
          style={{ transform: "translateZ(40px)" }}
        >
          <img
            src={avatar}
            alt="UX Designer illustration"
            width={768}
            height={768}
            className="w-[85%] h-auto object-contain"
          />
        </motion.div>

        {/* Floating accent dot */}
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-accent/90 shadow-elevated"
          style={{ transform: "translateZ(60px)" }}
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 -right-2 w-10 h-10 rounded-2xl border-2 border-accent/60"
          style={{ transform: "translateZ(30px)" }}
        />
      </motion.div>
    </div>
  );
};

export default HeroInteractive;

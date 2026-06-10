import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const palettes = [
  { name: "Warmth", from: "#E8C4A0", to: "#C97B5C", accent: "#7A3B2E" },
  { name: "Dusk", from: "#A8B5C8", to: "#5A6B86", accent: "#2E3B52" },
  { name: "Sage", from: "#C4D4B8", to: "#7A9B6E", accent: "#3E5234" },
  { name: "Bloom", from: "#F2C6D1", to: "#C97A95", accent: "#6B2E45" },
];

const typefaces = ["Serif", "Sans", "Mono"];

const HeroInteractive = () => {
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [typeIdx, setTypeIdx] = useState(0);
  const palette = palettes[paletteIdx];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fontClass =
    typeIdx === 0 ? "font-heading italic" : typeIdx === 1 ? "font-sans" : "font-mono";

  return (
    <div className="relative w-full">
      <div
        className="relative"
        style={{ perspective: 1200 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated"
        >
          {/* Gradient backdrop */}
          <motion.div
            key={paletteIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.to} 100%)`,
            }}
          />

          {/* Draggable shapes */}
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -60, bottom: 60 }}
            dragElastic={0.3}
            whileDrag={{ scale: 1.1 }}
            className="absolute top-[18%] left-[15%] w-24 h-24 rounded-full cursor-grab active:cursor-grabbing"
            style={{ background: palette.accent, opacity: 0.85 }}
          />
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -60, bottom: 60 }}
            dragElastic={0.3}
            whileDrag={{ scale: 1.1, rotate: 15 }}
            className="absolute bottom-[22%] right-[12%] w-28 h-28 rounded-2xl cursor-grab active:cursor-grabbing backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.4)" }}
          />
          <motion.div
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            dragElastic={0.3}
            whileDrag={{ scale: 1.15 }}
            className="absolute top-[45%] right-[28%] w-16 h-16 cursor-grab active:cursor-grabbing"
            style={{
              background: palette.accent,
              opacity: 0.6,
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Typography preview */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5" style={{ color: palette.accent }} />
              <span
                className="text-[10px] tracking-[0.2em] uppercase font-medium"
                style={{ color: palette.accent }}
              >
                {palette.name} · {typefaces[typeIdx]}
              </span>
            </div>
            <motion.p
              key={`${paletteIdx}-${typeIdx}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`text-2xl leading-tight ${fontClass}`}
              style={{ color: palette.accent }}
            >
              Design is how it works.
            </motion.p>
          </div>

          {/* Corner label */}
          <div className="absolute top-5 left-6 z-10">
            <span
              className="text-[10px] tracking-[0.25em] uppercase font-medium"
              style={{ color: palette.accent }}
            >
              ✦ Playground
            </span>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Palette
          </p>
          <div className="flex gap-2">
            {palettes.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setPaletteIdx(i)}
                aria-label={`Select ${p.name} palette`}
                className={`w-8 h-8 rounded-full transition-all duration-300 ${
                  paletteIdx === i
                    ? "ring-2 ring-offset-2 ring-foreground ring-offset-background scale-110"
                    : "hover:scale-110"
                }`}
                style={{
                  background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Type
          </p>
          <div className="flex gap-1 p-1 rounded-full border border-border">
            {typefaces.map((t, i) => (
              <button
                key={t}
                onClick={() => setTypeIdx(i)}
                className={`px-3 py-1 text-xs rounded-full transition-all ${
                  typeIdx === i
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground/70 text-center italic">
        Drag the shapes · tilt the card · try a palette
      </p>
    </div>
  );
};

export default HeroInteractive;

// src/components/Background.tsx
import { motion } from "framer-motion";

const NUM_DOTS = 60; // number of twinkling dots

const Background = () => {
  // Generate random positions and sizes for the dots
  const dots = Array.from({ length: NUM_DOTS }, () => ({
    x: Math.random() * 100, // % across width
    y: Math.random() * 100, // % across height
    size: Math.random() * 2 + 1, // 1px to 3px
    delay: Math.random() * 5, // stagger animation
    duration: Math.random() * 5 + 5, // 5s to 10s
  }));

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {dots.map((dot, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-white"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2], // twinkle effect
            x: [`0%`, `${(Math.random() - 0.5) * 2}%`, `0%`], // subtle horizontal move
            y: [`0%`, `${(Math.random() - 0.5) * 2}%`, `0%`], // subtle vertical move
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Background;

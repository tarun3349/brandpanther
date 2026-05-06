import { motion } from "framer-motion";

/** Full-viewport ambient shapes — pointer-events-none, sits behind site content */
const AmbientGraphics = () => {
  const sparkles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    top: `${(i * 41) % 88}%`,
    left: `${(i * 37 + 17) % 92}%`,
    delay: i * 0.35,
    baseScale: 0.6 + ((i % 5) / 12),
  }));

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft moving mesh */}
      <div className="absolute inset-0 opacity-45 max-md:opacity-55 animate-aurora" />

      {/* Large rotating ring — top right */}
      <svg
        className="absolute -right-[15%] -top-[10%] h-[90vmin] w-[90vmin] max-md:h-[120vmin] max-md:w-[120vmin] text-primary/[0.14] max-md:text-primary/[0.18] block animate-spin-ultra-slow"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="148" stroke="currentColor" strokeWidth="1" strokeDasharray="12 20" />
        <circle cx="200" cy="200" r="172" stroke="currentColor" strokeWidth="0.5" opacity="0.55" strokeDasharray="80 140" />
        <path
          d="M80 320 Q200 80 320 320"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.5"
          className="animate-dash-flow"
          strokeDasharray="8 12"
        />
      </svg>

      {/* Rings bottom left */}
      <svg
        className="absolute -bottom-[20%] -left-[12%] h-[72vmin] w-[72vmin] text-accent/[0.1] animate-spin-ultra-slow-reverse"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="132" stroke="currentColor" strokeWidth="1" strokeDasharray="4 26" opacity="0.85" />
        <circle cx="200" cy="200" r="178" stroke="currentColor" strokeWidth="0.5" opacity="0.35" strokeDasharray="220 260" />
      </svg>

      {/* Floating hex motif */}
      <svg
        className="absolute bottom-[30%] right-[8%] h-44 w-44 text-primary/15 animate-float-motion md:h-52 md:w-52"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M60 14 L106 41 V79 L60 106 L14 79 V41 Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M60 34 L92 53 V71 L60 90 L28 71 V53 Z" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      </svg>

      {/* Twinkling points */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute h-1 w-1 rounded-full bg-primary/70 shadow-[0_0_10px_hsl(var(--primary))]"
          style={{ top: s.top, left: s.left }}
          animate={{
            opacity: [0.2, 0.95, 0.2],
            scale: [s.baseScale * 0.85, s.baseScale * 1.55, s.baseScale * 0.85],
          }}
          transition={{
            duration: 3 + (s.id % 4),
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Diagonal shimmer band */}
      <div className="absolute -left-[30%] top-1/4 h-[60vh] w-[140%] -rotate-[15deg] overflow-hidden opacity-70">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/[0.07] to-transparent animate-shimmer-sweep" />
      </div>

      {/* Corner claws — abstract curves */}
      <svg
        className="absolute bottom-0 right-0 h-52 w-48 text-accent/[0.08] animate-float-motion-delayed opacity-70"
        viewBox="0 0 140 140"
        fill="none"
      >
        <path
          d="M20 120 C50 80 60 50 80 20 M40 120 C70 90 75 60 95 30 M60 120 C88 100 92 70 110 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AmbientGraphics;

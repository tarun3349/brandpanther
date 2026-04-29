import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useBelowBreakpoint } from "@/hooks/useBelowBreakpoint";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const isNarrow = useBelowBreakpoint();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, isNarrow ? 70 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, isNarrow ? 0.45 : 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, isNarrow ? -36 : -100]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated background blobs */}
      <div className="blob bg-primary/40 w-[500px] h-[500px] -top-32 -left-32 animate-float" />
      <div className="blob bg-accent/30 w-[600px] h-[600px] top-40 -right-40 animate-float-slow" />
      <div className="blob bg-primary-deep/50 w-[400px] h-[400px] bottom-0 left-1/3 animate-float" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }} />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <Sparkles className="h-4 w-4 text-primary-glow" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Premium Marketing Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter">
            <span className="text-gradient">Digital</span><br />
            <span className="text-gradient">Marketing</span><br />
            <span className="text-gradient-primary">Agency.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            From <span className="text-foreground font-semibold">first click</span> to <span className="text-foreground font-semibold">final sale</span> — we craft brands that hunt growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-soft-glow hover:shadow-glow transition-all duration-500 hover:scale-105 active:scale-[0.98] overflow-hidden touch-manipulation"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Let's Grow Together</span>
              <ArrowRight className="relative h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass hover:bg-white/10 transition-all active:bg-white/[0.08] touch-manipulation"
            >
              View Services
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "200+", l: "Brands Scaled" },
              { v: "10x", l: "Avg. ROI" },
              { v: "98%", l: "Retention" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-display font-bold text-gradient-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y: imgY }} className="relative">
          {/* Slow rotating dashed frame */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-12 md:-inset-16 grid place-items-center"
            animate={{ rotate: 360 }}
            transition={{ duration: isNarrow ? 210 : 320, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-[108%] w-[108%] rounded-[2.5rem] border border-dashed border-primary/[0.28]" />
          </motion.div>

          {/* Sparkles — stationary, subtle pulse */}
          {[
            "top-[4%] right-[2%]",
            "top-[40%] -right-[2%]",
            "bottom-[12%] right-[8%]",
            "bottom-[22%] -left-[2%]",
          ].map((pos, slot) => (
            <motion.div
              key={pos}
              aria-hidden
              className={`pointer-events-none absolute h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))] ${pos}`}
              animate={{ opacity: [0.25, 0.95, 0.25], scale: [0.75, 1.15, 0.75] }}
              transition={{ duration: 2.8 + slot * 0.3, repeat: Infinity, delay: slot * 0.4 }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative overflow-hidden rounded-3xl p-[3px] shadow-elegant bg-gradient-to-br from-primary/60 via-primary/25 to-accent/50 bg-[length:240%_240%] animate-gradient-shift"
          >
            <div className="absolute inset-[3px] z-[1] rounded-[calc(1.35rem-1px)] bg-background/15 pointer-events-none" />
            <div className="absolute -inset-10 bg-gradient-glow blur-3xl animate-pulse-glow rounded-full" />
            <img src="/hero-panther.jpg" alt="Brand Panther — fierce digital marketing agency"
                 width={1536} height={1536}
                 loading="eager"
                 className="relative z-[2] w-full rounded-[1.35rem] brightness-[1.02] contrast-[1.02]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

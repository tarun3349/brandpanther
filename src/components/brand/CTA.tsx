import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl relative overflow-hidden rounded-[2.5rem] bg-gradient-cta animate-gradient-shift p-8 sm:p-12 md:p-20 text-center shadow-glow ring-1 ring-white/15"
      >
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white/12 blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/12 blur-2xl animate-float-slow" />
        <div className="absolute top-1/2 left-[-8%] h-72 w-72 rounded-full bg-primary/25 blur-[100px] animate-float-motion" />
        <div className="absolute bottom-[-20%] right-[-15%] h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-float-motion-delayed" />

        <svg
          aria-hidden
          className="absolute top-8 right-[12%] h-28 w-28 sm:h-36 sm:w-36 text-primary-foreground/15 animate-spin-ultra-slow opacity-75 block"
          viewBox="0 0 120 120"
          fill="none"
        >
          <polygon points="60,14 106,94 14,94" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="60" cy="64" r="22" stroke="currentColor" strokeWidth="0.6" opacity={0.6} strokeDasharray="10 24" />
        </svg>

        <svg
          aria-hidden
          className="absolute bottom-6 left-[5%] h-20 w-20 sm:h-28 sm:w-28 text-white/25 animate-spin-ultra-slow-reverse opacity-75 block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect x="20" y="20" width="60" height="60" rx="12" stroke="currentColor" strokeWidth="1" />
          <path d="M30 82 L82 35" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" opacity={0.8} />
        </svg>

        <div className="absolute inset-0 opacity-[0.22]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

        <div className="relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-primary-foreground">
            Ready to Elevate <br className="hidden md:block" /> Your Brand?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Let's build a marketing engine that turns ambition into measurable growth.
          </p>
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 450, damping: 28 }}
            className="mt-10 group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold hover:scale-105 active:scale-[0.97] transition-all duration-300 shadow-elegant touch-manipulation"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;

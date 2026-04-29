import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, 0.05, 0.1, 0.95] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-elegant" : "bg-transparent"
        }`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-soft-glow group-hover:shadow-glow transition-all">
              <span className="font-display font-black text-lg">B</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Brand <span className="text-gradient-primary">Panther</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-soft-glow hover:shadow-glow hover:scale-105 transition-all">
            Let's Talk
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-6 flex flex-col gap-4 origin-top"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.28 }}
                className="text-muted-foreground hover:text-foreground py-1 touch-manipulation active:opacity-70"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 + 0.05, duration: 0.3 }}
              className="text-center px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold touch-manipulation active:scale-[0.97] transition-transform"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;

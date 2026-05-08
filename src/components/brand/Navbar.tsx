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
        scrolled ? "py-1.5" : "py-2"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div
          className={`flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 rounded-xl px-3 py-3.5 sm:px-4 sm:py-3.5 md:px-5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elegant" : "bg-transparent"
          }`}
        >
          <a
            href="#"
            className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 md:gap-4 md:max-w-none md:flex-none md:shrink-0 touch-manipulation rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
            aria-label="Brand Panther home"
          >
            <img
              src="/logo-mark.png"
              alt=""
              width={128}
              height={128}
              className="h-[4.25rem] w-[4.25rem] shrink-0 object-contain sm:h-20 sm:w-20 md:h-[5.25rem] md:w-[5.25rem] lg:h-24 lg:w-24 xl:h-[6.5rem] xl:w-[6.5rem] 2xl:h-28 2xl:w-28 group-hover:opacity-95 transition-opacity"
            />
            <img
              src="/logo-wordmark.png"
              alt="Brand Panther"
              className="h-16 min-h-0 min-w-0 flex-1 object-contain object-left sm:h-[4.5rem] sm:flex-none md:h-20 lg:h-24 xl:h-[6.5rem] 2xl:h-28 max-w-[calc(100vw-10rem)] min-[400px]:max-w-[calc(100vw-11rem)] sm:max-w-[min(58vw,28rem)] md:max-w-[min(52vw,32rem)] lg:max-w-[42rem] xl:max-w-none group-hover:opacity-95 transition-opacity"
            />
          </a>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8">
            <nav className="hidden items-center gap-5 md:flex lg:gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative text-sm text-muted-foreground transition-colors hover:text-foreground group whitespace-nowrap"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft-glow transition-all hover:scale-105 hover:shadow-glow md:inline-flex whitespace-nowrap"
            >
              Let's Talk
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-foreground/5 md:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
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

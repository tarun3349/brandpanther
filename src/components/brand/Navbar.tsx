import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAdminSettings } from "@/context/AdminContext";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const { settings } = useAdminSettings();
  const isMobile = useIsMobile();
  const logoGap = isMobile ? Math.min(settings.logoGap || 12, 16) : settings.logoGap || 12;
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
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
            className="group flex min-w-0 flex-1 items-center overflow-visible touch-manipulation rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:flex-none"
            aria-label={`${settings.companyName} home`}
            style={{ gap: `${logoGap}px` }}
          >
            <img
              src={settings.logoMarkUrl}
              alt=""
              width={512}
              height={512}
              className="h-12 w-12 shrink-0 object-contain transition-opacity group-hover:opacity-95 min-[380px]:h-14 min-[380px]:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
              style={{ transform: `scale(${(isMobile ? settings.logoSizeMobile : settings.logoSize || settings.logoSizeMobile || 100) / 100})`, transformOrigin: 'left' }}
            />
            <img
              src={settings.logoWordmarkUrl}
              alt={settings.companyName}
              width={512}
              height={512}
              className="h-8 min-w-0 max-w-[42vw] shrink object-contain object-left transition-opacity group-hover:opacity-95 min-[380px]:h-9 min-[380px]:max-w-[48vw] sm:h-10 sm:max-w-[min(50vw,28rem)] md:h-12 md:max-w-[26rem] md:shrink-0 lg:h-14 lg:max-w-[30rem] xl:h-16 xl:max-w-[34rem]"
              style={{ transform: `scale(${(isMobile ? settings.logoWordmarkSizeMobile : settings.logoWordmarkSize || settings.logoWordmarkSizeMobile || 100) / 100})`, transformOrigin: 'left' }}
            />
          </a>

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3 md:gap-6 lg:gap-8">
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
              <a
                href="/admin"
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground group whitespace-nowrap"
              >
                Admin
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </a>
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
              className="relative z-50 flex size-12 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 text-foreground shadow-soft-glow backdrop-blur hover:bg-foreground/10 sm:size-11 md:hidden"
            >
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {open ? <X className="size-7" /> : <Menu className="size-7" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </motion.header>

    {/* Backdrop Overlay */}
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
        aria-hidden="true"
      />
    )}

    {/* Full-Height Mobile Menu */}
    {open && (
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.4 }}
        className="fixed top-0 right-0 z-40 h-screen w-full max-w-sm bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-xl border-l border-foreground/10 md:hidden pt-24 px-6 pb-8 overflow-y-auto"
      >
        <div className="flex flex-col gap-2 space-y-1">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="group relative px-4 py-3.5 rounded-lg text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-300 active:scale-95"
            >
              {l.label}
              <span className="absolute inset-y-0 left-0 w-1 bg-gradient-primary rounded-r-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </motion.a>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: links.length * 0.08, duration: 0.4 }}
          className="mt-8 pt-8 border-t border-foreground/10"
        >
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-soft-glow hover:shadow-glow transition-all duration-300 active:scale-95"
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.nav>
    )}
    </>
  );
};

export default Navbar;

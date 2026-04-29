import { motion } from "framer-motion";
import { Share2, Megaphone, TrendingUp, Monitor } from "lucide-react";

const services = [
  { icon: Share2, title: "Social Media Management", desc: "Daily content, community growth, and consistent brand voice across every platform." },
  { icon: Megaphone, title: "Ad Campaign Management", desc: "ROAS-obsessed paid media on Meta, Google & beyond — engineered to scale." },
  { icon: TrendingUp, title: "Marketing + Sales Support", desc: "Funnels, CRM, and end-to-end systems that turn leads into loyal customers." },
  { icon: Monitor, title: "Website Designing", desc: "Conversion-first websites built with cinematic UX and lightning performance." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.09]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <pattern id="svcGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svcGrid)" />
        </svg>
      </div>
      <div className="blob bg-primary/15 w-[420px] h-[420px] top-1/4 -left-32 animate-float-slow" />
      <div className="mx-auto max-w-7xl relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold">What We Do</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            Services that <span className="text-gradient-primary">hunt growth</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Four core capabilities. One ferocious team. Engineered to deliver outcomes, not impressions.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ y: -10, transition: { duration: 0.35 } }}
              className="group relative">
              <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative h-full glass rounded-3xl p-7 overflow-hidden group-hover:border-primary/50 transition-all duration-500">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft-glow group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

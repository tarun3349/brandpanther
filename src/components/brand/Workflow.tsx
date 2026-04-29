import { motion } from "framer-motion";
import { Compass, Lightbulb, BarChart3, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, title: "Discovery Session", desc: "We dig deep into your brand, goals, and audience to map opportunities." },
  { icon: Lightbulb, title: "Strategy Planning", desc: "A custom growth blueprint built around measurable outcomes." },
  { icon: BarChart3, title: "Auditing & Analysis", desc: "Data-driven optimization on every channel, every week." },
  { icon: Rocket, title: "Execution Excellence", desc: "Relentless creative + media execution that scales what works." },
];

const Workflow = () => {
  return (
    <section id="workflow" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold">Our Workflow</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            Process built for <span className="text-gradient-primary">precision</span>.
          </h2>
        </motion.div>

        <div className="mt-20 relative">
          {/* Vertical rhythm line + flowing highlight */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/45 to-transparent" />
            <motion.div
              aria-hidden
              className="absolute left-0 top-0 w-full h-[min(240px,25vh)] rounded-full opacity-95"
              style={{
                background: "linear-gradient(180deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)",
                boxShadow: "0 0 24px hsl(var(--primary) / 0.8)",
              }}
              animate={{ top: ["-25%", "100%", "-25%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative h-5 w-5 rounded-full bg-gradient-primary shadow-glow">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                    </div>
                  </div>

                  <div className={`pl-20 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-3xl p-7 hover:border-primary/40 transition-colors group">
                      <div className={`flex items-center gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft-glow shrink-0">
                          <s.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-primary-glow tracking-widest">STEP 0{i + 1}</div>
                          <h3 className="text-2xl font-display font-bold mt-1">{s.title}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

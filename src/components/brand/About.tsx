import { motion } from "framer-motion";
import { Search, Palette, PenTool, Target } from "lucide-react";
import aboutImg from "@/assets/about-visual.jpg";

const features = [
  { icon: Search, title: "Market Research", desc: "Decode your audience with data" },
  { icon: Palette, title: "Branding", desc: "Identities people remember" },
  { icon: PenTool, title: "Content Creation", desc: "Stories that convert" },
  { icon: Target, title: "Lead Generation", desc: "Pipelines that pay" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="blob bg-primary/20 w-[400px] h-[400px] top-20 -left-32" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative">
          <div className="absolute -inset-6 bg-gradient-glow blur-3xl rounded-full" />
          <img src={aboutImg} alt="Brand Panther process visualization"
               loading="lazy" width={1280} height={1280}
               className="relative rounded-3xl border border-border/50" />
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold">
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            We bring your <span className="text-gradient-primary">vision</span> to life.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From conceptualization to implementation, Brand Panther partners with ambitious businesses
            to engineer growth that compounds — strategy, story, systems.
          </motion.p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 group hover:border-primary/40 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center mb-3 group-hover:shadow-soft-glow transition-all">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

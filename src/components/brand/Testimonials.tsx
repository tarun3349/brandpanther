import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Aarav Mehta", role: "Founder, NovaWear", text: "Brand Panther 4x'd our DTC revenue in 6 months. Their team feels like an extension of ours." },
  { name: "Priya Sharma", role: "CMO, Lumen Cafe", text: "From dead Instagram to 80k engaged followers. The creative quality is unmatched." },
  { name: "Rohan Iyer", role: "CEO, Stackforge", text: "Finally an agency that talks ROI, not vanity metrics. Our CAC dropped 60%." },
  { name: "Sara Khan", role: "Director, BloomCo", text: "Their workflow is surgical. Every rupee spent comes back with a friend." },
  { name: "Vikram Rao", role: "Founder, Helio Labs", text: "Beautiful design, ruthless execution. Brand Panther rebuilt our entire funnel." },
  { name: "Neha Kapoor", role: "Owner, Studio Lush", text: "Best decision we made all year. The dashboards alone are worth it." },
];

const Card = ({ t }: { t: typeof testimonials[number] }) => (
  <motion.div
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="w-[340px] md:w-[400px] shrink-0 glass rounded-3xl p-7 mr-6 hover:border-primary/50 hover:shadow-soft-glow transition-colors cursor-default"
  >
    <Quote className="h-8 w-8 text-primary mb-4" />
    <p className="text-foreground/90 leading-relaxed">{t.text}</p>
    <div className="mt-6 flex items-center gap-3">
      <div className="h-11 w-11 rounded-full bg-gradient-primary grid place-items-center font-display font-bold">
        {t.name[0]}
      </div>
      <div>
        <div className="font-semibold">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold">Client Love</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            Trusted by <span className="text-gradient-primary">bold brands</span>.
          </h2>
        </motion.div>
      </div>

      <div className="mt-16 relative overflow-hidden mask-fade-y" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
        <div className="flex animate-marquee w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

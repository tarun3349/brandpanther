import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Antara",
    role: "Saree & fashion label",
    text: "Brand Panther turned our sarees into a visual story. Their AI-powered creatives made our collection look premium—and it directly impacted engagement and sales.",
  },
  {
    name: "Tekera",
    role: "Tekera",
    text: "They didn’t just generate leads—they filtered the noise. With Brand Panther Sales Team, they focused only on serious prospects, and conversions improved massively for Tekera.",
  },
  {
    name: "Sujitha",
    role: "Personal brand",
    text: "Brand Panther helped me show up with clarity and confidence. My personal brand finally feels aligned with who I am—and people started noticing.",
  },
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
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

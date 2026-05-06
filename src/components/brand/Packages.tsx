import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter", price: "10,000", popular: false,
    tagline: "Launch with momentum",
    features: ["Social media management (2 platforms)", "8 posts / month", "Basic analytics report", "Email support"],
  },
  {
    name: "Growth", price: "20,000", popular: true,
    tagline: "Scale your reach",
    features: ["Everything in Starter", "4 platforms + 16 posts", "Paid ad campaign management", "Lead generation funnel", "Bi-weekly strategy calls"],
  },
  {
    name: "Elite", price: "40,000", popular: false,
    tagline: "Dominate your market",
    features: ["Everything in Growth", "Custom website design", "Full sales support", "Dedicated account manager", "Weekly performance reviews", "Priority creative production"],
  },
];

const Packages = () => {
  return (
    <section id="packages" className="section-padding relative overflow-hidden">
      <div className="blob bg-accent/20 w-[500px] h-[500px] top-1/3 -right-40" />
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold">Packages</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            Plans built to <span className="text-gradient-primary">accelerate</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className={`relative group ${p.popular ? "lg:-mt-6" : ""}`}>
              {p.popular && (
                <div className="absolute -inset-px rounded-3xl bg-gradient-primary blur opacity-70 animate-pulse-glow" />
              )}
              <div className={`relative h-full rounded-3xl p-8 transition-all duration-500 ${
                p.popular
                  ? "bg-gradient-to-br from-card via-card to-primary/10 border border-primary/40 shadow-glow"
                  : "glass hover:border-primary/30"
              }`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold shadow-soft-glow">
                    <Sparkles className="h-3 w-3" /> MOST POPULAR
                  </div>
                )}
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{p.tagline}</div>
                <h3 className="mt-1 text-3xl font-display font-bold">{p.name}</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-muted-foreground">₹</span>
                  <span className="text-5xl font-black tracking-tight">{p.price}</span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/20 grid place-items-center shrink-0">
                        <Check className="h-3 w-3 text-primary-glow" />
                      </div>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                   className={`mt-10 block text-center px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] ${
                     p.popular
                       ? "bg-gradient-primary text-primary-foreground shadow-soft-glow hover:shadow-glow"
                       : "glass hover:bg-white/10 border-primary/20"
                   }`}>
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

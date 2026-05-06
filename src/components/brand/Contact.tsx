import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { WHATSAPP_E164 } from "@/lib/whatsapp";

const Field = ({ label, type = "text", multiline = false, value, onChange, name }: any) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  const Comp: any = multiline ? "textarea" : "input";
  return (
    <div className="relative">
      <Comp
        type={type} name={name} value={value} onChange={onChange}
        rows={multiline ? 5 : undefined}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="peer w-full bg-card/50 border border-border rounded-2xl px-5 pt-6 pb-2 text-foreground outline-none focus:border-primary/60 focus:bg-card transition-all resize-none"
        required
      />
      <label className={`absolute left-5 pointer-events-none transition-all duration-200 ${
        active ? "top-2 text-xs text-primary-glow" : "top-4 text-base text-muted-foreground"
      }`}>{label}</label>
      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
        focused ? "opacity-100" : "opacity-0"
      }`} style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.25)' }} />
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Brand Panther,",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Project / message:",
      form.message,
    ];
    const text = lines.join("\n");
    const max = 3800;
    const body = text.length > max ? `${text.slice(0, max - 40)}\n\n…(trimmed)` : text;
    const url = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp chat — send the message there.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="blob bg-primary/25 w-[500px] h-[500px] -bottom-40 -left-32" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold">Get In Touch</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            Let's build <span className="text-gradient-primary">something fierce</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Drop us a line — strategy calls are free, results are not.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "brandpanther.ai@gmail.com", href: "mailto:brandpanther.ai@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 90254 30301", href: "tel:+919025430301" },
              { icon: MapPin, label: "Studio", value: "Chennai", href: "https://maps.google.com/?q=Chennai,+India" },
            ].map((c) => (
              <a key={c.label} href={c.href}
                 className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/40 transition-all hover:translate-x-1 group">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0 group-hover:shadow-soft-glow transition-shadow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 space-y-5 self-start">
          <Field label="Your Name" name="name" value={form.name} onChange={onChange} />
          <Field label="Email Address" name="email" type="email" value={form.email} onChange={onChange} />
          <Field label="Tell us about your project" name="message" multiline value={form.message} onChange={onChange} />
          <button type="submit"
            className="w-full group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold shadow-soft-glow hover:shadow-glow hover:scale-[1.02] transition-all duration-300">
            Send Message
            <MessageCircle className="h-4 w-4 group-hover:scale-105 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

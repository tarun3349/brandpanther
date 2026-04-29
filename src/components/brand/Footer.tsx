import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const socials = [Instagram, Linkedin, Twitter, Facebook];
  return (
    <footer className="relative border-t border-border/60 pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-soft-glow">
              <span className="font-display font-black">B</span>
            </div>
            <span className="font-display font-bold text-lg">
              Brand <span className="text-gradient-primary">Panther</span>
            </span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm">
            A premium digital marketing studio engineering growth for ambitious brands.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a key={i} href="#"
                 className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-gradient-primary hover:scale-110 hover:shadow-soft-glow transition-all duration-300">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold mb-4">Navigate</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary-glow transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-primary-glow transition-colors">Services</a></li>
            <li><a href="#packages" className="hover:text-primary-glow transition-colors">Packages</a></li>
            <li><a href="#workflow" className="hover:text-primary-glow transition-colors">Workflow</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:brandpanther.ai@gmail.com" className="hover:text-primary-glow transition-colors break-all">brandpanther.ai@gmail.com</a></li>
            <li><a href="tel:+919788030301" className="hover:text-primary-glow transition-colors">+91 97880 30301</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/40 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Brand Panther. All rights reserved.</div>
        <div>Crafted with ferocity 🔥</div>
      </div>
    </footer>
  );
};

export default Footer;

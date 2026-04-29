import Navbar from "@/components/brand/Navbar";
import AmbientGraphics from "@/components/brand/AmbientGraphics";
import Hero from "@/components/brand/Hero";
import About from "@/components/brand/About";
import Services from "@/components/brand/Services";
import Packages from "@/components/brand/Packages";
import Workflow from "@/components/brand/Workflow";
import Testimonials from "@/components/brand/Testimonials";
import CTA from "@/components/brand/CTA";
import Contact from "@/components/brand/Contact";
import Footer from "@/components/brand/Footer";
import ScrollProgress from "@/components/brand/ScrollProgress";
import WhatsAppButton from "@/components/brand/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Brand Panther — Premium Digital Marketing Agency";
    const desc = "Brand Panther engineers measurable growth for ambitious brands. Social, ads, websites, and full sales support — from first click to final sale.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', desc);
  }, []);

  return (
    <main className="relative isolate">
      <AmbientGraphics />
      <div className="relative z-[1]">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Packages />
        <Workflow />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
};

export default Index;

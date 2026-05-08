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
import FloatingContactButtons from "@/components/brand/FloatingContactButtons";
import DocumentMeta from "@/components/seo/DocumentMeta";

const Index = () => {
  return (
    <main className="relative isolate">
      <DocumentMeta />
      <AmbientGraphics />
      <div className="relative z-10">
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
        <FloatingContactButtons />
      </div>
    </main>
  );
};

export default Index;

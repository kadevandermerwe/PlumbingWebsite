import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServicesList from "@/components/ServicesList";
import CtaBanner from "@/components/CtaBanner";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <ServicesList />
      <CtaBanner />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

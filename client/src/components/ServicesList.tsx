import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaTint, FaFire, FaToilet, FaBath, FaWrench, FaExclamationTriangle } from "react-icons/fa";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  linkType: "quote" | "call";
};

export default function ServicesList() {
  const services: Service[] = [
    {
      icon: <FaTint />,
      title: "Leak Repairs",
      description: "Quick and effective solutions for dripping faucets, pipe leaks, and other water escape issues.",
      price: "$85",
      linkType: "quote"
    },
    {
      icon: <FaFire />,
      title: "Boiler Installations",
      description: "Expert installation of energy-efficient boilers with proper sizing and setup for optimal performance.",
      price: "$1,200",
      linkType: "quote"
    },
    {
      icon: <FaToilet />,
      title: "Drain Unblocking",
      description: "Professional solutions for stubborn blockages in sinks, toilets, showers, and main drainage lines.",
      price: "$95",
      linkType: "quote"
    },
    {
      icon: <FaBath />,
      title: "Bathroom Fitting",
      description: "Complete bathroom renovations, from design consultation to installation of fixtures and finishes.",
      price: "$2,500",
      linkType: "quote"
    },
    {
      icon: <FaWrench />,
      title: "Pipe Replacements",
      description: "Expert replacement of damaged, leaking, or outdated pipes with modern, durable materials.",
      price: "$150",
      linkType: "quote"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Emergency Call-Outs",
      description: "24/7 emergency service for urgent plumbing issues that require immediate attention.",
      price: "$120",
      linkType: "call"
    }
  ];
  
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Our Services</h2>
          <p className="mt-2 text-lg text-neutral-dark max-w-xl mx-auto">
            From small repairs to complete installations, we've got all your plumbing needs covered
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-light p-6 rounded-xl transition-all hover:shadow-lg border border-neutral-light">
              <div className="flex items-center mb-4">
                <div className="text-accent text-3xl mr-4">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl">{service.title}</h3>
              </div>
              <p className="text-neutral-dark mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-dark">Starting at <span className="font-bold text-primary">{service.price}</span></span>
                {service.linkType === 'quote' ? (
                  <Link href="/contact">
                    <a className="text-accent hover:text-accent-light font-medium transition-colors">
                      Get Quote <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                ) : (
                  <a href="tel:+15551234567" className="text-accent hover:text-accent-light font-medium transition-colors">
                    Call Now <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

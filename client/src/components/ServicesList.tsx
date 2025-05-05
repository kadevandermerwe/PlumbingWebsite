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
      title: "Leaky Taps & Pipes",
      description: "Quick fixes for dripping taps, leaky pipes, and those annoying puddles that keep appearing.",
      price: "£65",
      linkType: "quote"
    },
    {
      icon: <FaFire />,
      title: "Boiler Fitting",
      description: "Proper installation of energy-saving boilers to keep your home toasty and your bills manageable.",
      price: "£950",
      linkType: "quote"
    },
    {
      icon: <FaToilet />,
      title: "Blocked Drains",
      description: "We'll sort those stubborn blockages in your sink, loo, shower, or mains without the mess and fuss.",
      price: "£75",
      linkType: "quote"
    },
    {
      icon: <FaBath />,
      title: "Bathroom Fitting",
      description: "Full bathroom makeovers, from a friendly chat about design to fitting all your fixtures just right.",
      price: "£1,800",
      linkType: "quote"
    },
    {
      icon: <FaWrench />,
      title: "Pipe Replacements",
      description: "Swapping out dodgy, leaky, or old pipes with proper modern ones that'll last for years.",
      price: "£120",
      linkType: "quote"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Emergency Call-Outs",
      description: "24/7 emergency service when the water's going where it shouldn't and you need help straight away.",
      price: "£95",
      linkType: "call"
    }
  ];
  
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">What We Can Do For You</h2>
          <p className="mt-2 text-lg text-neutral-dark max-w-xl mx-auto">
            From fixing a dripping tap to sorting a whole new bathroom, we've got you covered
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
                      Free Quote <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                ) : (
                  <a href="tel:+15551234567" className="text-accent hover:text-accent-light font-medium transition-colors">
                    Ring Us <span aria-hidden="true">→</span>
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

import { FaTools, FaClock, FaShieldAlt, FaDollarSign } from "react-icons/fa";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function Features() {
  const features: Feature[] = [
    {
      icon: <FaTools className="text-3xl text-primary" />,
      title: "Expert Technicians",
      description: "Fully certified and experienced professionals for any plumbing job."
    },
    {
      icon: <FaClock className="text-3xl text-primary" />,
      title: "24/7 Emergency Service",
      description: "Available around the clock for those unexpected plumbing emergencies."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-primary" />,
      title: "Guaranteed Work",
      description: "All our repairs and installations come with a satisfaction guarantee."
    },
    {
      icon: <FaDollarSign className="text-3xl text-primary" />,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees or surprise charges."
    }
  ];
  
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Why Choose Us?</h2>
          <p className="mt-2 text-lg text-neutral-dark max-w-xl mx-auto">
            We take pride in delivering quality service that stands the test of time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-all hover:shadow-lg"
            >
              <div className="bg-primary-light/10 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-neutral-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

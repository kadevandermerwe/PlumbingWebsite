import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Get In Touch</h1>
            <p className="text-lg opacity-90 mb-6">
              We're here to help with all your plumbing needs. Contact us for a free quote or schedule a service.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline" className="bg-white text-primary hover:bg-neutral-light rounded-full">
                <a href="tel:+15551234567">
                  <FaPhoneAlt className="mr-2" />
                  (555) 123-4567
                </a>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent-light text-white rounded-full">
                <a href="mailto:info@flowfixplumbing.com">
                  <FaEnvelope className="mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick contact info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-neutral-light p-6 rounded-xl text-center">
              <div className="text-accent text-3xl mb-4 mx-auto">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Our Address</h3>
              <p className="text-neutral-dark">123 Plumbing Lane, Watertown, NY 12345</p>
            </div>
            
            <div className="bg-neutral-light p-6 rounded-xl text-center">
              <div className="text-accent text-3xl mb-4 mx-auto">
                <FaPhoneAlt />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Phone Number</h3>
              <p className="text-neutral-dark">
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">(555) 123-4567</a>
              </p>
            </div>
            
            <div className="bg-neutral-light p-6 rounded-xl text-center">
              <div className="text-accent text-3xl mb-4 mx-auto">
                <FaEnvelope />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Email Address</h3>
              <p className="text-neutral-dark">
                <a href="mailto:info@flowfixplumbing.com" className="hover:text-accent transition-colors">info@flowfixplumbing.com</a>
              </p>
            </div>
            
            <div className="bg-neutral-light p-6 rounded-xl text-center">
              <div className="text-accent text-3xl mb-4 mx-auto">
                <FaClock />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Business Hours</h3>
              <p className="text-neutral-dark">
                Mon-Fri: 8am-6pm<br />
                Sat: 9am-4pm<br />
                <span className="text-accent font-medium">24/7 Emergency Service</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact form and map section */}
      <ContactSection />
    </div>
  );
}

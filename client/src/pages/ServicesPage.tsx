import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServicesList from "@/components/ServicesList";
import CtaBanner from "@/components/CtaBanner";
import { Link } from "wouter";
import { FaWrench, FaTint, FaFire, FaToilet, FaBath, FaExclamationTriangle } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Plumbing Services</h1>
            <p className="text-lg opacity-90 mb-6">
              From small repairs to complete installations, we've got all your plumbing needs covered with professional service and fair pricing.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-accent hover:bg-accent-light text-white rounded-full">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white text-primary hover:bg-neutral-light rounded-full">
                <a href="tel:+15551234567">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-neutral-light border-0 shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="font-heading text-primary text-2xl md:text-3xl font-bold mb-4">Professional Plumbing Solutions</h2>
                  <p className="text-neutral-dark mb-6">
                    At FlowFix Plumbing, we offer a comprehensive range of plumbing services for both residential and commercial clients. Our team of licensed professionals is equipped to handle any plumbing issue, from routine maintenance to emergency repairs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="rounded-full p-1 bg-accent/20 mr-3">
                        <FaWrench className="text-accent" />
                      </div>
                      <span>Expert technicians with years of experience</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full p-1 bg-accent/20 mr-3">
                        <FaWrench className="text-accent" />
                      </div>
                      <span>Quality parts and workmanship guarantee</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full p-1 bg-accent/20 mr-3">
                        <FaWrench className="text-accent" />
                      </div>
                      <span>Fair, transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full p-1 bg-accent/20 mr-3">
                        <FaWrench className="text-accent" />
                      </div>
                      <span>Emergency services available 24/7</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <FaTint className="text-4xl text-primary mx-auto mb-2" />
                      <h3 className="font-heading font-bold">Leak Repairs</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <FaFire className="text-4xl text-primary mx-auto mb-2" />
                      <h3 className="font-heading font-bold">Boiler Services</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <FaToilet className="text-4xl text-primary mx-auto mb-2" />
                      <h3 className="font-heading font-bold">Drain Clearing</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <FaBath className="text-4xl text-primary mx-auto mb-2" />
                      <h3 className="font-heading font-bold">Bathroom Fitting</h3>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Detailed services list */}
      <ServicesList />
      
      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}

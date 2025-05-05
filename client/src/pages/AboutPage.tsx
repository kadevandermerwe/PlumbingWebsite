import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { FaCheckCircle, FaAward, FaTools, FaUsers, FaHandshake, FaShieldAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About FlowFix Plumbing</h1>
            <p className="text-lg opacity-90 mb-6">
              Your trusted local plumber since 2005. Meet our team and learn our story.
            </p>
          </div>
        </div>
      </section>
      
      {/* About content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Story</h2>
              
              <p className="text-neutral-dark mb-4">
                Founded in 2005 by master plumber Mike Johnson, FlowFix Plumbing has grown from a one-man operation to a trusted team of professional plumbers serving the entire metropolitan area.
              </p>
              
              <p className="text-neutral-dark mb-4">
                With over 15 years of experience in residential and commercial plumbing, we've built our reputation on honest work, fair pricing, and exceptional customer service. Our team is fully licensed, insured, and background-checked for your peace of mind.
              </p>
              
              <p className="text-neutral-dark mb-6">
                We believe in doing the job right the first time, using quality materials and the latest techniques to ensure lasting results. From small repairs to complete installations, we treat every home as if it were our own.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full border-4 border-accent bg-neutral-light flex items-center justify-center">
                  <FaUsers className="text-3xl text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg">Mike Johnson</p>
                  <p className="text-neutral">Founder & Master Plumber</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-neutral-light px-4 py-2 rounded-full">
                  <FaCheckCircle className="text-accent mr-2" />
                  <span className="font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center bg-neutral-light px-4 py-2 rounded-full">
                  <FaCheckCircle className="text-accent mr-2" />
                  <span className="font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center bg-neutral-light px-4 py-2 rounded-full">
                  <FaCheckCircle className="text-accent mr-2" />
                  <span className="font-medium">Background-Checked Team</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-lg bg-neutral-light h-80 shadow-xl w-full flex items-center justify-center">
                  <FaUsers className="text-8xl text-primary-light/40" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="mr-3 text-accent text-4xl">
                      <FaAward />
                    </div>
                    <div>
                      <p className="font-heading font-bold">Best Plumbing Service</p>
                      <p className="text-sm text-neutral-dark">Local Business Awards 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Our Values</h2>
            <p className="mt-2 text-lg text-neutral-dark max-w-xl mx-auto">
              The principles that guide our work every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-primary-light/10 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                  <FaTools className="text-3xl text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Quality Workmanship</h3>
                <p className="text-neutral-dark">We take pride in our craft and ensure that every job is completed to the highest standards.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-primary-light/10 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                  <FaHandshake className="text-3xl text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Integrity & Honesty</h3>
                <p className="text-neutral-dark">We provide transparent pricing and honest recommendations for all plumbing solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-primary-light/10 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center mx-auto">
                  <FaShieldAlt className="text-3xl text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Customer Satisfaction</h3>
                <p className="text-neutral-dark">Your complete satisfaction is our top priority on every job, large or small.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                Ready to Experience Our Service?
              </h3>
              <p className="text-white/80">
                Contact us today for a free quote on your plumbing needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="bg-white text-primary hover:bg-neutral-light rounded-full">
                <a href="tel:+15551234567">Call Now</a>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent-light text-white rounded-full">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

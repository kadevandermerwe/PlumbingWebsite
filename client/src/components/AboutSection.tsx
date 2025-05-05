import { FaCheckCircle, FaAward, FaUsers } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">About FlowFix Plumbing</h2>
            
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
              <div className="rounded-lg shadow-xl bg-neutral-light h-80 w-full flex items-center justify-center">
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
  );
}

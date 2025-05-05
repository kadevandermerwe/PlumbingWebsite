import { FaCheckCircle, FaAward, FaUsers } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Meet FlowFix Plumbing</h2>
            
            <p className="text-neutral-dark mb-4">
              Started back in 2005 by Mike Johnson (a proper qualified plumber), FlowFix has grown from just Mike with his van to a friendly team of local plumbers serving the whole area.
            </p>
            
            <p className="text-neutral-dark mb-4">
              With over 15 years of sorting out all sorts of plumbing niggles in homes and businesses, we've built our good name on honest work, fair prices, and simply being nice to our customers. Everyone on our team is fully qualified, insured, and DBS-checked so you can feel perfectly safe.
            </p>
            
            <p className="text-neutral-dark mb-6">
              We believe in getting the job done properly first time round, using good quality parts and modern methods to make sure things don't break again. Whether it's a wobbly tap or a brand new bathroom, we'll treat your home like our own mum's house.
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
                <span className="font-medium">Fully Qualified & Insured</span>
              </div>
              <div className="flex items-center bg-neutral-light px-4 py-2 rounded-full">
                <FaCheckCircle className="text-accent mr-2" />
                <span className="font-medium">15+ Years' Experience</span>
              </div>
              <div className="flex items-center bg-neutral-light px-4 py-2 rounded-full">
                <FaCheckCircle className="text-accent mr-2" />
                <span className="font-medium">DBS-Checked Team</span>
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
                    <p className="font-heading font-bold">Top Plumbing Service</p>
                    <p className="text-sm text-neutral-dark">Local Traders Award 2022</p>
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

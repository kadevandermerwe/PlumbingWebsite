import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaPhoneAlt, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Quality Plumbing, <span className="text-secondary-light">Sorted!</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-md">
              Your friendly neighbourhood plumber, providing proper workmanship at fair prices since 2005.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-accent hover:bg-accent-light px-6 py-6 rounded-full font-heading font-bold text-lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white text-primary hover:bg-neutral-light px-6 py-6 rounded-full font-heading font-bold text-lg">
                <a href="tel:+15551234567">
                  <FaPhoneAlt className="mr-2" />
                  Ring Us Now
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light/30"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light/30"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light/30"></div>
              </div>
              <div className="ml-4">
                <div className="text-yellow-300 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-sm">Over 500+ satisfied customers</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-lg bg-white/10 shadow-2xl w-full h-80 flex items-center justify-center">
              <div className="text-8xl text-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v6m0 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  <path d="M17.3 7.7a5 5 0 0 0-10.6 0M3 10v1a5 5 0 0 0 5 5h3v3a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1v-3h3a5 5 0 0 0 5-5v-1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

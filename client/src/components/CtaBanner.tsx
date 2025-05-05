import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaPhoneAlt } from "react-icons/fa";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
              Need Emergency Plumbing Help?
            </h3>
            <p className="text-white/80">
              We're available 24/7 for urgent plumbing issues.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="bg-white text-primary hover:bg-neutral-light px-6 py-3 rounded-full font-heading font-bold text-lg">
              <a href="tel:+15551234567">
                <FaPhoneAlt className="mr-2" />
                Call Now
              </a>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full font-heading font-bold text-lg">
              <Link href="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import TestimonialsSection from "@/components/TestimonialsSection";
import { FaStar, FaQuoteLeft, FaUsers } from "react-icons/fa";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Customer Testimonials</h1>
            <p className="text-lg opacity-90 mb-6">
              Don't just take our word for it. Here's what our customers have to say about our service.
            </p>
            <div className="flex justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-300 text-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary">What Our Customers Say</h2>
            <p className="mt-2 text-lg text-neutral-dark max-w-xl mx-auto">
              We're proud to have served hundreds of satisfied customers
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-neutral-light border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-primary/10 text-4xl absolute -top-2 -left-2" />
                  <p className="text-neutral-dark italic mb-6 relative z-10 pl-4">
                    "Mike showed up promptly and fixed our leaky faucet in no time. He explained everything clearly and even gave us tips to prevent future issues. The price was exactly as quoted - no surprises. Highly recommended!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center mr-4">
                    <FaUsers className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">Sarah Johnson</p>
                    <p className="text-sm text-neutral">Oakwood Neighborhood</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-light border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-primary/10 text-4xl absolute -top-2 -left-2" />
                  <p className="text-neutral-dark italic mb-6 relative z-10 pl-4">
                    "When our water heater failed on a Sunday morning, we thought we'd be without hot water for days. FlowFix responded to our emergency call within an hour and had a new unit installed that same day. Great service!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center mr-4">
                    <FaUsers className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">Robert Thompson</p>
                    <p className="text-sm text-neutral">Riverside Area</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-light border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-primary/10 text-4xl absolute -top-2 -left-2" />
                  <p className="text-neutral-dark italic mb-6 relative z-10 pl-4">
                    "We hired FlowFix for a complete bathroom renovation and couldn't be happier with the results. Their attention to detail was impressive, and they kept everything on schedule and within budget. Our new bathroom is beautiful!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center mr-4">
                    <FaUsers className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">Emily & David Clark</p>
                    <p className="text-sm text-neutral">Pine Hills Estate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials carousel section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                Join Our Satisfied Customers
              </h3>
              <p className="text-white/80">
                Experience the FlowFix difference today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="bg-white text-primary hover:bg-neutral-light rounded-full">
                <a href="tel:+15551234567">Call Now</a>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent-light text-white rounded-full">
                <Link href="/contact">Request Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

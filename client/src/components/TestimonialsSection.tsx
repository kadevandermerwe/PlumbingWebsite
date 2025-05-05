import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaUsers } from "react-icons/fa";

type Testimonial = {
  stars: number;
  quote: string;
  name: string;
  location: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      stars: 5,
      quote: "Gary showed up promptly and fixed our leaky tap in no time. He explained everything clearly and even gave us tips to prevent future issues. The price was exactly as quoted - no surprises. Absolutely brilliant service!",
      name: "Emma Wilkinson",
      location: "Nettleham, Lincoln"
    },
    {
      stars: 5,
      quote: "When our boiler conked out on a Sunday morning, we thought we'd be without hot water for days. FlowFix responded to our emergency call within an hour and had a new unit installed that same day. Absolutely top service!",
      name: "James Barker",
      location: "Saxilby, Lincolnshire"
    },
    {
      stars: 5,
      quote: "We hired FlowFix for a complete bathroom renovation and couldn't be happier with the results. Their attention to detail was smashing, and they kept everything on schedule and within budget. Our new bathroom is absolutely gorgeous!",
      name: "Sophie & Oliver Bennett",
      location: "Wragby, Lincolnshire"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">What Our Customers Say</h2>
          <p className="mt-2 text-lg text-neutral-dark max-w-xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </div>
        
        <div className="relative testimonial-carousel max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-slide bg-white p-8 rounded-xl shadow-md ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="text-yellow-400 flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <FaStar key={i + testimonial.stars} className="opacity-30" />
                ))}
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-primary/10 text-4xl absolute -top-2 -left-2" />
                <p className="text-neutral-dark italic mb-6 relative z-10 pl-4">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FaUsers className="text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold">{testimonial.name}</p>
                  <p className="text-sm text-neutral">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
          
          <button 
            onClick={goToPrev}
            className="testimonial-prev absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-neutral-light transition-colors focus:outline-none"
          >
            <FaChevronLeft className="text-primary" />
          </button>
          <button 
            onClick={goToNext}
            className="testimonial-next absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-neutral-light transition-colors focus:outline-none"
          >
            <FaChevronRight className="text-primary" />
          </button>
          
          <div className="flex justify-center mt-6 testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${index === currentIndex ? 'bg-primary' : 'bg-neutral'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

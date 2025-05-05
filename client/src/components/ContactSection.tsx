import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaYelp, FaMapMarkedAlt } from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });
  
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Contact Us</h2>
          <p className="mt-2 text-lg text-neutral-dark max-w-xl mx-auto">
            Get in touch for a free quote or to schedule a service appointment
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-neutral-light p-8 rounded-xl">
            <h3 className="font-heading font-bold text-2xl mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-accent text-5xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-2">Thank You!</h3>
                <p className="text-neutral-dark mb-4">Your message has been sent successfully. We'll get back to you shortly.</p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-accent hover:bg-accent-light text-white">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="leak-repair">Leak Repair</SelectItem>
                            <SelectItem value="boiler-installation">Boiler Installation</SelectItem>
                            <SelectItem value="drain-unblocking">Drain Unblocking</SelectItem>
                            <SelectItem value="bathroom-fitting">Bathroom Fitting</SelectItem>
                            <SelectItem value="pipe-replacement">Pipe Replacement</SelectItem>
                            <SelectItem value="emergency">Emergency Call-Out</SelectItem>
                            <SelectItem value="other">Other (please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe what you need help with" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-light text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-primary text-white p-8 rounded-xl mb-8">
              <h3 className="font-heading font-bold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-accent mt-1 mr-4">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-medium">Our Address</p>
                    <p className="opacity-80">123 Plumbing Lane, Watertown, NY 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mt-1 mr-4">
                    <FaPhoneAlt className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <a href="tel:+15551234567" className="opacity-80 hover:opacity-100 transition-opacity">(555) 123-4567</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mt-1 mr-4">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <a href="mailto:info@flowfixplumbing.com" className="opacity-80 hover:opacity-100 transition-opacity">info@flowfixplumbing.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mt-1 mr-4">
                    <FaClock className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="opacity-80">Mon-Fri: 8am-6pm</p>
                    <p className="opacity-80">Sat: 9am-4pm</p>
                    <p className="opacity-80">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium mb-2">Connect With Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <FaFacebookF className="text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <FaInstagram className="text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <FaTwitter className="text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <FaYelp className="text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-80">
              {/* Service Area Map - Placeholder */}
              <div className="w-full h-full bg-neutral-light flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkedAlt className="text-5xl text-primary mb-4" />
                  <p className="font-medium text-neutral-dark">Our Service Area</p>
                  <p className="text-sm text-neutral">We serve the entire metropolitan area and surrounding suburbs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

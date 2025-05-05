import { Link } from "wouter";
import { FaFaucet, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaYelp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-white text-3xl">
                <FaFaucet />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">FlowFix</span>
                <span className="text-accent font-heading font-bold text-xl">Plumbing</span>
              </div>
            </div>
            <p className="opacity-80 mb-4">
              Your friendly local plumber serving the community since 2005. Fully qualified, insured, and trusted throughout the area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <FaInstagram />
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <FaTwitter />
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <FaYelp />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Home</a></Link></li>
              <li><Link href="/services"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Services</a></Link></li>
              <li><Link href="/about"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">About Us</a></Link></li>
              <li><Link href="/testimonials"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Testimonials</a></Link></li>
              <li><Link href="/contact"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Leaky Taps & Pipes</a></Link></li>
              <li><Link href="/services"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Boiler Fitting</a></Link></li>
              <li><Link href="/services"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Blocked Drains</a></Link></li>
              <li><Link href="/services"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Bathroom Fitting</a></Link></li>
              <li><Link href="/services"><a className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Emergency Call-Outs</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-accent" />
                <span className="opacity-80">27 Market Place, Lincoln, LN2 1HG</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-accent" />
                <a href="tel:+441522123456" className="opacity-80 hover:opacity-100 transition-opacity">01522 123 456</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-accent" />
                <a href="mailto:gary@flowfixplumbing.co.uk" className="opacity-80 hover:opacity-100 transition-opacity">gary@flowfixplumbing.co.uk</a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 text-accent" />
                <span className="opacity-80">Mon-Fri: 8am-6pm, Sat: 9am-4pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FlowFix Plumbing Ltd. Registered in England & Wales.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

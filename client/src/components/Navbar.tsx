import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FaFaucet, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <div className="text-primary text-3xl">
              <FaFaucet />
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-primary">FlowFix</span>
              <span className="text-accent font-heading font-bold text-xl">Plumbing</span>
            </div>
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a className={`font-medium hover:text-accent transition-colors ${location === link.path ? 'text-accent' : ''}`}>
                {link.name}
              </a>
            </Link>
          ))}
          <a href="tel:+441522123456">
            <Button variant="default" className="bg-accent hover:bg-accent-light text-white rounded-full">
              <FaPhoneAlt className="mr-2" />
              Ring Us Today
            </Button>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-dark focus:outline-none"
        >
          {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-light">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a className={`py-2 font-medium hover:text-accent transition-colors ${location === link.path ? 'text-accent' : ''}`}>
                  {link.name}
                </a>
              </Link>
            ))}
            <a href="tel:+441522123456" className="w-full">
              <Button variant="default" className="bg-accent hover:bg-accent-light text-white rounded-full w-full justify-center">
                <FaPhoneAlt className="mr-2" />
                Ring Us Today
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

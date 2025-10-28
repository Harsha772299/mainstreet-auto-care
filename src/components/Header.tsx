import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { BookingModal } from "./BookingModal";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="w-full bg-background border-b border-border">
        <div className="w-full px-4 py-4">
          <img 
            src={logo} 
            alt="Main Street Automotive Logo" 
            className="h-20 sm:h-24 md:h-28 mx-auto object-contain"
          />
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:inline-flex"
              asChild
            >
              <a href="tel:6048795595">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button 
              size="sm"
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:inline-flex"
            >
              Book Appointment
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left py-2 hover:text-primary transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-primary transition-colors">
                Contact
              </button>
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <a href="tel:6048795595">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button 
                className="w-full"
                onClick={() => {
                  setIsBookingOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </header>

      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </>
  );
};

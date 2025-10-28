import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { BookingModal } from "./BookingModal";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sticky Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur shadow-lg' 
          : 'bg-background border-b'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <div className="flex items-center">
              <img src={logo} alt="Main Street Automotive" className="h-14 md:h-16" />
            </div>

            {/* Navigation Links - Center (Hidden on mobile) */}
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="nav-link font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="nav-link font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="nav-link font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("gallery")} className="nav-link font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link font-medium">
                Contact
              </button>
            </nav>

            {/* CTAs - Right (Hidden on mobile) */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-primary/5 hover:-translate-y-0.5 transition-all"
                asChild
              >
                <a href="tel:6048795595">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-2"
                  asChild
                >
                  <a href="tel:6048795595">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  size="lg"
                  onClick={() => {
                    setIsBookingOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </>
  );
};

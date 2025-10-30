import { MapPin, Phone, Mail, Clock } from "lucide-react";
import facebookIcon from "@/assets/facebook-icon.png";
import instagramIcon from "@/assets/instagram-icon.png";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#a9a9a9] text-white border-t-2 border-primary">
      <div className="container mx-auto px-4 py-16">
        {/* Desktop Layout: Columns around centered logo */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 items-start">
          {/* About - Left Side */}
          <div>
            <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">About</h3>
            <p className="text-white text-sm leading-relaxed">
              Vancouver's trusted auto repair shop for over 25 years. Honest service, skilled technicians, and quality repairs.
            </p>
          </div>

          {/* Hours - Left Side */}
          <div>
            <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">Hours</h3>
            <div className="space-y-1 text-white text-sm">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                <div>
                  <p>Mon–Fri: 8:30 AM – 5:00 PM</p>
                  <p>Sat: 8:00 AM – 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="flex justify-center items-center">
            <img src={logo} alt="Main Street Automotive" className="h-40 w-auto" />
          </div>

          {/* Contact - Right Side */}
          <div>
            <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">Contact</h3>
            <div className="space-y-2 text-white text-sm">
              <a
                href="tel:6048795595"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>(604) 879-5595</span>
              </a>
              <a
                href="mailto:mainauto24@gmail.com"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>mainauto24@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/pNN8TP5Lg2MVvx9L9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>4835 Main St, Vancouver, BC V5V 3R9</span>
              </a>
            </div>
          </div>

          {/* Follow Us - Right Side */}
          <div>
            <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/MainStreet-Automotive/61555886288425"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" className="h-8 w-8 rounded-full" />
              </a>
              <a
                href="https://www.instagram.com/main_st_automotive/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" className="h-8 w-8 rounded-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Logo on top, columns stacked below */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Logo - Top Center */}
          <div className="flex justify-center">
            <img src={logo} alt="Main Street Automotive" className="h-32 w-auto" />
          </div>

          {/* Columns - Stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
            {/* About */}
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">About</h3>
              <p className="text-white text-sm leading-relaxed">
                Vancouver's trusted auto repair shop for over 25 years. Honest service, skilled technicians, and quality repairs.
              </p>
            </div>

            {/* Hours */}
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">Hours</h3>
              <div className="space-y-1 text-white text-sm inline-block text-left">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                  <div>
                    <p>Mon–Fri: 8:30 AM – 5:00 PM</p>
                    <p>Sat: 8:00 AM – 2:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">Contact</h3>
              <div className="space-y-2 text-white text-sm inline-block text-left">
                <a
                  href="tel:6048795595"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>(604) 879-5595</span>
                </a>
                <a
                  href="mailto:mainauto24@gmail.com"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>mainauto24@gmail.com</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/pNN8TP5Lg2MVvx9L9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>4835 Main St, Vancouver, BC V5V 3R9</span>
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-base mb-3 uppercase tracking-wider text-primary">Follow Us</h3>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/people/MainStreet-Automotive/61555886288425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <img src={facebookIcon} alt="Facebook" className="h-8 w-8 rounded-full" />
                </a>
                <a
                  href="https://www.instagram.com/main_st_automotive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <img src={instagramIcon} alt="Instagram" className="h-8 w-8 rounded-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Main Street Automotive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

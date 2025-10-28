import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Main Street Automotive</h3>
            <p className="text-sm mb-4">
              Proudly serving Vancouver drivers for over 25 years with honest, reliable auto repair service.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/MainStreet-Automotive/61555886288425/?rdid=tcGomLL0LmSOHdCq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GZNcd1Gxc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/main_st_automotive/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Hours</h3>
            <div className="text-sm space-y-2">
              <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
              <p>Saturday: 8:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <div className="text-sm space-y-3">
              <a href="tel:6048795595" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (604) 879-5595
              </a>
              <a href="mailto:mainauto24@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                mainauto24@gmail.com
              </a>
              <a 
                href="https://maps.app.goo.gl/pNN8TP5Lg2MVvx9L9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>4835 Main St<br />Vancouver, BC V5V 3R9</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Main Street Automotive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

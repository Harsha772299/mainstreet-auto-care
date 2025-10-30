import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/gallery-exterior.jpg";

interface HeroProps {
  onBookClick: () => void;
}

export const Hero = ({ onBookClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance tracking-tight">
            Experience You Can Trust. Service You Can Feel.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-balance opacity-95 font-medium">
            Proudly serving our Vancouver community for over 25 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onBookClick}
              className="text-lg px-10 py-6 hover:shadow-[0_0_20px_rgba(176,25,30,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 bg-white/10 backdrop-blur border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="tel:6048795595">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Optional Bottom-Right Overlay */}
      <div className="hidden md:flex absolute bottom-8 right-8 bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg text-white text-xs gap-4 flex-col">
        <span className="flex items-center gap-2">
          📍 4835 Main St, Vancouver, BC
        </span>
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2">
            ⏰ Mon–Fri: 8:30 AM – 5:00 PM
          </span>
          <span className="pl-5">Sat: 8:00 AM – 2:00 PM</span>
          <span className="pl-5">Sun: Closed</span>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA = ({ onBookClick }: FinalCTAProps) => {
  return (
    <section 
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #B0191E 0%, #7E0E16 100%)'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          Ready to book your visit?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
          Get your vehicle the care it deserves from Vancouver's trusted neighborhood auto shop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={onBookClick}
            className="text-lg px-10 py-6 flex-1 hover:-translate-y-1 transition-all shadow-lg"
          >
            Book Appointment
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-6 flex-1 border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all"
            asChild
          >
            <a href="tel:6048795595">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

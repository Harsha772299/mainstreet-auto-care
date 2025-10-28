import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA = ({ onBookClick }: FinalCTAProps) => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          Ready to book your visit?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Get your vehicle the care it deserves from Vancouver's trusted neighborhood auto shop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={onBookClick}
            className="text-lg px-8"
          >
            Book Appointment
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
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

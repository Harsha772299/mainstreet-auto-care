import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface AboutProps {
  onBookClick: () => void;
}

export const About = ({ onBookClick }: AboutProps) => {
  const highlights = [
    "Over 25 years serving Vancouver drivers",
    "Experienced, certified technicians",
    "Honest, transparent pricing",
    "State-of-the-art diagnostic equipment",
    "Quality parts and craftsmanship",
    "Family-owned and operated",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Experience You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving Vancouver drivers for over 25 years. Skilled technicians, straightforward communication, and repairs done right.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <p className="text-lg mb-6 leading-relaxed">
              At Main Street Automotive, we've built our reputation one satisfied customer at a time. Since opening our doors over two decades ago, we've been committed to providing the kind of honest, reliable service that keeps Vancouver drivers coming back.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Our team combines old-school values with modern technology. We believe in clear communication, transparent pricing, and treating every vehicle with the same care we'd give our own. Whether it's a routine oil change or a complex diagnostic, you can trust us to do it right.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={onBookClick}>
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ClipboardCheck, 
  Droplet, 
  Search, 
  Truck, 
  CircleDot, 
  Car, 
  Gauge, 
  Circle, 
  Wind, 
  Thermometer 
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Out of Province Inspection",
    description: "Get your vehicle road-ready and registered",
  },
  {
    icon: Droplet,
    title: "Oil Change with Courtesy Inspection",
    description: "Keep your engine healthy with regular maintenance",
  },
  {
    icon: Search,
    title: "Diagnostics",
    description: "Fast, accurate problem identification",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Inspection",
    description: "Keep your fleet safe and compliant",
  },
  {
    icon: CircleDot,
    title: "Brake Inspection",
    description: "Ensure your stopping power is reliable",
  },
  {
    icon: Car,
    title: "Uber / Lyft Inspection",
    description: "Get approved for rideshare services",
  },
  {
    icon: Gauge,
    title: "Wheel Alignment",
    description: "Smooth driving and even tire wear",
  },
  {
    icon: Circle,
    title: "Tires",
    description: "New tires and expert installation",
  },
  {
    icon: Wind,
    title: "Air Conditioning Service & Diagnostics",
    description: "Stay cool in every season",
  },
  {
    icon: Thermometer,
    title: "Cooling System Service & Repair",
    description: "Prevent overheating and engine damage",
  },
];

interface ServicesPreviewProps {
  onBookClick: () => void;
}

export const ServicesPreview = ({ onBookClick }: ServicesPreviewProps) => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide text-lg">
            From inspections to diagnostics — we keep Vancouver's cars running right.
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional automotive care for all your vehicle needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="transition-all duration-300 hover:shadow-lg hover:border-t-4 hover:border-t-primary group"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    onClick={onBookClick}
                    variant="outline"
                    className="w-full rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

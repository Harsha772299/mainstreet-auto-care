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
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Comprehensive Auto Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button size="sm" variant="outline" onClick={onBookClick} className="w-full">
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

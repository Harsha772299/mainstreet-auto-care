import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    name: "Danielle McQueen",
    text: "Fixed by the next morning, great communication, clear quote, and they explained everything. Reasonable price.",
  },
  {
    name: "Melissa MacKay",
    text: "They suggested low-cost fixes first, worked quickly, and broke down costs. I have a high level of trust.",
  },
  {
    name: "Charlotte Morrison",
    text: "My go-to shop. Never felt upsold. Good prices on parts and clear communication throughout.",
  },
  {
    name: "Kasra Khalili",
    text: "Emergency belt issue—dropped off at 8:45 a.m., inspected and repaired at a fair price. Strongly recommended.",
  },
  {
    name: "Travis Thomson",
    text: "Most trustworthy, transparent shop I've been to. They always call and explain costs before any work.",
  },
  {
    name: "Harmandeep Singh",
    text: "Professional, honest, highly skilled. Diagnosed quickly, quality repairs at a fair price.",
  },
];

export const ReviewsCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            What Drivers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from customers who trust us with their vehicles.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">"{review.text}"</p>
                    <p className="font-semibold text-sm">— {review.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

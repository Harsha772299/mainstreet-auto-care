import { DollarSign, Wrench, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    icon: DollarSign,
    title: "Upfront & Honest Pricing",
    description: "Clear estimates, no surprises. Every step approved by you—total transparency from start to finish.",
  },
  {
    icon: Wrench,
    title: "Skilled Diagnostics, Quality Craftsmanship",
    description: "Modern scanners in the hands of experienced technicians—issues found fast, repairs done right.",
  },
  {
    icon: Award,
    title: "Built on 25 Years of Trust",
    description: "Local roots, repeat customers, and a reputation for integrity—that's Main Street Automotive.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight">
            Experience You Can Trust. Service You Can Feel.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance text-lg">
            We've built our reputation on honesty, skill, and the kind of service we'd want for our own families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className="border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

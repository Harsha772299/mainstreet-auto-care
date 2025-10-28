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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Where Trust Meets Technology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            We've built our reputation on honesty, skill, and the kind of service we'd want for our own families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} className="hover-lift border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

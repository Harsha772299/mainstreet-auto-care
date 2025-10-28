import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";

interface ContactProps {
  onBookClick: () => void;
}

export const Contact = ({ onBookClick }: ContactProps) => {
  const hours = [
    { day: "Monday - Friday", time: "8:30 AM - 5:00 PM" },
    { day: "Saturday", time: "8:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us, call us, or book online. We're here to help keep your vehicle running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground mb-3">
                      4835 Main St<br />
                      Vancouver, BC V5V 3R9
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href="https://maps.app.goo.gl/pNN8TP5Lg2MVvx9L9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-2">Phone</h3>
                    <a 
                      href="tel:6048795595" 
                      className="text-lg text-primary hover:underline"
                    >
                      (604) 879-5595
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-2">Email</h3>
                    <a 
                      href="mailto:mainauto24@gmail.com" 
                      className="text-primary hover:underline break-all"
                    >
                      mainauto24@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-3">Hours</h3>
                    <div className="space-y-2">
                      {hours.map((hour, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{hour.day}</span>
                          <span className="font-medium">{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button size="lg" onClick={onBookClick} className="flex-1">
                Book Now
              </Button>
              <Button size="lg" variant="outline" asChild className="flex-1">
                <a href="tel:6048795595">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.0239886929634!2d-123.10396268432992!3d49.2433894793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d7e3f3e7c5%3A0x5f7c3e3f3e3e3e3e!2s4835%20Main%20St%2C%20Vancouver%2C%20BC%20V5V%203R9!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Main Street Automotive Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

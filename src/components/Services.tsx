import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Printer, Wrench, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "LED Channel Letters",
      description: "Custom illuminated channel letters and logo signs with energy-efficient LED lighting systems.",
      features: ["Custom fabrication", "Energy efficient LEDs", "Weather resistant", "UL listed components"]
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Digital Printing",
      description: "Large format digital printing on various substrates including vinyl, mesh, and rigid materials.",
      features: ["UV resistant inks", "Large format capability", "Multiple substrates", "Color matching"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom Fabrication",
      description: "Complete sign fabrication services including metal work, acrylic forming, and assembly.",
      features: ["Metal fabrication", "Acrylic forming", "CNC routing", "Powder coating"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Installation & Support",
      description: "Professional installation services and ongoing maintenance support for all sign types.",
      features: ["Licensed installers", "Permit assistance", "Maintenance plans", "24/7 support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From design to installation, we provide comprehensive signage solutions 
            for businesses of all sizes across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-border">
              <CardHeader>
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Layers, Scissors, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const WholesaleFeatures = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Trimless Channel Letters",
      description: "Premium flush-face design with no visible trim lines. Superior to traditional methods with clean aesthetics.",
      benefits: ["No visible seams", "Weather sealed", "UL listed LEDs", "Custom fonts"],
      badge: "Most Popular"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Cast Block Acrylic Letters",
      description: "Thick, premium cast acrylic letters with precision CNC cutting and superior edge quality.",
      benefits: ["1/2\" to 2\" thickness", "Polished edges", "Custom colors", "Weather resistant"],
      badge: "Premium Quality"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Flat Cut Metal Letters",
      description: "Precision laser cut aluminum and stainless steel letters with powder coat or brushed finishes.",
      benefits: ["Laser precision", "Multiple finishes", "Custom thickness", "Fast turnaround"],
      badge: "Quick Ship"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom Metal Fabrication",
      description: "Complete custom fabrication services for unique signage projects and special requirements.",
      benefits: ["Custom shapes", "Welded construction", "Powder coating", "Engineering support"],
      badge: "Custom"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wholesale Manufacturing Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Advanced manufacturing technologies and processes delivering superior quality signage products 
            to sign companies across North America. Fast turnaround, competitive wholesale pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-border relative overflow-hidden">
              {feature.badge && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {feature.badge}
                </Badge>
              )}
              <CardHeader>
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/products">
                    View Details & Pricing
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Sign Companies Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5-7</div>
              <div className="text-lg font-semibold text-foreground mb-2">Business Days</div>
              <div className="text-muted-foreground">Average production time for standard orders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Quality Guarantee</div>
              <div className="text-muted-foreground">Every product backed by our quality promise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg font-semibold text-foreground mb-2">Order Support</div>
              <div className="text-muted-foreground">Online ordering system with real-time updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleFeatures;
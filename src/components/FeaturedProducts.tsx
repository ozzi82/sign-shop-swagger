import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Clock } from "lucide-react";
import trimlessLettersImage from "@/assets/trimless-channel-letters.jpg";
import castAcrylicImage from "@/assets/cast-acrylic-manufacturing.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "trimless-channel-letters",
      image: trimlessLettersImage,
      title: "Trimless Channel Letters",
      description: "True trimless design with no visible seams - our signature product that outperforms traditional channel letters.",
      features: [
        "Flush-face design, no trim lines",
        "UL listed LED modules included",
        "Weather sealed construction",
        "Custom fonts and sizes",
        "3-year comprehensive warranty"
      ],
      badges: ["Most Popular", "Premium"],
      highlight: true
    },
    {
      id: "cast-acrylic-letters",
      image: castAcrylicImage,
      title: "Cast Block Acrylic Letters",
      description: "Premium thick-cast acrylic letters with precision CNC cutting and polished edges - comparable to Bitro Resno quality.",
      features: [
        "1/2\" to 2\" thickness options",
        "Polished edges standard",
        "Custom colors available",
        "UV resistant materials",
        "Precision CNC cutting"
      ],
      badges: ["Fast Ship"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our most popular wholesale signage products, trusted by sign companies across North America. 
            24-48 hour quotes, professional drawings included, 21-day delivery from approval.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {featuredProducts.map((product, index) => (
            <Card key={index} className={`bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-border overflow-hidden ${product.highlight ? 'ring-2 ring-primary/20' : ''}`}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.badges.map((badge, idx) => (
                        <Badge key={idx} variant={badge === "Most Popular" ? "default" : "secondary"}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {product.title}
                    </CardTitle>
                  </div>
                  {product.highlight && (
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  )}
                </div>
                <CardDescription className="text-muted-foreground text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1" asChild>
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/products">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-muted/30 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">24-48h</div>
              <div className="text-lg font-semibold text-foreground mb-2">Quote Response</div>
              <div className="text-muted-foreground">Fast quotes on all products</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">21 Days</div>
              <div className="text-lg font-semibold text-foreground mb-2">Total Delivery</div>
              <div className="text-muted-foreground">From art approval to your door</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">3 Years</div>
              <div className="text-lg font-semibold text-foreground mb-2">Warranty</div>
              <div className="text-muted-foreground">Comprehensive coverage</div>
            </div>
          </div>
        </div>

        {/* CTA to Products */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/products">
              View Complete Product Catalog
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
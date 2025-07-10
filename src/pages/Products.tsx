import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Layers, Scissors, Wrench, Star, Clock, Shield } from "lucide-react";
const trimlessLettersImage = "/lovable-uploads/04527713-5a62-42a7-8c53-a76cc1d16206.png";
const haloLettersImage = "/lovable-uploads/4ab12be9-9199-4263-b08b-208aab0968ee.png";

const Products = () => {
  const products = [
    {
      id: "trimless-channel-letters",
      image: trimlessLettersImage,
      title: "Trimless Channel Letters",
      description: "Premium flush-face channel letters with no visible trim lines",
      features: [
        "True trimless design - no visible seams",
        "UL listed LED modules",
        "3-year comprehensive warranty",
        "Weather sealed construction",
        "Custom fonts and sizes",
        "21-day delivery from approval"
      ],
      badges: ["Best Seller", "Premium"],
      specifications: {
        "Depths Available": "4\", 5\", 6\", 8\"",
        "Face Materials": "White, Colored Acrylic",
        "Return Materials": "Painted Aluminum",
        "Mounting": "Studs, Raceway, Direct",
        "LED Options": "3000K, 4000K, 6500K"
      }
    },
    {
      id: "halo-lit-letters",
      image: haloLettersImage,
      title: "Halo-Lit Channel Letters",
      description: "Sophisticated backlit illumination for premium architectural signage",
      features: [
        "Even halo backlighting effect",
        "Multiple standoff heights available",
        "Premium brushed or painted faces", 
        "Warm LED backlighting",
        "Architectural quality finish",
        "21-day delivery from approval"
      ],
      badges: ["Fast Ship"],
      specifications: {
        "Standoff Heights": "1\", 1.5\", 2\", 3\"",
        "Face Materials": "Brushed Aluminum, Painted Metal",
        "LED Options": "Warm White, Cool White",
        "Mounting": "Threaded Rod, Tube System",
        "Maximum Size": "48\" x 96\" per letter"
      }
    },
    {
      id: "flat-cut-letters",
      title: "Flat Cut Metal Letters",
      description: "Laser cut aluminum and stainless steel letters",
      features: [
        "Laser precision cutting",
        "Multiple metal options",
        "Powder coat finishes",
        "Brushed stainless available",
        "Custom thicknesses",
        "2-3 day production"
      ],
      badges: ["Quick Ship"],
      specifications: {
        "Materials": "Aluminum, Stainless Steel",
        "Thickness": "1/8\", 1/4\", 3/8\", 1/2\"",
        "Finishes": "Powder Coat, Brushed, Polished",
        "Maximum Size": "48\" x 96\"",
        "Mounting": "Studs, Standoffs, Direct"
      }
    },
    {
      id: "backlit-letters",
      title: "Backlit/Halo Channel Letters",
      description: "Reverse illuminated channel letters for elegant lighting",
      features: [
        "Even backlit illumination",
        "Multiple halo effects",
        "Energy efficient LEDs",
        "Custom letter spacing",
        "Premium construction",
        "7-10 day production"
      ],
      badges: ["Premium"],
      specifications: {
        "Standoff Heights": "1\", 1.5\", 2\", 3\"",
        "Face Materials": "Brushed, Painted Metal",
        "LED Options": "Warm, Cool, RGB",
        "Control": "Dimming Available",
        "Mounting": "Threaded Rod, Tube"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Wholesale Product Catalog
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Premium channel letters, acrylic letters, and metal fabrication for sign companies. 
              Fast turnaround, competitive wholesale pricing, nationwide shipping.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                5-7 Day Production
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                UL Listed Components
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                25+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-border overflow-hidden">
                {product.image && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {product.badges.map((badge, idx) => (
                          <Badge key={idx} variant={badge === "Best Seller" ? "default" : "secondary"}>
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl font-semibold text-foreground">
                        {product.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                    <div className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{key}:</span>
                          <span className="text-foreground font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1" asChild>
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to="/contact">Request Samples</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Additional Manufacturing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card shadow-card border-border">
                <CardContent className="p-6 text-center">
                  <Wrench className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Custom Fabrication</h3>
                  <p className="text-sm text-muted-foreground">Unique shapes and custom projects</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border-border">
                <CardContent className="p-6 text-center">
                  <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Multi-Layer Signs</h3>
                  <p className="text-sm text-muted-foreground">Dimensional layered effects</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border-border">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">LED Integration</h3>
                  <p className="text-sm text-muted-foreground">Advanced lighting solutions</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border-border">
                <CardContent className="p-6 text-center">
                  <Scissors className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Precision Cutting</h3>
                  <p className="text-sm text-muted-foreground">Laser and waterjet cutting</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Layers, Scissors, Wrench, Star, Clock, Shield } from "lucide-react";
const trimlessLettersImage = "/lovable-uploads/a0baa3e7-bbb7-4970-99af-72d0cc80ff1a.png";
const haloLettersImage = "/lovable-uploads/d0b014b4-c902-4fe3-8081-494eb1495e81.png";
const flatCutLettersImage = "/lovable-uploads/582d3875-a351-443c-b929-7d112a49cb51.png";
const edgeluxeLettersImage = "/lovable-uploads/6923d1c5-a3c7-48d5-8e69-63fdc5586279.png";

const Products = () => {
  const products = [{
    id: "edgeluxe-lp5",
    image: trimlessLettersImage,
    title: "Edgeluxe LP 5",
    description: "Trimless Fabricated Stainless Steel Letters with face-lit illumination",
    features: ["Thick gauge stainless steel returns and back welded together", "Step-router acrylic face, trim-less", "Face-lit illumination", "Painted in any PMS color", "Minimum 15mm stroke width for stability", "Serviceable LEDs"],
    badges: ["Best Seller", "Premium"],
    specifications: {
      "Materials": "Thick gauge stainless steel",
      "Illumination": "Face-lit",
      "Depths": "30mm (1.2\"), 50mm (2\"), 80mm (3.1\"), 100mm (3.9\")",
      "Customization": "Any PMS color, vinyls or pigmented translucent acrylics",
      "Stroke Width": "Minimum 15mm (0.6\")",
      "Minimum Height": "50mm (2\")"
    }
  }, {
    id: "edgeluxe-lp31-32",
    image: haloLettersImage,
    title: "Edgeluxe LP 3.1/3.2",
    description: "Fabricated Stainless Steel with standoffs for halo-lit effects",
    features: ["Halo illuminated from the back with standoff spacers", "LEDs arranged to avoid reflection of diodes on mounting surface", "Painted in any PMS color", "Multiple depth options", "Serviceable LEDs", "IP67 waterproofing"],
    badges: ["Premium"],
    specifications: {
      "Materials": "Fabricated Stainless Steel",
      "Illumination": "Halo from back with standoffs (LP 3.1) / Flush-mount halo (LP 3.2)",
      "Depths": "30mm (1.2\"), 50mm (2\"), 80mm (3.1\"), 100mm (3.9\")",
      "Customization": "Any PMS color, vinyls or pigmented translucent acrylics",
      "Stroke Width": "Minimum 15mm (0.6\")",
      "Minimum Height": "50mm (2\")"
    }
  }, {
    id: "edgeluxe-lp1",
    image: flatCutLettersImage,
    title: "Edgeluxe LP 1",
    description: "Flat Cutout Letters (FCO) in wood, aluminum, stainless steel, and acrylic",
    features: ["Multiple material options available", "Thickness range from 1mm to 200mm", "Broad range of acrylic colors, paint, and vinyl", "Minimum 5mm stroke width", "No maintenance required", "Custom thickness available"],
    badges: ["Quick Ship"],
    specifications: {
      "Materials": "Wood, aluminum, stainless steel, acrylic",
      "Thickness": "1mm (0.039\") to 200mm (7.87\")",
      "Customization": "Broad range of acrylic colors, paint, and vinyl",
      "Stroke Width": "Minimum 5mm (0.2\")",
      "Minimum Height": "10mm (0.4\")",
      "Maintenance": "No maintenance"
    }
  }, {
    id: "edgeluxe-lp11",
    image: edgeluxeLettersImage,
    title: "Edgeluxe LP 11",
    description: "Block Acrylic letters with various illumination options",
    features: ["30mm cast block acrylic construction", "Multiple illumination options available", "Embedded LEDs for uniform lighting", "IP67 waterproofing and heat dissipation", "Painted in any PMS color", "No maintenance required"],
    badges: ["Premium"],
    specifications: {
      "Materials": "30mm (1.2\") cast block acrylic",
      "Illumination": "Face-lit, Back-lit, Side-lit, Halo-lit, Neon effect",
      "Depth": "Standard 30mm (1.2\")",
      "Customization": "Any PMS color, vinyls or pigmented translucent acrylics",
      "Stroke Width": "Minimum 12mm (0.47\")",
      "Minimum Height": "50mm (2\")"
    }
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-100">
              Wholesale Product Catalog
            </h1>
            <p className="text-xl mb-8 opacity-90 text-gray-200">
              Premium channel letters, acrylic letters, and metal fabrication for sign companies. 
              Fast turnaround, competitive wholesale pricing, nationwide shipping.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center rounded-full px-4 py-2 bg-orange-400">
                <Clock className="w-4 h-4 mr-2" />
                5-7 Day Production
              </div>
              <div className="flex items-center rounded-full px-4 py-2 bg-orange-400">
                <Shield className="w-4 h-4 mr-2" />
                UL Listed Components
              </div>
              <div className="flex items-center rounded-full px-4 py-2 bg-orange-400">
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
            {products.map((product, index) => <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-border overflow-hidden">
                {product.image && <div className="aspect-video overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>}
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {product.badges.map((badge, idx) => <Badge key={idx} variant={badge === "Best Seller" ? "default" : "secondary"}>
                            {badge}
                          </Badge>)}
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
                      {product.features.map((feature, idx) => <div key={idx} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </div>)}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                    <div className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value], idx) => <div key={idx} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{key}:</span>
                          <span className="text-foreground font-medium">{value}</span>
                        </div>)}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1" asChild>
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
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
    </div>;
};
export default Products;
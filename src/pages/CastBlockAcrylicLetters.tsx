import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { CheckCircle, Download, FileText, Palette, Ruler, Shield, Clock, Star } from "lucide-react";

const CastBlockAcrylicLetters = () => {
  const specifications = [
    { label: "Available Thickness", value: "1/2\", 3/4\", 1\", 1.5\", 2\"" },
    { label: "Standard Colors", value: "White, black, clear, colored options" },
    { label: "Custom Colors", value: "Pantone color matching available" },
    { label: "Edge Finish", value: "Polished, satin, frosted" },
    { label: "Maximum Size", value: "36\" x 48\" per piece" },
    { label: "Cutting Method", value: "Precision CNC routing" },
    { label: "Mounting Options", value: "Studs, VHB tape, standoffs" },
    { label: "Material Grade", value: "Cast cell acrylic (not extruded)" }
  ];

  const features = [
    "Premium thick-cast acrylic construction",
    "Precision CNC cutting for perfect edges", 
    "Polished edges standard on all cuts",
    "UV resistant for outdoor applications",
    "Custom Pantone color matching",
    "Multiple thickness options available",
    "Superior optical clarity",
    "Comparable quality to Bitro Resno"
  ];

  const advantages = [
    {
      title: "vs Bitro Resno",
      points: ["Faster delivery (21 vs 28+ days)", "Better customer service", "Competitive pricing", "Same quality standards"]
    },
    {
      title: "vs Extruded Acrylic", 
      points: ["Superior optical clarity", "Better edge polishing", "No stress cracking", "Consistent thickness"]
    },
    {
      title: "vs Vinyl Letters",
      points: ["Premium appearance", "Dimensional depth", "Weather resistant", "Long-term durability"]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wholesale Cast Block Acrylic Letters",
    "description": "Premium thick-cast acrylic letters with precision CNC cutting. Comparable quality to Bitro Resno with faster delivery.",
    "brand": {
      "@type": "Brand", 
      "name": "Sunlite Signs"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Sunlite Signs"
    },
    "material": "Cast Cell Acrylic",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "thickness",
        "value": "1/2 inch to 2 inches"
      },
      {
        "@type": "PropertyValue",
        "name": "cutting",
        "value": "Precision CNC Router"
      },
      {
        "@type": "PropertyValue",
        "name": "finish",
        "value": "Polished Edges"
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Premium Quality</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Wholesale Cast Block Acrylic Letters
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Premium thick-cast acrylic letters with precision CNC cutting and polished edges. 
                Comparable quality to Bitro Resno with faster delivery and better service.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  21-Day Delivery
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Cast Acrylic
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  3-Year Warranty
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Features & Benefits */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Why Cast Block Acrylic */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Cast Block Acrylic Letters</h2>
                  <div className="prose prose-lg text-muted-foreground">
                    <p className="mb-4">
                      Cast block acrylic letters represent the premium choice for dimensional signage. Unlike extruded 
                      acrylic or vinyl letters, cast acrylic offers superior optical clarity, consistent thickness, 
                      and exceptional edge quality when precision cut.
                    </p>
                    <p className="mb-4">
                      Our precision CNC cutting process ensures perfectly smooth, polished edges that catch and reflect 
                      light beautifully. The thick dimensional profile creates impressive depth and shadow lines that 
                      make your signage stand out from flat alternatives.
                    </p>
                    <p>
                      We use only premium cast cell acrylic - the same grade used by high-end architectural signage 
                      manufacturers like Bitro Resno, but with faster turnaround and better customer service.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Features & Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitive Advantages */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">How We Compare</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {advantages.map((advantage, index) => (
                      <Card key={index} className="bg-muted/30 border-border">
                        <CardHeader>
                          <CardTitle className="text-lg">{advantage.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {advantage.points.map((point, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Manufacturing Process */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Manufacturing Process</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Material Selection</h4>
                        <p className="text-muted-foreground">Premium cast cell acrylic sheets, inspected for optical clarity and consistency.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Precision CNC Cutting</h4>
                        <p className="text-muted-foreground">Computer-controlled routing for perfect letter shapes and smooth edges.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Edge Polishing</h4>
                        <p className="text-muted-foreground">All cut edges are flame polished to crystal clarity as standard.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Quality Control</h4>
                        <p className="text-muted-foreground">Final inspection and mounting hardware preparation before shipping.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Specs & CTA */}
              <div className="space-y-8">
                
                {/* Technical Specifications */}
                <Card className="bg-card shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Ruler className="w-5 h-5 mr-2" />
                      Technical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {specifications.map((spec, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{spec.label}:</span>
                            <span className="text-foreground font-medium text-right">{spec.value}</span>
                          </div>
                          {index < specifications.length - 1 && <Separator className="mt-3" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Color Options */}
                <Card className="bg-card shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="w-5 h-5 mr-2" />
                      Color Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Standard Colors</h5>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="w-8 h-8 bg-white border border-border rounded"></div>
                          <div className="w-8 h-8 bg-black rounded"></div>
                          <div className="w-8 h-8 bg-red-500 rounded"></div>
                          <div className="w-8 h-8 bg-blue-500 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Custom Colors</h5>
                        <p className="text-sm text-muted-foreground">Pantone color matching available for any custom color requirement.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-gradient-card shadow-card border-border">
                  <CardHeader>
                    <CardTitle>Get Started Today</CardTitle>
                    <CardDescription>
                      Request a quote or download technical resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/contact">Request Wholesale Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download Spec Sheet
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <FileText className="w-4 h-4 mr-2" />
                      Color Chart PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CastBlockAcrylicLetters;
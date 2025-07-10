import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { CheckCircle, Download, FileText, Zap, Ruler, Palette, Shield, Clock } from "lucide-react";

const TrimlessChannelLetters = () => {
  const specifications = [
    { label: "Available Depths", value: "4\", 5\", 6\", 8\", 10\"" },
    { label: "Face Materials", value: "White acrylic, colored acrylic, polycarbonate" },
    { label: "Return Materials", value: "Painted aluminum (.063\" or .080\")" },
    { label: "LED Options", value: "3000K, 4000K, 6500K warm white" },
    { label: "Minimum Stroke", value: "1.5\" for structural integrity" },
    { label: "Maximum Height", value: "60\" without internal bracing" },
    { label: "Mounting Options", value: "Stud mount, raceway, direct mount" },
    { label: "Power Supply", value: "UL listed, included with order" }
  ];

  const features = [
    "True trimless design - no visible seams or trim cap",
    "Flush-face construction for clean appearance", 
    "UL 48 listed LED modules included",
    "Weather sealed gaskets and construction",
    "Custom fonts and sizes available",
    "Even illumination across face",
    "Energy efficient LED technology",
    "3-year comprehensive warranty"
  ];

  const applications = [
    "Retail storefront signage",
    "Restaurant and hospitality",
    "Medical and professional offices",
    "Corporate headquarters",
    "Shopping centers and malls",
    "Hotel and resort signage"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wholesale Trimless Channel Letters",
    "description": "UL-listed trimless channel letters with flush-face design, no visible seams. Made for sign companies.",
    "brand": {
      "@type": "Brand",
      "name": "ProSign Manufacturing"
    },
    "manufacturer": {
      "@type": "Organization", 
      "name": "ProSign Manufacturing"
    },
    "material": "Aluminum and Acrylic",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "illuminationType",
        "value": "LED Front Illuminated"
      },
      {
        "@type": "PropertyValue",
        "name": "mounting",
        "value": "Stud Mount, Raceway, Direct Mount"
      },
      {
        "@type": "PropertyValue", 
        "name": "certification",
        "value": "UL 48 Listed"
      }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "businessFunction": "https://schema.org/Sell",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "price": "Contact for wholesale pricing"
      }
    }
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
              <Badge className="mb-4 bg-accent text-accent-foreground">Signature Product</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Wholesale Trimless Channel Letters
              </h1>
              <p className="text-xl mb-8 opacity-90">
                True trimless design with no visible seams. UL-listed LED modules, weather sealed construction, 
                and precision manufacturing. The premium choice for sign companies demanding superior quality.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  21-Day Delivery
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  UL 48 Listed
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
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
                
                {/* What Makes Them Special */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">What Makes Our Trimless Letters Special</h2>
                  <div className="prose prose-lg text-muted-foreground">
                    <p className="mb-4">
                      Our trimless channel letters represent the pinnacle of illuminated signage technology. Unlike traditional 
                      trim-cap letters that show visible seams around the face, our flush-face design creates a completely 
                      seamless appearance that elevates any brand presentation.
                    </p>
                    <p className="mb-4">
                      The secret is in our precision manufacturing process. Each letter is constructed with weather-sealed 
                      gaskets and the LED modules are fully recessed within the letter cavity, eliminating the need for 
                      any external trim or visible fasteners.
                    </p>
                    <p>
                      This results in a cleaner, more professional appearance that's preferred by architects, designers, 
                      and end customers who demand the highest quality illuminated signage.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Key Features & Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Perfect Applications</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {applications.map((application, index) => (
                      <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                        <span className="text-sm font-medium text-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Installation Process */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Installation Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Template Positioning</h4>
                        <p className="text-muted-foreground">Use included 1:1 paper pattern for precise placement and stud positioning.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Mounting Installation</h4>
                        <p className="text-muted-foreground">Install studs or raceway system according to specifications.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Letter Attachment</h4>
                        <p className="text-muted-foreground">Secure letters to mounting system and connect electrical.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-4 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Power Connection</h4>
                        <p className="text-muted-foreground">Connect to included UL-listed power supply and test illumination.</p>
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
                      Installation Guide
                    </Button>
                  </CardContent>
                </Card>

                {/* Trust Signals */}
                <Card className="bg-card shadow-card border-border">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-foreground mb-2">Quality Guaranteed</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      UL 48 listed components, 3-year warranty, and 25+ years of manufacturing experience.
                    </p>
                    <Badge variant="secondary">UL Listed</Badge>
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

export default TrimlessChannelLetters;
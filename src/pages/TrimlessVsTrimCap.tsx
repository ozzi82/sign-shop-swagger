import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, X, Zap, Clock, Shield } from "lucide-react";

const TrimlessVsTrimCap = () => {
  const comparisons = [
    {
      feature: "Appearance",
      trimless: "Seamless, flush face - premium look",
      trimcap: "Visible trim lines around face",
      winner: "trimless"
    },
    {
      feature: "Installation", 
      trimless: "Fewer visible fasteners",
      trimcap: "Screws visible on trim cap",
      winner: "trimless"
    },
    {
      feature: "Weather Sealing",
      trimless: "Factory sealed, no field sealing",
      trimcap: "Requires field caulking",
      winner: "trimless"
    },
    {
      feature: "Maintenance",
      trimless: "Easy cleaning, no trim gaps",
      trimcap: "Dirt collects in trim lines",
      winner: "trimless"
    },
    {
      feature: "Cost",
      trimless: "Premium pricing",
      trimcap: "Lower cost option",
      winner: "trimcap"
    },
    {
      feature: "Lead Time",
      trimless: "21 days from approval",
      trimcap: "14-18 days typical", 
      winner: "trimcap"
    }
  ];

  const trimlessAdvantages = [
    "No visible seams or trim lines",
    "Cleaner, more professional appearance", 
    "Better weather resistance",
    "Preferred by architects and designers",
    "Higher perceived value for end customers",
    "Easier maintenance and cleaning"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Trimless vs Trim-Cap Channel Letters Comparison",
    "description": "Detailed comparison between trimless channel letters and traditional trim-cap letters. See why trimless is the premium choice.",
    "mainEntity": {
      "@type": "Article",
      "headline": "Trimless vs Trim-Cap Channel Letters: Which is Better?",
      "author": {
        "@type": "Organization",
        "name": "ProSign Manufacturing"
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
              <Badge className="mb-4 bg-accent text-accent-foreground">Comparison Guide</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Trimless vs Trim-Cap Channel Letters
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Understanding the differences between trimless and traditional trim-cap channel letters. 
                Why leading sign companies are switching to trimless construction.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            
            {/* Quick Summary */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Bottom Line</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-card shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Star className="w-6 h-6 mr-2" />
                      Trimless Letters
                    </CardTitle>
                    <CardDescription>Premium choice for quality-focused projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {trimlessAdvantages.map((advantage, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-muted-foreground">
                      <Zap className="w-6 h-6 mr-2" />
                      Trim-Cap Letters
                    </CardTitle>
                    <CardDescription>Budget-friendly traditional option</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Traditional channel letters with visible aluminum trim around the face. 
                        Lower cost but requires more maintenance and has visible seam lines.
                      </p>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-sm font-medium text-foreground mb-2">Best for:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Budget-conscious projects</li>
                          <li>• Quick turnaround needs</li>
                          <li>• Internal or temporary signage</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Feature-by-Feature Comparison</h2>
              <Card className="bg-card shadow-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/30">
                        <tr>
                          <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                          <th className="text-left p-4 font-semibold text-foreground">Trimless Letters</th>
                          <th className="text-left p-4 font-semibold text-foreground">Trim-Cap Letters</th>
                          <th className="text-center p-4 font-semibold text-foreground">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisons.map((comparison, index) => (
                          <tr key={index} className="border-t border-border">
                            <td className="p-4 font-medium text-foreground">{comparison.feature}</td>
                            <td className="p-4 text-muted-foreground">{comparison.trimless}</td>
                            <td className="p-4 text-muted-foreground">{comparison.trimcap}</td>
                            <td className="p-4 text-center">
                              {comparison.winner === "trimless" ? (
                                <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-primary rounded-full mx-auto"></div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Trimless is Worth It */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Trimless is Worth the Investment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-muted/30 border-border text-center">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">Higher Customer Satisfaction</h4>
                    <p className="text-sm text-muted-foreground">End customers prefer the clean, seamless appearance of trimless letters.</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-border text-center">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">Less Maintenance</h4>
                    <p className="text-sm text-muted-foreground">No trim lines means no places for dirt to collect or caulking to fail.</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-border text-center">
                  <CardContent className="p-6">
                    <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">Premium Positioning</h4>
                    <p className="text-sm text-muted-foreground">Offer a premium product that justifies higher pricing and margins.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-2xl mx-auto text-center">
              <Card className="bg-gradient-card shadow-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Offer Trimless Letters?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get wholesale pricing on our trimless channel letters and start offering the premium choice to your customers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link to="/trimless-channel-letters">
                        View Trimless Specs
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/contact">Request Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TrimlessVsTrimCap;
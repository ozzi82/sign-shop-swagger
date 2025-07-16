import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, FileText, Calculator } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  // Load HubSpot form script
  useEffect(() => {
    // Create and load the HubSpot forms script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      // Create the form once the script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "47141522",
          formId: "02a5f813-b959-4141-bd1e-28edc296de68",
          region: "na1",
          target: "#hubspot-form-container",
        });
      }
    };
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Get In Touch with our Team",
      primary: "WEST: +1 123 4455 Mr. Kenan Hanhan",
      secondary: "EAST: +1 123 4455 Mr. Ozan Yilmaz",
      description: "Speak directly with our sales team",
      hours: "Mon-Fri: 7:00 AM - 6:00 PM EST",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Quotes",
      primary: "hello@sunlitesigns.com",
      secondary: "",
      description: "Send detailed specifications for pricing",
      hours: "",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get Your Wholesale Quote</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 text-white">
              Ready to start your next signage project? Our experienced team
              provides fast, accurate quotes for all your wholesale signage
              needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div
                className="flex items-center rounded-full px-4 py-2"
                style={{ backgroundColor: "rgba(245, 166, 35, 1)" }}
              >
                <Calculator className="w-4 h-4 mr-2" />
                24/48 hours Quote Turnaround
              </div>
              <div
                className="flex items-center rounded-full px-4 py-2"
                style={{ backgroundColor: "rgba(245, 166, 35, 1)" }}
              >
                <FileText className="w-4 h-4 mr-2" />
                Detailed Specifications
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Our Sales Team
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Multiple ways to reach us for quotes, technical support, and
                  order assistance. Our experienced team is ready to help with
                  your wholesale signage needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="bg-card shadow-card border-border"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary bg-primary/10 p-3 rounded-lg">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {method.title}
                          </h3>
                          <p className="text-foreground font-medium">
                            {method.primary}
                          </p>
                          {method.secondary && (
                            <p className="text-muted-foreground text-sm mb-2">
                              {method.secondary}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground mb-1">
                            {method.description}
                          </p>
                          {method.hours && (
                            <p className="text-xs text-muted-foreground/80">
                              {method.hours}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Wholesale Program Info */}
              <Card className="bg-gradient-card shadow-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Wholesale Partner Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Volume discounts for regular customers
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Net 30 payment terms for qualified accounts
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Dedicated account representative
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Priority production scheduling
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* HubSpot Quote Request Form */}
            <Card className="bg-card shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Request Wholesale Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Provide project details below for an accurate quote within 2
                  hours during business hours.
                </p>
              </CardHeader>
              <CardContent>
                <div
                  id="hubspot-form-container"
                  className="hubspot-form-wrapper"
                  style={{
                    minHeight: "400px",
                  }}
                >
                  <div className="text-center text-muted-foreground py-8">
                    Loading form...
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  * By submitting this form, you agree to receive communications
                  about your quote request. We typically respond within 2 hours
                  during business hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

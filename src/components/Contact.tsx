import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["1-800-SIGNPRO", "(555) 123-4567"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["quotes@signcraft-pro.com", "support@signcraft-pro.com"],
      description: "Get detailed quotes via email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["1234 Industrial Way", "Manufacturing City, ST 12345"],
      description: "Visit our manufacturing facility"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 2:00 PM"],
      description: "Emergency service available 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your signage project? Contact us today for a free quote 
            and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card shadow-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary bg-primary/10 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                      ))}
                      <p className="text-sm text-muted-foreground/80">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="bg-card shadow-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Name *
                </label>
                <Input placeholder="Your Company LLC" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone *
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Type
                </label>
                <Input placeholder="Channel Letters, Banners, Pylon Sign, etc." />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Details *
                </label>
                <Textarea 
                  placeholder="Please describe your signage needs, dimensions, timeline, and any specific requirements..."
                  rows={4}
                />
              </div>

              <Button variant="cta" size="lg" className="w-full">
                Submit Quote Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll respond to your quote request within 24 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
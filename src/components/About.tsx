import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Shield, Clock } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <Users className="w-6 h-6" />, title: "50+ Team Members", description: "Skilled craftspeople and designers" },
    { icon: <Shield className="w-6 h-6" />, title: "ISO 9001 Certified", description: "Quality management system" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", description: "Always available for emergencies" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "5000+ Projects", description: "Successfully completed nationwide" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About SignCraft Pro
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 25 years of experience in the signage industry, SignCraft Pro has grown 
              from a small local shop to one of the nation's leading wholesale sign manufacturers.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in creating high-quality, durable signage solutions that help businesses 
              stand out and communicate effectively with their customers. Our state-of-the-art 
              manufacturing facility and experienced team ensure every project meets the highest 
              standards of quality and craftsmanship.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide businesses with exceptional signage solutions that enhance their 
                  brand visibility and drive growth. We're committed to quality, innovation, 
                  and customer satisfaction in every project we undertake.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Industry-leading quality standards
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Competitive wholesale pricing
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Fast turnaround times
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Nationwide shipping available
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
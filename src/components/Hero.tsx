import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional sign manufacturing facility"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Professional Signs
            <span className="block text-accent">Built to Last</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Leading wholesale manufacturer of custom signs, channel letters, and digital displays. 
            Serving businesses nationwide with quality signage solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Request Quote
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center text-primary-foreground">
              <Factory className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Users className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Award className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
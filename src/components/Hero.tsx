import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Truck, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional channel letter manufacturing facility"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Wholesale Signage
            <span className="block text-accent">Manufacturing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Premier wholesale manufacturer of trimless channel letters, cast block acrylic letters, 
            and custom metal signage. Serving sign companies across USA and Canada since 1999.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Request Wholesale Quote
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/products">
                View Product Catalog
              </Link>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center text-primary-foreground">
              <Factory className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years Manufacturing</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Truck className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">5-7</div>
                <div className="text-sm opacity-90">Day Turnaround</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Award className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">UL</div>
                <div className="text-sm opacity-90">Listed Components</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground">
              <Zap className="w-8 h-8 mr-3 text-accent" />
              <div>
                <div className="text-xl font-bold">LED</div>
                <div className="text-sm opacity-90">Efficient Lighting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Truck, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/lovable-uploads/04527713-5a62-42a7-8c53-a76cc1d16206.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background with better visibility */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional channel letter manufacturing facility"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent"></div>
      </div>

      {/* Simplified floating elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-8 relative z-10 max-w-6xl">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Wholesale Trimless Channel Letters &
              <span className="block text-5xl md:text-7xl xl:text-8xl mt-3 bg-gradient-to-r from-accent via-orange-400 to-accent-dark bg-clip-text text-transparent font-extrabold">Cast Block Acrylic</span>
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-primary-foreground/90 mt-6 mb-8 max-w-3xl mx-auto font-medium">
              Engineered for Sign Professionals
            </p>
          </div>
          
          <div className="animate-fade-in mb-12" style={{animationDelay: '0.3s'}}>
            <p className="text-base md:text-lg xl:text-xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
              UL-listed trimless channel letters and precision-cut cast block acrylic letters. 
              German engineering precision meets Florida speed - serving sign companies across USA and Canada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button variant="cta" size="lg" className="apple-glow-hero text-lg px-12 py-6 font-bold min-w-[280px]" asChild>
              <Link to="/contact">
                Request Wholesale Quote
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="premium" size="lg" className="apple-glow-secondary text-lg px-12 py-6 glass border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 font-semibold min-w-[280px]" asChild>
              <Link to="/products">
                View Product Catalog
              </Link>
            </Button>
          </div>

          {/* Simplified key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="text-center text-primary-foreground">
              <div className="flex items-center justify-center mb-2">
                <Factory className="w-6 h-6 mr-2 text-accent" />
                <div className="text-2xl font-bold">25+</div>
              </div>
              <div className="text-sm opacity-90">Years Manufacturing</div>
            </div>
            <div className="text-center text-primary-foreground">
              <div className="flex items-center justify-center mb-2">
                <Truck className="w-6 h-6 mr-2 text-accent" />
                <div className="text-2xl font-bold">24-48h</div>
              </div>
              <div className="text-sm opacity-90">Quote Response</div>
            </div>
            <div className="text-center text-primary-foreground">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 mr-2 text-accent" />
                <div className="text-2xl font-bold">UL</div>
              </div>
              <div className="text-sm opacity-90">Listed Components</div>
            </div>
            <div className="text-center text-primary-foreground">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 mr-2 text-accent" />
                <div className="text-2xl font-bold">LED</div>
              </div>
              <div className="text-sm opacity-90">Efficient Lighting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
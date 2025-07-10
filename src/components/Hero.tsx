import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Truck, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/lovable-uploads/b65672d5-65aa-4d28-b91a-f20d6649be08.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image - fully visible */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional channel letter manufacturing facility" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        {/* Content positioned on the right with semi-transparent backdrop */}
        <div className="ml-auto w-full md:w-2/3 lg:w-1/2 xl:w-2/5">
          <div className="bg-background/30 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12">
            <div className="animate-fade-in">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Wholesale Trimless Channel Letters &
                <span className="block text-4xl lg:text-6xl xl:text-7xl mt-2 bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent font-extrabold">Cast Block Acrylic</span>
                <span className="block text-lg lg:text-xl xl:text-2xl font-normal mt-4 text-primary-foreground/90">Engineered for Sign Professionals</span>
              </h1>
            </div>
            
            <div className="animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <p className="text-base lg:text-lg xl:text-xl text-primary-foreground/90 mb-8 leading-relaxed" style={{
              textShadow: '0 0 10px rgba(253, 119, 2, 0.3)'
            }}>
                UL-listed trimless channel letters and precision-cut cast block acrylic letters. 
                German engineering precision meets Florida speed - serving sign companies across USA and Canada.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-8 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <Button variant="cta" size="lg" className="apple-glow-hero text-base lg:text-lg px-8 py-6 font-bold" asChild>
                <Link to="/contact">
                  Request Wholesale Quote
                  <ArrowRight className="ml-3" />
                </Link>
              </Button>
              <Button variant="premium" size="lg" className="apple-glow-secondary text-base lg:text-lg px-8 py-6 glass border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 font-semibold" asChild>
                <Link to="/products">
                  View Product Catalog
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 text-sm lg:text-base">
              <div className="flex items-center text-primary-foreground">
                <Factory className="w-6 h-6 mr-2 text-accent" />
                <div>
                  <div className="font-bold">25+ Years</div>
                  <div className="opacity-90 text-xs lg:text-sm">Manufacturing</div>
                </div>
              </div>
              <div className="flex items-center text-primary-foreground">
                <Truck className="w-6 h-6 mr-2 text-accent" />
                <div>
                  <div className="font-bold">24-48h</div>
                  <div className="opacity-90 text-xs lg:text-sm">Quote Response</div>
                </div>
              </div>
              <div className="flex items-center text-primary-foreground">
                <Award className="w-6 h-6 mr-2 text-accent" />
                <div>
                  <div className="font-bold">UL Listed</div>
                  <div className="opacity-90 text-xs lg:text-sm">Components</div>
                </div>
              </div>
              <div className="flex items-center text-primary-foreground">
                <Zap className="w-6 h-6 mr-2 text-accent" />
                <div>
                  <div className="font-bold">LED</div>
                  <div className="opacity-90 text-xs lg:text-sm">Efficient Lighting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
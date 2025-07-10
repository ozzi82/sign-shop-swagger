import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Truck, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  button_text: string;
  button_url: string;
  additional_data: {
    tagline: string;
    secondaryButtonText: string;
    secondaryButtonUrl: string;
    stats: Array<{
      icon: string;
      value: string;
      label: string;
    }>;
  };
}

const Hero = () => {
  const [content, setContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const { data, error } = await supabase
          .from('website_content')
          .select('*')
          .eq('content_type', 'hero')
          .eq('is_active', true)
          .maybeSingle();

        if (data && !error) {
          setContent({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
            image_url: data.image_url,
            button_text: data.button_text,
            button_url: data.button_url,
            additional_data: data.additional_data as {
              tagline: string;
              secondaryButtonText: string;
              secondaryButtonUrl: string;
              stats: Array<{
                icon: string;
                value: string;
                label: string;
              }>;
            }
          });
        } else if (error) {
          console.error('Error fetching hero content:', error);
          // Set fallback content
          setContent({
            title: "Wholesale Trimless Channel Letters &",
            subtitle: "Cast Block Acrylic",
            description: "UL-listed trimless channel letters and precision-cut cast block acrylic letters. German engineering precision meets Florida speed - serving sign companies across USA and Canada.",
            image_url: "/lovable-uploads/b65672d5-65aa-4d28-b91a-f20d6649be08.png",
            button_text: "Request Wholesale Quote",
            button_url: "/contact",
            additional_data: {
              tagline: "Engineered for Sign Professionals",
              secondaryButtonText: "View Product Catalog",
              secondaryButtonUrl: "/products",
              stats: [
                { icon: "Factory", value: "25+ Years", label: "Manufacturing" },
                { icon: "Truck", value: "24-48h", label: "Quote Response" },
                { icon: "Award", value: "UL Listed", label: "Components" },
                { icon: "Zap", value: "LED", label: "Efficient Lighting" }
              ]
            }
          });
        }
      } catch (err) {
        console.error('Failed to fetch hero content:', err);
        // Set fallback content on any error
        setContent({
          title: "Wholesale Trimless Channel Letters &",
          subtitle: "Cast Block Acrylic",
          description: "UL-listed trimless channel letters and precision-cut cast block acrylic letters. German engineering precision meets Florida speed - serving sign companies across USA and Canada.",
          image_url: "/lovable-uploads/b65672d5-65aa-4d28-b91a-f20d6649be08.png",
          button_text: "Request Wholesale Quote",
          button_url: "/contact",
          additional_data: {
            tagline: "Engineered for Sign Professionals",
            secondaryButtonText: "View Product Catalog",
            secondaryButtonUrl: "/products",
            stats: [
              { icon: "Factory", value: "25+ Years", label: "Manufacturing" },
              { icon: "Truck", value: "24-48h", label: "Quote Response" },
              { icon: "Award", value: "UL Listed", label: "Components" },
              { icon: "Zap", value: "LED", label: "Efficient Lighting" }
            ]
          }
        });
      }
    };

    fetchHeroContent();
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-background via-background/95 to-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const icons = { Factory, Truck, Award, Zap };
    return icons[iconName as keyof typeof icons] || Factory;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image - fully visible */}
      <div className="absolute inset-0">
        <img 
          src={content.image_url} 
          alt="Professional channel letter manufacturing facility" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        {/* Content positioned on the left with spacing from borders */}
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 ml-4 lg:ml-8">
          <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-white/20 p-6 lg:p-8 max-w-md">
            <div className="animate-fade-in">
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                {content.title}
                <span className="block text-3xl lg:text-5xl xl:text-6xl mt-1 bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
                  {content.subtitle}
                </span>
                <span className="block text-base lg:text-lg xl:text-xl font-normal mt-3 text-white/95 drop-shadow-md">
                  {content.additional_data.tagline}
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-sm lg:text-base xl:text-lg text-white/90 mb-6 leading-relaxed drop-shadow-md">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button variant="cta" size="lg" className="text-sm lg:text-base px-6 py-4 font-bold" asChild>
                <Link to={content.button_url}>
                  {content.button_text}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-sm lg:text-base px-6 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold backdrop-blur-sm" 
                asChild
              >
                <Link to={content.additional_data.secondaryButtonUrl}>
                  {content.additional_data.secondaryButtonText}
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-3 text-xs lg:text-sm">
              {content.additional_data.stats.map((stat, index) => {
                const IconComponent = getIcon(stat.icon);
                return (
                  <div key={index} className="flex items-center text-white">
                    <IconComponent className="w-5 h-5 mr-2 text-accent drop-shadow-md" />
                    <div>
                      <div className="font-bold drop-shadow-md">{stat.value}</div>
                      <div className="opacity-90 text-xs drop-shadow-md">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
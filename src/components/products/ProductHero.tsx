import { Clock, Shield, Star } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-100">
            Wholesale Product Catalog
          </h1>
          <p className="text-xl mb-8 opacity-90 text-gray-200">
            Premium channel letters, acrylic letters, and metal fabrication for sign companies. 
            Fast turnaround, competitive wholesale pricing, nationwide shipping.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center rounded-full px-4 py-2 bg-orange-400">
              <Clock className="w-4 h-4 mr-2" />
              5-7 Day Production
            </div>
            <div className="flex items-center rounded-full px-4 py-2 bg-orange-400">
              <Shield className="w-4 h-4 mr-2" />
              UL Listed Components
            </div>
            <div className="flex items-center rounded-full px-4 py-2 bg-orange-400">
              <Star className="w-4 h-4 mr-2" />
              25+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
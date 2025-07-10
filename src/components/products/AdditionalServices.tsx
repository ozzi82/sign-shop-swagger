import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Layers, Zap, Scissors } from "lucide-react";

const AdditionalServices = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Additional Manufacturing Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card shadow-card border-border">
          <CardContent className="p-6 text-center">
            <Wrench className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Custom Fabrication</h3>
            <p className="text-sm text-muted-foreground">Unique shapes and custom projects</p>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-card border-border">
          <CardContent className="p-6 text-center">
            <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Multi-Layer Signs</h3>
            <p className="text-sm text-muted-foreground">Dimensional layered effects</p>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-card border-border">
          <CardContent className="p-6 text-center">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">LED Integration</h3>
            <p className="text-sm text-muted-foreground">Advanced lighting solutions</p>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-card border-border">
          <CardContent className="p-6 text-center">
            <Scissors className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Precision Cutting</h3>
            <p className="text-sm text-muted-foreground">Laser and waterjet cutting</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdditionalServices;
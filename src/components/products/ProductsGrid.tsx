import ProductCard from "./ProductCard";

const trimlessLettersImage =
  "/lovable-uploads/a0baa3e7-bbb7-4970-99af-72d0cc80ff1a.png";
const haloLettersImage =
  "/lovable-uploads/d0b014b4-c902-4fe3-8081-494eb1495e81.png";
const flatCutLettersImage =
  "/lovable-uploads/582d3875-a351-443c-b929-7d112a49cb51.png";
const edgeluxeLettersImage =
  "/lovable-uploads/6923d1c5-a3c7-48d5-8e69-63fdc5586279.png";

const ProductsGrid = () => {
  const products = [
    {
      id: "edgeluxe-lp5",
      image: trimlessLettersImage,
      title: "Edgeluxe LP 5",
      description:
        "Trimless Fabricated Stainless Steel Letters with face-lit illumination",
      features: [
        "Thick gauge stainless steel returns and back welded together",
        "Step-router acrylic face, trim-less",
        "Face-lit illumination",
        "Painted in any PMS color",
        "Minimum 15mm stroke width for stability",
        "Serviceable LEDs",
      ],
      badges: ["Best Seller", "Premium"],
      specifications: {
        Materials: "Thick gauge stainless steel",
        Illumination: "Face-lit",
        Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
        Customization:
          "Any PMS color, vinyls or pigmented translucent acrylics",
        "Stroke Width": 'Minimum 15mm (0.6")',
        "Minimum Height": '50mm (2")',
      },
    },
    {
      id: "edgeluxe-lp31-32",
      image: haloLettersImage,
      title: "Edgeluxe LP 3.1/3.2",
      description:
        "Fabricated Stainless Steel with standoffs for halo-lit effects",
      features: [
        "Halo illuminated from the back with standoff spacers",
        "LEDs arranged to avoid reflection of diodes on mounting surface",
        "Painted in any PMS color",
        "Multiple depth options",
        "Serviceable LEDs",
        "IP67 waterproofing",
      ],
      badges: ["Premium"],
      specifications: {
        Materials: "Fabricated Stainless Steel",
        Illumination:
          "Halo from back with standoffs (LP 3.1) / Flush-mount halo (LP 3.2)",
        Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
        Customization:
          "Any PMS color, vinyls or pigmented translucent acrylics",
        "Stroke Width": 'Minimum 15mm (0.6")',
        "Minimum Height": '50mm (2")',
      },
    },
    {
      id: "edgeluxe-lp1",
      image: flatCutLettersImage,
      title: "Edgeluxe LP 1",
      description:
        "Flat Cutout Letters (FCO) in wood, aluminum, stainless steel, and acrylic",
      features: [
        "Multiple material options available",
        "Thickness range from 1mm to 200mm",
        "Broad range of acrylic colors, paint, and vinyl",
        "Minimum 5mm stroke width",
        "No maintenance required",
        "Custom thickness available",
      ],
      badges: ["Quick Ship"],
      specifications: {
        Materials: "Wood, aluminum, stainless steel, acrylic",
        Thickness: '1mm (0.039") to 200mm (7.87")',
        Customization: "Broad range of acrylic colors, paint, and vinyl",
        "Stroke Width": 'Minimum 5mm (0.2")',
        "Minimum Height": '10mm (0.4")',
        Maintenance: "No maintenance",
      },
    },
    {
      id: "edgeluxe-lp11",
      image: edgeluxeLettersImage,
      title: "Edgeluxe LP 11",
      description: "Block Acrylic letters with various illumination options",
      features: [
        "30mm cast block acrylic construction",
        "Multiple illumination options available",
        "Embedded LEDs for uniform lighting",
        "IP67 waterproofing and heat dissipation",
        "Painted in any PMS color",
        "No maintenance required",
      ],
      badges: ["Premium"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination: "Face-lit, Back-lit, Side-lit, Halo-lit, Neon effect",
        Depth: 'Standard 30mm (1.2")',
        Customization:
          "Any PMS color, vinyls or pigmented translucent acrylics",
        "Stroke Width": 'Minimum 12mm (0.47")',
        "Minimum Height": '50mm (2")',
      },
    },
    {
      id: "edgeluxe-lp2",
      image: trimlessLettersImage,
      title: "Edgeluxe LP 2",
      description:
        "Aluminum Composite Material (ACM) channel letters with LED illumination",
      features: [
        "Lightweight aluminum composite construction",
        "Energy-efficient LED modules",
        "Weather-resistant finish",
        "Custom color matching available",
        "Easy installation mounting system",
        "5-year LED warranty",
      ],
      badges: ["Eco-Friendly", "Quick Ship"],
      specifications: {
        Materials: "Aluminum Composite Material (ACM)",
        Illumination: "Face-lit LED",
        Depths: '25mm (1"), 40mm (1.6"), 60mm (2.4")',
        Customization: "Custom colors, digital printing available",
        "Stroke Width": 'Minimum 12mm (0.47")',
        "Minimum Height": '40mm (1.6")',
      },
    },
    {
      id: "edgeluxe-lp6",
      image: haloLettersImage,
      title: "Edgeluxe LP 6",
      description: "Premium brass channel letters with vintage appeal",
      features: [
        "Solid brass construction",
        "Natural patina or polished finish options",
        "Traditional craftsmanship",
        "Weather-resistant lacquer coating",
        "Hand-soldered joints",
        "Historic building approved",
      ],
      badges: ["Heritage", "Premium"],
      specifications: {
        Materials: "Solid brass",
        Illumination: "Non-illuminated or LED retrofit",
        Depths: '20mm (0.8"), 35mm (1.4"), 50mm (2")',
        Customization: "Natural patina or polished brass finish",
        "Stroke Width": 'Minimum 10mm (0.4")',
        "Minimum Height": '30mm (1.2")',
      },
    },
    {
      id: "edgeluxe-lp7",
      image: flatCutLettersImage,
      title: "Edgeluxe LP 7",
      description: "Neon-effect flexible LED strip letters for modern designs",
      features: [
        "Flexible LED strip technology",
        "Continuous light output",
        "Multiple color temperature options",
        "Dimmable and programmable",
        "Silicone housing for durability",
        "Low maintenance operation",
      ],
      badges: ["Modern", "Energy Efficient"],
      specifications: {
        Materials: "Flexible silicone LED strips",
        Illumination: "Continuous neon-effect LED",
        Colors: "RGB, warm white, cool white, custom",
        Customization: "Programmable colors and effects",
        "Stroke Width": '8mm (0.31") to 16mm (0.63")',
        "Minimum Height": '20mm (0.8")',
      },
    },
    {
      id: "edgeluxe-lp8",
      image: edgeluxeLettersImage,
      title: "Edgeluxe LP 8",
      description:
        "Corten steel weathering letters for architectural applications",
      features: [
        "Self-weathering corten steel",
        "Natural rust patina development",
        "Architectural grade material",
        "No painting or coating required",
        "Sustainable material choice",
        "50+ year lifespan",
      ],
      badges: ["Architectural", "Sustainable"],
      specifications: {
        Materials: "Corten weathering steel",
        Illumination: "Non-illuminated or back-lit",
        Thickness: '3mm (0.12") to 15mm (0.59")',
        Customization: "Natural weathering process",
        "Stroke Width": 'Minimum 8mm (0.31")',
        "Minimum Height": '25mm (1")',
      },
    },
    {
      id: "edgeluxe-lp9",
      image: trimlessLettersImage,
      title: "Edgeluxe LP 9",
      description:
        "Titanium letters for extreme durability and aerospace applications",
      features: [
        "Grade 2 titanium construction",
        "Corrosion and heat resistant",
        "Aerospace industry standard",
        "Lightweight yet extremely strong",
        "Biocompatible material",
        "Premium brushed finish",
      ],
      badges: ["Aerospace", "Ultra Premium"],
      specifications: {
        Materials: "Grade 2 titanium",
        Illumination: "Non-illuminated or LED back-lit",
        Thickness: '1mm (0.039") to 10mm (0.39")',
        Customization: "Brushed, polished, or anodized finish",
        "Stroke Width": 'Minimum 6mm (0.24")',
        "Minimum Height": '20mm (0.8")',
      },
    },
    {
      id: "edgeluxe-lp10",
      image: haloLettersImage,
      title: "Edgeluxe LP 10",
      description: "Smart IoT-enabled channel letters with remote monitoring",
      features: [
        "Built-in IoT connectivity",
        "Remote monitoring and control",
        "Automatic brightness adjustment",
        "Maintenance alert system",
        "Energy usage tracking",
        "Mobile app integration",
      ],
      badges: ["Smart Tech", "IoT Enabled"],
      specifications: {
        Materials: "Aluminum with smart components",
        Illumination: "Smart LED with sensors",
        Connectivity: "WiFi, Bluetooth, 4G options",
        Customization: "App-controlled colors and effects",
        "Stroke Width": 'Minimum 15mm (0.6")',
        "Minimum Height": '50mm (2")',
      },
    },
    {
      id: "edgeluxe-lp12",
      image: flatCutLettersImage,
      title: "Edgeluxe LP 12",
      description: "Recycled aluminum letters for eco-conscious businesses",
      features: [
        "100% recycled aluminum content",
        "Carbon-neutral manufacturing",
        "Recyclable at end of life",
        "Solar-powered LED options",
        "Environmental certification",
        "Green building credits eligible",
      ],
      badges: ["Eco-Certified", "Carbon Neutral"],
      specifications: {
        Materials: "100% recycled aluminum",
        Illumination: "Solar LED or grid-tied LED",
        Sustainability: "LEED points eligible",
        Customization: "Eco-friendly powder coating",
        "Stroke Width": 'Minimum 10mm (0.4")',
        "Minimum Height": '35mm (1.4")',
      },
    },
    {
      id: "edgeluxe-lp13",
      image: edgeluxeLettersImage,
      title: "Edgeluxe LP 13",
      description: "Modular channel letter system for easy reconfiguration",
      features: [
        "Modular interlocking design",
        "Tool-free assembly and reconfiguration",
        "Standardized mounting system",
        "Interchangeable components",
        "Quick installation process",
        "Future expansion ready",
      ],
      badges: ["Modular", "Quick Install"],
      specifications: {
        Materials: "Anodized aluminum modules",
        Illumination: "Plug-and-play LED modules",
        Installation: "Tool-free magnetic mounting",
        Customization: "Mix and match module colors",
        "Stroke Width": 'Standard 20mm (0.8") modules',
        "Minimum Height": '60mm (2.4")',
      },
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;

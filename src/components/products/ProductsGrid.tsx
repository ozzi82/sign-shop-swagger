import ProductCard from "./ProductCard";

const trimlessLettersImage = "/lovable-uploads/a0baa3e7-bbb7-4970-99af-72d0cc80ff1a.png";
const haloLettersImage = "/lovable-uploads/d0b014b4-c902-4fe3-8081-494eb1495e81.png";
const flatCutLettersImage = "/lovable-uploads/582d3875-a351-443c-b929-7d112a49cb51.png";
const edgeluxeLettersImage = "/lovable-uploads/6923d1c5-a3c7-48d5-8e69-63fdc5586279.png";

const ProductsGrid = () => {
  const products = [
    {
      id: "edgeluxe-lp5",
      image: trimlessLettersImage,
      title: "Edgeluxe LP 5",
      description: "Trimless Fabricated Stainless Steel Letters with face-lit illumination",
      features: [
        "Thick gauge stainless steel returns and back welded together",
        "Step-router acrylic face, trim-less",
        "Face-lit illumination",
        "Painted in any PMS color",
        "Minimum 15mm stroke width for stability",
        "Serviceable LEDs"
      ],
      badges: ["Best Seller", "Premium"],
      specifications: {
        "Materials": "Thick gauge stainless steel",
        "Illumination": "Face-lit",
        "Depths": "30mm (1.2\"), 50mm (2\"), 80mm (3.1\"), 100mm (3.9\")",
        "Customization": "Any PMS color, vinyls or pigmented translucent acrylics",
        "Stroke Width": "Minimum 15mm (0.6\")",
        "Minimum Height": "50mm (2\")"
      }
    },
    {
      id: "edgeluxe-lp31-32",
      image: haloLettersImage,
      title: "Edgeluxe LP 3.1/3.2",
      description: "Fabricated Stainless Steel with standoffs for halo-lit effects",
      features: [
        "Halo illuminated from the back with standoff spacers",
        "LEDs arranged to avoid reflection of diodes on mounting surface",
        "Painted in any PMS color",
        "Multiple depth options",
        "Serviceable LEDs",
        "IP67 waterproofing"
      ],
      badges: ["Premium"],
      specifications: {
        "Materials": "Fabricated Stainless Steel",
        "Illumination": "Halo from back with standoffs (LP 3.1) / Flush-mount halo (LP 3.2)",
        "Depths": "30mm (1.2\"), 50mm (2\"), 80mm (3.1\"), 100mm (3.9\")",
        "Customization": "Any PMS color, vinyls or pigmented translucent acrylics",
        "Stroke Width": "Minimum 15mm (0.6\")",
        "Minimum Height": "50mm (2\")"
      }
    },
    {
      id: "edgeluxe-lp1",
      image: flatCutLettersImage,
      title: "Edgeluxe LP 1",
      description: "Flat Cutout Letters (FCO) in wood, aluminum, stainless steel, and acrylic",
      features: [
        "Multiple material options available",
        "Thickness range from 1mm to 200mm",
        "Broad range of acrylic colors, paint, and vinyl",
        "Minimum 5mm stroke width",
        "No maintenance required",
        "Custom thickness available"
      ],
      badges: ["Quick Ship"],
      specifications: {
        "Materials": "Wood, aluminum, stainless steel, acrylic",
        "Thickness": "1mm (0.039\") to 200mm (7.87\")",
        "Customization": "Broad range of acrylic colors, paint, and vinyl",
        "Stroke Width": "Minimum 5mm (0.2\")",
        "Minimum Height": "10mm (0.4\")",
        "Maintenance": "No maintenance"
      }
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
        "No maintenance required"
      ],
      badges: ["Premium"],
      specifications: {
        "Materials": "30mm (1.2\") cast block acrylic",
        "Illumination": "Face-lit, Back-lit, Side-lit, Halo-lit, Neon effect",
        "Depth": "Standard 30mm (1.2\")",
        "Customization": "Any PMS color, vinyls or pigmented translucent acrylics",
        "Stroke Width": "Minimum 12mm (0.47\")",
        "Minimum Height": "50mm (2\")"
      }
    }
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
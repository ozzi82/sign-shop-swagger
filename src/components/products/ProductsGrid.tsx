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
      title: "EdgeLuxe LP 5",
      description:
        "Trimless Fabricated Stainless Steel Letters with face-lit illumination",
      features: [
        "Thick gauge stainless steel returns and back welded together",
        "Step-router acrylic face, trim-less design",
        "Face-lit LED illumination for even distribution",
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful face-lit effects",
        'Minimum 15mm (0.6") stroke width for stability and even illumination',
        "Serviceable LEDs for easy maintenance",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Best Seller", "Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials:
          "Thick gauge stainless steel returns and back welded together, step-router acrylic face trim-less",
        Illumination: "Face-lit",
        Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
        "Stroke Width":
          'Minimum 15mm (0.6") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Maintenance: "Serviceable LEDs",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp31",
      image: haloLettersImage,
      title: "EdgeLuxe LP 3.1",
      description:
        "Fabricated Stainless Steel with standoffs for halo-lit effects",
      features: [
        "Halo illuminated from the back with standoff spacers",
        "LEDs arranged to avoid reflection of diodes on mounting surface",
        "Painted in any PMS color with colorful halo effect options",
        "Vinyls or pigmented translucent acrylics for colorful halo effects",
        "Serviceable LEDs for easy maintenance",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: "Fabricated Stainless Steel",
        Illumination: "Halo from back with standoffs",
        Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
        Customization:
          "Any PMS color, vinyls or pigmented translucent acrylics for colorful halo effects",
        "Stroke Width":
          'Minimum 15mm (0.6") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Maintenance: "Serviceable LEDs",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp32",
      image: haloLettersImage,
      title: "EdgeLuxe LP 3.2",
      description:
        "Fabricated Stainless Steel flush-mount with partial side-lit halo effect",
      features: [
        "Partial side-lit, flush-mounted halo effect",
        "LEDs arranged to avoid reflection of diodes on mounting surface",
        "Painted in any PMS color with colorful halo effect options",
        "Vinyls or pigmented translucent acrylics for colorful halo effects",
        "Serviceable LEDs for easy maintenance",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: "Fabricated Stainless Steel",
        Illumination: "Flush-mount partial side-lit halo",
        Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
        Customization:
          "Any PMS color, vinyls or pigmented translucent acrylics for colorful halo effects",
        "Stroke Width":
          'Minimum 15mm (0.6") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Maintenance: "Serviceable LEDs",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp1",
      image: flatCutLettersImage,
      title: "EdgeLuxe LP 1",
      description:
        "Flat Cutout Letters (FCO) in wood, aluminum, stainless steel, acrylic and many more",
      features: [
        "Wood, aluminum, stainless steel, acrylic and many more materials",
        'Thickness range from 1mm (0.039") to 200mm (7.87")',
        "Broad range of acrylic colors, paint, and vinyl customization",
        'Minimum 5mm (0.2") stroke width for precision',
        "No maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Quick Ship", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: "Wood, aluminum, stainless steel, acrylic and many more",
        Thickness: '1mm (0.039") to 200mm (7.87")',
        Customization: "Broad range of acrylic colors, paint, and vinyl",
        "Stroke Width": 'Minimum 5mm (0.2")',
        "Minimum Height": '10mm (0.4")',
        Maintenance: "No maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11f",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-F",
      description: "Block Acrylic Face-lit letters with uniform illumination",
      features: [
        '30mm (1.2") cast block acrylic construction',
        "Embedded LEDs for uniform face-lit illumination",
        'Standard 30mm (1.2") depth for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful face-lit effects",
        'Minimum 12mm (0.47") stroke width for stability and even illumination',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "High water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination: "Embedded LEDs for uniform face-lit",
        Depth:
          'Standard 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "High water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11b",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-B",
      description: "Block Acrylic Back-lit letters with halo effect",
      features: [
        '15mm (0.6"), 20mm (0.79") or 30mm (1.2") cast block acrylic',
        "Embedded LEDs for uniform halo-lit illumination with standoff spacers",
        'Standard 15mm (0.6"), 20mm (0.79") and 30mm (1.2") for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful halo-lit effects",
        'Minimum 12mm (0.47") stroke width for stability and even illumination',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "High water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials:
          '15mm (0.6"), 20mm (0.79") or 30mm (1.2") cast block acrylic',
        Illumination:
          "Embedded LEDs for uniform halo-lit with standoff spacers",
        Depth:
          'Standard 15mm (0.6"), 20mm (0.79") and 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful halo-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "High water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11fb",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-FB",
      description: "Block Acrylic Face and Halo-lit Combo illumination",
      features: [
        '30mm (1.2") cast block acrylic construction',
        "Embedded LEDs for uniform face and halo-lit with standoff spacers",
        'Standard 30mm (1.2") depth for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful face-lit effects",
        'Minimum 12mm (0.47") stroke width for stability and even illumination',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "High water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination:
          "Embedded LEDs for uniform face and halo-lit with standoff spacers",
        Depth:
          'Standard 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "High water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11c",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-C",
      description: "Block Acrylic Conical Profile with unique face-lit design",
      features: [
        '30mm (1.2") cast block acrylic construction',
        "Embedded LEDs for uniform face-lit, conical profile for narrow strokes and serifs",
        'Standard 30mm (1.2") depth for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful face-lit effects",
        'Minimum 12mm (0.47") stroke width at back-side down to 3mm (0.12") on the face',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "IP67 water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination:
          "Embedded LEDs for uniform face-lit, conical profile for narrow strokes and serifs",
        Depth:
          'Standard 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") at the back-side of the letter, down to 3mm (0.12") on the face',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "IP67 water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11bs",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-BS",
      description: "Block Acrylic Partial Back Side-lit illumination",
      features: [
        '30mm (1.2") cast block acrylic construction',
        "Embedded LEDs for uniform partial back side-lit illumination",
        'Standard 30mm (1.2") depth for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful back-lit effects",
        'Minimum 12mm (0.47") stroke width for stability and even illumination',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "IP67 water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination: "Embedded LEDs for uniform partial back side-lit",
        Depth:
          'Standard 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful back-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "IP67 water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11fs",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-FS",
      description: "Block Acrylic Partial Front Side-lit illumination",
      features: [
        '30mm (1.2") cast block acrylic construction',
        "Embedded LEDs for uniform partial front side-lit illumination",
        'Standard 30mm (1.2") depth for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful front-lit effects",
        'Minimum 12mm (0.47") stroke width for stability and even illumination',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "IP67 water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination: "Embedded LEDs for uniform partial front side-lit",
        Depth:
          'Standard 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful front-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "IP67 water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11s",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-S",
      description: "Block Acrylic Full Side-lit illumination",
      features: [
        '30mm (1.2") cast block acrylic construction',
        "Embedded LEDs for uniform full side-lit illumination",
        'Standard 30mm (1.2") depth for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful face-lit effects",
        'Minimum 12mm (0.47") stroke width for stability and even illumination',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "IP67 water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination: "Embedded LEDs for uniform full side-lit",
        Depth:
          'Standard 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "IP67 water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
      },
    },
    {
      id: "edgeluxe-lp11n",
      image: edgeluxeLettersImage,
      title: "EdgeLuxe LP 11-N",
      description: "Block Acrylic Faux Neon effect illumination",
      features: [
        '30mm (1.2") cast block acrylic construction',
        "Embedded LEDs for uniform face-lit, creating neon glass tube effect",
        'Standard 30mm (1.2") depth for durability and optimal light diffusion',
        "Painted in any PMS color with color matching options",
        "Vinyls or pigmented translucent acrylics for colorful face-lit effects",
        'Minimum 12mm (0.47") stroke width for stability and even illumination',
        "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        "IP67 water and dust-proof, no maintenance required",
        "3-year warranty included",
        "UL Listed certification",
      ],
      badges: ["Premium", "UL Listed", "3 Year Warranty"],
      specifications: {
        Materials: '30mm (1.2") cast block acrylic',
        Illumination:
          "Embedded LEDs for uniform face-lit, creating neon glass tube effect",
        Depth:
          'Standard 30mm (1.2") for durability and optimal light diffusion',
        Customization:
          "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
        "Stroke Width":
          'Minimum 12mm (0.47") for stability and even illumination',
        "Minimum Height": '50mm (2")',
        Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
        Maintenance: "IP67 water and dust-proof, no maintenance",
        Warranty: "3 years",
        Certification: "UL Listed",
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

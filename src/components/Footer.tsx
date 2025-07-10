import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Trimless Channel Letters", href: "/products/trimless-channel-letters" },
    { name: "Cast Block Acrylic Letters", href: "/products/cast-acrylic-letters" },
    { name: "Flat Cut Metal Letters", href: "/products/flat-cut-letters" },
    { name: "Backlit Channel Letters", href: "/products/backlit-letters" },
    { name: "Custom Metal Fabrication", href: "/products/metal-fabrication" }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Manufacturing Process", href: "/about#process" },
    { name: "Quality Standards", href: "/about#quality" },
    { name: "Wholesale Partner Program", href: "/about#partnership" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Sunlite Signs
            </div>
            <p className="text-muted-foreground mb-6">
              Wholesale manufacturer of premium channel letters and acrylic signage for sign companies across USA and Canada.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground text-sm">+1 (689) 294-0912</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground text-sm">hello@sunlitesigns.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground text-sm">5005 W Laurel, Suite 100 PMB1041</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• United States (All 50 States)</li>
              <li>• Canada (All Provinces)</li>
              <li>• Express Shipping Available</li>
              <li>• White Glove Delivery</li>
              <li>• Freight LTL Options</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Sunlite Signs LLC. All rights reserved. Wholesale supplier to the sign industry.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/warranty" className="text-muted-foreground hover:text-accent transition-colors">
                Product Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
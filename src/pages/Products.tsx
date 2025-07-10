import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/products/ProductHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import AdditionalServices from "@/components/products/AdditionalServices";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductHero />
      <ProductsGrid />
      <div className="container mx-auto px-4">
        <AdditionalServices />
      </div>
      <Footer />
    </div>
  );
};
export default Products;
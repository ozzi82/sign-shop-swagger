import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WholesaleFeatures from "@/components/WholesaleFeatures";
import FeaturedProducts from "@/components/FeaturedProducts";
import IncludedServices from "@/components/IncludedServices";
import FAQSchema from "@/components/FAQSchema";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WholesaleFeatures />
      <FeaturedProducts />
      <IncludedServices />
      <FAQSchema />
      <Footer />
    </div>
  );
};

export default Home;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WholesaleFeatures from "@/components/WholesaleFeatures";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProjectGallery from "@/components/ProjectGallery";
import IncludedServices from "@/components/IncludedServices";
import FAQSchema from "@/components/FAQSchema";
import Footer from "@/components/Footer";

const Home = () => {
  console.log("Home component rendering");
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WholesaleFeatures />
      <FeaturedProducts />
      <ProjectGallery />
      <IncludedServices />
      <FAQSchema />
      <Footer />
    </div>
  );
};

export default Home;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WholesaleFeatures from "@/components/WholesaleFeatures";
import IncludedServices from "@/components/IncludedServices";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WholesaleFeatures />
      <IncludedServices />
      <Footer />
    </div>
  );
};

export default Home;
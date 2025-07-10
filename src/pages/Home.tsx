import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WholesaleFeatures from "@/components/WholesaleFeatures";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProjectGallery from "@/components/ProjectGallery";
import IncludedServices from "@/components/IncludedServices";
import FAQSchema from "@/components/FAQSchema";
import Footer from "@/components/Footer";
// TinaCMS imports - will be available after running: npx tinacms build
let client: any;
try {
  ({ client } = require("../../tina/__generated__/client"));
} catch (error) {
  // TinaCMS not yet initialized
  client = null;
}
import { useEffect, useState } from "react";

const Home = () => {
  const [tinaData, setTinaData] = useState(null);
  
  useEffect(() => {
    const fetchTinaData = async () => {
      if (!client) {
        console.log("TinaCMS not initialized. Run 'npx tinacms build' to enable visual editing.");
        return;
      }
      
      try {
        const result = await client.queries.heroContent({
          relativePath: "index.json",
        });
        setTinaData(result);
      } catch (error) {
        console.log("No Tina data available, using fallback");
      }
    };
    
    fetchTinaData();
  }, []);

  console.log("Home component rendering");
  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        data={tinaData?.data} 
        query={tinaData?.query} 
        variables={tinaData?.variables} 
      />
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
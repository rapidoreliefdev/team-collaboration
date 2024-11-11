import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Subscribe from "../Home/Subscribe";
import Esg from "../Home/Esg";
import Travaltime from "../Home/Travaltime";
import ProviderMarketplace from "../Home/provider-arketplace";
import HeroSection from "./hero-section";
import HelpSection from "./help-section";
import ProductSection from "./product-section";
import ProductAds from "./product-ads";
import TrendingProduct from "./trending-product";

const Fundraise = () => {
  return (
    <>
      <div className={`herobg w-full bg-cover bg-center bg-no-repeat`}>
        {/* <Header/> */}
        <Navbar />
        <HeroSection />
      </div>
      <HelpSection />
      <ProductSection />

      <Travaltime />
      <ProductAds />
      <ProviderMarketplace />
      <TrendingProduct />
      <Esg />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Fundraise;

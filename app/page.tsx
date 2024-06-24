import Banner from "./components/home/Banner";
import IHelpEnhance from "./components/home/IHelpEnhance";
import Journey from "./components/home/Journey";
import ProductCarousel from "./components/home/ProductCarousel";
import TrustedByTopClients from "./components/home/TrustedByTopClients";

const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col">
      <Banner />
      <ProductCarousel />
      <div className="w-full my-5 h-[1px] bg-gray-white-gray "></div>
      <TrustedByTopClients />
      <IHelpEnhance />
      <Journey />
    </div>
  );
};

export default Home;

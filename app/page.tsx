import Banner from "./components/home/Banner";
import IHelpEnhance from "./components/home/IHelpEnhance";
import Journey from "./components/home/Journey";
import ProductCarousel from "./components/home/ProductCarousel";
import TrustedByTopClients from "./components/home/TrustedByTopClients";

export const metadata = {
  title: "Sqysh | Full-Stack Web Solutions",
  description:
    "Custom digital solutions for entrepreneurs and small businesses.",
  alternates: {
    canonical: "/",
  },
};

const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col">
      <Banner />
      <ProductCarousel />
      <div className="w-full h-[1px] bg-gray-white-gray mt-28"></div>
      <TrustedByTopClients />
      <IHelpEnhance />
      <Journey />
    </div>
  );
};

export default Home;

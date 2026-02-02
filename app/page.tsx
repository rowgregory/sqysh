import Banner from "./components/home/Banner";
import IHelpEnhance from "./components/home/IHelpEnhance";
import Journey from "./components/home/Journey";
// import ProductCarousel from "./components/home/ProductCarousel";
// import TrustedByTopClients from "./components/home/TrustedByTopClients";
import WebsiteShowcase from "./components/home/WebsiteShowcase";

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
    <div className="flex min-h-[calc(100vh-84px)] flex-col pb-32 mt-[-84px]">
      <Banner />
      {/*  <ProductCarousel /> */}
      <WebsiteShowcase />

      {/* <TrustedByTopClients /> */}
      <IHelpEnhance />
      <Journey />
    </div>
  );
};

export default Home;

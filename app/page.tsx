import Banner from "./components/home/Banner";
import Journey from './components/home/Journey';

const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col">
      <Banner />
      <Journey />
    </div>
  );
};

export default Home;

import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import BestBooks from "../components/BestBooks";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <div>
      <Banner />
      <Subscription />
      <BestBooks />
      <AboutUs />
    </div>
  );
};

export default Home;

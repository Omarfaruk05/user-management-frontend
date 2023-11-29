import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import BestBooks from "../components/BestBooks";
import GetApp from "../components/GetApp";
import ScrollToTop from "../components/ScrollToTop";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner />
      <Subscription />
      <BestBooks />
      <AboutUs />
      <GetApp />
    </div>
  );
};

export default Home;

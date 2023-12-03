import Users from "../components/Users";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />

      <Users />
    </div>
  );
};

export default Home;

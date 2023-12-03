import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <ToastContainer />
      <MainLayout />
    </div>
  );
}

export default App;

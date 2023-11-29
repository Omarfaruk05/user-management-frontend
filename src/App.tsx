import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hook";
import { auth } from "./lib/fitebase";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);
  return (
    <div>
      <ScrollToTop />
      <ToastContainer />
      <MainLayout />
    </div>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import UpdateBook from "../pages/UpdateBook";
import BookDetails from "../pages/BookDetails";
import CreateBook from "../pages/CreateBook";
import WishList from "../pages/WishList";
import Reading from "../pages/Reading";
import Finished from "../pages/Finished";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/create-book",
        element: (
          <PrivateRoute>
            <CreateBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wish-list",
        element: <WishList />,
      },
      {
        path: "/reading",
        element: <Reading />,
      },
      {
        path: "/finished",
        element: <Finished />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

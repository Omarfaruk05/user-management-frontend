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
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "/reading",
        element: (
          <PrivateRoute>
            <Reading />
          </PrivateRoute>
        ),
      },
      {
        path: "/finished",
        element: (
          <PrivateRoute>
            <Finished />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

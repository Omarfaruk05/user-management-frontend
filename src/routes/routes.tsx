import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import AllTeam from "../pages/AllTeam";
import UpdateUser from "../pages/UpdateUser";
import CreateTeam from "../pages/CreateTeam";

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
        path: "/create-user",
        element: <CreateUser />,
      },
      {
        path: "/create-team",
        element: <CreateTeam />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser />,
      },
      {
        path: "/team",
        element: <AllTeam />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

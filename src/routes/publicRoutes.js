import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Layout = lazy(() => import("../pages/Layout/index"));
const Home = lazy(() => import("../pages/Home/index"));

const publicRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <Home />,
          index: true,
        },
        {
          path: "cart",
          element: <h1>cart</h1>,
        },
      ],
    },
  ],
};

export default publicRoutes;

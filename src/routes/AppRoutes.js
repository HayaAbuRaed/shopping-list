import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";

const AppRoutes = () => {
  const appRoutes = useRoutes([publicRoutes]);

  return <Suspense fallback={<h2>Loading...</h2>}>{appRoutes}</Suspense>;
};

export default AppRoutes;

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Profile from "../components/Profile";

function Routers() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return element;
}

export default Routers;

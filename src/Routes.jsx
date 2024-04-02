import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Desktopblog from "pages/Desktopblog";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopblog",
      element: <Desktopblog />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./views/Home";
import Orders from "./views/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

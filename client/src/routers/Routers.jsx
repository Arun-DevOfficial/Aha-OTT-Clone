import { createBrowserRouter } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("../pages/Home")); // Lazy load Home

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Just the lazy-loaded component here
  },
]);

export default router;

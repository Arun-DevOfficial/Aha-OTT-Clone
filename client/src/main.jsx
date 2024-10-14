import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ClientRouter from "./routers/Routers";
import Loading from "./components/Loader"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}> {/* Wrap with Suspense */}
      <RouterProvider router={ClientRouter} />
    </Suspense>
  </React.StrictMode>
);

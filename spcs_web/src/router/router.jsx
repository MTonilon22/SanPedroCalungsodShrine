import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../index.css";
import App from "../App.jsx";

import Home from "../pages/Home.jsx";
import Shrine from "../pages/Shrine.jsx";
import Login from "../pages/Login.jsx";
import Merchandise from "../pages/Merchandise.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/shrine", element: <Shrine /> },
      { path: "/merchandise", element: <Merchandise /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

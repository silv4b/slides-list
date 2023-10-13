import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import AddDelSlide from "./components/AddDelSlide/AddDelSlide.tsx";

const router = createBrowserRouter([
  // Inicial Page - App
  {
    path: "/",
    element: <App />,
  },
  // Add/Del Slides to Supabase API - AddSlide
  {
    path: "/add",
    element: <AddDelSlide />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

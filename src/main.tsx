import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import ManageSlides from "./components/ManageSlides/ManageSlides.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";

const router = createBrowserRouter([
  // Inicial Page - App
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // Add/Del Slides to Supabase API - AddSlide
  {
    path: "/manage",
    element: <ManageSlides />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

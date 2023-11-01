import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import ManageSlides from "./components/ManageMaterial/ManageMaterial.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import ClassesPage from "./components/ClassPage/ClassPage.tsx";

const router = createBrowserRouter([
  // Inicial Page
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // Manage materials
  {
    path: "/manage-material",
    element: <ManageSlides />,
    errorElement: <ErrorPage />,
  },
  // Manage Classes
  {
    path: "/classes",
    element: <ClassesPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

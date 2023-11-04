import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import ManageSlides from "./pages/ManageMaterialPage/ManageMaterial.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import ClassesPage from "./pages/ClassPage/ClassPage.tsx";
import Main from "./pages/MainPage/Main.tsx";

const router = createBrowserRouter([
  // Inicial Page (temp)
  {
    path: "/",
    element: <ClassesPage />,
    errorElement: <ErrorPage />,
  },
  // Materials Page (temp)
  {
    path: "/materials",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  // Manage materials
  {
    path: "/management",
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

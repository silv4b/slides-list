import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import ManageMaterial from "./pages/ManageMaterialPage/ManageMaterial.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import CoursesPage from "./pages/CoursesPage/CoursesPage.tsx";
import Main from "./pages/MainPage/Main.tsx";
import CoursePage from "./pages/CoursePage/CoursePage.tsx";

const router = createBrowserRouter([
  // Inicial Page (temp)
  {
    path: "/",
    // element: <ClassesPage />,
    element: <Main />,
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
    element: <ManageMaterial />,
    errorElement: <ErrorPage />,
  },
  // Manage Courses
  {
    path: "/courses",
    element: <CoursesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/courses/:courseCod", // Use :courseCod para capturar o identificador da URL
    element: <CoursePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

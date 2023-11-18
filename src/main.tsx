import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CoursePage from "./pages/Course/Course.tsx";
import CoursesPage from "./pages/Courses/Courses.tsx";
import ErrorPage from "./pages/Error/Error.tsx";
import Main from "./pages/Main/Main.tsx";
import ManageMaterial from "./pages/ManageMaterial/ManageMaterial.tsx";

import "./index.css";

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

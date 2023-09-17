import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/:projectId",
        element: <Project />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

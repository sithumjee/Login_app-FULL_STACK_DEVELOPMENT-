import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**import all components */
import Username from "./components/Username";
import Password from "./components/Password";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";

/**root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

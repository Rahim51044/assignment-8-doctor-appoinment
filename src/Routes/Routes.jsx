import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
  

const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            path: '/',
            Component: Home
        }
      ]
    },
  ]);

  export default router
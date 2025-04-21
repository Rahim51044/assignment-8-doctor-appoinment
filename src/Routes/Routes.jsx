import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyBookings from "../pages/myBookings";
import Blogs from "../pages/Blogs"
import ContactUs from "../pages/ContactUs"
  

const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            path: '/',
            Component: Home,
            loader: () => fetch('doctorData.json')
        },
        {
          path: '/my-bookings',
          element: <MyBookings></MyBookings>
        },
        {
          path: '/blogs',
          Component: Blogs
        },
        {
          path: '/contact-us',
          Component: ContactUs
        }


      ]
    },
  ]);

  export default router
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
import DoctorDetails from "../pages/DoctorDetails";
import { Cell } from "recharts";
  

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
            hydrateFallbackElement: <p>Loading, please wait...</p>,
            loader: () => fetch('../doctorData.json')
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
        },
        {
          path: '/doctor-details/:id',
          element: <DoctorDetails></DoctorDetails>,
          loader: () => fetch('doctorData.json')
        },
       
        
      ]
    },
  ]);

  export default router
import {
    createBrowserRouter,
  } from "react-router-dom";
import HexaBytes from "../Layout/HexaBytes";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Service from "../Pages/Service/Service";
import Testimonial from "../Pages/Testimonial/Testimonial";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <HexaBytes/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contact-us',
            element: <ContactUs/>
        },
        {
            path: '/service',
            element: <Service/>
        },
        {
            path: '/testimonial',
            element: <Testimonial/>
        }
      ]
    },
  ]);
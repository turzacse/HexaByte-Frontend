import {
  createBrowserRouter,
} from "react-router-dom";
import HexaBytes from "../Layout/HexaBytes";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Service from "../Pages/Service/Service";
import Testimonial from "../Pages/Testimonial/Testimonial";
import Career from "../Pages/Career/Career";
import CaseStudies from "../Pages/CaseStudies/CaseStudies";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <HexaBytes />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/testimonial',
        element: <Testimonial />
      },
      {
        path: '/career',
        element: <Career />
      },
      {
        path: '/case-studies',
        element: <CaseStudies />
      },
      {
        path: '/case-studies/:case',
        element: <Testimonial />
      }
    ]
  },
]);
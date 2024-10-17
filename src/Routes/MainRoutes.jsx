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
import HowWeWork from "../Components/HowWeWork/HowWeWork";
import CaseStudyDetail from "../Pages/CaseStudies/CaseStudyDetail";
import Teacher from "../Pages/Teacher/Teacher";
import HexaByteAdmin from "../Layout/HexaByteAdmin";
import Dashboard from "../AdminPages/Dashboard/Dashboard";
import Users from "../AdminPages/Users/Users";
import Contact from "../AdminPages/Contact/Contact";
import JobCircular from "../AdminPages/JobCircular/JobCircular";
import Emploee from "../AdminPages/Emploee/Emploee";
import Instructor from "../AdminPages/Instructor/Instructor";
import Project from "../AdminPages/Project/Projects";
// import HowWeWork from "../Pages/HowWeWork/HowWeWork";




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
        path: '/how-we-work',
        element: <HowWeWork />
      },
      {
        path: '/teacher',
        element: <Teacher />
      },
      {
        path: '/case-study/:id',
        element: <CaseStudyDetail />
      }
    ]
  },
  {
    path: '/admin',
    element: <HexaByteAdmin/>,
    children:[
      {
        path: '/admin/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/admin/users',
        element: <Users/>
      },
      {
        path: '/admin/contacts',
        element: <Contact/>
      },
      {
        path: '/admin/circular',
        element: <JobCircular/>
      },
      {
        path: '/admin/employees',
        element: <Emploee/>
      },
      {
        path: '/admin/instructors',
        element: <Instructor/>
      },
      {
        path: '/admin/projects',
        element: <Project/>
      }
    ]
  }
]);
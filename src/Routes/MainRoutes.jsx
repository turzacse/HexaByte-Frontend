import {
    createBrowserRouter,
  } from "react-router-dom";
import HexaBytes from "../Layout/HexaBytes";
import Home from "../Pages/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HexaBytes/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);
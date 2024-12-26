import React, { useEffect, useState } from "react";
import Loading from "../../Components/loading/Loading";
import AboutUs from "../Home/AboutUS/AboutUs";
import Services from "../Home/Service/Service";
import CaseStudies from "../Home/CaseStudies/CaseStudies";
import Testimonials from "../Home/Testimonials/Testimonials";
import MeetOurTeam from "../Home/MeetOurTeam/MeetOurTeam";
import GetInTouch from "../Home/GetInTouch/GetInTouch";
import Banner from "../Home/Banner/Banner";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <HeroSection/> */}
          <Banner />
          <AboutUs />
          <Services />
          <CaseStudies />
          <Testimonials />
          <MeetOurTeam />
          <GetInTouch />
        </>
      )}
    </div>
  );
};

export default LandingPage;

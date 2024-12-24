import React, { useEffect, useState } from "react";
import logo from "../../assets/Image/logo.png";
import Section from "../../Components/Section/Section";
import HeroSection from "./Hero/HeroSection";
import AboutUs from "./AboutUS/AboutUs";
import Services from "./Service/Service";
import CaseStudies from "./CaseStudies/CaseStudies";
import Testimonials from "./Testimonials/Testimonials";
import MeetOurTeam from "./MeetOurTeam/MeetOurTeam";
import GetInTouch from "./GetInTouch/GetInTouch";
import Banner from "./Banner/Banner";
import Loading from "../../Components/loading/Loading";

const Home = () => {
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

export default Home;

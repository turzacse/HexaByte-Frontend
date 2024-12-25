import React, { useEffect, useState } from "react";
import Loading from "../../Components/loading/Loading";
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
        </>
      )}
    </div>
  );
};

export default LandingPage;

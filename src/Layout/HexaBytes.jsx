import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';

const HexaBytes = () => {
    const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const checkScrollPosition = () => {
    if (!showScrollUp && window.pageYOffset > 400) {
      setShowScrollUp(true);
    } else if (showScrollUp && window.pageYOffset <= 400) {
      setShowScrollUp(false);
    }

    if (
      !showScrollDown &&
      window.innerHeight + window.pageYOffset < document.body.offsetHeight - 400
    ) {
      setShowScrollDown(true);
    } else if (
      showScrollDown &&
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 400
    ) {
      setShowScrollDown(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, [showScrollUp, showScrollDown]);
    return (
        <div className='primary-background'>
            <Navbar />
            <div className='conatiner mx-auto md:px-10 px-4 py-4'>
                <div className=''>
                    {showScrollUp && (
                        <FaArrowAltCircleUp
                            onClick={scrollTop}
                            className="fixed pulse-animation"
                            style={{
                                bottom: "20px",
                                right: "20px",
                                padding: "5px",
                                backgroundColor: "#FD7E14",
                                color: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                                zIndex: 1000,
                                fontSize: "2rem",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                            }}
                        />
                    )}
                    {showScrollDown && (
                        <FaArrowAltCircleDown
                            onClick={scrollBottom}
                            className="fixed pulse-animation"
                            style={{
                                bottom: "20px",
                                right: "20px",
                                padding: "5px",
                                backgroundColor: "#20C997", // Coral color
                                color: "white",
                                borderRadius: "50%",
                                cursor: "pointer",
                                zIndex: 1000,
                                fontSize: "2rem",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Optional shadow
                            }}
                        />
                    )}
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HexaBytes;
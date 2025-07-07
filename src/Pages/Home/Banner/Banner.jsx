import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="relative md:h-screen h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/banner background.mp4" // Replace with the actual video file path
        autoPlay
        loop
        muted
      ></video> */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg1.gif" // Replace with the actual video file path
        autoPlay
        loop
        muted
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/0"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center text-white">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl text-white md:text-6xl font-bold"
        >
          Welcome to HexaByte™
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="500"
          className="text-lg text-white font-bold md:text-xl mb-8"
        >
          Innovative Software Solution.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="700"
          className="text-base text-white md:text-lg italic mb-8"
        >
          Building a better future, byte by byte.
        </p>

        <div className='flex items-center justify-center'>
          <Link
          className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center gap-2 "
          to="/about"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="900"
        >
          <FaLocationArrow />
          Ask For a Service
        </Link>
        <Link
           data-aos="fade-up"
           data-aos-duration="1600"
           data-aos-delay="900"
           to="/contact-us"
          className="bg-white-500 text-black px-4 py-2  rounded-md ml-4 hover:bg-yellow-600 bg-yellow-500 transition flex items-center gap-2 "
          // onClick={() => alert("Get a Quote!")}
        > 
        <FaLocationArrow />
          Get a Quote
        </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Banner;

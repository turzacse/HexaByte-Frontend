import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
       data-aos="fade-left"
       data-aos-offset="300"
      data-aos-easing="ease-in-sine"
        className="absolute inset-0 w-full h-full object-cover"
        src="/banner background.mp4" // Replace with the actual video file path
        autoPlay
        loop
        muted
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/0"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center text-white">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
        >
          Welcome to HexaByte™
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="500"
          className="text-lg text-[#39357D] md:text-xl mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          Empowering innovation through technology.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="700"
          className="text-base text-[#39357D] md:text-lg italic mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          "Building a better future, byte by byte."
        </p>

        <Link
          className="bg-indigo-900 text-white px-6 py-3 text-lg rounded-md hover:bg-indigo-700 transition"
          to="/about"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="900"
        >
          Learn More
        </Link>
        <Link
           data-aos="fade-up"
           data-aos-duration="1600"
           data-aos-delay="900"
          className="bg-white-500 text-[#39357D] px-6 py-3 text-lg rounded-md ml-4 hover:bg-yellow-600 transition drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          onClick={() => alert("Get a Quote!")}
        >
          Get a Quote
        </Link>
      </div>
    </div>

    // <div className='flex items-center bg-[#173A63]'
    //     style={{
    //         background: `linear-gradient(135deg, #13345D, #14365F, #0A254D, #0A254D, #0A254D, #0A254D, )`,
    //     }}
    // >
    //     {/* <img className='w-1/2 md:h-[520px]' src="./2b.PNG" alt="" />
    //     <img
    //         style={{ transform: 'scaleX(-1)' }}
    //         className='w-1/2 md:h-[520px]' src="./2b.PNG" alt="" /> */}

    //     {/* <div
    //         style={{
    //             position: 'absolute',
    //             top: '50%',
    //             left: '50%',
    //             transform: 'translate(-50%, -50%)',
    //             color: '#ffffff',
    //             fontSize: '24px',
    //             fontWeight: 'bold',
    //             backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //             padding: '10px 20px',
    //             borderRadius: '5px',
    //             textAlign: 'center',
    //         }}
    //     >
    //         <div
    //             style={{
    //                 position: 'absolute',
    //                 top: '50%',
    //                 left: '50%',
    //                 transform: 'translate(-50%, -50%)',
    //                 color: '#ffffff',
    //                 fontSize: '18px',
    //                 fontWeight: 'bold',
    //                 backgroundColor: '#CA8A04',
    //                 padding: '10px 20px',
    //                 borderRadius: '5px',
    //                 textAlign: 'center',
    //                 width: '150px'
    //             }}
    //         >
    //             Get a Quote
    //         </div>
    //     </div> */}
    // </div>
  );
};

export default Banner;

import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/banner background.mp4" // Replace with the actual video file path
          autoPlay
          loop
          muted
        ></video>
      
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"
        ></div>
      
        {/* Content Section */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to HexaByte™
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering innovation through technology.
          </p>
          <p className="text-base md:text-lg italic mb-8">
            "Building a better future, byte by byte."
          </p>
          <a   
            className="bg-indigo-900 text-white px-6 py-3 text-lg rounded-md hover:bg-indigo-700 transition"
            href='/about'
          >
            Learn More
          </a  >
          <button
            className="bg-white-500 text-white px-6 py-3 text-lg rounded-md ml-4 hover:bg-yellow-600 transition"
            onClick={() => alert("Get a Quote!")}
          >
            Get a Quote
          </button>
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
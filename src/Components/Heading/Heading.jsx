import React from 'react';
import { Link } from "react-router-dom";

const Heading = ({ title, description }) => {
    return (
        <div>
            {/* <section
                className="bg-gradient-to-r from-[#658baf] to-[#123955] text-white md:h-[200px] h-[120px] flex items-center justify-center"
            >
                <div className="text-center px-4">
                    <h1 className="md:text-4xl text-2xl font-bold mb-2 uppercase">
                        {title}
                    </h1>
                    <p className="md:text-lg text-[12px] mb-6 max-w-2xl mx-auto text-gray-200">
                        {description}
                    </p>

                </div>
            </section> */}




            <div className="relative md:h-[200px] h-[120px] flex items-center justify-center overflow-hidden">
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
                        // data-aos="fade-up"
                        // data-aos-duration="1000"
                        className="md:text-4xl text-2xl font-bold uppercase"
                    >
                        {title}
                    </h1>
                    <p
                        // data-aos="fade-up"
                        // data-aos-duration="1200"
                        // data-aos-delay="500"
                        className="md:text-lg text-[12px] max-w-2xl mx-auto text-gray-200"
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Heading;

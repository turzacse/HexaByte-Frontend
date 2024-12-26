import React from 'react';

const Heading = ({ title, description }) => {
    return (
        <section
            className="bg-gradient-to-r from-[#658baf] to-[#123955] text-white md:h-[200px] h-[120px] flex items-center justify-center"
        >
            <div className="text-center px-4">
                {/* Headline */}
                <h1 data-aos="fade-down" className="md:text-4xl text-2xl font-bold mb-2 uppercase">
                    {title}
                </h1>

                {/* Subheading */}
                <p data-aos="fade-down" className="md:text-lg text-[12px] mb-6 max-w-2xl mx-auto text-gray-200">
                    {description}
                </p>
                
            </div>
        </section>
    );
};

export default Heading;

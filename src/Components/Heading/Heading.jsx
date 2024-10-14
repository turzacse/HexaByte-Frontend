import React from 'react';

const Heading = ({ title, description }) => {
    return (
        <section
            className="bg-gradient-to-r from-[#658baf] to-[#123955] text-white h-[200px] flex items-center justify-center"
        >
            <div className="text-center px-4">
                {/* Headline */}
                <h1 className="text-4xl font-bold mb-2">
                    {title}
                </h1>

                {/* Subheading */}
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    {description}
                </p>
                
            </div>
        </section>
    );
};

export default Heading;

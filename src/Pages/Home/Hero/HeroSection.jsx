import React from 'react';

const HeroSection = () => {
    return (
        <section
            className="bg-gradient-to-r from-[#658baf] to-[#123955] text-white h-[300px] flex items-center justify-center"
        >
            <div className="text-center px-4">
                {/* Headline */}
                <h1 className="text-4xl font-bold mb-4">
                    Innovative Software Solutions for Your Business Growth
                </h1>

                {/* Subheading */}
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    We help companies build, scale, and deliver digital solutions across platforms.
                </p>

                {/* Call to Action (CTA) */}
                <a
                    href="#quote"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded-full text-lg font-semibold"
                >
                    Get a Free Quote
                </a>
            </div>
        </section>
    );
};

export default HeroSection;

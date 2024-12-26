import React from 'react';

const Mission = () => {
    return (
        <section className="container mx-auto px-6 md:px-12 lg:px-24 py-12 bg-[#f4f4f4]">
            <div className="container mx-auto text-center">
                <h2  data-aos="fade-up"
          data-aos-duration="1500" className="text-3xl font-bold mb-6 text-[#39357D]">Our Mission and Vision</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mission Section */}
                    <div data-aos="fade-right" className="border-2 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-[#658baf] to-[#123955]">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
                        <p className="text-gray-200">
                            To provide innovative and effective software solutions that empower businesses to thrive in the digital age.
                        </p>
                    </div>
                    {/* Vision Section */}
                    <div data-aos="fade-left" className="border-2 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-[#658baf] to-[#123955]">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Our Vision</h3>
                        <p className="text-gray-200">
                            To be a global leader in software development, known for delivering quality and customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;

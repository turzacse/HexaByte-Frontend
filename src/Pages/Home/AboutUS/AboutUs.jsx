import React from 'react';
import Section from '../../../Components/Section/Section';

const AboutUs = () => {
    return (
        <section className="bg-gray-100 py-12" id="about">
            {/* <Section title='About US'/> */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex justify-between md:flex-row flex-col-reverse md:gap-8 items-center">
                    {/* Text Section */}
                    
                    <div className="text-section flex-1">
                        <h2 className="text-3xl font-bold mb-4 text-[#123955]">HexaByte TM Solution</h2>
                        <p className="text-lg text-gray-700 mb-6 text-justify">
                            We are a software company offering tailor-made solutions in web development, mobile apps, and enterprise solutions. Our team is dedicated to driving your business forward with cutting-edge digital innovations and custom-built software solutions that help you stay ahead of the competition.
                        </p>
                        <p className="text-lg text-gray-700 text-justify">
                            With years of experience and a passion for technology, HexaByte TM Solution ensures that your project is not just delivered but also adds value to your organization.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section flex-1">
                        <img 
                            src="/HBTM.png" // Replace with your company/team image
                            alt="About HexaByte TM Solution"
                            className="rounded-lg md:h-[400px] md:w-[400px] h-[200px] w-[200px] "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

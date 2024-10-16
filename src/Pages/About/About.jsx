// import React from 'react';

// const About = () => {
//     return (
//         <div>
//             This is About page 

//         </div>
//     );
// };

// export default About;
import React, { useEffect } from 'react';
import Heading from '../../Components/Heading/Heading';
import MeetOurTeam from '../Home/MeetOurTeam/MeetOurTeam';
import OurValues from './OurValues';
import Mission from './Mission';
import image from '../../assets/Image/about.png'
import CustomButton from '../../Components/Primary/CustomButton';

const About = () => {
    useEffect(() => {
        window.scroll(0,0);
    } ,[])
    return (
        <div className="bg-gray-100 pb-12">
            {/* Hero Section */}
            <Heading title='About Us' description='Innovative software solutions to power your business.' />

            {/* Company Overview Section */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
                <h2 className="text-3xl font-bold text-center text-[#123955]">Who We Are</h2>
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 p-4">
                        <p className="text-lg text-justify">
                        At HexaByte TM Solution, we are dedicated to delivering cutting-edge software solutions tailored to meet the unique needs of our clients. Our team of skilled professionals specializes in web development, mobile app development, and enterprise solutions, ensuring that your business operates efficiently and effectively. With a strong focus on innovation and quality, we strive to empower businesses to achieve their goals in the digital landscape.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-4 flex justify-end">
                        <img src={image} alt="Our Team" className="rounded-lg shadow-lg h-[300px]" />
                        {/* <img src="https://backend.whalesai.com/public/imageai/13102024-9c2e91.png" alt="Our Team" className="rounded-lg shadow-lg h-[350px]" /> */}
                    </div>
                </div>
            </section>
            <Mission/>

            {/* Our Values Section */}
            <OurValues/>
            
            {/* <section className="bg-gradient-to-r from-[#658baf] to-[#123955] container mx-auto px-6 md:px-12 lg:px-24 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white">Our Values</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
                        <div className="p-4">
                            <i className="fas fa-thumbs-up text-4xl mb-2"></i>
                            <h3 className="font-semibold">Integrity</h3>
                            <p>We uphold the highest standards of integrity in all our actions.</p>
                        </div>
                        <div className="p-4">
                            <i className="fas fa-lightbulb text-4xl mb-2"></i>
                            <h3 className="font-semibold">Innovation</h3>
                            <p>We constantly seek innovative solutions to meet our clients' needs.</p>
                        </div>
                        <div className="p-4">
                            <i className="fas fa-user-friends text-4xl mb-2"></i>
                            <h3 className="font-semibold">Customer Satisfaction</h3>
                            <p>Our customers are at the heart of everything we do.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Meet Our Team Section */}
            <MeetOurTeam/>

            <CustomButton text='see our work procedure' link='/how-we-work' />


        </div>
    );
};

export default About;

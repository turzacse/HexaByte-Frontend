import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa'; // Example icons for services
import { FiArrowUpRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import CustomButton from '../../../Components/Primary/CustomButton';

import icon1 from '../../../assets/Icon/Service/s1.png'
import icon2 from '../../../assets/Icon/Service/s2.png'
import icon3 from '../../../assets/Icon/Service/s3.png'
import icon4 from '../../../assets/Icon/Service/s4.png'
import icon5 from '../../../assets/Icon/Service/s5.png'
import icon6 from '../../../assets/Icon/Service/s6.png'

const Services = () => {
    const services = [
        {
            title: 'Front End Development',
            description: 'Building responsive, high-performance, and interactive front-end interfaces using modern technologies.',
            icon: icon1,
            link: '/services/front-end-development'
        },
        {
            title: 'Backend Development',
            description: 'Expertise in server-side development, databases, and APIs to power web applications efficiently.',
            icon: icon2,
            link: '/services/backend-development'
        },
        {
            title: 'Full Stack Web Development',
            description: 'Complete web development services from front-end to back-end, offering end-to-end solutions.',
            icon: icon3,
            link: '/services/full-stack-web-development'
        },
        {
            title: 'Portfolio Design & Development',
            description: 'Custom portfolio design and development to showcase your work, skills, and projects effectively.',
            icon: icon4,
            link: '/services/portfolio-design-development'
        },
        {
            title: 'UI/UX Design',
            description: 'Designing intuitive, user-friendly, and visually appealing interfaces for websites and mobile apps.',
            icon: icon5,
            link: '/services/ui-ux-design'
        },
        {
            title: 'Personalized Student Care',
            description: 'Tailored academic support and programming guidance for CSE students, focusing on problem-solving and project development.',
            icon: icon6,
            link: '/services/personalized-student-care'
        }
    ];
    

    return (
        <section className="bg-gradient-to-r from-[#658baf] to-[#123955] py-12" id="services">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-300  p-6 rounded-lg shadow-lg text-center">
                            {/* <div className="text-4xl flex justify-center  mb-4">
                                {service.icon}
                            </div> */}
                            <img className='w-[80px] h-[80px] mx-auto' src={service.icon} alt="" />

                            <h3 className="text-xl font-semibold mb-2 text-[#123955]">{service.title}</h3>
                            <p className=" mb-4 text-gray-700">{service.description}</p>
                        </div>
                    ))}
                    
                </div>
                <CustomButton text='See More' link = '/service' />
            </div>
        </section>
    );
};

export default Services;

import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa'; // Example icons for services

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Custom web development services for businesses, creating high-performance and scalable websites.',
            icon: <FaLaptopCode />,
            link: '/services/web-development'
        },
        {
            title: 'Mobile App Development',
            description: 'Expertise in creating mobile apps for both iOS and Android platforms with modern user experiences.',
            icon: <FaMobileAlt />,
            link: '/services/mobile-app-development'
        },
        {
            title: 'UI/UX Design',
            description: 'Professional UI/UX design services to ensure user-friendly and visually appealing interfaces.',
            icon: <FaPalette />,
            link: '/services/ui-ux-design'
        },
        // You can add more services here
    ];

    return (
        <section className="bg-gradient-to-r from-[#658baf] to-[#123955] py-12" id="services">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>

                {/* Grid Layout for Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-100  p-6 rounded-lg shadow-lg text-center">
                            {/* Icon */}
                            <div className="text-4xl flex justify-center  mb-4">
                                {service.icon}
                            </div>

                            {/* Service Title */}
                            <h3 className="text-xl font-semibold mb-2 text-[#123955]">{service.title}</h3>

                            {/* Service Description */}
                            <p className=" mb-4 text-gray-700">{service.description}</p>

                            {/* CTA Button */}
                            <a
                                href={service.link}
                                className="text-yellow-500 hover:text-yellow-600 font-medium"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

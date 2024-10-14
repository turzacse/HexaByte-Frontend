import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CustomButton from '../../../Components/Primary/CustomButton';

const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'E-commerce Platform',
            description: 'Developed a scalable e-commerce platform that supports thousands of users globally.',
            // imageUrl: project, 
            link: '/case-studies/e-commerce',
            id: '001p'
        },
        {
            title: 'Mobile Banking App',
            description: 'Created a mobile banking app with top-notch security features and user-friendly interface.',
            // imageUrl: project,
            link: '/case-studies/mobile-banking',
            id: '002p'
        },
        {
            title: 'Healthcare Portal',
            description: 'Built a healthcare platform to help patients book appointments and access medical history online.',
            // imageUrl: project,
            link: '/case-studies/healthcare',
            id: '003p'
        },
        // Add more case studies as needed
    ];

    return (
        <section className="bg-gray-100 py-12" id="case-studies">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-[#123955] mb-8">Our Work</h2>

                {/* Grid Layout for Case Studies */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((caseStudy, index) => (
                        <div key={index} className="bg-gradient-to-r from-[#658baf] to-[#123955] p-6 rounded-lg shadow-lg">
                            {/* Project Image */}
                            <img src="/core.PNG" alt={caseStudy.title} className="w-full h-48 object-cover mb-4 rounded" />

                            {/* Project Title */}
                            <h3 className="text-xl font-semibold mb-2 text-white">{caseStudy.title}</h3>

                            {/* Project Description */}
                            <p className="text-gray-200 mb-4">{caseStudy.description}</p>

                            {/* CTA Button */}
                            <div className='flex justify-between items-center'>
                                <NavLink
                                    to={`/case-studies/${caseStudy?.id}`}
                                    className="text-yellow-500 hover:text-yellow-600 font-medium"
                                >
                                    View Details
                                </NavLink>
                                <NavLink>
                                    <FaRegEye className='rounded-lg text-yellow-500 text-2xl' />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>

                <CustomButton text='See Portfolio' />
            </div>
        </section>
    );
};

export default CaseStudies;

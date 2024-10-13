import React from 'react';
// import project from '../../../assets/Image/core.PNG'
// import project from '../../../assets/Image/core.png'

const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'E-commerce Platform',
            description: 'Developed a scalable e-commerce platform that supports thousands of users globally.',
            // imageUrl: project, 
            link: '/case-studies/e-commerce'
        },
        {
            title: 'Mobile Banking App',
            description: 'Created a mobile banking app with top-notch security features and user-friendly interface.',
            // imageUrl: project,
            link: '/case-studies/mobile-banking'
        },
        {
            title: 'Healthcare Portal',
            description: 'Built a healthcare platform to help patients book appointments and access medical history online.',
            // imageUrl: project,
            link: '/case-studies/healthcare'
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
                            <a
                                href={caseStudy.link}
                                className="text-yellow-500 hover:text-yellow-600 font-medium"
                            >
                                View Details
                            </a>
                        </div>
                    ))}
                </div>

                {/* Full Portfolio CTA */}
                <div className="text-center mt-8">
                    <a
                        href="/portfolio"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded"
                    >
                        See Full Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;

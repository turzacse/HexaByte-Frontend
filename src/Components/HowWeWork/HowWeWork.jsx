import React from 'react';

const HowWeWork = () => {
    const workProcess = [
        {
            title: "Requirement Gathering",
            description: "We begin by understanding your needs through detailed discussions and workshops, ensuring we capture all functional and non-functional requirements."
        },
        {
            title: "Planning",
            description: "Our team develops a project plan outlining the scope, timeline, resources, and risk management strategies to ensure smooth execution."
        },
        {
            title: "Design",
            description: "We create wireframes and prototypes, focusing on user experience and interface design, ensuring that the visual layout aligns with your brand identity."
        },
        {
            title: "Development",
            description: "Our developers use agile methodologies to build the software, focusing on iterative progress, continuous feedback, and high code quality."
        },
        {
            title: "Testing",
            description: "Thorough testing is conducted, including unit, integration, and user acceptance testing, to ensure the software is bug-free and meets the specified requirements."
        },
        {
            title: "Deployment",
            description: "Once testing is complete, we deploy the solution to the production environment, ensuring that everything is set up for a smooth launch."
        },
        {
            title: "Maintenance and Support",
            description: "Post-launch, we provide ongoing support and maintenance to address any issues, implement updates, and ensure your software continues to meet your needs."
        }
    ];
    return (
        <div>
            <section id="how-we-work" className="container mx-auto px-6 md:px-12 lg:px-24 bg-white ">
                <div className="container mx-auto py-12">
                    <h2 className="text-3xl font-bold text-center mb-4 text-[#123955]">How We Work?</h2>
                    <div className="md:text-center md:px-28 px-4 text-justify text-yellow-700">
                        <p>
                        At HexaByte TM Solution, we follow a structured Software Development Life Cycle (SDLC), ensuring each phase—planning, design, development, testing, and deployment—is carefully managed. This approach guarantees high-quality, tailored solutions with ongoing support to help your software grow with your business.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 ">
                        {workProcess.map((process, index) => (
                            <div key={index} className="border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-[#658baf] to-[#123955]">
                                <h3 className="text-xl font-bold mb-2 text-yellow-400">{process.title}</h3>
                                <p className="text-yellow-200 text-justify ">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
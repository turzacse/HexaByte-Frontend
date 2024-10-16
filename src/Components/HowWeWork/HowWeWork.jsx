import Heading from "../Heading/Heading";

import icon1 from '../../assets/Icon/Work/we1.png'
import icon2 from '../../assets/Icon/Work/we2.png'
import icon3 from '../../assets/Icon/Work/we3.png'
import icon4 from '../../assets/Icon/Work/we4.png'
import icon5 from '../../assets/Icon/Work/we5.png'
import icon6 from '../../assets/Icon/Work/we6.png'
import icon7 from '../../assets/Icon/Work/we7.png'
import icon8 from '../../assets/Icon/Work/we8.png'
import icon9 from '../../assets/Icon/Work/we9.png'
import icon10 from '../../assets/Icon/Work/we10.png'
import icon11 from '../../assets/Icon/Work/we11.png'
import icon12 from '../../assets/Icon/Work/we12.png'
import icon13 from '../../assets/Icon/Work/we13.png'
import { useEffect } from "react";


const HowWeWork = () => {
    const workProcessGeneral = [
        {
            title: "Requirement Gathering",
            description: "We begin by understanding your needs through detailed discussions and workshops, ensuring we capture all functional and non-functional requirements.",
            img: icon1,
        },
        {
            title: "Planning",
            description: "Our team develops a project plan outlining the scope, timeline, resources, and risk management strategies to ensure smooth execution.",
            img: icon2,
        },
        {
            title: "Design",
            description: "We create wireframes and prototypes, focusing on user experience and interface design, ensuring that the visual layout aligns with your brand identity.",
            img: icon3
        },
        {
            title: "Development",
            description: "Our developers use agile methodologies to build the software, focusing on iterative progress, provide continuous feedback, and high code quality.",
            img: icon4
        },
        {
            title: "Testing",
            description: "Thorough testing is conducted, including unit, integration, and user acceptance testing, to ensure the software is bug-free and meets the specified requirements.",
            img: icon5
        },
        {
            title: "Deployment",
            description: "Once testing is complete, we deploy the solution to the production environment, ensuring that everything is set up for a smooth launch.",
            img: icon6
        },
        {
            title: "Maintenance and Support",
            description: "Post-launch, we provide ongoing support and maintenance to address any issues, implement updates, and ensure your software continues to meet your needs.",
            img: icon7
        }
    ];

    const workProcess = [
        {
            "title": "Initial Consultation",
            "description": "We begin with a consultation to understand the student's academic background, goals, and specific challenges in programming and problem-solving.",
            img: icon8,
        },
        {
            "title": "Customized Learning Plan",
            "description": "Based on the student's requirements, we create a tailored learning plan that includes academic subjects, programming languages, and problem-solving strategies.",
            img: icon9,
        },
        {
            "title": "One-on-One Guidance",
            "description": "Students receive personalized guidance through one-on-one sessions, focusing on real-world programming tasks, academic projects, and competitive programming.",
            img: icon10,
        },
        {
            "title": "Progress Monitoring",
            "description": "We continuously monitor the student’s progress, providing feedback and adjustments to the learning plan based on performance and areas of improvement.",
            img: icon11,
        },
        {
            "title": "Support and Mentorship",
            "description": "Beyond academic support, we offer mentorship to help students develop problem-solving skills, build portfolios, and prepare for technical interviews.",
            img: icon12,
        },
        {
            "title": "Continuous Improvement",
            "description": "The program evolves with the student’s needs, incorporating new topics, advanced problem-solving techniques, and updated industry knowledge to ensure ongoing success.",
            img: icon13,
        }
    ]

    useEffect(() => {
        window.scroll(0,0);
    } ,[])
    return (
        <div>
            <Heading title='Work Procedure' description='at HexaByte TM Solution' />
            <section id="how-we-work" className="container mx-auto px-6 md:px-12 lg:px-24 bg-white ">
                <div className="container mx-auto py-12">
                    <h2 className="text-3xl font-bold text-center mb-4 text-[#123955]">How We Work?</h2>
                    <div className="md:text-center md:px-28 px-4 text-justify text-yellow-700">
                        <p>
                            At HexaByte TM Solution, we follow a structured Software Development Life Cycle (SDLC), ensuring each phase—planning, design, development, testing, and deployment—is carefully managed. This approach guarantees high-quality, tailored solutions with ongoing support to help your software grow with your business.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 ">
                        {workProcessGeneral.map((process, index) => (
                            <div key={index} className="border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-[#658baf] to-[#123955]">
                                <h3 className="text-xl font-bold mb-2 text-yellow-400">{process.title}</h3>
                                <div className="flex gap-2">
                                    <img className="w-[80px] h-[80px] my-auto" src={process.img} alt="" />
                                    <p className="text-yellow-200 text-justify ">{process.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* to-[#123955] */}
            <section id="how-we-work" className="container mx-auto px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#658baf] to-[#123955]">
                <div className="container mx-auto py-12">
                    <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400 ">How We Work for Student ?</h2>
                    <div className="md:text-center md:px-28 px-4 text-justify text-gray-200">
                        <p>
                            At HexaByte TM Solution, we provide personalized student care focused on academic excellence and programming skills. Through initial consultations, we understand each student’s unique needs and create tailored learning plans that include one-on-one guidance in programming, problem-solving, and academic subjects. Our ongoing support and mentorship ensure students build confidence and are well-prepared for future challenges.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 ">
                        {workProcess.map((process, index) => (
                            <div key={index} className="border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-300">
                                <h3 className="text-xl font-bold mb-2 text-yellow-800">{process.title}</h3>
                                <div className="flex gap-2">
                                    <img className="w-[80px] rounded-full h-[80px] my-auto" src={process.img} alt="" />
                                    <p className="text-black text-justify ">{process.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
import React from 'react';
import icon1 from '../../assets/Image/Value/hb1.png'
import icon2 from '../../assets/Image/Value/hb2.png'
import icon3 from '../../assets/Image/Value/hb3.png'
import icon4 from '../../assets/Image/Value/hb4.png'
import icon5 from '../../assets/Image/Value/hb5.png'

const OurValues = () => {
    // Array of values
    const values = [
        {
            title: "Integrity",
            description: "We conduct our business honestly and transparently, ensuring that we are trustworthy in all our relationships.",
            logo: icon1
        },
        {
            title: "Innovation",
            description: "We strive for creativity and excellence in our solutions, always looking for new ways to improve and evolve.",
            logo: icon2
        },
        {
            title: "Customer Satisfaction",
            description: "We prioritize our clients' needs and work tirelessly to exceed their expectations in every project.",
            logo: icon3,
        },
        {
            title: "Collaboration",
            description: "We believe in the power of teamwork and encourage open communication to achieve shared goals.",
            logo: icon4
        },
        {
            title: "Respect",
            description: "We treat everyone with respect, valuing diverse perspectives and fostering an inclusive environment.",
            logo: icon5
        }
    ];

    return (
        <section className="bg-gradient-to-r from-[#658baf] to-[#123955] container mx-auto px-6 md:px-12 lg:px-24 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-white">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={value.logo} className='h-[60px] w-[60px] mx-auto ' alt="" />
                            <h3 className="text-xl font-semibold mb-2 text-white mt-2">{value.title}</h3>
                            <p className="text-gray-200">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;

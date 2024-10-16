import React from 'react';
import Heading from '../../Components/Heading/Heading';
import { caseStudiesData } from './CaseStudiesData';
import { NavLink } from 'react-router-dom';

const CaseStudies = () => {
    return (
        <div>
            {/* <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-700 mb-4">🚧 Page Under Construction 🚧</h1>
                    <p className="text-lg text-gray-500 mb-6">We are working hard to bring you the best experience. Stay tuned!</p>
                    <img src="https://i.ibb.co.com/Cwg8rdM/cons.png" alt="Construction Icon" className="w-32 h-32 mx-auto" />
                </div>
            </div> */}
            <Heading title='Our Case Studies' description={`Explore our successful projects where we've solved client problems through innovative tech solutions. Learn how we deliver results across different industries.`} />


            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-3xl font-bold text-center text-[#123955] mb-8">Featured Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudiesData.map((study, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow-md bg-gradient-to-r from-[#658baf] to-[#123955] text-white hover:shadow-lg transition-shadow duration-300">
                                <img src='https://backend.whalesai.com/public/imageai/15102024-ff8230.png' alt={study.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="md:text-xl font-bold ">{study.title}</h3>
                                <p className=" mt-2 mb-4">{study.shortDescription}</p>
                                <NavLink to={`/case-study/${study.id}`} className="text-yellow-500 font-semibold hover:underline">Details</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CaseStudies;
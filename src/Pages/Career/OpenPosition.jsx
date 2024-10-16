import React from 'react';
import { opening } from './Opening'; // Import the JSON data

const OpenPosition = () => {
    return (
        <div className="py-12 bg-gradient-to-r from-[#658baf] to-[#123955] text-gray-700 ">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h1 className="text-4xl font-bold text-center text-white  mb-10">Current Job Openings</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {opening.map((position, index) => (
                        <div key={index} className="border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 bg-gray-300">
                            <h2 className="text-3xl font-semibold ">{position.title}</h2>
                            <p className="text-lg  mb-1">{position.location} | {position.type}</p>
                            <hr className='' />
                            <p className=" mb-4 mt-1">{position.description}</p>

                            <h3 className="font-bold text-lg mb-2">Responsibilities:</h3>
                            <ul className="list-disc pl-5  mb-4">
                                {position.responsibilities.map((responsibility, i) => (
                                    <li key={i}>{responsibility}</li>
                                ))}
                            </ul>

                            <h3 className="font-bold text-lg mb-2">Requirements:</h3>
                            <ul className="list-disc pl-5  mb-6">
                                {position.requirements.map((requirement, i) => (
                                    <li key={i}>{requirement}</li>
                                ))}
                            </ul>

                            <button className="bg-[#123955] text-white py-2 px-4 rounded hover:bg-[#305776] transition-colors duration-300">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpenPosition;

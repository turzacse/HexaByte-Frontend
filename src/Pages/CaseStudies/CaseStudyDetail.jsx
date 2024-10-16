import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { caseStudiesData } from './CaseStudiesData';
import Heading from '../../Components/Heading/Heading';
import { FaEye } from 'react-icons/fa';

const CaseStudyDetail = () => {
    const { id } = useParams();
    const caseStudy = caseStudiesData.find(study => study.id === parseInt(id));
    const navigate = useNavigate();
    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <div>
            <Heading title={`Case Study - ${id}`} description={caseStudy.title} />
            <section className="py-12 bg-gray-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex items-center gap-5 ">
                        <h1 className="md:text-4xl text-xl font-bold text-[#123955] md:mb-4 mb-2">{caseStudy.title}</h1>
                        <FaEye
                            onClick={() => {
                                window.open(caseStudy?.link, '_blank');
                            }}
                            className='md:text-4xl text-xl text-[#305776] cursor-pointer ' />
                    </div>
                    <img src={caseStudy.image} alt={caseStudy.title} className=" w-full md:h-[500px] h-[200px] object-cover rounded-lg mb-6" />
                    {/* <p className="text-lg text-gray-700 text-justify mb-4">{caseStudy.fullDescription}</p> */}
                    {caseStudy?.fullDescription?.split('\\n')?.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-700 text-justify mb-4">{paragraph}</p>
                    ))}


                    <h3 className="md:text-2xl font-bold text-[#123955] mb-2">Features:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {caseStudy.features?.map((fec, index) => (
                            <li key={index} className="text-gray-600">{fec}</li>
                        ))}
                    </ul>
                    <h3 className="md:text-2xl font-bold text-[#123955] mb-2">Tech Stack:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        {caseStudy.techStack?.map((tech, index) => (
                            <li key={index} className="text-gray-600">{tech}</li>
                        ))}
                    </ul>

                    <h3 className="md:text-2xl font-bold text-[#123955] mb-2">Results:</h3>
                    <ul className="list-disc pl-6">
                        {caseStudy.results?.map((result, index) => (
                            <li key={index} className="text-gray-600">{result}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyDetail;

import React, { useEffect } from 'react';
import Heading from '../../Components/Heading/Heading';
import Services from '../Home/Service/Service';
import HowWeWork from '../../Components/HowWeWork/HowWeWork';
import { serviceData } from '../../Data/ServiceData';
import CustomButton from '../../Components/Primary/CustomButton';

const Service = () => {

    useEffect(() => {
        window.scroll(0,0);
    } ,[])
    return (
        <div>
            <Heading title='Our Service' description='Empowering Your Business with Tailored Solutions: Explore Our Range of Services Designed to Elevate Your Digital Presence and Drive Success.' />

            <div className='bg-gray-200 py-12 container mx-auto px-6 md:px-12 lg:px-24'>
                {
                    serviceData?.map((service) => <div key={service.id}>
                        <div className={`flex flex-col justify-between mb-10 ${service.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className={`flex-1 flex flex-col`}>
                                <h2 className={`md:text-2xl font-bold text-gray-700 mb-4 flex items-center text-lg gap-2 ${service.id % 2 === 0 && 'justify-end'}`}> <span className='bg-yellow-400 rounded-full px-3 py-1 shadow-2xl '>{service.id}</span> {service.title}</h2>
                                {/* <img className={` w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] md:w-[250px] md:h-[250px] rounded-lg`} src={service.img} alt="" /> */}
                                <img
                                    className={`w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] md:w-[250px] md:h-[250px] rounded-lg ${service.id % 2 === 0 ? 'ml-auto' : ''}`}
                                    src={service.img}
                                    alt=""
                                />

                            </div>
                            <div className={`flex-1 text-justify mt-10 flex flex-col`}>
                                <p className='text-gray-600' >{service.description}</p>
                                <p className='text-gray-600'>{service.workProcedure}</p>

                                <div>
                                    <h2 className="text-lg font-semibold mb-2 text-gray-800" >Languague Stack: </h2>
                                    <ul className="list-disc list-inside">
                                        {service.language.map((item, index) => (
                                            <li key={index} className="text-gray-600">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold mb-2 text-gray-800" >What we offer: </h2>
                                    <ul className="list-disc list-inside">
                                        {service.offer.map((item, index) => (
                                            <li key={index} className="text-gray-600">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <section className='bg-gradient-to-r from-[#658baf] to-[#123955] py-12 container mx-auto px-6 md:px-12 lg:px-24 text-center'>
                <h2 className='text-white text-2xl font-bold text-center'>Let's Discuss Your Project</h2>
                <CustomButton text={`Let's talk`} />
            </section>
        </div>
    );
};

export default Service;
import React from 'react';
import CaseStudies from '../CaseStudies/CaseStudies';
import Heading from '../../Components/Heading/Heading';
import OpenPosition from './OpenPosition';

const Career = () => {

    const work = [
        {
            title: 'Innovative Environment',
            des: 'Work on cutting-edge technologies and be a part of impactful projects that solve real-world problems.',
        },
        {
            title: 'Growth Opportunities',
            des: 'We invest in your professional development with continuous learning, workshops, and certifications.',
        },
        {
            title: 'Collaborative Culture',
            des: 'Enjoy a workplace where your ideas are heard and collaboration is key.',
        },
        {
            title: 'Flexible Work Environment',
            des: 'Experience a healthy work-life balance with flexible working hours and remote work options.',
        },
        {
            title: 'Competitive Compensation',
            des: 'We offer competitive salaries, bonuses, and perks that reflect your talent and commitment.',
        },

    ]

    const value = [
        {
            title: 'Innovation',
            des: 'We embrace new ideas and technological advancements to provide unique solutions.',
        },
        {
            title: 'Integrity',
            des: 'We conduct business with transparency, honesty, and accountability.',
        },
        {
            title: 'Collaboration',
            des: 'We believe that the best results come from teamwork and open communication.',
        },
        {
            title: 'Customer-Centricity',
            des: 'Everything we do is focused on delivering value to our clients and users.',
        },
    ]

    const hire = [
        "Apply", "MOC Exam", "Interview", "Technical Assesment", "HR Interview",  "Offer" 
    ]
    return (
        <div className=''>
            <Heading title='career at HB-TM' />

            <div className="py-12 bg-white">
                <section className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className='text-3xl font-bold text-[#123955] mb-3' >Join Our Innovative Team</h2>
                    <p className='text-justify text-gray-700'>At HexaByte TM Solution, we believe in pushing the boundaries of technology and innovation. We are a group of passionate developers, designers, and strategists who work together to create world-class digital solutions. Our team thrives on collaboration, creativity, and continuous growth, making HexaByte TM Solution a place where you can grow your career and work on projects that make an impact.</p>


                    <h2 className='text-3xl font-bold text-[#123955] my-3' >Why Work with Us?</h2>
                    <ul className="list-disc pl-6 mb-4">
                        {work?.map((fec, index) => (
                            <li key={index} className="text-gray-600"><span className=' font-bold'>{fec.title}</span>: {fec.des}</li>
                        ))}
                    </ul>

                    <h2 className='text-3xl font-bold text-[#123955] my-3' >Our Core Values</h2>
                    <ul className="list-disc pl-6 mb-4">
                        {value?.map((fec, index) => (
                            <li key={index} className="text-gray-600"><span className=' font-bold'>{fec.title}</span>: {fec.des}</li>
                        ))}
                    </ul>

                </section>
            </div>

            <OpenPosition />

            <div className="py-12 bg-white">
                <section className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className='text-3xl font-bold text-[#123955] mb-3' >Don’t See a Perfect Fit?</h2>
                    <p className='text-justify text-gray-700'>We are always on the lookout for talented individuals. If you believe your skills align with our mission, feel free to send your resume to <span className='text-blue-500'>careers@hexabyte.com</span> and we’ll keep your details on file for future openings.</p>


                    <h2 className='text-3xl font-bold text-[#123955] my-3' >Our Hiring Process</h2>
                    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            hire?.map((item, index) => <div key={index} className='bg-gradient-to-r from-[#658baf] to-[#123955] rounded-lg shadow-xl relative'>
                             <p className='absolute bg-yellow-400 top-2 right-2 px-3 py-1 rounded-full font-bold text-gray-700 shadow-2xl'>{index+1}</p>
                             <p className='text-center text-gray-200 py-20 font-bold text-2xl'>{item}</p>
                            </div>)
                        }
                    </div>


                    <h2 className='text-3xl font-bold text-[#123955] mb-3 mt-10' >Ready to Join Us?</h2>
                    <p className='text-justify text-gray-700'>If you are passionate about technology and ready to make a difference, apply today and become part of the HexaByte TM Solution team. Let’s build the future together!</p>
                </section>
            </div>
        </div>
    );
};

export default Career;
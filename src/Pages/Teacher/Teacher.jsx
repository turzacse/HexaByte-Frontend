import React, { useEffect } from 'react';
import Heading from '../../Components/Heading/Heading';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import img from '../../AdminPages/Users/ava.png'

const Teacher = () => {

    // const instructorData = [
    //     {
    //         _id: '1',
    //         name: 'Dr. John Smith',
    //         subject: 'Mathematics',
    //         joiningDate: '2024-01-12',
    //         experience: '10 years',
    //     },
    //     {
    //         _id: '2',
    //         name: 'Ms. Sarah Connor',
    //         subject: 'Physics',
    //         joiningDate: '2024-02-18',
    //         experience: '7 years',
    //     },
    //     {
    //         _id: '3',
    //         name: 'Mr. Mike Johnson',
    //         subject: 'Chemistry',
    //         joiningDate: '2024-03-20',
    //         experience: '8 years',
    //     },
    // ];

    const instructorData = [
        {
            _id: '1',
            image: 'https://via.placeholder.com/40',
            name: 'A S M Masud Parvez',
            education: 'B.Sc in CSE',
            speciality: ['C++', 'C#', '.net'],
            joiningDate: '2023-05-14',
        },
        {
            _id: '2',
            image: 'https://via.placeholder.com/40',
            name: 'Md. Ismail Hosen',
            education: 'B.Sc in CSE',
            speciality: ['Compititive Programming'],
            joiningDate: '2022-08-22',
        },
        {
            _id: '3',
            image: 'https://via.placeholder.com/40',
            name: 'Fahim Montasir Turza',
            education: 'B.Sc in CSE',
            speciality: ['JavaScript', 'React', 'MERN'],
            joiningDate: '2021-11-03',
        },
        {
            _id: '4',
            image: 'https://via.placeholder.com/40',
            name: 'Md. Fagun Molla',
            education: 'B.Sc in CSE',
            speciality: ['DataStructure', 'Algorithm'],
            joiningDate: '2021-11-03',
        },
        {
            _id: '5',
            image: 'https://via.placeholder.com/40',
            name: 'Anup Ghosh',
            education: 'B.Sc in CSE',
            speciality: ['Python', 'Django', 'ML'],
            joiningDate: '2021-11-03',
        },
        {
            _id: '6',
            image: 'https://via.placeholder.com/40',
            name: 'Israt Jahan Reshma',
            education: 'B.Sc in CSE',
            speciality: ['SWE', 'Database', 'OS'],
            joiningDate: '2021-11-03',
        },
    ];

    useEffect(()=> {
        window.scroll(0,0);
    } ,[])
    return (
        <div>
            <Heading title={`Our Instructor`} />

            <section>
                <div className='bg-gray-200 py-12 container mx-auto px-6 md:px-12 lg:px-24'>

                {/* <h2 className="text-2xl font-bold uppercase text-[#123955] mb-4">Instructors</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructorData.map((instructor) => (
                    <div key={instructor._id} className="bg-gradient-to-r from-[#658baf] to-[#123955] shadow-md rounded-lg p-4 border border-gray-200 text-center text-white">
                        <img className='w-[80px] h-[80px] rounded-full mx-auto' src={img} alt="" />
                        <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                        <p className="text-yellow-200 mb-2"><strong>Expertise:</strong> {instructor?.speciality.map((item)=> <span>{item},</span>)}</p>
                        <p className="text-yellow-200 mb-2"><strong>Joining Date:</strong> {instructor.joiningDate}</p>
                        <p className="text-yellow-200 mb-4"><strong>Education:</strong> {instructor.education}</p>
                        {/* <div className="flex space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                <FaEye />
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                <MdDelete />
                            </button>
                        </div> */}
                    </div>
                ))}
            </div>

                </div>
            </section>
        </div>
    );
};

export default Teacher;
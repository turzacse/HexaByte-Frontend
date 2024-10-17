import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import img from '../Users/ava.png';

const Instructor = () => {
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

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold uppercase text-[#123955] mb-4">Instructors</h2>
            <div className='mb-4 flex justify-between items-center'>
                <input type="text" className='px-2 py-2 rounded-md bg-gray-50 text-[#123955] md:w-[300px] w-full' name="search" placeholder='search' />
                <button className='btn uppercase bg-[#3a5dc0] text-white px-4 py-2 rounded-lg'>ADD Instructor</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 border border-gray-300">
                    <thead className="bg-[#658baf] text-white">
                        <tr className='text-left'>
                            <th className="px-4 py-2 border-b">S/no</th>
                            <th className="px-4 py-2 border-b">Image</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Education</th>
                            <th className="px-4 py-2 border-b">Speciality</th>
                            <th className="px-4 py-2 border-b">Joining Date</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructorData.map((instructor, index) => (
                            <tr key={instructor._id}>
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">
                                    <img
                                        src={img}
                                        alt={instructor.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </td>
                                <td className="px-4 py-2 border-b">{instructor.name}</td>
                                <td className="px-4 py-2 border-b">{instructor.education}</td>
                                <td className="px-4 py-2 border-b">{instructor.speciality.join(', ')}</td>
                                <td className="px-4 py-2 border-b">{instructor.joiningDate}</td>
                                <td className="px-4 py-2 border-b space-x-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                                        <FaEye />
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-[#658baf]">
                        <tr>
                            <td colSpan="7" className="px-4 py-4"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Instructor;

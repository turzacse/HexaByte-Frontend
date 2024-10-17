import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import img from '../Users/ava.png';

const Emploee = () => {
    const employeeData = [
        {
            _id: '4',
            image: 'https://via.placeholder.com/40', // Placeholder image URL
            name: 'Maria Binte Hafiz',
            designation: 'Co-Founder',
            joiningDate: '2024-10-01',
            address: 'Jamalpur',
            education: 'B.Sc, M.Sc',
        },
        {
            _id: '1',
            image: 'https://via.placeholder.com/40', // Placeholder image URL
            name: 'John Smith',
            designation: 'Software Engineer',
            joiningDate: '2023-01-15',
            address: 'Dhaka',
            education: 'B.Sc in CSE',
        },
        {
            _id: '2',
            image: 'https://via.placeholder.com/40',
            name: 'Jane Doe',
            designation: 'Data Scientist',
            joiningDate: '2022-07-23',
            address: 'Chittagong',
            education: 'M.Sc in CSE',
        },
        {
            _id: '3',
            image: 'https://via.placeholder.com/40',
            name: 'Mark Spencer',
            designation: 'Frontend Developer',
            joiningDate: '2024-02-11',
            address: 'Sylhet',
            education: 'B.Sc in SWE',
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold uppercase text-[#123955] mb-4">Employees</h2>
            <div className='mb-4 flex justify-between items-center'>
                <input type="text" className='px-2 py-2 rounded-md bg-gray-50 text-[#123955] md:w-[300px] w-full' name="search" placeholder='search' />
                <button className='btn bg-[#3a5dc0] text-white px-4 py-2 rounded-lg'>ADD EMPLOYEE</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 border border-gray-300">
                    <thead className="bg-[#658baf] text-white">
                        <tr className='text-left'>
                            <th className="px-4 py-2 border-b">S/no</th>
                            <th className="px-4 py-2 border-b">Image</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Designation</th>
                            <th className="px-4 py-2 border-b">Joining Date</th>
                            <th className="px-4 py-2 border-b">Address</th>
                            <th className="px-4 py-2 border-b">Education</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.map((employee, index) => (
                            <tr key={employee._id}>
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">
                                    <img
                                        src={img}
                                        alt={employee.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </td>
                                <td className="px-4 py-2 border-b">{employee.name}</td>
                                <td className="px-4 py-2 border-b">{employee.designation}</td>
                                <td className="px-4 py-2 border-b">{employee.joiningDate}</td>
                                <td className="px-4 py-2 border-b">{employee.address}</td>
                                <td className="px-4 py-2 border-b">{employee.education}</td>
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
                            <td colSpan="8" className="px-4 py-4"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Emploee;

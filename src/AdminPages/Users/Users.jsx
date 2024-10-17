import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import img from './ava.png'

const Users = () => {
    const userData = [
        {
            _id: '1',
            image: 'https://via.placeholder.com/40', // Placeholder image URL
            name: 'John Doe',
            email: 'john@example.com',
            registeredAt: '2024-01-12 10:30 AM',
        },
        {
            _id: '2',
            image: 'https://via.placeholder.com/40',
            name: 'Jane Smith',
            email: 'jane@example.com',
            registeredAt: '2024-02-15 02:45 PM',
        },
        {
            _id: '3',
            image: 'https://via.placeholder.com/40',
            name: 'Mark Johnson',
            email: 'mark@example.com',
            registeredAt: '2024-03-20 08:00 AM',
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold uppercase text-[#123955] mb-4">Users</h2>
            <div className='mb-4'>
                <input type="text" className='px-2 py-2 rounded-md bg-gray-50 text-[#123955] md:w-[300px] w-full' name="search" id="" placeholder='search' />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 border border-gray-300">
                    <thead className="bg-[#658baf] pt-10 text-white">
                        
                        <tr className='text-left'>
                            <th className="px-4 py-2 border-b">S/no</th>
                            <th className="px-4 py-2 border-b">Image</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Date & Time</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={user._id} className="">
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">
                                    <img
                                        src={img}
                                        alt={user.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </td>
                                <td className="px-4 py-2 border-b">{user.name}</td>
                                <td className="px-4 py-2 border-b">{user.email}</td>
                                <td className="px-4 py-2 border-b">{user.registeredAt}</td>
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
                            <td colSpan="6" className="px-4 py-4"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default Users;
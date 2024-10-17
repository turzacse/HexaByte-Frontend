import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const JobCircular = () => {
    const jobData = [
        {
            _id: '1',
            position: 'Frontend Developer',
            vacancy: 3,
            deadline: '2024-11-30',
        },
        {
            _id: '2',
            position: 'Backend Developer',
            vacancy: 2,
            deadline: '2024-12-15',
        },
        {
            _id: '3',
            position: 'UI/UX Designer',
            vacancy: 1,
            deadline: '2024-11-25',
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold uppercase text-[#123955] mb-4">Circulars</h2>
            <div className='mb-4'>
                <input type="text" className='px-2 py-2 rounded-md bg-gray-50 text-[#123955] md:w-[300px] w-full' name="search" placeholder='search' />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 border border-gray-300">
                    <thead className="bg-[#658baf] pt-10 text-white">
                        <tr className='text-left'>
                            <th className="px-4 py-2 border-b">S/no</th>
                            <th className="px-4 py-2 border-b">Position</th>
                            <th className="px-4 py-2 border-b">Vacancy</th>
                            <th className="px-4 py-2 border-b">Dateline</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobData.map((job, index) => (
                            <tr key={job._id} className="">
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">{job.position}</td>
                                <td className="px-4 py-2 border-b">{job.vacancy}</td>
                                <td className="px-4 py-2 border-b">{job.deadline}</td>
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
                            <td colSpan="5" className="px-4 py-4"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default JobCircular;

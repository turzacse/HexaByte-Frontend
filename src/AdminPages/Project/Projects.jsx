import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Projects = () => {
    const projectData = [
        {
            _id: '1',
            title: 'Project Alpha',
            startingDate: '2024-01-01',
            endingDate: '2024-06-30',
            cost: 'TK 5000',
        },
        {
            _id: '2',
            title: 'Project Beta',
            startingDate: '2024-02-15',
            endingDate: '2024-07-15',
            cost: 'TK 7500',
        },
        {
            _id: '3',
            title: 'Project Gamma',
            startingDate: '2024-03-20',
            endingDate: '2024-08-20',
            cost: 'TK 3000',
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold uppercase text-[#123955] mb-4">Projects</h2>
            <div className='mb-4 flex justify-between items-center'>
                <input type="text" className='px-2 py-2 rounded-md bg-gray-50 text-[#123955] md:w-[300px] w-full' name="search" placeholder='search' />
                <button className='btn uppercase bg-[#3a5dc0] text-white px-4 py-2 rounded-lg'>add project</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 border border-gray-300">
                    <thead className="bg-[#658baf] text-white">
                        <tr className='text-left'>
                            <th className="px-4 py-2 border-b">S/no</th>
                            <th className="px-4 py-2 border-b">Title</th>
                            <th className="px-4 py-2 border-b">Starting Date</th>
                            <th className="px-4 py-2 border-b">Ending Date</th>
                            <th className="px-4 py-2 border-b">Cost</th>
                            <th className="px-4 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectData.map((project, index) => (
                            <tr key={project._id}>
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">{project.title}</td>
                                <td className="px-4 py-2 border-b">{project.startingDate}</td>
                                <td className="px-4 py-2 border-b">{project.endingDate}</td>
                                <td className="px-4 py-2 border-b">{project.cost}</td>
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

export default Projects;

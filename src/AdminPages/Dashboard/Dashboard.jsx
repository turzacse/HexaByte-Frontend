import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const data = [
        { title: 'users', number: 143, link: '/admin/users' },
        { title: 'employes', number: 9, link: '/admin/employees'  },
        { title: 'instructors', number: 5, link: '/admin/instructors'  },
        { title: 'Contacts', number: 99, link: '/admin/contacts'  },
        { title: 'Circulars', number: 2, link: '/admin/circular'  },
        { title: 'projects', number: 5, link: '/admin/projects'  },
        
    ]

    const colors = [
        '#658baf', '#123955', '#658BAF', '#f28d35', '#f78e69', '#4d7c94',  '#FBC02D'
    ];
    // '#2196F3',
    return (
        <div className='p-4'>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                {
                    data.map((item, i) =>
                        <NavLink 
                            key={i}
                            to={item?.link}
                            className={` rounded-lg h-[180px] p-4 text-white`}
                            // bg-gradient-to-r from-[${colors[i+1]}] to-[#123955]
                            style={{
                                background: `linear-gradient(to right, ${colors[i]}, ${colors[i + 1]})`
                            }}
                        >
                            <div className=''>
                                <h3 className='text-2xl uppercase font-semibold '>{item.title}</h3>
                                <p className='text-xl font-medium mt-2'>{item.number}</p>
                            </div>

                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Dashboard;
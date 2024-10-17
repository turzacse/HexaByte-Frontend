
import React from 'react';// Import the sidebar component
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../AdminComponent/LeftSideBar';

const HexaByteAdmin = () => {
    return (
        <div className="flex h-screen">
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Main content area */}
            <div className="flex-grow p-6 bg-gray-300 overflow-y-auto min-h-screen">
                {/* The content of the current route */}
                <Outlet />
            </div>
        </div>
    );
};

export default HexaByteAdmin;




// import React, { useState } from 'react';
// // import LeftSidebar from './LeftSidebar'; // Import the sidebar component
// import { Outlet } from 'react-router-dom';
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import LeftSidebar from '../AdminComponent/LeftSideBar';

// const HexaByteAdmin = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     return (
//         <div className="flex">
//             {/* Sidebar for larger screens */}
//             <LeftSidebar toggleDrawer={toggleDrawer} />

//             {/* Main Content */}
//             <div className="flex-grow p-6 bg-gray-100 min-h-screen">
//                 {/* Menu Icon for Small Devices */}
//                 <div className="md:hidden flex justify-between items-center p-4 bg-[#658BAF] text-white">
//                     <IoMdMenu
//                         className="text-3xl cursor-pointer"
//                         onClick={toggleDrawer}
//                     />
//                     <div className="text-lg font-bold">
//                         <span className="text-yellow-400">HexaByte</span> Admin
//                     </div>
//                 </div>

//                 <Outlet /> {/* This will render the content of the selected route */}
//             </div>

//             {/* Drawer for small screens */}
//             {isDrawerOpen && (
//                 <div className="fixed inset-0 bg-[#658BAF] bg-opacity-50 z-50">
//                     <div className="fixed top-0 left-0 w-64 h-full bg-[#658BAF] text-white z-50 shadow-lg">
//                         <div className="flex justify-between items-center p-4">
//                             <div className="text-xl font-bold">
//                                 <span className="text-yellow-400">HexaByte</span> Admin
//                             </div>
//                             <IoMdClose
//                                 className="text-2xl cursor-pointer text-red-600"
//                                 onClick={toggleDrawer}
//                             />
//                         </div>
//                         {/* <nav className="p-4">
//                             <LeftSidebar toggleDrawer={toggleDrawer} />
//                         </nav> */}
//                          <LeftSidebar toggleDrawer={toggleDrawer} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default HexaByteAdmin;

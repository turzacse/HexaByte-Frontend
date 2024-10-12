import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const HexaBytes = () => {
    return (
        <div className='primary-background'>
            <Navbar />
            <div className='conatiner mx-auto px-10 py-4'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default HexaBytes;
import React from 'react';
import { Outlet } from 'react-router-dom';

const HexaBytes = () => {
    return (
        <div className='primary-background h-screen'>
            <Outlet/>
        </div>
    );
};

export default HexaBytes;
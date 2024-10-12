import React from 'react';
import logo from "../../assets/Image/logo.png"

const Home = () => {
    return (
        <div className='h-[500px]'>
            {/* This is Home page */}
            <img className='rounded-md' src={logo} alt="" />
        </div>
    );
};

export default Home;
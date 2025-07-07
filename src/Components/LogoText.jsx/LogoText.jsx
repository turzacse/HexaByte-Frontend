import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoText = () => {
    return (
        <NavLink to='/' className="md:text-2xl font-bold">
            {/* HexaByte™ */}
           <span className='text-yellow-500'>H</span>exa<span className='text-yellow-500'>B</span>yte <span className='text-yellow-500'>™</span>
        </NavLink>
    );
};

export default LogoText;
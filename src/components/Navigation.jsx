import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='hidden bg-white lg:block'>
            <nav className='relative flex flex-col lg:flex-row gap-10 font-black text-[#aaaaaa] transition duration-700'>
                <NavLink className=" nav" to="/cuisine/italian">Italian</NavLink>
                <NavLink className=" nav " to="/cuisine/american">American</NavLink>
                <NavLink className=" nav " to="/cuisine/thai">Thai</NavLink>
                <NavLink className=" nav" to="/cuisine/japanese">Japanese</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;
import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className='bg-[white] absolute z-50 left-0 top-36 w-full h-[100vh]'>
            <nav className=' flex flex-col text-center'>
                <NavLink className=" nav" to="/cuisine/italian">Italian</NavLink>
                <NavLink className=" nav" to="/cuisine/american">American</NavLink>
                <NavLink className=" nav" to="/cuisine/thai">Thai</NavLink>
                <NavLink className=" nav" to="/cuisine/japanese">Japanese</NavLink>
            </nav>
        </div>
    )
}

export default Nav
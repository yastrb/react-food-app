import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className='bg-white fixed top-36 w-full '>
            <nav className=' flex flex-col'>
                <NavLink to="/">Italian</NavLink>
                <NavLink to="/">American</NavLink>
                <NavLink to="/">Thai</NavLink>
                <NavLink to="/">Japanese</NavLink>
            </nav>
        </div>
    )
}

export default Nav
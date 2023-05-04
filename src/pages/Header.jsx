import React, { useState } from 'react'
import Nav from './../components/Nav';
import SearchLineIcon from 'remixicon-react/SearchLineIcon';
import Menu5LineIcon from 'remixicon-react/Menu5LineIcon'
import logo from "../img/logo.png"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <header className=' py-4 bg-white'>
                <div className=' flex justify-between'>
                    <div>
                        <img src={logo} className=" w-28" alt="logo" />
                    </div>
                    { showMenu && ( 
                        <Nav />
                    )}
                    <div >
                        <SearchLineIcon className=" cursor-pointer" size={26} />
                    </div>
                    <div onClick={toggleMenu}>
                        <Menu5LineIcon className=" cursor-pointer" size={26} />
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header

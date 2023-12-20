import React, { useState } from 'react'
import Nav from './../components/Nav';
import Menu5LineIcon from 'remixicon-react/Menu5LineIcon';
import CloslineIcon from "remixicon-react/CloseLineIcon";
import logo from "../img/logo_1.png"
import Navigation from '../components/Navigation';
import Search from './../components/Search';


const Header = () => {
    const [showMenu, setShowMenu] = useState();
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <header className=' container mx-auto py-4 bg-white relative'>
                <div className=' flex justify-between items-center'>
                    <div className='lg:hidden' onClick={toggleMenu}>
                        {showMenu ? <CloslineIcon className=" cursor-pointer" size={26} /> : <Menu5LineIcon className=" cursor-pointer" size={26} />}
                    </div>

                    <div>
                        <img src={logo} className=" w-28" alt="logo" />
                    </div>

                    <Navigation/>

                    <div>
                        {showMenu && (<Nav />)}
                    </div>

                    <div >
                        {/* <SearchLineIcon className=" cursor-pointer" size={26} /> */}
                        <Search className=''/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

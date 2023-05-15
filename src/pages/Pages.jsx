import React from 'react'
import Home from './Home'
import Header from './Header'
import Subscribe from '../components/Subscribe'
import Collections from './Collections'

const Pages = () => {
    return (
        <div className=''>
            <Header/>
            <Home/>
            <Subscribe/>
            <Collections/>
        </div>

    )
}

export default Pages
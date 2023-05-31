import React from 'react'
import Home from './Home'
import Header from './Header'
import Subscribe from '../components/Subscribe'
import Collections from './Collections'
import Сuisine from './Cuisine'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'


const Pages = () => {
    return (
        <div className=''>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/searched/:search' element={<Searched />} />
            </Routes>
            <Subscribe />
            <Collections />

        </div>

    )
}

export default Pages
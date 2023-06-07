import React from 'react'
import Home from './Home'
import Header from './Header'
import Subscribe from '../components/Subscribe'
import Collections from './Collections'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe';
import Test from './test'


const Pages = () => {
    return (
        <div className=''>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/searched/:search' element={<Searched />} />
                <Route path='/recipe/:name' element={<Recipe />} />
                {/* <Route path='/recipe/:name' element={<Test />} /> */}
            </Routes>
            <Subscribe />
            <Collections />

        </div>

    )
}

export default Pages
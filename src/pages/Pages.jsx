import React from 'react'
import Home from './Home'
import Header from './Header'
import Subscribe from '../components/Subscribe'
import Collections from './Collections'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe';
import Footer from '../components/Footer';



const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/searched/:search' element={<Searched />} />
                <Route path='/recipe/:name' element={<Recipe />} />

            </Routes>
            <Subscribe />
            <Collections />
            <Footer/>
        </>

    )
}

export default Pages
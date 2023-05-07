import React from 'react'
import Delicious from '../components/Delicious'
import Sweet from '../components/Sweet'
import Categories from './Categories'


const Home = () => {
    return (
        <div className='container mx-auto px-4'>
            <Delicious />
            <Sweet />
            <Categories/>
        </div>
    )
}

export default Home
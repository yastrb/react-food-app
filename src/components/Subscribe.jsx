import React from 'react'
import Email from './Input'

const Subscribe = () => {
  return (
    <section className='my-20 py-20 w-full  bg-[#80c8d5]'>
        <div className=' container px-6 lg:w-[66%] lg:mx-auto'>
            <div className=' text-center '>
                <h2 className='px-9 mb-4 font-bold text-4xl md:text-7xl'>Deliciousness to your inbox</h2>
                <p className='font-inter mb-4'>Enjoy weekly hand picked recipes and recommendations</p>
                <Email/>
            </div>
        </div>
    </section>
  )
}

export default Subscribe
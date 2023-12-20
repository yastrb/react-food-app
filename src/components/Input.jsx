import React from 'react';



const Input = () => {
    return (
        <div className='mt-10 flex flex-col md:flex-row'>
            <input className='w-full h-12 mb-2 pl-4 rounded md:rounded-l-lg md:w-[75%]' type='text' placeholder='Email Address'>
            </input>
            <div className='md:w-[24%]'>
                <button className=' w-full bg-fuchsia-300 uppercase text-slate-600 font-inter font-bold h-12 rounded hover:bg-fuchsia-600 hover:text-slate-100 transform hover:duration-700 '>Join</button>
            </div>

        </div>
    )
}

export default Input
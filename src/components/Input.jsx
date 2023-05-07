import React from 'react';



const Input= () => {
    return (
        <div className='mt-10 flex flex-col'>
            <input className='w-full h-12 mb-2 pl-4 rounded' type='text' placeholder='Email Address'>
            </input>
            <button>Join</button>
        </div>
    )
}

export default Input
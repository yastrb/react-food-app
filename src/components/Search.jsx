import React, { useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  

  const submitHandler = (e) => {
    navigate("/searched/" + input)
    e.preventDefault();
  }
  return (
    <form onSubmit={submitHandler} className=' mx-20 relative w-full'>
      <FaSearch className=' absolute top-[50%] left-0 text-white translate-x-[100%] -translate-y-[50%]'></FaSearch>
        <input onChange={(e)=> setInput(e.target.value)} className=' bg-[#80C8D5] text-lg text-white py-4 px-12 rounded-2xl outline-none' type="text" value={input}/>
    </form>
  )
}

export default Search
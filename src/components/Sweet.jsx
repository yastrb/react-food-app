﻿

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import image1 from '../img/sweet1.jpg';
import image2 from '../img/sweet2.jpg';
import image3 from '../img/sweet3.jpg';
import '@splidejs/react-splide/css';
import Rating from '@mui/material/Rating';


const sweet = [
  {
    image: image1,
    title: "Cupcake Delicious",
  },
  {
    image: image2,
    title: "Tasty Tasty",
  },
  {
    image: image3,
    title: "Sweet Cake",
  },

]

const Sweet = () => {
  const [value, setValue] = React.useState(5);
  // const [sweet, setSweet] = useState([]);

  // useEffect(() => { getSweet(); }, []);
  // const getSweet = async () => {
  //     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3&tags=dessert
  //     `);
  //     const data = await api.json();
  //     setSweet(data.recipes)
  //     console.log(data);
  // }

  return (
    <>
      <h3>Sweet Tooth</h3>
      <div className='wrapper'>
        {sweet.map((reciepe) => {
          return (
            <div className='card ' key={reciepe.id}>
              <div className="my-3">
                <div className='relative rounded-lg overflow-hidden lg:max-h-52 max-h-64 min-h-[20rem]'>
                  <img className=' absolute left-0 rounded-lg w-full h-full object-cover transition duration-700 hover:scale-110' src={reciepe.image} alt={reciepe.title} />
                </div>
                <Rating
                  className='mt-2'
                  name="read-only"
                  value={value}
                  readOnly />
                <p className='text-sm md:text-lg font-inter pt-4 transition duration-300 hover:text-[#80c8d5]' >{reciepe.title}</p>
              </div>
            </div>
          )
        })}
      </div></>

  )
}
export default Sweet
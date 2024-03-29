import React, { useEffect, useState } from 'react';
// import image1 from '../img/food1.jpg';
// import image2 from '../img/food2.jpg';
// import image3 from '../img/food3.jpg';
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


// const delicious = [
//     {
//         image: image3,
//         title: "Healthy Food",
//     },
//     {
//         image: image2,
//         title: "Yummy Yummy",
//     },
//     {
//         image: image3,
//         title: "Give Me Two",
//     },

// ]

const Delicious = () => {
    const [value,] = React.useState(5);
    const [delicious, setDelicious] = useState([]);
    useEffect(() => { getPopular(); }, []);
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`);
        const data = await api.json();
        setDelicious(data.recipes)
        console.log(data);
    }

    return (
        <>
            <h3>Super Delicious</h3>
            <div className='wrapper'>
                {delicious.map((recipe) => {
                    return (
                        <Link to ={'/recipe/' + recipe.id}>
                        <div className='card ' key={recipe.id}>
                            <div className="my-3">
                                <div className='relative rounded-lg overflow-hidden lg:max-h-52 max-h-64 min-h-[20rem]'>
                                    <img className=' absolute left-0 rounded-lg w-full h-full object-cover transition duration-700 hover:scale-110' src={recipe.image} alt={recipe.title} />
                                </div>
                                <Rating
                                    className='mt-2'
                                    name="read-only"
                                    value={value}
                                    readOnly />
                                <p className='text-sm md:text-lg font-inter pt-1 pb-2 transition duration-300 hover:text-[#80c8d5]' >{recipe.title}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </>

    )
}

export default Delicious
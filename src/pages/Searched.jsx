import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Searched() {
  const [searchRecipes, setSearchRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchRecipes(recipes.results);
    setSearchQuery(name);
  };

  useEffect(()=>{
    getSearched(params.search);
  },[params.search] );
  return ( 
    <>
            <h3>{`Search results for: ${searchQuery}`}</h3>
            <div className='wrapper'>
                {searchRecipes.map((reciepe) => {
                    return ( 
                        <Link to={'/recipe/' + reciepe.id}>
                        <div className='card ' key={reciepe.id}>
                            <div className="my-3">
                                <div className='relative rounded-lg overflow-hidden lg:max-h-52 max-h-64 min-h-[20rem]'>
                                    <img className=' absolute left-0 rounded-lg w-full h-full object-cover transition duration-700 hover:scale-110' src={reciepe.image} alt={reciepe.title} />
                                </div>
                                {/* <Rating
                                    className='mt-2'
                                    name="read-only"
                                    value={value}
                                    readOnly /> */}
                                <p className='text-sm md:text-lg font-inter pt-1 pb-2 transition duration-300 hover:text-[#80c8d5]' >{reciepe.title}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </>
  )
}

export default Searched
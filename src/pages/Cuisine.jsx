import React, {useEffect, useState} from 'react'
import {Links, useParams} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams();

    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
    };
    useEffect(()=> {
        getCuisine(params.type)
        console.log(params.type)
    },[params.type]);


  return (
    <div className=' container px-4'>
         <div className=" grid md:grid-cols-4 gap-10">
          {cuisine.map((item) => {
            return (
              <div className='' key={item.id}>
                <Card key={item.id}>
                  <Link to={'/recipe/' + item.id}>
                  {/* <CardMedia
                    component="img"
                    image={item.image}
                  /> */}
                  <div className='relative  overflow-hidden lg:max-h-52 max-h-64 min-h-[20rem]'>
                    <img className=' absolute left-0 w-full h-full object-cover transition duration-700 hover:scale-110' src={item.image} alt={item.title} />
                  </div>
                  <CardContent>
                    <h5 className=' text-center p-4 font-inter font-medium'>{item.title}</h5>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">See</Button>
                  </CardActions> */}
                  </Link>
                </Card>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Cuisine
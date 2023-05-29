import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import image1 from "../img/sweet1.jpg"
import image2 from "../img/sweet2.jpg"
import image3 from "../img/sweet3.jpg"
import { NavLink } from 'react-router-dom';

const delicious = [
    {
        image: image1,
        title: "Pasta",
    },
    {
        image: image2,
        title: "Pizza",
    },
    {
        image: image3,
        title: "Vegan",
    },
    {
        image: image1,
        title: "Desserts",
    },
    {
        image: image2,
        title: "Smoothies",
    },
    {
        image: image3,
        title: "Breakfast",
    },

]


const Categories = () => {
    return (
        <div className='pt-8 overflow-hidden'> 
            <h3>Popular Categories</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {delicious.map((reciepe) => {
                        return (
                            
                            <Grid xs={4} md={2}>
                                <NavLink>
                                <div className='relative mx-auto overflow-hidden rounded-full md:w-40 md:h-40 w-32 h-32'>
                                    <img className=' rounded-full absolute left-0  w-full h-full object-cover transition duration-700 hover:scale-110' src={reciepe.image} />
                                </div>
                                <p className=' text-sm md:text-lg font-inter text-center mt-3 transition duration-300 hover:text-[#80c8d5]' >{reciepe.title}</p>
                                </NavLink>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default Categories
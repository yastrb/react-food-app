import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Delicious = () => {
    const [delicious, setDelicious] =  useState([]);
    useEffect(()=> {getPopular();},[]);
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`);
        const data = await api.json();
        setDelicious(data.recipes)
        console.log(data);

    }
    return (
        <div>
            {delicious.map((reciepe)=> {
                return (
                    <div key={reciepe.id}>
                        <p>{reciepe.title}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Delicious
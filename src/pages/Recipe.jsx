import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`)
    }
  return (
    <div>
        <h3>hello</h3>
    </div>
  )
}

export default Recipe
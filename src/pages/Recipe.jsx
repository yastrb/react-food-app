import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
        fetchCalories();
    }, [params.name]);

    const fetchCalories = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`);

            if (!response.ok) {
                throw new Error('Помилка отримання даних');
            }

            const data = await response.json();
            const calories = data.calories;
            console.log('Калорії:', calories);
        } catch (error) {
            console.error('Помилка під час отримання калорійності рецепту:', error);
        }
    };

    return (
        <div>
            <section className=' container mx-auto px-4 mt-10 mb-5'>
                <div className=' flex'>
                    <div>
                        <h2>{details.title}</h2>
                        <img src={details.image} alt={details.title} />
                    </div>
                    <div>
                        <button className=' py-1 px-2 text-[#313131] bg-white border border-black border-2'>Instructions</button>
                        <button>Ingredients</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Recipe
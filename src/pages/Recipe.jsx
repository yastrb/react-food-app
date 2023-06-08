import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [isActiveInstructions, setIsActiveInstructions] = useState(false);
    const [isActiveIngredients, setIsActiveIngredients] = useState(false);

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(params);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
        fetchCalories();
    }, [params.name]);

    const fetchCalories = async () => {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${params.name}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`
            );

            if (!response.ok) {
                throw new Error('Помилка отримання даних');
            }

            const data = await response.json();
            const calories = data.calories;
            console.log('Калорії:', calories);
        } catch (error) {
            console.error(
                'Помилка під час отримання калорійності рецепту:',
                error
            );
        }
    };

    const handleInstructionsClick = () => {
        setIsActiveInstructions(true);
        setIsActiveIngredients(false); // Зміна стану другої кнопки на неактивний
    };

    const handleIngredientsClick = () => {
        setIsActiveIngredients(true);
        setIsActiveInstructions(false); // Зміна стану першої кнопки на неактивний
    };

    return (
        <div>
            <section className='container mx-auto px-4 mt-10 mb-5'>
                <div className='flex flex-col gap-8 text-center '>
                    <div className=' w-full'>
                        <h2 className='mb-4 font-black text-2xl'>{details.title}</h2>
                        <img className=' w-full ' src={details.image} alt={details.title} />
                    </div>
                    <div className=''>
                        <button
                            className={`py-1 px-2 text-[#313131] border border-black border-2 mr-2 font-black ${isActiveInstructions ? 'bg-[#80c8d5]' : 'bg-white'
                                }`}
                            onClick={handleInstructionsClick}
                            disabled={isActiveInstructions}
                        >
                            Instructions
                        </button>
                        <button
                            className={`py-1 px-2 text-[#313131] border border-black border-2 mr-2 font-black ${isActiveIngredients ? 'bg-[#80c8d5]' : 'bg-white'
                                }`}
                            onClick={handleIngredientsClick}
                            disabled={isActiveIngredients}
                        >
                            Ingredients
                        </button>
                        <div>
                            {/* <h3 >{details.summary}</h3> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recipe;

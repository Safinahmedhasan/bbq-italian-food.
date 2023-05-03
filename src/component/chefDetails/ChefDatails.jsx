import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../recipeDetails/RecipeDetails';

const ChefDatails = () => {

    const chefDetails = useLoaderData();
    console.log(chefDetails);

    const { name, picture, years_of_experience, number_of_recipes, like, id, recipes, description } = chefDetails;
    console.log(like);


    return (
        <div className='container'>
            <div className='mx-auto p-20 '>
                <div className="card card-compact bg-base-100 shadow-xl pb-20">
                    <figure><img className='rounded-full border-4  border-orange-500' src={picture} /></figure>
                    <div className="card-body">
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold text-orange-500'>{name}</h1>
                            <p className='px-20 py-5 text-xl'>{description} </p>
                            <p className='text-2xl mb-2'>Years of Experience: <span className='text-orange-500 font-extrabold'> {years_of_experience}</span></p>
                            <p className='text-2xl'>Like: <span className='text-blue-500'>{like} 👍</span></p>
                            <p className='text-2xl mt-2'>Recipe: <span className='text-blue-500'>{number_of_recipes}</span></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-3 gap-10 container p-10'>
                {
                    recipes.map(recipe => <RecipeDetails recipe={recipe}></RecipeDetails>)
                }
            </div>


        </div>
        // chefs.map(chef => <Chef chef={chef}></Chef>)

    );
};

export default ChefDatails;
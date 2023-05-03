import React from 'react';
import Favorite from '../Favorite';

const RecipeDetails = (props) => {


    const { title, description, ingredients, rating, image, cooking_method } = props.recipe;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-26 w-26 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-orange-500">{title}</h2>
                    <div className='py-5'>
                        <h2 className='text-xl font-semibold'>Ingredients List:</h2>
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                        <li>{ingredients[4]}</li>
                    </div>

                    <div className='py-3'>
                        <p className='font-semibold text-xl'>Cooking Method:</p>
                        <ol className='mt-1'>{cooking_method[0]}</ol>
                        <ol className='mt-1'>{cooking_method[2]}</ol>
                        <ol className='mt-1'>{cooking_method[3]}</ol>
                        <ol className='mt-1'>{cooking_method[4]}</ol>
                        <ol className='mt-1'>{cooking_method[5]}</ol>
                        <ol className='mt-1'>{cooking_method[6]}</ol>
                        <ol className='mt-1'>{cooking_method[7]}</ol>
                    </div>

                    <p className='font-semibold text-xl'>Rating: <span className='text-blue-500'>{rating}</span></p>

                    <div>
                        <Favorite></Favorite>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
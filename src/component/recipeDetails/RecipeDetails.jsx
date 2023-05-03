import React from 'react';

const RecipeDetails = (props) => {
    console.log(props);

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

                    <div className="card-actions">

                            <div class="cursor-pointer">
                                <span class="flex h-min w-min space-x-1 items-center rounded-full text-gray-400 hover:text-rose-600 bg-gray-700 hover:bg-orange-200 py-1 px-2 text-xs font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <p class="font-semibold text-xs">10</p>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
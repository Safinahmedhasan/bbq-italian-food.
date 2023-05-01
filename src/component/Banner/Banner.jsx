import React from 'react';
import FoodItem from '../FoodItem/FoodItem';

const Banner = () => {
    return (
        <div className='container'>
            <div>
                <div>
                    <img className='rounded' src="https://i.ibb.co/yRNQhFn/hero-bg-jpg.webp" alt="" />
                </div>
                {/* <div className='mt-[-400px] ml-20  md-w-6/12 w-6/12 text-white'>
                    <h1 className='text-7xl font-bold text-amber-500	'>Welcome To</h1>
                    <h2 className='md-text-4xl font-bold md-mt-5 md-mb-5 text-lime-500	'>BBG Italian Food</h2>
                    <p className='text-xl'>Italian food is renowned worldwide for its rich flavors, fresh ingredients, and traditional cooking techniques. It encompasses a diverse range of dishes, each with its own regional variations and culinary specialties. </p>
                    <button className="btn btn-warning mt-3">Click ME</button>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;
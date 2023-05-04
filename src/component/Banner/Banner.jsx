import React from 'react';

const Banner = () => {
    return (
        <div className='container mt-5'>
            <div className=''>
                <div className='relative'>
                    <div className='bg-black rounded'>
                    <img className='rounded w-full h-full opacity-40' src="https://i.ibb.co/cc05133/pexels-ella-olsson-1640773.jpg" alt="" />
                        
                    </div>
                    <div className='absolute md:top-32 top-1 ml-32'>
                        <h1 className='md:text-7xl text-2xl font-bold text-amber-500'>Welcome To</h1>
                        <h2 className='md:text-3xl text-1xl font-bold md:mt-2 mt-0 md:mb-2 mb-0 text-lime-500'>BBQ Italian Food</h2>
                        <p className='md:text-sm text-[8px] text-white w-6/12'>Italian food is renowned worldwide for its rich flavors, fresh ingredients, and traditional cooking techniques. It encompasses a diverse range of dishes, each with its own regional variations and culinary specialties. </p>
                        <button className="btn btn-warning mt-3 w-30 text-[10px]">Click ME</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
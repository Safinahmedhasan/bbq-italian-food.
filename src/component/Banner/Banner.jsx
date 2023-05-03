import React from 'react';

const Banner = () => {
    return (
        <div className='container mt-5'>
            <div className=''>



                <div className='relative'>
                    <div className='bg-black rounded'>
                    <img className='rounded w-full h-full opacity-40' src="https://i.ibb.co/cc05133/pexels-ella-olsson-1640773.jpg" alt="" />
                        
                    </div>
                    <div className='absolute top-32 ml-32'>
                        <h1 className='text-7xl font-bold text-amber-500'>Welcome To</h1>
                        <h2 className='text-3xl font-bold mt-2 mb-2 text-lime-500'>BBQ Italian Food</h2>
                        <p className='text-sm text-white w-6/12'>Italian food is renowned worldwide for its rich flavors, fresh ingredients, and traditional cooking techniques. It encompasses a diverse range of dishes, each with its own regional variations and culinary specialties. </p>
                        <button className="btn btn-warning mt-3">Click ME</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
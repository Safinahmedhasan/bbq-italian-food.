import React from 'react';

const AboutRestaurant = () => {
    return (
        <div>
            <div className='flex p-20'>
                <div className='p-16'>
                    <h2 className='text-5xl font-bold mb-4'><span className='text-orange-500'>WelCome</span> To Out <span className='text-lime-500'>BeautyFull Restaurant</span></h2>
                    <p className='text-2xl p-2 font-bold'>My name John <span className='text-orange-500'>Smith Chef and Owner</span> </p>
                    <p className=''>A restaurant is a business that serves food and drinks to customers for on-site consumption. It provides a dining experience with a menu of various food options and beverages. The goal is to offer a pleasant environment where people can enjoy a meal prepared by chefs and served by staff members.</p>
                </div>
                <div>
                    <img className='w-[2000px]' src="https://i.ibb.co/Jkm0WZh/chef01.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutRestaurant;
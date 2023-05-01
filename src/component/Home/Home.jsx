import React from 'react';
import Banner from '../Banner/Banner';
import FoodItem from '../FoodItem/FoodItem';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <FoodItem></FoodItem>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import MainChef from '../mainChef/MainChef';
import AboutRestaurant from '../AboutRestaurant/AboutRestaurant';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <AboutRestaurant></AboutRestaurant>
            <MainChef></MainChef>
        </div>
    );
};

export default Home;
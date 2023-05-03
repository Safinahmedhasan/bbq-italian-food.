import React from 'react';
import "./NotFound.css"
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
    return (
        <div>
            <div class="all-item">
                <img className='w-96' src="https://i.ibb.co/ZfMs6BY/Pngtree-error-404-page-not-found-6501259.png" alt="" />
            </div>
            <div className='text-center mt-[-100px] mb-20'>
                <h2 className='text-4xl text-orange-500 font-bold text'>WE ARE SORRY, PAGE NOT FOUND!</h2>
                <p className='text-1xl font-semibold mt-5 mb-5'>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
                <Link to="/"> <button className="btn btn-outline btn-warning">BACK TO HOME</button></Link>
            </div>

        </div>
    );
};

export default NotFoundPage;
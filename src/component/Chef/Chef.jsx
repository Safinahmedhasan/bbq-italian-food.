import React from 'react';
import { Link } from 'react-router-dom';

const Chef = (props) => {

    const { name, picture, years_of_experience, number_of_recipes, like, id } = props.chef;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Experience: {years_of_experience} Year</p>
                    <p>Number Of Recipes: {number_of_recipes}</p>
                    <p>Like: 👍 {like}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chefdetails/${id}`}><button className="btn btn-warning">View Recipes Button</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;
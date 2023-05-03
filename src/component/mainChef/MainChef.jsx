import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './MainChef.css'


const MainChef = () => {

  const [chefs, setChefs] = useState([]);
  console.log(chefs);

  useEffect( () =>{
    fetch('http://localhost:5000/allCheif')
    .then(res => res.json())
    .then(data => setChefs(data))
  },[])

    return (
        <div className='chefContainer container p-10'>
            {
                chefs.map(chef => <Chef chef={chef}></Chef>)
            }
        </div>
    );
};

export default MainChef;
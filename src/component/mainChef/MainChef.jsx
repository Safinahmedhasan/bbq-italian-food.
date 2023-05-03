import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './MainChef.css'


const MainChef = () => {


  <div className="spinner">
    {/* Insert spinner animation or icon here */}
  </div>

  const [loading, setLoading] = useState(true);


  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allCheif')
      .then(res => res.json())
      .then(data => setChefs(data))
    setLoading(false);
  }, [])

  return (
    <div>


      <div>
        {loading ? (
          <div className="spinner text-7xl">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          <div>
            <h2 className=' font-bold text-center text-4xl'>Our <span className='text-orange-500 '>Best</span> Chef</h2>
            <div className='chefContainer container p-10'>
              {
                chefs.map(chef => <Chef chef={chef}></Chef>)
              }
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default MainChef;
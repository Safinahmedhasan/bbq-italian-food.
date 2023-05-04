import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';


const MainChef = () => {


  <div className="spinner">
    {/* Insert spinner animation or icon here */}
  </div>

  const [loading, setLoading] = useState(true);


  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://bbq-italian-server-side-safinahmedhasan.vercel.app/allCheif')
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
            <h2 className=' font-bold text-center md:text-5xl text-xl'>OUR <span className=' text-white bg-orange-500 px-2 rounded '>BEST</span> CHEF</h2>
            <div className='grid md:grid-cols-3 gap-10 mb-20 md:w-11/12 w-7/12 mx-auto mt-20'>
              {
                chefs.map(chef => <Chef
                  chef={chef}
                  key={chef.id}
                  ></Chef>)
              }
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default MainChef;
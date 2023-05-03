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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo ullam rem cupiditate autem sunt iste a qui non accusamus repellendus officiis, repellat inventore, ipsum maxime blanditiis vitae at! Recusandae, facere. Illum quas et ex eum placeat aperiam officiis voluptate autem reprehenderit atque rem, eaque dignissimos animi, hic odit odio perspiciatis. Recusandae illo animi sit laboriosam distinctio nemo optio iusto quam sint eos dolorem debitis qui obcaecati earum assumenda corporis, commodi delectus consectetur quasi perferendis fugit asperiores libero laudantium ipsa. Rerum nisi ipsa explicabo reiciendis sint accusamus dolores numquam, temporibus repudiandae iusto similique quasi accusantium nulla fugiat placeat? Nemo, reprehenderit?
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
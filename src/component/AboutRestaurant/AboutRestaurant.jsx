import React from 'react';
import './about.css'

const AboutRestaurant = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center mt-16'><span className='bg-orange-500 text-white px-5 rounded-xl'>Hi</span> WHAT'S UP</h2>
            <div className='grid md:grid-cols-2 gap-20 mb-32'>
                <div className='mb-52 md:p-0 p-20 exx'>
                    <div className='relative '>
                        <img className='' src="https://i.ibb.co/tmXjJ9d/Untitled.png" alt="" />
                        <img className='absolute top-0 ml-20' src="https://i.ibb.co/nft32xR/about-1.png" alt="" />
                        {/* <img className='absolute top-32' src="https://i.ibb.co/yNffspw/about-2.png" alt="" /> */}
                        {/* <img className='absolute left-[500px]' src="https://i.ibb.co/HrfsKs0/vector-1.png" alt="" /> */}
                    </div>
                </div>

                <div className='w-9/12 p-10 textadd mx-auto'>
                    <div>
                        <h2 className='text-5xl font-semibold mb-5'>Traditional & Modern Service Since <span className='text-orange-500'>1970</span> </h2>
                        <p>Ut neque turpis dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas. </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutRestaurant;
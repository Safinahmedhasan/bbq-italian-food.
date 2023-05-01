import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1 mb-5 mt-5">
                    <a className="btn btn-ghost normal-case text-4xl text-orange-500 font-bold">BBQ Italian Food</a>
                    <ul className='flex mx-auto font-bold text-2xl'>
                        <Link to='/'><li className='mr-5'>Home</li></Link>
                        <Link to='/blog'><li className='mr-5'>Blog</li></Link>
                        <li className='mr-5'>About</li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div>
                        <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/m0hx2mp/pngtree-vector-avatar-icon-png-image-313572.jpg" alt="" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
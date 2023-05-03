import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';
import ActiveLink from '../activeLink/ActiveLink';

const Header = () => {

    const { user, logOut, googleSignIn } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ActiveLink to='/'><li className='mr-5 font-bold text-2xl  hover:text-orange-500'>Home</li></ActiveLink>
                            <ActiveLink to='/blog'><li className='mr-5 font-bold text-2xl hover:text-orange-500'>Blog</li></ActiveLink>
                        </ul>
                    </div>
                    <Link to='/'> <a className="btn btn-ghost normal-case md:text-4xl text-sm text-orange-500 font-bold">BBQ Italian Food</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <ActiveLink to='/'><li className='mr-5 font-bold text-2xl hover:text-orange-500'>Home</li></ActiveLink>
                        <ActiveLink to='/blog'><li className='mr-5 font-bold text-2xl hover:text-orange-500'>Blog</li></ActiveLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {user ?
                            <button onClick={handleLogOut} className='btn btn-warning'>Logout</button> :
                            <Link to='/login'><button className='btn btn-warning'>Login</button></Link>
                        }
                    </div>
                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/m0hx2mp/pngtree-vector-avatar-icon-png-image-313572.jpg" alt="" />
                            </div>
                        </label>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Header;
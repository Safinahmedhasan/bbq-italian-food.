import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { signIn, googleSignIn, gitHubSignIN } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from =location.state?.from?.pathname || '/'
   

    const handleGoogleSignIn = async (e) => {
        googleSignIn(googleSignIn)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitHubSignIn = async (e) => {
        gitHubSignIN(gitHubSignIN)
            .then(result => {
                const loggedUser = result.user;
                navigate(from , {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from , {replace: true})
            })
            .catch(
                toast.error("don't have account")
            )
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-96">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Login</button>
                                </div>
                            </div>
                        </form>
                        <div className='mx-auto pb-10'>
                            <button onClick={handleGoogleSignIn} className="mb-5 btn btn-outline btn-error">Google Login</button>
                            <button onClick={handleGitHubSignIn} className="btn btn-outline ml-5">GitHub Login</button>
                            <p>Don’t have an account?  <Link to='/register'><span className='text-orange-500 font-bold'>Register</span></Link></p>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Login;
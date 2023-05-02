import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { signIn  } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-96">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-error">
                                    Google Sign-in
                                </button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">GitHub Sign-in</button>
                            </div>
                            <p>Don’t have an account?  <Link to='/register'><span className='text-orange-500 font-bold'>Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
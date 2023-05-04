import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {

    const { createUser , googleSignIn, gitHubSignIN } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGoogleSignIn = async (e) =>{
        googleSignIn(googleSignIn)
        .then(result =>{
            const loggedUser = result.user;
            navigate('/login')
            toast(' Great!! Successfully registration ❤️ Login now ')
        })
        .catch(error => {
            
        })
    }


    const handleGitHubSignIn = async (e) =>{
        gitHubSignIN(gitHubSignIN)
        .then(result => {
            const loggedUser = result.user;
            navigate('/login')
            toast.success(' Great!! Successfully registration ❤️ Login now ')
        })
        .catch(error =>{
            
        })
    }

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            toast.error('Password Not Match!!');
            return
        }
        else if(password.length < 6){
            toast.error('Password is less than 6 characters!!');
            return
        }

        createUser(email, password, photo, name)
            .then(result => {
                const createUser = result.user;
                navigate('/login')
                toast.success(' Great!! Successfully registration ❤️ Login now ')
            })
            .catch(error => {
                console.log(error);
                toast.error('Already Have an account! Login NOW')
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-96">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} >
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Enter Your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="Enter Confirm Password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Register</button>
                                </div>
                                
                            </div>
                        </form>
                        <div className='mx-auto pb-10'>

                            <button onClick={handleGoogleSignIn} className="mb-5 btn btn-outline btn-error">Google Register</button>

                            <button onClick={handleGitHubSignIn} className="btn btn-outline ml-5">GitHub Register</button>
                            <Toaster />

                            <p>Already Have an Account <Link to='/login'><span className='text-orange-500 font-bold'>Login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import lottieLogin from '../assets/lottie-files/LoginAnimation.json'
import Loading from '../component/Shared/Loading';
import AuthContext from '../context/authcontext/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../component/Shared/SocialLogin';
import axios from 'axios';

const Signin = () => {
    const { signInUser } = useContext(AuthContext)
    const [passError, setPassError] = useState('');
    const [loading, setLoading] = useState(false);
    const naviagate = useNavigate();
    const location = useLocation();

    const from = location.state || '/';


    const handlSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user, 'signed in')
                const user = {email: email}
                axios.post('http://localhost:3000/user/jwt', user)
                .then(res=>{
                    console.log(res.data)
                })
                if(result.user.email){
                    Swal.fire({
                        title: "Login Successfull!",
                        text: "You're successfully logged in.",
                        icon: "success"
                    });
                    naviagate(from)
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: `${error.message}`,
                    icon: "error"
                });
                console.log(error, 'opps an error')
            })

        const registerInfo = {
            email
        }
        console.log(registerInfo, password)


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-96">
                    <Lottie animationData={lottieLogin}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handlSignIn} className="card-body">
                        <h1 className=" text-5xl font-bold">Login now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {passError && <p className='text-sm text-red-500'>{passError}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                {loading ? (
                                    <Loading />
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </div>
                    </form>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Signin;
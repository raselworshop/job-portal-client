import Lottie from 'lottie-react';
import React, { useState } from 'react';
import lottieRegister from '../assets/lottie-files/RegisterAnimation.json'
const Register = () => {
    const [passError, setPassError] = useState('')
    const handlRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return setPassError('Password must be at least 6charecter longer, one uppercase and one lowercase')
        }else{setPassError('')}
        const registerInfo = {
            email, password
        }
        console.log(registerInfo)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-96">
                    <Lottie animationData={lottieRegister}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handlRegister} className="card-body">
                        <h1 className=" text-5xl font-bold">Register now!</h1>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import lottieRegister from '../assets/lottie-files/RegisterAnimation.json'
import AuthContext from '../context/authcontext/AuthContext';
import Loading from '../component/Shared/Loading';
import SocialLogin from '../component/Shared/SocialLogin';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const [passError, setPassError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state || '/';

    const handlRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return setPassError('Password must be at least 6charecter longer, one uppercase and one lowercase')
        } else { setPassError('') }

        const registerInfo = {
            name, photo, email
        }
        // console.log(registerInfo)

        try {
            await createUser(email, password)
                .then(result => {
                    if (result.user.email) {
                        Swal.fire({
                            title: "Login Successfull!",
                            text: "You're successfully logged in.",
                            icon: "success"
                        });
                        navigate(from)
                    }
                    // console.log(result)
                })
            setLoading(false)
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.message}`,
                icon: "error"
            });
            // console.log(error, "User creating error")
            setLoading(false)
        }

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
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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

                        </div>
                        {passError && <p className='text-sm text-red-500'>{passError}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                {loading ? (
                                    <Loading />
                                ) : (
                                    "Register"
                                )}
                            </button>
                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../context/authcontext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { signinWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state || '/';

    const handleGooleLogin = () => {
        signinWithGoogle()
            .then(result => {
                if (result?.user?.email) {
                    Swal.fire({
                        title: "Login Successfull!",
                        text: "You're successfully logged in.",
                        icon: "success"
                    });
                    navigate(from)
                }
                console.log(result.user, "this is popup result")
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: `${error.message}`,
                    icon: "error"
                });
                console.log(error, "error happpend")
            })
    }
    return (
        <div className='m-4'>
            <div className='divider'>OR SIGN IN WITH</div>
            <div className='p-4'>
                <button
                    onClick={handleGooleLogin}
                    className='btn btn-outline btn-primary w-full'>
                    <FcGoogle /><span className='-ml-2'>oogle</span>
                </button>
                <div className="mt-4">
                    {location.pathname === "/signin" ? (
                        <p>
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Register Here
                            </Link>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <Link to="/signin" className="text-blue-500 hover:underline">
                                Login Here
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;